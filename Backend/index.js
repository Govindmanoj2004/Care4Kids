const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://Byu:Byu@kohai.zxe75.mongodb.net/care4kids_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed", err));

// Parent Schema
const ParentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  babyDateOfBirth: { type: Date }, // Add baby's date of birth
});
const Parent = mongoose.model("Parent", ParentSchema);

// Hospital Schema
const HospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  verified: { type: Boolean, default: false },
  vaccineStock: [
    {
      vaccineId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vaccine",
        required: true,
      },
      stock: { type: Number, default: 0 }, // Track stock for each vaccine
    },
  ],
});
const Hospital = mongoose.model("Hospital", HospitalSchema);

// Vaccine Schema
const VaccineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "6 Weeks", "10 Weeks"
  ageInWeeks: { type: Number, required: true }, // Age in weeks when the vaccine is due
});
const Vaccine = mongoose.model("Vaccine", VaccineSchema);

// Booking Schema
const BookingSchema = new mongoose.Schema({
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Parent",
    required: true,
  },
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  vaccineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vaccine",
    required: true,
  },
  bookingDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
});
const Booking = mongoose.model("Booking", BookingSchema);

// Predefined Vaccines with Categories
const predefinedVaccines = [
  // 6 Weeks (1.5 Months)
  {
    name: "DTaP (Diphtheria, Tetanus, Pertussis) – First Dose",
    category: "6 Weeks",
    ageInWeeks: 6,
  },
  { name: "Hepatitis B – Second Dose", category: "6 Weeks", ageInWeeks: 6 },
  {
    name: "Hib (Haemophilus influenzae type b) – First Dose",
    category: "6 Weeks",
    ageInWeeks: 6,
  },
  {
    name: "IPV (Inactivated Polio Vaccine) – First Dose",
    category: "6 Weeks",
    ageInWeeks: 6,
  },
  {
    name: "PCV (Pneumococcal Conjugate Vaccine) – First Dose",
    category: "6 Weeks",
    ageInWeeks: 6,
  },
  {
    name: "Rotavirus Vaccine – First Dose",
    category: "6 Weeks",
    ageInWeeks: 6,
  },

  // 10 Weeks (2.5 Months)
  { name: "DTaP – Second Dose", category: "10 Weeks", ageInWeeks: 10 },
  { name: "Hepatitis B – Third Dose", category: "10 Weeks", ageInWeeks: 10 },
  { name: "Hib – Second Dose", category: "10 Weeks", ageInWeeks: 10 },
  { name: "IPV – Second Dose", category: "10 Weeks", ageInWeeks: 10 },
  { name: "PCV – Second Dose", category: "10 Weeks", ageInWeeks: 10 },
  {
    name: "Rotavirus Vaccine – Second Dose",
    category: "10 Weeks",
    ageInWeeks: 10,
  },

  // 14 Weeks (3.5 Months)
  { name: "DTaP – Third Dose", category: "14 Weeks", ageInWeeks: 14 },
  { name: "Hepatitis B – Fourth Dose", category: "14 Weeks", ageInWeeks: 14 },
  { name: "Hib – Third Dose", category: "14 Weeks", ageInWeeks: 14 },
  { name: "IPV – Third Dose", category: "14 Weeks", ageInWeeks: 14 },
  { name: "PCV – Third Dose", category: "14 Weeks", ageInWeeks: 14 },
  {
    name: "Rotavirus Vaccine – Third Dose",
    category: "14 Weeks",
    ageInWeeks: 14,
  },

  // 6 Months
  {
    name: "Influenza Vaccine (First Dose)",
    category: "6 Months",
    ageInWeeks: 26,
  },

  // 9 Months
  {
    name: "Measles, Mumps, Rubella (MMR) – First Dose",
    category: "9 Months",
    ageInWeeks: 39,
  },
  { name: "Yellow Fever Vaccine", category: "9 Months", ageInWeeks: 39 },

  // 12–15 Months (1 Year)
  {
    name: "Hepatitis A – First Dose",
    category: "12–15 Months",
    ageInWeeks: 52,
  },
  { name: "PCV Booster", category: "12–15 Months", ageInWeeks: 52 },
  { name: "MMR – Second Dose", category: "12–15 Months", ageInWeeks: 52 },

  // 18 Months (1.5 Years)
  { name: "DTaP Booster", category: "18 Months", ageInWeeks: 78 },
  { name: "IPV Booster", category: "18 Months", ageInWeeks: 78 },
  { name: "Hib Booster", category: "18 Months", ageInWeeks: 78 },

  // 2 Years
  { name: "Typhoid Vaccine", category: "2 Years", ageInWeeks: 104 },

  // 4–6 Years
  { name: "DTaP Booster", category: "4–6 Years", ageInWeeks: 208 },
  { name: "IPV Booster", category: "4–6 Years", ageInWeeks: 208 },
  { name: "MMR – Third Dose", category: "4–6 Years", ageInWeeks: 208 },
  {
    name: "Varicella (Chickenpox) Vaccine",
    category: "4–6 Years",
    ageInWeeks: 208,
  },
];

// Insert Predefined Vaccines into the Database (Run once)
app.post("/initialize-vaccines", async (req, res) => {
  try {
    await Vaccine.deleteMany({}); // Clear existing vaccines
    await Vaccine.insertMany(predefinedVaccines);
    res.status(201).json({ message: "Predefined vaccines added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to initialize vaccines", details: error.message });
  }
});

// Update Vaccine Stock for a Hospital
app.post("/hospitals/:hospitalId/update-stock", async (req, res) => {
  const { hospitalId } = req.params;
  const { vaccineId, stock } = req.body;

  try {
    const hospital = await Hospital.findById(hospitalId);
    if (!hospital) {
      return res.status(404).json({ error: "Hospital not found" });
    }

    // Find or create the vaccine stock entry
    const vaccineStockIndex = hospital.vaccineStock.findIndex(
      (item) => item.vaccineId.toString() === vaccineId
    );

    if (vaccineStockIndex >= 0) {
      // Update existing stock
      hospital.vaccineStock[vaccineStockIndex].stock = stock;
    } else {
      // Add new vaccine stock entry
      hospital.vaccineStock.push({ vaccineId, stock });
    }

    await hospital.save();
    res.json({ message: "Vaccine stock updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to update vaccine stock",
        details: error.message,
      });
  }
});

// Book a Vaccine
app.post("/book-vaccine", async (req, res) => {
  const { parentId, hospitalId, vaccineId, bookingDate } = req.body;

  try {
    // Check if the hospital has the vaccine in stock
    const hospital = await Hospital.findById(hospitalId);
    if (!hospital) {
      return res.status(404).json({ error: "Hospital not found" });
    }

    const vaccineStock = hospital.vaccineStock.find(
      (item) => item.vaccineId.toString() === vaccineId
    );

    if (!vaccineStock || vaccineStock.stock <= 0) {
      return res
        .status(400)
        .json({ error: "Vaccine not available at this hospital" });
    }

    // Reduce the vaccine stock by 1
    vaccineStock.stock -= 1;
    await hospital.save();

    // Create a new booking
    const booking = new Booking({
      parentId,
      hospitalId,
      vaccineId,
      bookingDate,
    });
    await booking.save();

    res.status(201).json({ message: "Vaccine booked successfully", booking });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to book vaccine", details: error.message });
  }
});

// Get Vaccine Schedule for a Baby
app.get("/vaccine-schedule/:parentId", async (req, res) => {
  const { parentId } = req.params;

  try {
    const parent = await Parent.findById(parentId);
    if (!parent || !parent.babyDateOfBirth) {
      return res
        .status(404)
        .json({ error: "Parent or baby's date of birth not found" });
    }

    const babyDOB = parent.babyDateOfBirth;
    const today = new Date();
    const ageInMilliseconds = today - babyDOB;
    const ageInWeeks = Math.floor(
      ageInMilliseconds / (1000 * 60 * 60 * 24 * 7)
    );

    const vaccines = await Vaccine.find();
    const vaccineSchedule = vaccines.map((vaccine) => {
      const dueDate = new Date(babyDOB);
      dueDate.setDate(dueDate.getDate() + vaccine.ageInWeeks * 7);

      return {
        name: vaccine.name,
        category: vaccine.category,
        ageInWeeks: vaccine.ageInWeeks,
        dueDate: dueDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
        status: dueDate > today ? "Upcoming" : "Due",
      };
    });

    // Group vaccines by category
    const groupedSchedule = {};
    vaccineSchedule.forEach((vaccine) => {
      if (!groupedSchedule[vaccine.category]) {
        groupedSchedule[vaccine.category] = [];
      }
      groupedSchedule[vaccine.category].push(vaccine);
    });

    res.json(groupedSchedule);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to fetch vaccine schedule",
        details: error.message,
      });
  }
});

// Register Parent with Baby's Date of Birth
app.post("/register/parent", async (req, res) => {
  const { name, email, password, babyDateOfBirth } = req.body;
  try {
    const parent = new Parent({ name, email, password, babyDateOfBirth });
    await parent.save();
    res.status(201).json({ message: "Parent registered successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Registration failed", details: error.message });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
