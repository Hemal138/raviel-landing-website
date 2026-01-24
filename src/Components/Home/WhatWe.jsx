import { Box, Grid, Typography } from "@mui/material";
import React from "react";

// images
import home3lineimg from "../../assets/images/home/Line 2.png";
import home3men from "../../assets/images/home/home3men.png";
import home3card from "../../assets/images/home/home3card.png";
import home3mobile from "../../assets/images/home/home3mobile.png";
import home3menwalk from "../../assets/images/home/home3menwalk.png";
import clockHome from "../../assets/TODOLIST/CLOCK/1.mp4";

// ================= CARD DATA =================
const cardsData = [
  {
    title: "Product Listing Management",
    image: home3men,
    bg: "linear-gradient(145deg, #FFD1D6, #ED9DA0)",
    borderRadius: "40px 40px 40px 40px",
    rotate: { sm: "rotate(5deg)", md: "rotate(8deg)", lg: "rotate(10deg)" },
  },
  {
    title: "Marketplace Commission Advisory",
    image: home3card,
    bg: "linear-gradient(145deg, #FFA98A, #E76F51)",
    borderRadius: "40px 40px 40px 40px",
    rotate: { sm: "rotate(-5deg)", md: "rotate(-8deg)", lg: "rotate(-10deg)" },
  },
  {
    title: "Trademark Registration & Brand Protection",
    image: home3mobile,
    bg: "linear-gradient(145deg, #CFC4FF, #B8A9F0)",
    borderRadius: "40px 40px 40px 40px",
    rotate: { sm: "rotate(5deg)", md: "rotate(8deg)", lg: "rotate(10deg)" },
  },
  {
    title: "Smart Image Optimizer",
    image: home3menwalk,
    bg: "linear-gradient(145deg, #FFE9A5, #FFD166)",
    borderRadius: "40px 40px 40px 40px",
    rotate: { sm: "rotate(-5deg)", md: "rotate(-8deg)", lg: "rotate(-10deg)" },
  },
];

// ================= COMPONENT =================
const WhatWe = () => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        borderRadius: {
          xs: "40px 40px 0 0",
          sm: "60px 60px 0 0",
          md: "80px 80px 0 0",
          lg: "100px 100px 0 0",
        },
        fontFamily: "stack",
        paddingBottom: { xs: "5vw", md: 0 },
      }}
    >
      <Box sx={{ padding: { xs: "6vw", md: "5vw 5vw 1vw" }, color: "white" }}>
        {/* ================= TOP SECTION ================= */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "40px", md: "20px" },
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              bgcolor: "#EEE8E0",
              padding: { xs: "20px", md: "20px 70px 20px 20px" },
              borderRadius: {
                xs: "40px",
                md: "100px 0 100px 100px",
              },
              display: "flex",
              alignItems: "center",
              gap: { xs: "20px", md: "30px" },
            }}
          >
            <Box
              sx={{
                height: { xs: "150px", sm: "300px", md: "220px" },
                width: { xs: "150px", sm: "300px", md: "220px" },
                bgcolor: "white",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <video
                src={clockHome}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <Box>
              {["WHAT", "WE", "PROVIDE"].map((text, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontFamily: "beardeys",
                    fontSize: { xs: "8vw", md: "2.5vw" },
                    color: i === 0 ? "#a699f9" : i === 1 ? "#EEAA1E" : "#000",
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box sx={{ maxWidth: "100px" }}>
              <img src={home3lineimg} alt="" style={{ width: "100%" }} />
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "4vw", md: "1.8vw" },
                lineHeight: { xs: "6vw", md: "2.2vw" },
              }}
            >
              We handle your entire JioMart seller registration — from document
              verification to account activation — so you can start selling
              faster and easier.
            </Typography>
          </Box>
        </Box>

        {/* ================= BOTTOM SECTION ================= */}
        <Box sx={{ marginTop: "5vw" }}>
          <Grid container justifyContent="center">
            {cardsData.map((card, index) => (
              <Grid item xs={6} md="auto" key={index}>
                <Box
                  sx={{
                    height: { xs: "300px", sm: "400px", md: "450px" },
                    width: { xs: "160px", sm: "220px", md: "300px" },
                    background: card.bg,
                    borderRadius: card.borderRadius,
                    transform: {
                      xs: "rotate(0deg)",
                      sm: card.rotate.sm,
                      md: card.rotate.md,
                      lg: card.rotate.lg,
                    },
                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                    margin: { xs: "5px", md: "50px" },
                    padding: "22px",
                    transition: "0.4s",
                    "&:hover": {
                      transform: { md: "rotate(0deg) scale(1.03)" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "clamp(18px, 1.3vw, 24px)",
                      fontWeight: 700,
                      color: "#2A2141",
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {card.title}
                  </Box>

                  <Box
                    sx={{
                      height: "70%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(-5deg)",
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        width: "85%",
                        filter:
                          "drop-shadow(0px 8px 18px rgba(0,0,0,0.25))",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWe;
