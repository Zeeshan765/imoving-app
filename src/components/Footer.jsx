import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Link,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const socialLinks = [
  {
    icon: <YouTubeIcon />,
    href: "https://www.youtube.com/channel/UCy7Ybay9HAGw88uJM8BPmng/featured",
  },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/imoving" },
  { icon: <TwitterIcon />, href: "https://twitter.com/iMoving_Inc" },
  { icon: <PinterestIcon />, href: "https://www.pinterest.com/imovingusa/" },
  { icon: <InstagramIcon />, href: "https://www.instagram.com/imoving.inc/" },
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/IMoving-235951020201954/",
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid #E5E3E3",
        marginTop: "80px",
        paddingTop: "84px",
        backgroundColor: "#FFF",
        fontSize: "14px",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Logo and Social Media */}
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            lg={3}
            sx={{ textAlign: "center", paddingLeft: "0px !important" }}
          >
            <img
              src="https://www.imoving.com/img/logo-footer.png"
              alt="logo"
              title="logo"
              style={{ maxWidth: "100%" }}
            />
            <Typography variant="body2" sx={{ marginTop: "20px" }}>
              Compare and Book Moves Easily
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              sx={{ margin: "40px 0px 0px 0px" }}
            >
              {socialLinks.map((link, index) => (
                <Box key={index} sx={{ padding: "0 3px 10px" }}>
                  <Link href={link.href} target="_blank" rel="noreferrer">
                    <IconButton
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "rgba(0, 180, 246, 0.2)",
                        fontSize: "17px",
                        color: "#00b4f6", // Default icon color
                        "&:hover": {
                          backgroundColor: "rgba(0, 180, 246, 0.3)",
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Menu */}
          <Grid item xs={6} sm={4} md={2} lg={3}>
            <Typography variant="h6" sx={{ padding: "8px 16px" }}>
              Menu
            </Typography>
            <List>
              <ListItem>
                <Link href="/blog" color="inherit" underline="hover">
                  Blog
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about-us/" color="inherit" underline="hover">
                  About Us
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/press-room/" color="inherit" underline="hover">
                  Press
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/imoving-standards/"
                  color="inherit"
                  underline="hover"
                >
                  Standards
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/customer-support/contact-us/"
                  color="inherit"
                  underline="hover"
                >
                  Support
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/moving-companies/"
                  color="inherit"
                  underline="hover"
                >
                  Our Movers
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/register-suppliers/"
                  color="inherit"
                  underline="hover"
                >
                  Become a Partner
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/moving-services/"
                  color="inherit"
                  underline="hover"
                >
                  Our Services
                </Link>
              </ListItem>
            </List>
          </Grid>

          {/* Moving Services */}
          <Grid item xs={6} sm={3} md={4} lg={3}>
            <Typography variant="h6" sx={{ padding: "8px 16px" }}>
              Moving Services
            </Typography>
            <List>
              <ListItem>
                <Link
                  href="/local-moving-companies/"
                  color="inherit"
                  underline="hover"
                >
                  Local Moving
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/long-distance-moving/"
                  color="inherit"
                  underline="hover"
                >
                  Long Distance Moving
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/cross-country-moving-companies/"
                  color="inherit"
                  underline="hover"
                >
                  Cross Country Moving
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/moving-labor/" color="inherit" underline="hover">
                  Moving Labor
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/car-shipping/" color="inherit" underline="hover">
                  Car Shipping
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/storage-services/"
                  color="inherit"
                  underline="hover"
                >
                  Storage Services
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/packing-services/"
                  color="inherit"
                  underline="hover"
                >
                  Packing Services
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/small-deliveries/"
                  color="inherit"
                  underline="hover"
                >
                  Small Deliveries
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/international-moving/"
                  color="inherit"
                  underline="hover"
                >
                  International Moving
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/disposal-services/"
                  color="inherit"
                  underline="hover"
                >
                  Disposal Services
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/corporate-moving/"
                  color="inherit"
                  underline="hover"
                >
                  Corporate Relocation
                </Link>
              </ListItem>
            </List>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} sm={6} md={2} lg={3}>
            <Typography variant="h6" sx={{ padding: "8px 16px" }}>
              Useful Links
            </Typography>
            <List sx={{ marginBottom: "20px" }}>
              <ListItem>
                <Link
                  href="/moving-cost-calculator/"
                  color="inherit"
                  underline="hover"
                >
                  Moving Cost Calculator
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/moving-checklist/"
                  color="inherit"
                  underline="hover"
                >
                  Moving Checklist
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/moving-boxes/" color="inherit" underline="hover">
                  Buy Moving Boxes
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: 4, marginBottom: "30px" }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              © iMoving, inc. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="hover">
                Terms and Conditions
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
