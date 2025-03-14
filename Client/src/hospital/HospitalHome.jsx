import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  IconButton,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Badge,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  Event as EventIcon,
  Medication as MedicationIcon,
  Settings as SettingsIcon,
  LogoutOutlined as LogoutIcon,
  CalendarMonth as CalendarIcon,
  MedicalServices as MedicalServicesIcon,
  CalendarToday as CalendarTodayIcon,
  NotificationsActive as NotificationsIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon,
} from "@mui/icons-material";
import { ChevronRightIcon, VerifiedIcon } from "lucide-react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import hospital from "./../lottie/Animation - 1741900916299.json";
import Lottie from "lottie-react";

// Sample data for demonstration
const upcomingAppointments = [
  {
    id: 1,
    parentName: "John Smith",
    babyName: "Emily Smith",
    age: "6 months",
    vaccine: "Rotavirus",
    time: "10:00 AM",
    confirmed: true,
  },
  {
    id: 2,
    parentName: "Maria Garcia",
    babyName: "Lucas Garcia",
    age: "2 months",
    vaccine: "DTaP",
    time: "11:30 AM",
    confirmed: false,
  },
  {
    id: 3,
    parentName: "Sarah Johnson",
    babyName: "Ethan Johnson",
    age: "4 months",
    vaccine: "Pneumococcal",
    time: "2:15 PM",
    confirmed: true,
  },
  {
    id: 4,
    parentName: "David Lee",
    babyName: "Sophia Lee",
    age: "12 months",
    vaccine: "MMR",
    time: "3:45 PM",
    confirmed: true,
  },
];

const vaccineStock = [
  { id: 1, name: "DTaP", available: 45, threshold: 20, expiry: "2025-06-15" },
  {
    id: 2,
    name: "Rotavirus",
    available: 12,
    threshold: 15,
    expiry: "2025-05-20",
  },
  {
    id: 3,
    name: "Pneumococcal",
    available: 30,
    threshold: 15,
    expiry: "2025-07-10",
  },
  { id: 4, name: "MMR", available: 8, threshold: 10, expiry: "2025-04-30" },
];

const HospitalHome = () => {
  const lottieRef = useRef(null);

  // Play the animation when the page loads
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

  // Handle click to play the animation
  const handleLottieClick = () => {
    if (lottieRef.current) {
      lottieRef.current.stop(); // Stop the animation first
      lottieRef.current.play(); // Play it again
    }
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeTab, setActiveTab] = useState("home");

  // Animation variants
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

  // Calculate quick statistics
  const totalVaccinations = 1254;
  const pendingAppointments = upcomingAppointments.filter(
    (app) => !app.confirmed
  ).length;
  const lowStockAlerts = vaccineStock.filter(
    (v) => v.available < v.threshold
  ).length;
  const registeredParents = 873;

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Header (Navigation Bar) */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid #f0f0f0", // Lighter border
          backdropFilter: "blur(8px)",
          boxShadow: "0px 1px 3px rgba(0,0,0,0.03)", // Subtle shadow instead of border
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo Area */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MedicalServicesIcon
                  sx={{ color: "#1976d2", fontSize: 24, mr: 1 }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: "#1976d2",
                    letterSpacing: "-0.3px",
                  }}
                >
                  Care4Kids
                </Typography>
              </Box>
            </motion.div>
          </Box>

          {/* Navigation Icons - Center */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 1,
                backgroundColor: "#f0f4fc",
                borderRadius: 3,
                padding: "6px",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.08)",
                border: "1px solid rgba(25, 118, 210, 0.08)",
              }}
            >
              {[
                { icon: <HomeIcon fontSize="small" />, id: "home" },
                { icon: <InventoryIcon fontSize="small" />, id: "stock" }, // Assuming InventoryIcon represents stock
                { icon: <EventIcon fontSize="small" />, id: "appointments" },
                { icon: <SettingsIcon fontSize="small" />, id: "settings" },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    size="small"
                    color={activeTab === item.id ? "primary" : "inherit"}
                    onClick={() => setActiveTab(item.id)}
                    sx={{
                      borderRadius: 2,
                      backgroundColor:
                        activeTab === item.id ? "white" : "transparent",
                      boxShadow:
                        activeTab === item.id
                          ? "0px 2px 8px rgba(25, 118, 210, 0.15)"
                          : "none",
                      padding: "8px",
                      color:
                        activeTab === item.id ? "#1976d2" : "rgba(0,0,0,0.6)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor:
                          activeTab === item.id
                            ? "white"
                            : "rgba(255,255,255,0.8)",
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          )}

          {/* Right Side Controls */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {/* Notifications */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconButton size="small" sx={{ borderRadius: 2 }}>
                <Badge
                  badgeContent={pendingAppointments + lowStockAlerts}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: 9,
                      height: 14,
                      minWidth: 14,
                    },
                  }}
                >
                  <NotificationsIcon fontSize="small" />
                </Badge>
              </IconButton>
            </motion.div>

            {/* Avatar */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Avatar
                sx={{
                  bgcolor: "#f0f7ff",
                  color: "#1976d2",
                  width: 30,
                  height: 30,
                  fontSize: 14,
                  border: "2px solid #e6f0fd",
                }}
              >
                H
              </Avatar>
            </motion.div>

            {/* Logout */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                size="small"
                sx={{
                  ml: 0.5,
                  borderRadius: 2,
                  color: "#6e7882", // Slightly muted color for less prominence
                }}
              >
                <LogoutIcon fontSize="small" />
              </IconButton>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, pt: 10, pb: 8 }}>
        <Container maxWidth="xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants}>
              <Card
                elevation={0}
                sx={{
                  mb: 3,
                  bgcolor: "#1976d2",
                  color: "white",
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background:
                      "radial-gradient(circle at 10% 110%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)",
                  }}
                />
                <CardContent sx={{ py: 3 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                      <Typography
                        variant="h5"
                        component="h1"
                        sx={{ fontWeight: 500, letterSpacing: "-0.5px" }}
                      >
                        City Children's Hospital
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: 1,
                          opacity: 0.9,
                        }}
                      >
                        <VerifiedIcon sx={{ fontSize: 16 }} />
                        <Typography variant="body2">
                          Healthcare Provider
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Grid container spacing={1}>
                        {[
                          { value: totalVaccinations, label: "Vaccinations" },
                          { value: pendingAppointments, label: "Appointments" },
                          { value: lowStockAlerts, label: "Alerts" },
                        ].map((stat, index) => (
                          <Grid item xs={4} key={index}>
                            <Box
                              sx={{
                                p: 1.5,
                                textAlign: "center",
                                borderRadius: 2,
                                bgcolor: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(4px)",
                              }}
                            >
                              <Typography
                                variant="h5"
                                sx={{
                                  fontWeight: 500,
                                  mb: 0.5,
                                }}
                              >
                                {stat.value}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  opacity: 0.85,
                                  fontSize: 11,
                                  textTransform: "uppercase",
                                  letterSpacing: 0.5,
                                }}
                              >
                                {stat.label}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions / Shortcuts */}
            <motion.div variants={itemVariants}>
              <Box
                sx={{ mb: 4, cursor: "pointer" }} // Add cursor pointer for better UX
                onClick={handleLottieClick} // Add click handler
              >
                <Lottie
                  lottieRef={lottieRef} // Pass the ref to the Lottie component
                  animationData={hospital}
                  loop={false} // Disable looping for better control
                  autoplay={false} // Disable autoplay to control it manually
                  style={{ height: 200, width: "100%" }}
                />
              </Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                Quick Actions
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {/* View Appointments Card */}
                <Grid item xs={6} sm={3}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        bgcolor: "white",
                        borderRadius: 4,
                        height: "100%",
                        background: "linear-gradient(145deg, #ffffff, #f9f9f9)",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0px 8px 24px rgba(25, 118, 210, 0.15)",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: "center", p: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            bgcolor: "#e3f2fd",
                            margin: "0 auto 16px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              bgcolor: "#bbdefb",
                            },
                          }}
                        >
                          <CalendarIcon
                            sx={{ fontSize: 30, color: "#1976d2" }}
                          />
                        </Box>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{ fontWeight: 600, mb: 1, color: "#1976d2" }}
                        >
                          View Appointments
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>

                {/* Update Vaccine Stock Card */}
                <Grid item xs={6} sm={3}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        bgcolor: "white",
                        borderRadius: 4,
                        height: "100%",
                        background: "linear-gradient(145deg, #ffffff, #f9f9f9)",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0px 8px 24px rgba(25, 118, 210, 0.15)",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: "center", p: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            bgcolor: "#e3f2fd",
                            margin: "0 auto 16px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              bgcolor: "#bbdefb",
                            },
                          }}
                        >
                          <MedicationIcon
                            sx={{ fontSize: 30, color: "#1976d2" }}
                          />
                        </Box>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{ fontWeight: 600, mb: 1, color: "#1976d2" }}
                        >
                          Update Vaccine Stock
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>

                {/* Manage Slots Card */}
                <Grid item xs={6} sm={3}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        bgcolor: "white",
                        borderRadius: 4,
                        height: "100%",
                        background: "linear-gradient(145deg, #ffffff, #f9f9f9)",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0px 8px 24px rgba(25, 118, 210, 0.15)",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: "center", p: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            bgcolor: "#e3f2fd",
                            margin: "0 auto 16px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              bgcolor: "#bbdefb",
                            },
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{ fontSize: 30, color: "#1976d2" }}
                          />
                        </Box>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{ fontWeight: 600, mb: 1, color: "#1976d2" }}
                        >
                          Manage Slots
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>

                {/* Parent Requests Card */}
                <Grid item xs={6} sm={3}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        bgcolor: "white",
                        borderRadius: 4,
                        height: "100%",
                        background: "linear-gradient(145deg, #ffffff, #f9f9f9)",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0px 8px 24px rgba(25, 118, 210, 0.15)",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: "center", p: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            bgcolor: "#e3f2fd",
                            margin: "0 auto 16px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              bgcolor: "#bbdefb",
                            },
                          }}
                        >
                          <PeopleIcon sx={{ fontSize: 30, color: "#1976d2" }} />
                        </Box>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{ fontWeight: 600, mb: 1, color: "#1976d2" }}
                        >
                          Parent Requests
                        </Typography>
                        {pendingAppointments > 0 && (
                          <Chip
                            size="small"
                            label={`${pendingAppointments} new`}
                            color="primary"
                            sx={{ mt: 1, fontWeight: 500 }}
                          />
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>

            <Grid container spacing={4}>
              {/* Upcoming Appointments */}
              <Grid item xs={12} lg={7}>
                <motion.div variants={itemVariants}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      height: "100%",
                      border: "1px solid #f0f0f0",
                      boxShadow: "0px 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={2.5}
                      >
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor: "#1976d2",
                            }}
                          />
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 500, color: "#1976d2" }}
                          >
                            Today's Appointments
                          </Typography>
                        </Box>
                        <Button
                          size="small"
                          endIcon={<ChevronRightIcon fontSize="small" />}
                          sx={{
                            borderRadius: 6,
                            textTransform: "none",
                            px: 2,
                            backgroundColor: "#f5f8ff",
                            color: "#1976d2",
                            "&:hover": {
                              backgroundColor: "#eaf1ff",
                            },
                          }}
                        >
                          View All
                        </Button>
                      </Box>

                      <TableContainer sx={{ maxHeight: 340 }}>
                        <Table size="small" sx={{ minWidth: 650 }}>
                          <TableHead>
                            <TableRow>
                              <TableCell
                                sx={{
                                  fontWeight: 500,
                                  color: "#6e7882",
                                  fontSize: 13,
                                  pl: 2,
                                }}
                              >
                                Parent / Child
                              </TableCell>
                              <TableCell
                                sx={{
                                  fontWeight: 500,
                                  color: "#6e7882",
                                  fontSize: 13,
                                }}
                              >
                                Age
                              </TableCell>
                              <TableCell
                                sx={{
                                  fontWeight: 500,
                                  color: "#6e7882",
                                  fontSize: 13,
                                }}
                              >
                                Vaccine
                              </TableCell>
                              <TableCell
                                sx={{
                                  fontWeight: 500,
                                  color: "#6e7882",
                                  fontSize: 13,
                                }}
                              >
                                Time
                              </TableCell>
                              <TableCell
                                sx={{
                                  fontWeight: 500,
                                  color: "#6e7882",
                                  fontSize: 13,
                                }}
                              >
                                Status
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {upcomingAppointments.map((appointment) => (
                              <TableRow
                                key={appointment.id}
                                hover
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                  cursor: "pointer",
                                  transition: "all 0.2s",
                                  "&:hover": {
                                    backgroundColor: "#f9fbff",
                                  },
                                }}
                              >
                                <TableCell
                                  sx={{
                                    borderLeft: appointment.confirmed
                                      ? "3px solid #66bb6a"
                                      : "3px solid #ffa726",
                                    pl: 1.5,
                                  }}
                                >
                                  <Box>
                                    <Typography
                                      variant="body2"
                                      sx={{ fontWeight: 500 }}
                                    >
                                      {appointment.babyName}
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      {appointment.parentName}
                                    </Typography>
                                  </Box>
                                </TableCell>
                                <TableCell>{appointment.age}</TableCell>
                                <TableCell>
                                  <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 500 }}
                                  >
                                    {appointment.vaccine}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 0.5,
                                    }}
                                  >
                                    <AccessTimeIcon
                                      sx={{ fontSize: 14, color: "#6e7882" }}
                                    />
                                    <Typography variant="body2">
                                      {appointment.time}
                                    </Typography>
                                  </Box>
                                </TableCell>
                                <TableCell>
                                  <Box
                                    sx={{
                                      fontSize: 12,
                                      py: 0.5,
                                      px: 1.5,
                                      borderRadius: 5,
                                      display: "inline-block",
                                      fontWeight: 500,
                                      bgcolor: appointment.confirmed
                                        ? "rgba(102, 187, 106, 0.1)"
                                        : "rgba(255, 167, 38, 0.1)",
                                      color: appointment.confirmed
                                        ? "#2e7d32"
                                        : "#e65100",
                                    }}
                                  >
                                    {appointment.confirmed
                                      ? "Confirmed"
                                      : "Pending"}
                                  </Box>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              {/* Right Column - Vaccine Stock & Statistics */}
              <Grid item xs={12} lg={5}>
                <Grid container spacing={3}>
                  {/* Vaccine Stock Overview */}
                  <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                      <Card elevation={0} sx={{ borderRadius: 4 }}>
                        <CardContent>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={2}
                          >
                            <Typography variant="h6" sx={{ fontWeight: 500 }}>
                              Vaccine Stock Overview
                            </Typography>
                            <Button
                              size="small"
                              endIcon={<InventoryIcon />}
                              sx={{ borderRadius: 2 }}
                            >
                              View All
                            </Button>
                          </Box>
                          <List>
                            {vaccineStock.map((vaccine) => (
                              <ListItem key={vaccine.id} sx={{ px: 0 }}>
                                <ListItemIcon>
                                  <MedicationIcon
                                    sx={{
                                      color:
                                        vaccine.available < vaccine.threshold
                                          ? "error.main"
                                          : "primary.main",
                                    }}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={vaccine.name}
                                  secondary={`Available: ${vaccine.available} | Expiry: ${vaccine.expiry}`}
                                />
                                {vaccine.available < vaccine.threshold && (
                                  <Chip
                                    size="small"
                                    label="Low Stock"
                                    color="error"
                                    variant="outlined"
                                    sx={{ borderRadius: 2 }}
                                  />
                                )}
                              </ListItem>
                            ))}
                          </List>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>

                  {/* Statistics & Reports */}
                  <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                      <Card elevation={0} sx={{ borderRadius: 4 }}>
                        <CardContent>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 500, mb: 2 }}
                          >
                            Statistics & Reports
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <Card
                                elevation={0}
                                sx={{ bgcolor: "#e3f2fd", borderRadius: 4 }}
                              >
                                <CardContent sx={{ textAlign: "center" }}>
                                  <Typography variant="h4">
                                    {registeredParents}
                                  </Typography>
                                  <Typography variant="body2">
                                    Registered Parents
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={6}>
                              <Card
                                elevation={0}
                                sx={{ bgcolor: "#e3f2fd", borderRadius: 4 }}
                              >
                                <CardContent sx={{ textAlign: "center" }}>
                                  <Typography variant="h4">
                                    {totalVaccinations}
                                  </Typography>
                                  <Typography variant="body2">
                                    Total Vaccinations
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={6}>
                              <Card
                                elevation={0}
                                sx={{ bgcolor: "#e3f2fd", borderRadius: 4 }}
                              >
                                <CardContent sx={{ textAlign: "center" }}>
                                  <Typography variant="h4">
                                    {pendingAppointments}
                                  </Typography>
                                  <Typography variant="body2">
                                    Pending Appointments
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={6}>
                              <Card
                                elevation={0}
                                sx={{ bgcolor: "#e3f2fd", borderRadius: 4 }}
                              >
                                <CardContent sx={{ textAlign: "center" }}>
                                  <Typography variant="h4">
                                    {lowStockAlerts}
                                  </Typography>
                                  <Typography variant="body2">
                                    Low Stock Alerts
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Footer (Optional) */}
      <Box
        component="footer"
        sx={{ bgcolor: "white", py: 3, borderTop: "1px solid #e0e0e0" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                © 2023 Care4Kids. All rights reserved.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ textAlign: { xs: "left", sm: "right" } }}
            >
              <Typography variant="body2" color="text.secondary">
                Contact: +1 (123) 456-7890 | Email: info@care4kids.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                123 Health St, Cityville, State, 12345
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HospitalHome;
