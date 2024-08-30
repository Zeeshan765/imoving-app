import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const MovingBlog = () => {
  return (
    <>
      <Box sx={{ padding: "30px 0px" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={8}
            sx={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <Typography variant="h5">
              Moving Tips from the iMoving Blog:
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "30px" }}>
              We made booking easy, and we’ll make moving day even easier. Check
              out these tips and tricks from the iMoving blog.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: "30px" }}
        >
          <Grid item xs={8} lg={9} xl={8}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              sx={{ position: "relative" }}
            >
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Card sx={{ borderRadius: "5px", position: "relative" }}>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      backgroundColor: "#0096D7",
                      color: "#fff",
                      borderRadius: "20px",
                      fontSize: "14px",
                      padding: "6px 12px",
                      zIndex: 1,
                    }}
                  >
                    Moving Tips
                  </Typography>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="https://www.imoving.com/media/luagd25c/moving-labor-1-mob.png?center=0.45756457564575648,0.42083333333333334&mode=crop&width=367&height=290&rnd=133657151729170000"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        marginBottom: "13px",
                        lineHeight: 1.4,
                        height: "52px",
                        fontSize: "16px",
                        fontWeight: 500,
                        overflow: "hidden",
                      }}
                    >
                      Best Moving Labor Companies
                    </Typography>
                    <Typography variant="body2" color="#222">
                      Harrison Gough
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Jul 17 2024
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Card sx={{ borderRadius: "5px", position: "relative" }}>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      backgroundColor: "#0096D7",
                      color: "#fff",
                      borderRadius: "20px",
                      fontSize: "14px",
                      padding: "6px 12px",
                      zIndex: 1,
                    }}
                  >
                    Moving Tips
                  </Typography>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="https://www.imoving.com/media/luagd25c/moving-labor-1-mob.png?center=0.45756457564575648,0.42083333333333334&mode=crop&width=367&height=290&rnd=133657151729170000"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        marginBottom: "13px",
                        lineHeight: 1.4,
                        height: "52px",
                        fontSize: "16px",
                        fontWeight: 500,
                        overflow: "hidden",
                      }}
                    >
                      Best Moving Labor Companies
                    </Typography>
                    <Typography variant="body2" color="#222">
                      Harrison Gough
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Jul 17 2024
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Card sx={{ borderRadius: "5px", position: "relative" }}>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      backgroundColor: "#0096D7",
                      color: "#fff",
                      borderRadius: "20px",
                      fontSize: "14px",
                      padding: "6px 12px",
                      zIndex: 1,
                    }}
                  >
                    Moving Tips
                  </Typography>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="https://www.imoving.com/media/luagd25c/moving-labor-1-mob.png?center=0.45756457564575648,0.42083333333333334&mode=crop&width=367&height=290&rnd=133657151729170000"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        marginBottom: "13px",
                        lineHeight: 1.4,
                        height: "52px",
                        fontSize: "16px",
                        fontWeight: 500,
                        overflow: "hidden",
                      }}
                    >
                      Best Moving Labor Companies
                    </Typography>
                    <Typography variant="body2" color="#222">
                      Harrison Gough
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Jul 17 2024
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3} xl={3}>
                <Card sx={{ borderRadius: "5px", position: "relative" }}>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      backgroundColor: "#0096D7",
                      color: "#fff",
                      borderRadius: "20px",
                      fontSize: "14px",
                      padding: "6px 12px",
                      zIndex: 1,
                    }}
                  >
                    Moving Tips
                  </Typography>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="https://www.imoving.com/media/luagd25c/moving-labor-1-mob.png?center=0.45756457564575648,0.42083333333333334&mode=crop&width=367&height=290&rnd=133657151729170000"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        marginBottom: "13px",
                        lineHeight: 1.4,
                        height: "52px",
                        fontSize: "16px",
                        fontWeight: 500,
                        overflow: "hidden",
                      }}
                    >
                      Best Moving Labor Companies
                    </Typography>
                    <Typography variant="body2" color="#222">
                      Harrison Gough
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Jul 17 2024
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MovingBlog;
