import React, { use } from "react";
import {
  Link,
  TextField,
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import { useNavigate } from "react-router-dom";

// Custom Theme with Updated Colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#B7B1F2", // Purple
    },
    secondary: {
      main: "#FDB7EA", // Pink
    },
    background: {
      default: "#FBF3B9", // Light Yellow
      paper: "#FFFFFF", // White
    },
    text: {
      primary: "#2E2E2E", // Dark Gray
      secondary: "#555555", // Gray
    },
    custom: {
      lightYellow: "#FBF3B9",
      lightPink: "#FFDCCC",
      pink: "#FDB7EA",
      purple: "#B7B1F2",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});


// Custom SVG for Hero Section
const HeroIllustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 600"
    style={{ width: "100%", height: "auto" }}
  >
    <motion.path
      d="M400,300 Q450,250 500,300 T600,300"
      stroke="#B7B1F2"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    />
    <motion.circle
      cx="400"
      cy="300"
      r="10"
      fill="#B7B1F2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    />
    <motion.circle
      cx="500"
      cy="300"
      r="10"
      fill="#B7B1F2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    />
    <motion.circle
      cx="600"
      cy="300"
      r="10"
      fill="#B7B1F2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    />
  </svg>
);

// Wave Divider SVG
const WaveDivider = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    style={{ width: "100%", height: "auto" }}
  >
    <path
      fill="#FDB7EA"
      fillOpacity="1"
      d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,192C672,203,768,181,864,154.7C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>
);

const GuestHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      title: "Track Vaccinations",
      description:
        "Easily track your child's immunization schedule and never miss an important vaccine.",
      icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />,
      color: "#B7B1F2", // Purple
    },
    {
      title: "Timely Reminders",
      description:
        "Receive reminders for upcoming vaccines to ensure your child stays protected.",
      icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} />,
      color: "#FDB7EA", // Pink
    },
    {
      title: "Hospital Network",
      description:
        "Access a verified network of hospitals for safe and reliable vaccination services.",
      icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
      color: "#FFDCCC", // Light Pink
    },
    {
      title: "Health Assurance",
      description:
        "Ensure your child's health with a structured and customizable vaccination plan.",
      icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
      color: "#FBF3B9", // Light Yellow
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      review:
        "Care4Kids has made managing my child's vaccinations so much easier. The reminders are a lifesaver!",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Parent",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      review:
        "I love the hospital network feature. It's so convenient to find trusted healthcare providers.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Parent",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      review:
        "The platform is user-friendly and has everything I need to keep track of my child's health.",
      rating: 4,
    },
  ];

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking on the 'Sign Up' button and filling out the registration form.",
    },
    {
      question: "Can I customize the vaccination schedule?",
      answer:
        "Yes, you can customize the vaccination schedule based on your child's needs and recommended guidelines.",
    },
    {
      question: "How do I receive reminders?",
      answer:
        "You will receive reminders via email and SMS for upcoming vaccinations.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take data security very seriously and use the latest encryption technologies to protect your information.",
    },
  ];
  const navigate = useNavigate(); // Import the useNavigate hook from react-router-dom

  return (
    
    <ThemeProvider theme={theme}>
      <Box
        sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "background.default" }}
      >
        {/* Navigation */}
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            bgcolor: "white",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            py: 1,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
              {/* Logo and Title with Animation */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexGrow: 1,
                }}
              >
                <ChildFriendlyIcon
                  component={motion.svg}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  sx={{
                    fontSize: 28,
                    color: "#B7B1F2",
                    mr: 1.5,
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#B7B1F2",
                  }}
                >
                  CARE4KIDS
                </Typography>
              </Box>

              {/* Login and Sign Up Buttons */}
              <Stack direction="row" spacing={2} alignItems="center">
                {/* Login Button */}
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="outlined"
                  sx={{
                    borderColor: "#B7B1F2",
                    color: "#B7B1F2",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "24px", // Rounded corners
                    px: 3,
                    py: 1,
                    fontSize: "0.875rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(183, 177, 242, 0.1)", // Light background on hover
                      borderColor: "#A39DE6", // Slightly darker border on hover
                      color: "#A39DE6",
                    },
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>

                {/* Sign Up Button */}
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: "#B7B1F2",
                    backgroundImage:
                      "linear-gradient(135deg, #B7B1F2 0%, #A39DE6 100%)", // Gradient background
                    color: "white",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "24px", // Rounded corners
                    px: 3,
                    py: 1,
                    fontSize: "0.875rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#A39DE6", // Slightly darker on hover
                      backgroundImage: "none", // Remove gradient on hover
                      boxShadow: "0 4px 12px rgba(183, 177, 242, 0.3)", // Soft shadow on hover
                    },
                  }}
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </Button>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Hero Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          sx={{
            py: { xs: 8, md: 12 },
            background: `linear-gradient(to right, ${theme.palette.primary.light}15, ${theme.palette.secondary.light}15)`,
            overflow: "hidden",
          }}
        >
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box
                  component={motion.div}
                  initial={{ x: -50 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                    }}
                  >
                    Vaccination tracking{" "}
                    <Box component="span" sx={{ color: "#B7B1F2" }}>
                      made simple
                    </Box>
                  </Typography>
                  <Typography
                    variant="h6"
                    paragraph
                    color="text.secondary"
                    sx={{ mb: 4 }}
                  >
                    Empower your parenting journey with our comprehensive
                    vaccination management platform. Track, schedule, and never
                    miss your child's important immunizations.
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variant="contained"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        bgcolor: "#FDB7EA",
                      }}
                    >
                      Get Started
                    </Button>
                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variant="outlined"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        color: "#FDB7EA",
                        borderColor: "#FDB7EA",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <HeroIllustration />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Features Section */}
        <Container sx={{ py: { xs: 8, md: 12 } }}>
          <Box
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography
              component={motion.div}
              variants={itemVariants}
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 6,
              }}
            >
              Why Choose{" "}
              <Box component="span" sx={{ color: "#B7B1F2" }}>
                Care4Kids
              </Box>
            </Typography>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    component={motion.div}
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 2,
                      boxShadow: "none",
                      border: "1px solid rgba(0,0,0,0.08)",
                      overflow: "hidden",
                      bgcolor: "background.paper",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 3,
                        borderBottom: "1px solid rgba(0,0,0,0.04)",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          bgcolor: `${feature.color}10`,
                          color: feature.color,
                          mr: 2,
                        }}
                      >
                        {React.cloneElement(feature.icon, {
                          sx: { fontSize: 24 },
                        })}
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          fontSize: "1.125rem",
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>

                    <CardContent sx={{ p: 3, pt: 2, flexGrow: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* How It Works Section */}
        <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}>
          <Container>
            <Typography
              component={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variant="h3"
              align="center"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              How <span style={{ color: "#B7B1F2" }}>Care4Kids</span> Works
            </Typography>
            <Typography
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
            >
              Our platform makes it easy to keep track of your child's
              vaccination schedule in just a few simple steps.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                {
                  step: "01",
                  title: "Create Account",
                  description:
                    "Register your account and add your child's details to get started.",
                },
                {
                  step: "02",
                  title: "Customize Schedule",
                  description:
                    "Personalize your vaccination schedule based on recommended guidelines.",
                },
                {
                  step: "03",
                  title: "Book Appointments",
                  description:
                    "Choose from verified hospitals and select a convenient appointment time.",
                },
                {
                  step: "04",
                  title: "Get Reminders",
                  description:
                    "Receive notifications to stay on top of your child's vaccination schedule.",
                },
              ].map((item, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        color: "#B7B1F2",
                        opacity: 0.2,
                        fontWeight: 800,
                        mb: 2,
                      }}
                    >
                      {item.step}
                    </Typography>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ bgcolor: "background.default", py: { xs: 8, md: 12 } }}>
          <Container>
            <Typography
              component={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variant="h3"
              align="center"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              What <span style={{ color: "#B7B1F2" }}>Parents</span> Say
            </Typography>
            <Typography
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
            >
              Hear from parents who have used Care4Kids to manage their child's
              vaccinations.
            </Typography>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Avatar
                          src={testimonial.avatar}
                          sx={{ width: 56, height: 56, mr: 2 }}
                        />
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {testimonial.review}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <StarIcon key={i} sx={{ color: "#FFDCCC" }} />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Parents' Tips Section */}
        <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}>
          <Container>
            {/* Section Title */}
            <Typography
              component={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "#B7B1F2", // Use #B7B1F2 for the title
                fontFamily: "'Poppins', sans-serif", // Modern font
                fontSize: { xs: "2rem", md: "2.5rem" }, // Responsive font size
              }}
            >
              Parents' Tips
            </Typography>

            {/* Section Description */}
            <Typography
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{
                mb: 6,
                maxWidth: 700,
                mx: "auto",
                fontFamily: "'Poppins', sans-serif", // Modern font
                fontSize: { xs: "1rem", md: "1.125rem" }, // Responsive font size
              }}
            >
              Useful tips from experienced parents to help you manage your
              child's vaccinations.
            </Typography>

            {/* Tips Grid */}
            <Grid container spacing={4}>
              {[
                {
                  tip: "Keep a vaccination record.",
                  description:
                    "Maintain a physical or digital record of your child's vaccinations for easy reference.",
                },
                {
                  tip: "Prepare your child.",
                  description:
                    "Explain the importance of vaccinations to your child in a simple and reassuring way.",
                },
                {
                  tip: "Stay informed.",
                  description:
                    "Keep up-to-date with the latest vaccination guidelines and recommendations.",
                },
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{
                      bgcolor: "background.default",
                      p: 3,
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    {/* Tip Title */}
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: "#B7B1F2", // Use #B7B1F2 for the tip title
                        fontFamily: "'Poppins', sans-serif", // Modern font
                        mb: 2,
                      }}
                    >
                      {item.tip}
                    </Typography>

                    {/* Tip Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontFamily: "'Poppins', sans-serif", // Modern font
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* FAQs Section */}
        <Box sx={{ bgcolor: "background.default", py: { xs: 8, md: 12 } }}>
          <Container>
            {/* Section Title */}
            <Typography
              component={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "#B7B1F2", // Use #B7B1F2 for the title
                fontFamily: "'Poppins', sans-serif", // Modern font
                fontSize: { xs: "2rem", md: "2.5rem" }, // Responsive font size
              }}
            >
              Frequently Asked Questions
            </Typography>

            {/* Section Description */}
            <Typography
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{
                mb: 6,
                maxWidth: 700,
                mx: "auto",
                fontFamily: "'Poppins', sans-serif", // Modern font
                fontSize: { xs: "1rem", md: "1.125rem" }, // Responsive font size
              }}
            >
              Find answers to common questions about Care4Kids and child
              vaccinations.
            </Typography>

            {/* FAQ Accordions */}
            <Box>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{
                    mb: 2,
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#B7B1F2", // Use #B7B1F2 for the expand icon
                          fontSize: "1.5rem",
                        }}
                      />
                    }
                    sx={{
                      bgcolor: "rgba(183, 177, 242, 0.1)", // Light purple background
                      "&:hover": {
                        bgcolor: "rgba(183, 177, 242, 0.15)", // Slightly darker on hover
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        fontFamily: "'Poppins', sans-serif", // Modern font
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      bgcolor: "background.paper",
                      borderTop: "1px solid rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontFamily: "'Poppins', sans-serif", // Modern font
                        lineHeight: 1.6,
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: "#B7B1F2",
          }}
        >
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8} textAlign="center">
                <Typography
                  variant="h3"
                  sx={{ color: "white", fontWeight: 700, mb: 2 }}
                >
                  Ready to start your journey?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "white", opacity: 0.9, mb: 4 }}
                >
                  Join thousands of parents who trust Care4Kids for their
                  children's vaccination needs.
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: "#FDB7EA", // Primary color
                      bgcolor: "#FDB7EA",
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "8px",
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "1rem",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "white", // Light background on hover
                        borderColor: "#FDB7EA", // Slightly darker shade for hover
                        color: "#FDB7EA",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    Sign Up Now
                  </Button>
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: "#FDB7EA", // Primary color
                      bgcolor: "#FDB7EA",
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "8px",
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "1rem",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "white", // Light background on hover
                        borderColor: "#FDB7EA", // Slightly darker shade for hover
                        color: "#FDB7EA",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Wave Divider */}
        <Box sx={{ mt: -1 }}>
          <WaveDivider />
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: "background.default", py: 6 }}>
          <Container>
            <Grid container spacing={4} justifyContent="space-between">
              {/* About Section */}
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <HealthAndSafetyIcon
                    sx={{
                      fontSize: 40,
                      color: "#B7B1F2",
                      mr: 1,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#B7B1F2" }}
                  >
                    Care4Kids
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Empowering parents to manage their child's vaccination
                  schedule with ease and confidence.
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <IconButton
                    aria-label="Facebook"
                    sx={{ color: "#B7B1F2", "&:hover": { color: "#A39DE6" } }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Twitter"
                    sx={{ color: "#B7B1F2", "&:hover": { color: "#A39DE6" } }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Instagram"
                    sx={{ color: "#B7B1F2", "&:hover": { color: "#A39DE6" } }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    aria-label="LinkedIn"
                    sx={{ color: "#B7B1F2", "&:hover": { color: "#A39DE6" } }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Grid>

              {/* Quick Links Section */}
              <Grid item xs={12} sm={6} md={2}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#B7B1F2" }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Link
                    href="#"
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      "&:hover": { color: "#B7B1F2" },
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      "&:hover": { color: "#B7B1F2" },
                    }}
                  >
                    Features
                  </Link>
                  <Link
                    href="#"
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      "&:hover": { color: "#B7B1F2" },
                    }}
                  >
                    Contact
                  </Link>
                  <Link
                    href="#"
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      "&:hover": { color: "#B7B1F2" },
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Box>
              </Grid>

              {/* Newsletter Section */}
              <Grid item xs={12} sm={12} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#B7B1F2" }}
                >
                  Subscribe to Our Newsletter
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Stay updated with the latest news and updates about child
                  vaccinations.
                </Typography>
                <Box component="form" sx={{ display: "flex", gap: 2 }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Enter your email"
                    variant="outlined"
                    sx={{ bgcolor: "background.paper", borderRadius: 1 }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#B7B1F2",
                      color: "white",
                      borderRadius: 1,
                      "&:hover": { bgcolor: "#A39DE6" },
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* Divider */}
            <Box sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)", my: 4 }} />

            {/* Copyright Section */}
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} Care4Kids. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default GuestHome;
