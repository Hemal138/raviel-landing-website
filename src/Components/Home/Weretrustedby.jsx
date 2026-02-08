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
      {/* ================= TRUSTED SECTION ================= */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          background: "#EFE9E2",
          position: "sticky",
          top: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 3, md: 6 },
          overflow: "hidden",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "900px" }}>
          <Typography
            sx={{
              fontFamily: "beardeys",
              fontSize: { xs: "34px", sm: "42px", md: "60px" },
              mb: 2,
            }}
          >
            We’re trusted by professionals
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              lineHeight: 1.6,
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
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
              px: { xs: 3, md: 4 },
              py: 1.5,
              borderRadius: "14px",
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 4px 12px rgba(166,153,249,0.4)",
              "&:hover": {
                backgroundColor: "#8f7ff0",
                transform: "translateY(-2px)",
                color: "#fff",
              },
            }}
          >
            Read success stories
          </Button>
        </Box>
      </Box>

      {/* ================= CONTACT SECTION ================= */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          background: "#000",
          borderRadius: { xs: "16px", md: "40px" },
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 3, md: 6 },
          overflow: "hidden",
          fontFamily: "beardeys",
          color: "#fff",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "1000px", width: "100%" }}>
          {/* READY */}
          <Box
            sx={{
              fontSize: { xs: "36px", sm: "50px", md: "90px" },
              transform: { xs: "none", md: "rotate(-10deg)" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ width: { xs: "40px", md: "80px" } }}>
              <img src={boxsectionhome1} alt="" style={{ width: "100%" }} />
            </Box>
            Ready
            <Box sx={{ width: { xs: "50px", md: "140px" } }}>
              <img src={boxsectionhome4} alt="" style={{ width: "100%" }} />
            </Box>
          </Box>

          {/* TO */}
          <Box
            sx={{
              fontSize: { xs: "36px", sm: "50px", md: "90px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
              my: 1,
            }}
          >
            <Box sx={{ width: { xs: "70px", md: "200px" } }}>
              <img src={boxsectionhome5} alt="" style={{ width: "100%" }} />
            </Box>
            To
          </Box>

          {/* CONTACT */}
          <Box
            sx={{
              fontSize: { xs: "36px", sm: "50px", md: "90px" },
              transform: { xs: "none", md: "rotate(5deg)" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            Contact?
            <Box sx={{ width: { xs: "50px", md: "120px" } }}>
              <img src={boxsectionhome3} alt="" style={{ width: "100%" }} />
            </Box>
          </Box>

          {/* EMAIL */}
          <Box
            sx={{
              mt: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ width: "80px" }}>
              <img src={boxsectionhome2} alt="" style={{ width: "100%" }} />
            </Box>

            <Typography sx={{ fontSize: { xs: "14px", md: "20px" } }}>
              <Link
                href="mailto:support@raviel.in"
                underline="none"
                sx={{ color: "#A79AF9" }}
              >
                support@raviel.in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StickySections;
