import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HorizontalCards = () => {
  const [isDown, setIsDown] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const flowerslider = useRef(null);
  const arcRef = useRef(null);
  const gridRef = useRef(null);
  const topabstarctRef = useRef(null);
  const bottoabstarctmRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -totalWidth, // 🔥 moves cards right → left
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
      },
    });
    gsap.to(flowerslider.current, {
      rotate: 360,
      duration: 5, // slower = smoother
      repeat: -1, // infinite loop
      ease: "none", // no easing → smooth continuous spin
    });

    gsap.to(arcRef.current, {
      rotate: 360, // rotate element
      scale: 1.1, // subtle zoom effect
      duration: 4,
      repeat: -1,
      ease: "power2.inOut",
      yoyo: true,
    });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(gridRef.current, {
      "--s": "120px", // zoom out pattern
      "--g": "20px",
      duration: 4,
      ease: "power2.inOut",
    })

      .to(
        gridRef.current,
        {
          "--n": "6", // more granularity
          duration: 4,
          ease: "power2.inOut",
        },
        "-=2"
      )

      .to(
        gridRef.current,
        {
          backgroundPositionX: "200px",
          backgroundPositionY: "100px",
          duration: 6,
          ease: "none",
        },
        0
      );
    gsap.to(topabstarctRef.current, {
      y: 150,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(bottoabstarctmRef.current, {
      y: -150,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        bgcolor: "#000000ff",
      }}
    >
      {/* CARD TRACK */}
      <Box
        ref={trackRef}
        sx={{
          display: "flex",
          gap: "30px",
          padding: "20px 100px 20px 20px",
          height: "100%",
          alignItems: "center", // 🔥 center cards vertically
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: "1",
        }}
      >
        <Box
          sx={{
            width: { xs: "85vw", sm: "70vw", md: "600px" },
            minWidth: { xs: "85vw", sm: "70vw", md: "600px" },

            borderRadius: "28px",
            position: "relative",
            overflow: "hidden",
            padding: "2px",

            // 🔥 Outer gradient border
            background: "#EEAA1E",

            "&:hover": {
              transform: "translateY(-8px)",
              transition: "0.4s ease",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            },

            transition: "0.4s ease",
          }}
        >
          {/* INNER CARD */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(12px)",
              borderRadius: "26px",
              padding: "28px 32px",
              position: "relative",
            }}
          >
            {/* SHINE EFFECT */}
            <Box
              sx={{
                position: "absolute",
                top: "-40%",
                left: "-20%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 40%)",
                opacity: 0.4,
                pointerEvents: "none",
                transform: "rotate(20deg)",
              }}
            />
            {/* NUMBER BADGE */}
            <Box
              sx={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #000, #333)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                color: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                marginBottom: "20px",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 0, 80, 0.45), transparent 70%)",
                  zIndex: -1,
                  filter: "blur(4px)",
                },
              }}
            >
              1
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                fontWeight: 700,
                color: "#1f1f1f",
              }}
            >
              Order Payment Settlement
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                marginTop: "12px",
                lineHeight: 1.7,
                fontSize: { xs: "3.5vw", sm: "2.8vw", md: "1vw" },
                color: "#3d3d3d",
              }}
            >
              Get a complete overview of all your order payments, settlements,
              and pending amounts. Everything is organized clearly so you can
              easily track your financial status across all orders.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "85vw", sm: "70vw", md: "600px" },
            minWidth: { xs: "85vw", sm: "70vw", md: "600px" },

            borderRadius: "28px",
            position: "relative",
            overflow: "hidden",
            padding: "2px",

            // 🔥 Outer gradient border
            background: "#EF6454",

            "&:hover": {
              transform: "translateY(-8px)",
              transition: "0.4s ease",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            },

            transition: "0.4s ease",
          }}
        >
          {/* INNER CARD */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(12px)",
              borderRadius: "26px",
              padding: "28px 32px",
              position: "relative",
            }}
          >
            {/* SHINE EFFECT */}
            <Box
              sx={{
                position: "absolute",
                top: "-40%",
                left: "-20%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 40%)",
                opacity: 0.4,
                pointerEvents: "none",
                transform: "rotate(20deg)",
              }}
            />

            {/* NUMBER BADGE */}
            <Box
              sx={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #000, #333)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                color: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                marginBottom: "20px",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 0, 80, 0.45), transparent 70%)",
                  zIndex: -1,
                  filter: "blur(4px)",
                },
              }}
            >
              2
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                fontWeight: 700,
                color: "#1f1f1f",
              }}
            >
              Invoice Creator
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                marginTop: "12px",
                lineHeight: 1.7,
                fontSize: { xs: "3.5vw", sm: "2.8vw", md: "1vw" },
                color: "#3d3d3d",
              }}
            >
              Automatically generate clean, ready-to-use invoices using your
              daily order data. Product details, pricing, totals, and taxes are
              filled instantly for smooth and accurate billing.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "85vw", sm: "70vw", md: "600px" },
            minWidth: { xs: "85vw", sm: "70vw", md: "600px" },

            borderRadius: "28px",
            position: "relative",
            overflow: "hidden",
            padding: "2px",

            // 🔥 Outer gradient border
            background: "#7a5ce7ff",

            "&:hover": {
              transform: "translateY(-8px)",
              transition: "0.4s ease",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            },

            transition: "0.4s ease",
          }}
        >
          {/* INNER CARD */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(12px)",
              borderRadius: "26px",
              padding: "28px 32px",
              position: "relative",
            }}
          >
            {/* SHINE EFFECT */}
            <Box
              sx={{
                position: "absolute",
                top: "-40%",
                left: "-20%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 40%)",
                opacity: 0.4,
                pointerEvents: "none",
                transform: "rotate(20deg)",
              }}
            />

            {/* NUMBER BADGE */}
            <Box
              sx={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #000, #333)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                color: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                marginBottom: "20px",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 0, 80, 0.45), transparent 70%)",
                  zIndex: -1,
                  filter: "blur(4px)",
                },
              }}
            >
              3
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                fontWeight: 700,
                color: "#1f1f1f",
              }}
            >
              Claim Tool
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                marginTop: "12px",
                lineHeight: 1.7,
                fontSize: { xs: "3.5vw", sm: "2.8vw", md: "1vw" },
                color: "#3d3d3d",
              }}
            >
              Submit claims easily by uploading product photos and a video
              whenever a wrong parcel is received. All details are organized and
              sent in a consistent format for quick processing.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "85vw", sm: "70vw", md: "600px" },
            minWidth: { xs: "85vw", sm: "70vw", md: "600px" },

            borderRadius: "28px",
            position: "relative",
            overflow: "hidden",
            padding: "2px",

            // 🔥 Outer gradient border
            background: "#EEE8E0",

            "&:hover": {
              transform: "translateY(-8px)",
              transition: "0.4s ease",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            },

            transition: "0.4s ease",
          }}
        >
          {/* INNER CARD */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(12px)",
              borderRadius: "26px",
              padding: "28px 32px",
              position: "relative",
            }}
          >
            {/* SHINE EFFECT */}
            <Box
              sx={{
                position: "absolute",
                top: "-40%",
                left: "-20%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 40%)",
                opacity: 0.4,
                pointerEvents: "none",
                transform: "rotate(20deg)",
              }}
            />

            {/* NUMBER BADGE */}
            <Box
              sx={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #000, #333)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                color: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                marginBottom: "20px",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 0, 80, 0.45), transparent 70%)",
                  zIndex: -1,
                  filter: "blur(4px)",
                },
              }}
            >
              4
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                fontWeight: 700,
                color: "#1f1f1f",
              }}
            >
              Label Cropper
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                marginTop: "12px",
                lineHeight: 1.7,
                fontSize: { xs: "3.5vw", sm: "2.8vw", md: "1vw" },
                color: "#3d3d3d",
              }}
            >
              Download perfectly cropped shipping labels without any manual
              editing. Extra spaces and unnecessary sections are removed
              instantly, giving you neat, ready-to-use labels.
            </Typography>
          </Box>
        </Box>

        {/* capsul */}
        <Box>
          <Box
            onMouseEnter={() => setIsDown((prev) => !prev)}
            sx={{
              height: "400px",
              width: "150px",
              bgcolor: "white",
              borderRadius: "100px",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
                bgcolor: "black",
                transition: "transform 0.5s ease",
                transform: isDown ? "translateY(250px)" : "translateY(0px)",
              }}
            />
          </Box>
        </Box>

        

        <Box
          sx={{
            width: { xs: "85vw", sm: "70vw", md: "600px" },
            minWidth: { xs: "85vw", sm: "70vw", md: "600px" },

            borderRadius: "28px",
            position: "relative",
            overflow: "hidden",
            padding: "2px",

            // 🔥 Outer gradient border
            background: "#EEAA1E",

            "&:hover": {
              transform: "translateY(-8px)",
              transition: "0.4s ease",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            },

            transition: "0.4s ease",
          }}
        >
          {/* INNER CARD */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(12px)",
              borderRadius: "26px",
              padding: "28px 32px",
              position: "relative",
            }}
          >
            {/* SHINE EFFECT */}
            <Box
              sx={{
                position: "absolute",
                top: "-40%",
                left: "-20%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 40%)",
                opacity: 0.4,
                pointerEvents: "none",
                transform: "rotate(20deg)",
              }}
            />

            {/* NUMBER BADGE */}
            <Box
              sx={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #000, #333)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                color: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                marginBottom: "20px",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 0, 80, 0.45), transparent 70%)",
                  zIndex: -1,
                  filter: "blur(4px)",
                },
              }}
            >
              7
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                fontWeight: 700,
                color: "#1f1f1f",
              }}
            >
              Inventory Images
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                marginTop: "12px",
                lineHeight: 1.7,
                fontSize: { xs: "3.5vw", sm: "2.8vw", md: "1vw" },
                color: "#3d3d3d",
              }}
            >
              View your entire product catalog with images, names, and
              availability. Everything is displayed clearly so you can easily
              check active and inactive products.
            </Typography>
          </Box>
        </Box>

        {/* pencil */}
        <Box
          onMouseEnter={() => setIsSmall((prev) => !prev)}
          sx={{
            width: "200px",
            height: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "transform 0.6s ease",
            transform: isSmall
              ? "rotate(0deg) scale(0.7)"
              : "rotate(23deg) scale(1.05)",
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 450 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transition: "transform 0.6s ease",
              transformOrigin: "center",
            }}
          >
            {/* MAIN SHAPE (RED) */}
            <path
              d="M351.58 615.49c49.58 0 89.77-40.2 89.77-89.78l-.02-312.76a89.75 89.75 0 0 0-28.25-65.37L282.18 24.4c-34.57-32.53-88.49-32.53-123.05 0L28.24 147.6A89.8 89.8 0 0 0 0 212.98l.02 312.76c0 49.58 40.2 89.77 89.78 89.77l261.78-.02Z"
              fill="#FF0033"
            />

            {/* WHITE X */}
            <line
              x1="90"
              y1="150"
              x2="360"
              y2="500"
              stroke="white"
              strokeWidth="40"
              strokeLinecap="round"
            />
            <line
              x1="360"
              y1="150"
              x2="90"
              y2="500"
              stroke="white"
              strokeWidth="40"
              strokeLinecap="round"
            />
          </svg>
        </Box>

     

       

        <Box
          sx={{
            width: { xs: "85vw", sm: "70vw", md: "600px" },
            minWidth: { xs: "85vw", sm: "70vw", md: "600px" },

            borderRadius: "28px",
            position: "relative",
            overflow: "hidden",
            padding: "2px",

            // 🔥 Outer gradient border
            background: "#EEAA1E",

            "&:hover": {
              transform: "translateY(-8px)",
              transition: "0.4s ease",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            },

            transition: "0.4s ease",
          }}
        >
          {/* INNER CARD */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(12px)",
              borderRadius: "26px",
              padding: "28px 32px",
              position: "relative",
            }}
          >
            {/* SHINE EFFECT */}
            <Box
              sx={{
                position: "absolute",
                top: "-40%",
                left: "-20%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 40%)",
                opacity: 0.4,
                pointerEvents: "none",
                transform: "rotate(20deg)",
              }}
            />

            {/* NUMBER BADGE */}
            <Box
              sx={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #000, #333)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                color: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                marginBottom: "20px",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 0, 80, 0.45), transparent 70%)",
                  zIndex: -1,
                  filter: "blur(4px)",
                },
              }}
            >
              10
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                fontWeight: 700,
                color: "#1f1f1f",
              }}
            >
              JioMart Commission Explanation
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                marginTop: "12px",
                lineHeight: 1.7,
                fontSize: { xs: "3.5vw", sm: "2.8vw", md: "1vw" },
                color: "#3d3d3d",
              }}
            >
              Calculate ideal selling prices by entering your manufacturing cost
              and desired profit. Instantly see final earnings after platform
              charges for better pricing decisions.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "85vw", sm: "70vw", md: "600px" },
            minWidth: { xs: "85vw", sm: "70vw", md: "600px" },

            borderRadius: "28px",
            position: "relative",
            overflow: "hidden",
            padding: "2px",

            // 🔥 Outer gradient border
            background: "#7a5ce7ff",

            "&:hover": {
              transform: "translateY(-8px)",
              transition: "0.4s ease",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            },

            transition: "0.4s ease",
          }}
        >
          {/* INNER CARD */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(12px)",
              borderRadius: "26px",
              padding: "28px 32px",
              position: "relative",
            }}
          >
            {/* SHINE EFFECT */}
            <Box
              sx={{
                position: "absolute",
                top: "-40%",
                left: "-20%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 40%)",
                opacity: 0.4,
                pointerEvents: "none",
                transform: "rotate(20deg)",
              }}
            />

            {/* NUMBER BADGE */}
            <Box
              sx={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #000, #333)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                color: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                marginBottom: "20px",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 0, 80, 0.45), transparent 70%)",
                  zIndex: -1,
                  filter: "blur(4px)",
                },
              }}
            >
              11
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                fontWeight: 700,
                color: "#1f1f1f",
              }}
            >
              Image Resizer
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                marginTop: "12px",
                lineHeight: 1.7,
                fontSize: { xs: "3.5vw", sm: "2.8vw", md: "1vw" },
                color: "#3d3d3d",
              }}
            >
              Upload multiple product images and get them automatically
              compressed, resized, and optimized into platform-approved formats
              without any manual work.
            </Typography>
          </Box>
        </Box>

        {/* abstract art */}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Top Arches */}
            <Box
              ref={topabstarctRef}
              sx={{
                position: "relative",
                width: { xs: "200px", sm: "260px", md: "330px" },
                height: { xs: "200px", sm: "260px", md: "330px" },
              }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "absolute",
                    inset: `${i * 7}px`,
                    border: "3px solid #D6553A",
                    borderBottom: "none",
                    borderRadius: "200px 200px 0 0",
                  }}
                />
              ))}
            </Box>

            {/* Space between shapes */}
            <Box sx={{ height: "30px" }} />

            {/* Bottom Arches */}
            <Box
              ref={bottoabstarctmRef}
              sx={{
                position: "relative",
                width: { xs: "200px", sm: "260px", md: "330px" },
                height: { xs: "200px", sm: "260px", md: "330px" },
              }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "absolute",
                    inset: `${i * 7}px`,
                    border: "3px solid #D6553A",
                    borderTop: "none",
                    borderRadius: "0 0 200px 200px",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "85vw", sm: "70vw", md: "600px" },
            minWidth: { xs: "85vw", sm: "70vw", md: "600px" },

            borderRadius: "28px",
            position: "relative",
            overflow: "hidden",
            padding: "2px 2px 2px 2px",

            // 🔥 Outer gradient border
            background: "#EEE8E0",

            "&:hover": {
              transform: "translateY(-8px)",
              transition: "0.4s ease",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            },

            transition: "0.4s ease",
          }}
        >
          {/* INNER CARD */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(12px)",
              borderRadius: "26px",
              padding: "28px 32px",
              position: "relative",
            }}
          >
            {/* SHINE EFFECT */}
            <Box
              sx={{
                position: "absolute",
                top: "-40%",
                left: "-20%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 40%)",
                opacity: 0.4,
                pointerEvents: "none",
                transform: "rotate(20deg)",
              }}
            />

            {/* NUMBER BADGE */}
            <Box
              sx={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #000, #333)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                color: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                marginBottom: "20px",
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 0, 80, 0.45), transparent 70%)",
                  zIndex: -1,
                  filter: "blur(4px)",
                },
              }}
            >
              12
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: "5vw", sm: "3.5vw", md: "1.8vw" },
                fontWeight: 700,
                color: "#1f1f1f",
              }}
            >
              Trademark Approval
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                marginTop: "12px",
                lineHeight: 1.7,
                fontSize: { xs: "3.5vw", sm: "2.8vw", md: "1vw" },
                color: "#3d3d3d",
              }}
            >
              Submit your business details and documents to apply for trademark
              approval. The process becomes simple, fast, and organized, helping
              you meet platform requirements easily.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Servicase heading */}
      <Box
        sx={{
          color: "white",
          padding: "50px",
          fontSize: { xs: "6vw", sm: "4.5vw", md: "2vw" },

          fontFamily: "beardeys",
        }}
      >
        Servicase
      </Box>

      {/* flower */}
      <Box sx={{ position: "absolute", top: "10%", right: "10%" }}>
        <Box
          ref={flowerslider}
          sx={{
            width: "130px", // change size here
            aspectRatio: "1",
            background: "#FF8ACB", // flower color
            "--g":
              "/20.56% 20.56% radial-gradient(#000 calc(71% - 1px), #0000 71%) no-repeat",
            mask: `
          100% 50% var(--g),
          93.301% 75% var(--g),
          75% 93.301% var(--g),
          50% 100% var(--g),
          25% 93.301% var(--g),
          6.699% 75% var(--g),
          0% 50% var(--g),
          6.699% 25% var(--g),
          25% 6.699% var(--g),
          50% 0% var(--g),
          75% 6.699% var(--g),
          93.301% 25% var(--g),
          radial-gradient(100% 100%,#000 38.366%,#0000 calc(38.366% + 1px))
        `,
            WebkitMask: `
          100% 50% var(--g),
          93.301% 75% var(--g),
          75% 93.301% var(--g),
          50% 100% var(--g),
          25% 93.301% var(--g),
          6.699% 75% var(--g),
          0% 50% var(--g),
          6.699% 25% var(--g),
          25% 6.699% var(--g),
          50% 0% var(--g),
          75% 6.699% var(--g),
          93.301% 25% var(--g),
          radial-gradient(100% 100%,#000 38.366%,#0000 calc(38.366% + 1px))
        `,
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: { xs: "72%", sm: "65%", md: "60%" },
          left: { xs: "2%", sm: "5%", md: "10%" },
          zIndex: 0,
        }}
      >
        <Box
          ref={arcRef}
          sx={{
            "--b": { xs: "6px", md: "10px" },
            "--a": "140deg",

            width: { xs: "120px", sm: "180px", md: "260px" },
            aspectRatio: "1",
            padding: "var(--b)",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #c0d860, #8ad23d)",

            "--_g": `/var(--b) var(--b) no-repeat
            radial-gradient(50% 50%, #000 97%, #0000)`,

            mask: `
        top var(--_g),
        calc(50% + 50%*sin(var(--a)))
          calc(50% - 50%*cos(var(--a))) var(--_g),
        linear-gradient(#0000 0 0) content-box intersect,
        conic-gradient(#000 var(--a), #0000 0)
      `,
            WebkitMask: `
        top var(--_g),
        calc(50% + 50%*sin(var(--a)))
          calc(50% - 50%*cos(var(--a))) var(--_g),
        linear-gradient(#0000 0 0) content-box intersect,
        conic-gradient(#000 var(--a), #0000 0)
      `,

            filter: "drop-shadow(0 0 12px rgba(0,255,90,0.6))",
            transition: "0.3s ease",
          }}
        />
      </Box>

      <Box>
        <Box
          ref={gridRef}
          sx={{
            "--s": "80px", // grid size
            "--n": "4", // granularity
            "--t": "2px", // dash thickness
            "--g": "10px", // gap between dash

            "--c": "#556270 25%, #0000 0",

            background: `
          conic-gradient(at var(--g) var(--t), var(--c))
            calc((var(--s)/var(--n) - var(--g) + var(--t))/2) 0/
            calc(var(--s)/var(--n)) var(--s),
          conic-gradient(from 180deg at var(--t) var(--g), var(--c))
            0 calc((var(--s)/var(--n) - var(--g) + var(--t))/2)/
            var(--s) calc(var(--s)/var(--n))
        `,

            width: "calc(round(down, 100%, var(--s)) + var(--t))",
            height: "calc(4*var(--s) + var(--t))",

            // Optional styling
            borderRadius: "8px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          }}
        />
      </Box>


      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          zIndex: "222",
        }}
      >
        <Button
          component={Link}
          to="/payment"
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #6E00FF 0%, #9D4DFF 100%)",
            color: "#fff",
            fontSize: { xs: "3.5vw", sm: "2vw", md: "1.2vw" },
            padding: { xs: "10px 22px", sm: "12px 28px", md: "14px 34px" },
            borderRadius: "50px",
            fontWeight: 600,
            letterSpacing: "1px",
            boxShadow: "0 8px 20px rgba(110,0,255,0.3)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 12px 28px rgba(110,0,255,0.45)",
              background: "linear-gradient(135deg, #7F1CFF 0%, #B279FF 100%)",
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HorizontalCards;
