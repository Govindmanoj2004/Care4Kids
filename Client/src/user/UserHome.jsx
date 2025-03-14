import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Paper,
  Button,
  Avatar,
  CircularProgress,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import { motion } from "framer-motion";

import baby from "./../lottie/Animation - 1741897684571.json";
import Lottie from "lottie-react";

import {
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  MapPin as MapPinIcon,
  User as UserIcon,
  Bell as BellIcon,
  FileText as FileTextIcon,
} from "lucide-react";

// Custom theme colors
const theme = {
  primary: "#6A5ACD", // Soft purple
  secondary: "#9CF6FB", // Light blue
  accent: "#FFC0CB", // Soft pink
  background: "#F8F7FF", // Very light purple
  text: "#4A4A68", // Dark purple-grey
  success: "#AFE1AF", // Soft green
  warning: "#FFD580", // Soft orange
};

const UserHome = () => {
  const [upcomingVaccinations, setUpcomingVaccinations] = useState([
    {
      id: 1,
      name: "MMR Vaccine",
      date: "March 25, 2025",
      hospital: "Children's Wellness Center",
    },
    {
      id: 2,
      name: "Pneumococcal",
      date: "April 10, 2025",
      hospital: "Sunshine Pediatric Hospital",
    },
  ]);

  const [completedVaccinations, setCompletedVaccinations] = useState([
    {
      id: 1,
      name: "Hepatitis B",
      date: "January 5, 2025",
      hospital: "Children's Wellness Center",
    },
    {
      id: 2,
      name: "Rotavirus",
      date: "February 12, 2025",
      hospital: "Sunshine Pediatric Hospital",
    },
  ]);

  const childName = "Emma";
  const childAge = "8 months";
  const progress = 60; // Percentage of completed vaccinations

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: theme.background,
        // minHeight: "100vh",
        padding: "24px",
      }}
    >
      {/* Header */}
      <Box
        mb={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" gap={2}>
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
            variant="h5"
            sx={{
              color: theme.primary,
              fontWeight: "500",
              letterSpacing: "-0.5px",
            }}
          >
            Baby {childName}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: theme.secondary + "40",
              color: theme.text,
              padding: "4px 12px",
              borderRadius: "16px",
              fontWeight: "medium",
            }}
          >
            {childAge}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={3}>
          <BellIcon size={20} color={theme.text} style={{ opacity: 0.7 }} />
          <Avatar
            sx={{
              backgroundColor: "white",
              color: theme.primary,
              border: `2px solid ${theme.secondary}`,
              width: 38,
              height: 38,
            }}
          >
            <UserIcon size={18} />
          </Avatar>
        </Box>
      </Box>

      {/* Main content */}
      <Grid container spacing={4}>
        {/* Left side - Stats and Quick Actions */}
        <Grid item xs={12} md={7}>
          {/* Welcome Card */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "24px",
              border: `2px solid ${theme.secondary}`,
            }}
          >
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="h6" sx={{ color: theme.text }}>
                  Welcome back!
                </Typography>
                <Typography variant="body1" sx={{ color: theme.text }}>
                  {childName} is {childAge} old and doing great with
                  vaccinations!
                </Typography>
              </Box>
              <Box
                width="80px"
                height="80px"
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  size={80}
                  thickness={6}
                  sx={{ color: theme.success }}
                />
                <Box
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="h6"
                    sx={{ color: theme.primary, fontWeight: "bold" }}
                  >
                    {progress}%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          {/* Upcoming Vaccinations */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "24px",
              border: `2px solid ${theme.secondary}`,
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography
                variant="h6"
                sx={{ color: theme.primary, fontWeight: "bold" }}
              >
                Upcoming Vaccinations
              </Typography>
              <BellIcon size={20} color={theme.primary} />
            </Box>

            {upcomingVaccinations.map((vax) => (
              <Box
                key={vax.id}
                p={2}
                mb={2}
                sx={{
                  backgroundColor: `${theme.secondary}20`, // 20% opacity
                  borderRadius: "8px",
                  border: `1px solid ${theme.secondary}`,
                }}
              >
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: theme.text }}
                  >
                    {vax.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.primary }}>
                    Due soon
                  </Typography>
                </Box>
                <Box display="flex" mt={1} gap={2}>
                  <Box display="flex" alignItems="center">
                    <CalendarIcon size={14} color={theme.text} />
                    <Typography
                      variant="body2"
                      sx={{ marginLeft: "4px", color: theme.text }}
                    >
                      {vax.date}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <MapPinIcon size={14} color={theme.text} />
                    <Typography
                      variant="body2"
                      sx={{ marginLeft: "4px", color: theme.text }}
                    >
                      {vax.hospital}
                    </Typography>
                  </Box>
                </Box>
                <Box mt={2} display="flex" gap={2}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: theme.primary,
                      color: "white",
                      borderRadius: "8px",
                      textTransform: "none",
                      boxShadow: "none",
                    }}
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: theme.primary,
                      color: theme.primary,
                      borderRadius: "8px",
                      textTransform: "none",
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            ))}

            <Button
              sx={{
                color: theme.primary,
                textTransform: "none",
                fontWeight: "bold",
                padding: 0,
              }}
            >
              View Vaccination Schedule →
            </Button>
          </Paper>

          {/* Completed Vaccinations */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "24px",
              border: `2px solid ${theme.secondary}`,
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography
                variant="h6"
                sx={{ color: theme.primary, fontWeight: "bold" }}
              >
                Completed Vaccinations
              </Typography>
              <FileTextIcon size={20} color={theme.primary} />
            </Box>

            {completedVaccinations.map((vax) => (
              <Box
                key={vax.id}
                p={2}
                mb={2}
                sx={{
                  backgroundColor: `${theme.success}20`, // 20% opacity
                  borderRadius: "8px",
                  border: `1px solid ${theme.success}`,
                }}
              >
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: theme.text }}
                  >
                    {vax.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.success }}>
                    Completed
                  </Typography>
                </Box>
                <Box display="flex" mt={1} gap={2}>
                  <Box display="flex" alignItems="center">
                    <CalendarIcon size={14} color={theme.text} />
                    <Typography
                      variant="body2"
                      sx={{ marginLeft: "4px", color: theme.text }}
                    >
                      {vax.date}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <MapPinIcon size={14} color={theme.text} />
                    <Typography
                      variant="body2"
                      sx={{ marginLeft: "4px", color: theme.text }}
                    >
                      {vax.hospital}
                    </Typography>
                  </Box>
                </Box>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: theme.primary,
                      color: theme.primary,
                      borderRadius: "8px",
                      textTransform: "none",
                    }}
                  >
                    Download Certificate
                  </Button>
                </Box>
              </Box>
            ))}

            <Button
              sx={{
                color: theme.primary,
                textTransform: "none",
                fontWeight: "bold",
                padding: 0,
              }}
            >
              View All Records →
            </Button>
          </Paper>
        </Grid>

        {/* Right side - Quick Links and Lottie Animation */}
        <Grid item xs={12} md={5}>
          {/* Lottie Animation Placeholder */}
          <Box
            mb={4}
            height="220px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              border: `2px dashed ${theme.accent}`,
              padding: "16px",
            }}
          >
            {/* <Typography sx={{ color: theme.text, opacity: 0.7 }}>
              baby Sleeping on Cloud Lottie Animation Here
            </Typography> */}
            <Lottie
              animationData={baby}
              style={{ width: 400, height: 400, marginBottom: 24 }}
            />
          </Box>

          {/* Quick Links Cards */}
          <Typography
            variant="h6"
            sx={{
              color: theme.primary,
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Quick Access
          </Typography>

          <Grid container spacing={2}>
            {[
              {
                title: "Vaccination Schedule",
                icon: <CalendarIcon size={24} color={theme.primary} />,
                color: theme.secondary,
              },
              {
                title: "Nearby Hospitals",
                icon: <MapPinIcon size={24} color={theme.primary} />,
                color: theme.accent,
              },
              {
                title: "Book Appointment",
                icon: <ClockIcon size={24} color={theme.primary} />,
                color: theme.warning,
              },
              {
                title: "Growth Tracker",
                icon: <UserIcon size={24} color={theme.primary} />,
                color: theme.success,
              },
            ].map((item, index) => (
              <Grid item xs={6} key={index}>
                <Card
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    border: `2px solid ${item.color}`,
                    height: "100%",
                  }}
                  elevation={0}
                >
                  <CardActionArea sx={{ height: "100%", padding: "16px" }}>
                    <CardContent
                      sx={{
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Box
                        width="48px"
                        height="48px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          backgroundColor: `${item.color}30`, // 30% opacity
                          borderRadius: "12px",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        sx={{
                          color: theme.text,
                          textAlign: "center",
                          fontWeight: "medium",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Reminder Card */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: `${theme.warning}20`,
              borderRadius: "16px",
              padding: "16px",
              marginTop: "24px",
              border: `2px solid ${theme.warning}`,
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <BellIcon size={24} color={theme.primary} />
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: theme.text }}
                >
                  Upcoming: MMR Vaccine
                </Typography>
                <Typography variant="body2" sx={{ color: theme.text }}>
                  March 25, 2025 · Children's Wellness Center
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserHome;
