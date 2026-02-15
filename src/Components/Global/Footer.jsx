import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import footerlogo from "../../assets/images/logos/png.png";
import tree from "../../assets/images/footer/tree.png";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  return (
    <Box
      // ref={footerRef}
      sx={{
        bgcolor: "#EFE9E2",
        position: "relative",
        zIndex: 1111,
        fontFamily: "stack",
        padding: { xs: "40px 20px 0 20px", md: "60px 40px 0 40px" },
        overflow: "hidden",
      }}
    >
      {/* TOP CONTENT */}
      <Box
        sx={{
          paddingX: {
            xs: "20px",
            sm: "40px",
            md: "60px",
            lg: "80px",
            xl: "100px",
          },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: "30px", md: "40px" },
        }}
      >
        {/* LEFT SIDE LOGO + TEXT */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            textAlign: "center", // Center everything ✨
            mx: "auto",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              width: { xs: "200px", sm: "250px", md: "300px" },
              mb: 1,
              mx: "auto",
            }}
          >
            <img src={footerlogo} alt="logo" style={{ width: "100%" }} />
          </Box>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: {
                xs: "4vw",
                sm: "3vw",
                md: "1.2vw",
              },
              color: "#333",
              width: "100%",
              mx: "auto",
              mb: 2,
            }}
          >
            Fast, reliable growth for JioMart sellers.
          </Typography>

          {/* Rating Section */}

        </Box>

        {/* RIGHT SIDE MENU SECTIONS */}
        <Box
          // ref={menuRef}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            gap: { xs: "20px", sm: "25px", md: "60px" },
            width: { xs: "100%", md: "60%" },
          }}
        >
          {/* SECTION 1 */}
          <Box
            className="menu-item"
            sx={{
              border: "2px solid black",
              borderRadius: "30px",
              padding: { xs: "18px", md: "20px" },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "5vw",
                  sm: "3.5vw",
                  md: "1.4vw",
                },
                fontWeight: "bold",
                pb: "10px",
              }}
            >
              Company
            </Typography>

            {[
              "About Us",
              "Terms of Service. page",
              "Payment Policy. page",
              "Contact Us.",
              "Support Center.",
            ].map((item) => (
              <Typography
                key={item}
                className="menu-item"
                sx={{
                  fontSize: { xs: "4vw", sm: "3vw", md: "1vw" },
                  py: "3px",
                  color: "#333",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* SECTION 2 */}
          <Box
            className="menu-item"
            sx={{
              border: "2px solid black",
              borderRadius: "30px",
              padding: { xs: "18px", md: "20px" },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "5vw",
                  sm: "3.5vw",
                  md: "1.4vw",
                },
                fontWeight: "bold",
                pb: "10px",
              }}
            >
              Resources
            </Typography>

            {[
              "Users Guide. page",
              "Seller Success Stories page",
              "Pricing & Packages",
              "Video Tutorials",
              "FAQs page",
            ].map((item) => (
              <Typography
                key={item}
                className="menu-item"
                sx={{
                  fontSize: { xs: "4vw", sm: "3vw", md: "1vw" },
                  py: "3px",
                  color: "#333",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* BOTTOM TREE + FORM SECTION */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          mt: { xs: "40px", md: "60px" },
          px: { xs: "20px", md: "60px" },
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: "40px", md: "0px" },
        }}
      >
        {/* TREE (animates in) */}
        <Box
          // ref={treeRef}
          sx={{
            width: { xs: "0px", sm: "0px", md: "500px", lg: "650px" },
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <img src={tree} alt="tree" style={{ width: "100%" }} />
        </Box>

        {/* FORM SECTION WITH ANIMATION */}
        <Box
          // ref={formRef}
          sx={{ width: { xs: "100%", md: "45%" } }}
        >
          <Box
            sx={{
              fontSize: {
                xs: "6vw",
                sm: "4.5vw",
                md: "2vw",
              },
              fontFamily: "beardeys",
              paddingBottom: "20px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Request an Offline Demo.
          </Box>

          <Box sx={{ paddingBottom: "50px" }}>
            <TextField
              label="Enter your Name..."
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  bgcolor: "white",
                  marginBottom: "15px",

                  // Text color default
                  "& input": {
                    color: "black",
                  },

                  // Text color when focused (on click)
                  "&.Mui-focused input": {
                    color: "black",
                  },

                  // Remove borders
                  "& fieldset": { border: "none" },
                  "&:hover fieldset": { border: "none" },
                  "&.Mui-focused fieldset": { border: "none" },
                },

                // Label color on focus
                "& label.Mui-focused": {
                  color: "black",
                },
              }}
            />

            <TextField
              label="Enter your Number..."
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  bgcolor: "white",
                  marginBottom: "15px",

                  // Text color default
                  "& input": {
                    color: "black",
                  },

                  // Text color when focused (on click)
                  "&.Mui-focused input": {
                    color: "black",
                  },

                  // Remove borders
                  "& fieldset": { border: "none" },
                  "&:hover fieldset": { border: "none" },
                  "&.Mui-focused fieldset": { border: "none" },
                },

                // Label color on focus
                "& label.Mui-focused": {
                  color: "black",
                },
              }}
            />

            <Button
              fullWidth
              sx={{
                borderRadius: "50px",
                bgcolor: "#EE6454",
                color: "black",
                padding: "10px",
                fontSize: { xs: "4vw", md: "1vw" },
                "&:hover": { bgcolor: "#d95849" },
              }}
            >
              Submit
            </Button>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "3vw", md: "0.9vw" },
              color: "#444",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            © 2026 Raviel. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
