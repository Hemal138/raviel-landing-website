import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import boxsectionhome1 from "../../assets/images/home/black component/Group 65.png";
import boxsectionhome2 from "../../assets/images/home/black component/Arrow 3.png";
import boxsectionhome3 from "../../assets/images/home/black component/Group 66.png";
import boxsectionhome4 from "../../assets/images/home/black component/Group 67.png";
import boxsectionhome5 from "../../assets/images/home/black component/Vector 1.png";
import { useNavigate } from "react-router-dom";

const StickySections = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Trusted Sticky Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "80vh", md: "100vh" },
          background: "#EFE9E2",
          position: "sticky",
          top: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "beardeys",
              fontSize: { xs: "8vw", sm: "6vw", md: "4vw" },
              width: { xs: "100%", md: "60%" },
              margin: "0 auto",
              paddingBottom: "20px",
            }}
          >
            We’re trusted by professionals
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "4vw", sm: "2.2vw", md: "1.3vw" },
              width: { xs: "95%", md: "55%" },
              margin: "0 auto",
              paddingBottom: "30px",
              lineHeight: 1.4,
            }}
          >
            Learn why professionals trust our solutions to complete their
            customer journeys.
          </Typography>

          <Button
            onClick={() => navigate("/about")}
            sx={{
              backgroundColor: "#A699F9",
              color: "#000",
              padding: { xs: "10px 20px", md: "12px 30px" },
              borderRadius: "14px",
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 4px 12px rgba(166,153,249,0.4)",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#8f7ff0",
                boxShadow: "0 6px 18px rgba(166,153,249,0.6)",
                transform: "translateY(-3px)",
                color: "#fff",
              },
            }}
          >
            Read success stories
          </Button>
        </Box>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "100vh", md: "100vh" },
          background: "#000",
          borderRadius: { xs: "20px", md: "50px" },
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          fontFamily: "beardeys",
          color: "white",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          {/* READY */}
          <Box
            sx={{
              fontSize: { xs: "50px", sm: "6vw", md: "4.5vw", lg: "8vw" },
              transform: "rotate(-10deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <Box
              sx={{
                width: { xs: "50px", sm: "70px", md: "100px" },
                transform: "rotate(-55deg)",
              }}
            >
              <img
                src={boxsectionhome1}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            Ready
            <Box
              sx={{
                width: { xs: "60px", sm: "130px", md: "180px", lg: "200px" },
                transform: "rotate(10deg)",
              }}
            >
              <img
                src={boxsectionhome4}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>

          {/* TO */}
          <Box
            sx={{
              fontSize: { xs: "50px", sm: "6vw", md: "4.5vw", lg: "8vw" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <Box
              sx={{
                width: { xs: "100px", sm: "180px", md: "230px", lg: "300px" },
              }}
            >
              <img
                src={boxsectionhome5}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            To
          </Box>

          {/* CONTACT */}
          <Box
            sx={{
              fontSize: { xs: "50px", sm: "6vw", md: "4.5vw", lg: "8vw" },
              transform: "rotate(5deg)",
            }}
          >
            Contact?
            <Box
              sx={{
                width: { xs: "70px", sm: "100px", md: "130px", lg: "150px" },
              }}
            >
              <img
                src={boxsectionhome3}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "10%", sm: "5%", md: "5%", lg: "5%" },
              left: "60%",
            }}
          >
            <Box sx={{ width: "100px", textAlign: "end" }}>
              <img src={boxsectionhome2} alt="" />
            </Box>
            <Box
              sx={{
                marginTop: "20px",
                fontSize: { xs: "5vw", sm: "4vw", md: "2.5vw", lg: "2vw" },
                position: "relative",
                left: { xs: "-20%" },
              }}
            >
              <Link
                href="mailto:support@raviel.in"
                style={{ textDecoration: "none", color: "#A79AF9" }}
              >
                support@raviel.in
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StickySections;
