import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  ArrowBack,
  EmailOutlined,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  return (
    <Box
    sx={{
      maxWidth: 440,
      mx: "auto",
      mt: {
        lg: 10,
      },
      px: 3,
      py: 5,
      boxShadow: 3,
      borderRadius: 2,
      bgcolor: "background.paper",
    }}
  >
      <IconButton onClick={()=>navigate('/sign-in')} sx={{ mb: 2 }}>
        <ArrowBack />
      </IconButton>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ mb: 3, color: "#202948" }}
      >
        Create your iMoving account
      </Typography>
      <Box
        sx={{
          paddingX: {
            lg: "50px",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} sx={{ paddingBottom: "25px" }}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#DCDFE6",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00b4f6",
                  },
                  "&.Mui-focused fieldset": {
                    border:'3px solid #00b4f6 '
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ paddingBottom: "25px" }}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#DCDFE6",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00b4f6",
                  },
                  "&.Mui-focused fieldset": {
                    border:'3px solid #00b4f6 '
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ paddingBottom: "25px" }}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              required
              type="email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#DCDFE6",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00b4f6",
                  },
                  "&.Mui-focused fieldset": {
                    border:'3px solid #00b4f6 '
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined
                      sx={{
                        color: "#00b4f652",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { color: "#222" },
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ paddingBottom: "25px" }}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              required
              type={showPassword ? "text" : "password"}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#DCDFE6",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00b4f6",
                  },
                  "&.Mui-focused fieldset": {
                    border:'3px solid #00b4f6 '
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined
                      sx={{
                        color: "#00b4f652",
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? (
                        <VisibilityOffOutlined
                          sx={{
                            color: "#00b4f652",
                          }}
                        />
                      ) : (
                        <VisibilityOutlined
                          sx={{
                            color: "#00b4f652",
                          }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { color: "#222" }, 
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ paddingBottom: "25px" }}>
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              required
              type={showConfirmPassword ? "text" : "password"}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#DCDFE6",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00b4f6",
                  },
                  "&.Mui-focused fieldset": {
                    border:'3px solid #00b4f6 '
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined
                      color="#00b4f62e"
                      sx={{
                        color: "#00b4f652",
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <VisibilityOffOutlined
                          sx={{
                            color: "#00b4f652",
                          }}
                        />
                      ) : (
                        <VisibilityOutlined
                          sx={{
                            color: "#00b4f652",
                          }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { color: "#222" }, 
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                padding: 2,
                bgcolor: "#00b4f6",
                fontSize:'20px',
                border: "1px solid transparent",
                "&:hover": {
                  color: "#00b4f6",
                  bgcolor: "transparent",
                  border: "1px solid #00b4f6",
                },
              }}
            >
              Create account
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default SignupForm;