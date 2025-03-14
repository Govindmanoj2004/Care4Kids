import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";

const Login = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        // minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            bgcolor: "background.paper",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            p: { xs: 3, md: 4 },
            textAlign: "center",
          }}
        >
          {/* Logo and Title */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <ChildFriendlyIcon
              sx={{
                fontSize: 40,
                color: "#B7B1F2",
                mr: 2,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#B7B1F2",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Care4Kids
            </Typography>
          </Box>

          {/* Login Form */}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
            />

            {/* Login Button */}
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#B7B1F2",
                backgroundImage:
                  "linear-gradient(135deg, #B7B1F2 0%, #A39DE6 100%)",
                color: "white",
                borderRadius: "12px",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                py: 1.5,
                mt: 2,
                "&:hover": {
                  bgcolor: "#A39DE6",
                  backgroundImage: "none",
                  boxShadow: "0 4px 12px rgba(183, 177, 242, 0.3)",
                },
              }}
            >
              Login
            </Button>

            {/* Sign Up Link */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2, fontFamily: "'Poppins', sans-serif" }}
            >
              Don't have an account?{" "}
              <Link
                href="/register"
                sx={{
                  color: "#B7B1F2",
                  fontWeight: 500,
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;