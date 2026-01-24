import React from "react";
import { Box, Typography, Button } from "@mui/material";
import raviellandingherovideo from "../../assets/images/home/herovideo.mp4";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "80vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 6, md: 0 },
      }}
    >
      {/* CONTENT WRAPPER */}
      <Box
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "720px",
            md: "960px",
            lg: "1200px",
            xl: "1400px",
          },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* LINE 1 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: { xs: 1, sm: 2 },
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: "beardeys",
              fontWeight: 800,
              fontSize: {
                xs: "2rem",
                sm: "2.8rem",
                md: "4.2rem",
                lg: "5rem",
              },
              lineHeight: 1.1,
            }}
          >
            Powering
          </Typography>

          {/* VIDEO — hide on mobile */}
          <Box
            component="video"
            src={raviellandingherovideo}
            autoPlay
            loop
            muted
            playsInline
            sx={{
              display: { xs: "none", sm: "block" },
              height: {
                sm: "40px",
                md: "60px",
                lg: "70px",
              },
              minWidth: {
                sm: "90px",
                md: "120px",
              },
              borderRadius: "14px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />

          <Typography
            component="span"
            sx={{
              fontFamily: "beardeys",
              fontWeight: 800,
              fontSize: {
                xs: "2rem",
                sm: "2.8rem",
                md: "4.2rem",
                lg: "5rem",
              },
              lineHeight: 1.1,
            }}
          >
            Your Business
          </Typography>
        </Box>

        {/* LINE 2 */}
        <Typography
          sx={{
            fontFamily: "beardeys",
            fontWeight: 800,
            mt: 1,
            fontSize: {
              xs: "1.8rem",
              sm: "2.5rem",
              md: "4.2rem",
              lg: "5rem",
            },
            lineHeight: 1.1,
          }}
        >
          with Smart Digital Solutions
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            color: "#444",
            fontSize: { xs: "1rem", sm: "1.15rem", md: "1.5rem" },
            mt: 3,
            mb: 4,
            maxWidth: "900px",
            mx: { xs: "auto", md: 0 },
          }}
        >
          We deliver reliable, scalable, and modern services designed to
          accelerate your business growth.
        </Typography>

        {/* CTA */}
        <Button
          sx={{
            bgcolor: "#B9A6FF",
            color: "#000",
            px: { xs: 3, md: 4 },
            py: 1.4,
            borderRadius: "999px",
            fontWeight: 600,
            textTransform: "none",
            fontSize: { xs: "0.95rem", md: "1rem" },
            "&:hover": {
              bgcolor: "#A38EFF",
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
