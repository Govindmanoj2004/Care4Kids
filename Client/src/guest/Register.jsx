import React, { useState } from 'react';
import axios from 'axios';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Container, 
  Paper, 
  FormControlLabel, 
  Switch,
  InputAdornment,
  IconButton,
  Divider,
  Grid,
  Alert,
  Snackbar,
  useTheme,
  useMediaQuery,
  Link
} from '@mui/material';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link as RouterLink } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const Register = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    userType: 'parent' // or 'hospital'
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleUserType = () => {
    setFormData({ 
      ...formData, 
      userType: formData.userType === 'parent' ? 'hospital' : 'parent' 
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const url = formData.userType === 'parent' ? '/api/parents/register' : '/api/hospitals/register';
    
    try {
      const res = await axios.post(url, formData);
      console.log(res.data);
      setNotification({
        open: true,
        message: 'Registration successful!',
        severity: 'success'
      });
      // Here you would typically redirect after successful registration
    } catch (error) {
      console.error(error.response?.data || error.message);
      setNotification({
        open: true,
        message: error.response?.data?.message || 'Registration failed. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Box
      sx={{
        // minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // background: 'linear-gradient(145deg, #b7b1f2 0%, #9a92e0 100%)',
        p: 2
      }}
    >
      <Container component="main" maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper 
            elevation={6} 
            sx={{ 
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f7fa 100%)',
            }}
          >
            <Box 
              sx={{ 
                p: 3, 
                backgroundColor: '#b7b1f2',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
              }}
            >
              <Typography 
                component="h1" 
                variant="h4" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 600,
                  textAlign: 'center' 
                }}
              >
                Create Your Account
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  mt: 1 
                }}
              >
                {formData.userType === 'parent' ? 'Register as a parent' : 'Register as a healthcare provider'}
              </Typography>
            </Box>
            
            <Box sx={{ p: 4 }}>
              <Box 
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3
                }}
              >
                <FormControlLabel
                  control={
                    <Switch 
                      checked={formData.userType === 'hospital'} 
                      onChange={toggleUserType}
                      color="primary"
                    />
                  }
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {formData.userType === 'parent' ? (
                        <>
                          <PersonOutlineIcon sx={{ mr: 1, color: '#b7b1f2' }} />
                          <Typography sx={{ mr: 1 }}>Parent</Typography>
                        </>
                      ) : (
                        <>
                          <LocalHospitalIcon sx={{ mr: 1, color: '#b7b1f2' }} />
                          <Typography sx={{ mr: 1 }}>Hospital</Typography>
                        </>
                      )}
                    </Box>
                  }
                />
              </Box>

              <Divider sx={{ mb: 3 }} />
              
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon sx={{ color: '#b7b1f2' }} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#b7b1f2',
                          },
                          '&:hover fieldset': {
                            borderColor: '#b7b1f2',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#b7b1f2',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon sx={{ color: '#b7b1f2' }} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#b7b1f2',
                          },
                          '&:hover fieldset': {
                            borderColor: '#b7b1f2',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#b7b1f2',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <span style={{ width: 24 }} />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={togglePasswordVisibility}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOffIcon sx={{ color: '#b7b1f2' }} /> : <VisibilityIcon sx={{ color: '#b7b1f2' }} />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#b7b1f2',
                          },
                          '&:hover fieldset': {
                            borderColor: '#b7b1f2',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#b7b1f2',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon sx={{ color: '#b7b1f2' }} />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#b7b1f2',
                          },
                          '&:hover fieldset': {
                            borderColor: '#b7b1f2',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#b7b1f2',
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4 }}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={loading}
                      size="large"
                      sx={{ 
                        py: 1.5,
                        backgroundColor: '#b7b1f2',
                        '&:hover': { 
                          backgroundColor: '#9a92e0' 
                        },
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(183, 177, 242, 0.25)'
                      }}
                    >
                      {loading ? 'Processing...' : 'Register Now'}
                    </Button>
                  </motion.div>
                </Box>
                
                <Typography 
                  variant="body2" 
                  align="center" 
                  sx={{ 
                    mt: 3, 
                    color: 'text.secondary' 
                  }}
                >
                  By registering, you agree to our Terms of Service and Privacy Policy
                </Typography>

                <Typography 
                  variant="body2" 
                  align="center" 
                  sx={{ 
                    mt: 2, 
                    color: 'text.secondary' 
                  }}
                >
                  Already have an account?{' '}
                  <Link component={RouterLink} to="/login" sx={{ color: '#b7b1f2' }}>
                    Login here
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </motion.div>

        <Snackbar 
          open={notification.open} 
          autoHideDuration={6000} 
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseNotification} 
            severity={notification.severity} 
            variant="filled"
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Register;