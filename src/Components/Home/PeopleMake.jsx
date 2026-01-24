import { Box } from "@mui/material";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import home2star1 from "../../assets/images/home/Star 1.png";
import home2img2 from "../../assets/images/home/Vector 1.png";
import home2star3 from "../../assets/images/home/Group 7.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PeopleMake = () => {
  const starRef1 = useRef(null);
  const starRef2 = useRef(null);
  const home2img2Ref = useRef(null);
  const home2part1 = useRef(null);
  const home2part2 = useRef(null);
  const home2part3 = useRef(null);

  const containerRef = useRef(null);

  const handleEnter = () => {
    gsap.to(home2img2Ref.current, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(home2img2Ref.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    gsap.to(starRef1.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(starRef2.current, {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: "linear",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top -10%",
        end: "+=200%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    tl.from(home2part1.current, { opacity: 0, y: 50, duration: 1 })
      .from(home2part2.current, { opacity: 0, y: 50, duration: 1 })
      .from(home2part3.current, { opacity: 0, y: 50, duration: 1 })
      .from(starRef2.current, {
        opacity: 0,
        scale: 0.5,
        y: 50,
        duration: 1,
      });
  }, []);

  return (
    <Box sx={{ backgroundColor: "#EFE9E2", overflow: "hidden" }}>
      <Box
        ref={containerRef}
        sx={{
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            px: { xs: 2, sm: 4, md: 0 }, // mobile padding
          }}
        >
          <Box
            sx={{
              fontSize: {
                xs: "14vw", // mobile large text
                sm: "10vw", // tablet
                md: "8vw", // desktop (same as before)
              },
              fontFamily: "beardeys",
              fontWeight: "bolder",
              letterSpacing: {
                xs: "3px",
                sm: "6px",
                md: "10px",
              },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* FIRST TEXT */}
            <Box
              ref={home2part1}
              sx={{
                transform: { xs: "rotate(-5deg)", md: "rotate(-15deg)" },
                padding: "10px",
              }}
            >
              <img
                ref={starRef1}
                src={home2star1}
                style={{
                  width: "150px",
                  maxWidth: "25vw", // responsive limit
                  padding:"5px"
                }}
                alt=""
              />
              People
            </Box>

            {/* SECOND TEXT */}
            <Box
              ref={home2part2}
              sx={{
                padding: {
                  xs: "10px 0",
                  sm: "10px 0",
                  md: "10px 10px 10px 200px", // desktop original unchanged
                },
              }}
            >
              <img
                ref={home2img2Ref}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                src={home2img2}
                style={{
                  width: "clamp(120px, 25vw, 250px)", // smooth responsive width
                  height: "auto",
                  objectFit: "contain",
                }}
                alt=""
              />{" "}
              Make
            </Box>

            {/* THIRD TEXT */}
            <Box
              ref={home2part3}
              sx={{
                padding: "10px",
                transform: { xs: "rotate(0deg)", md: "rotate(3deg)" },
              }}
            >
              BUSINESSES
            </Box>

            {/* FLOATING STAR */}
<Box
  sx={{
    position: "absolute",

    top: {
      xs: "clamp(120px, 25vh, 220px)",
      sm: "300px",
      md: "170px",
      lg: "100px",
    },

    right: {
      xs: "0px",
      sm: "100px",
      md: "170px",
      lg: "200px",
    },

    width: { xs: "100px", sm: "150px", md: "auto" },

    // 🔴 HIDE ABOVE 1500px
    "@media (min-width:1500px)": {
      display: "none",
    },
  }}
>
  <img
    ref={starRef2}
    src={home2star3}
    style={{ width: "100%" }}
    alt=""
  />
</Box>

          </Box>
        </Box>
      </Box>

              
    </Box>
  );
};

export default PeopleMake;
