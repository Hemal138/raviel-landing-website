import { Box } from "@mui/material";
import React, { useRef } from "react";
import homecardimgline from "../../assets/images/home/Line 5.png";
import homecard1 from "../../assets/images/home/card/Group.png";
import homecard2 from "../../assets/images/home/card/undraw_active-support_v6g0 1.png";
import homecard3 from "../../assets/images/home/card/undraw_in-no-time_ax6n 1.png";
import homecard4 from "../../assets/images/home/card/undraw_wallet_diag 1.png";
import homecard5 from "../../assets/images/home/card/undraw_respond_o54z 1.png";
import homecard6 from "../../assets/images/home/card/undraw_bull-market_4a8e 1.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeCard = () => {
  const whytext = useRef(null);
  const whyline = useRef(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  // const card6Ref = useRef(null)
  const wrapperRef = useRef(null);

  useGSAP(() => {
    // TEXT SCROLL ANIMATION
    gsap.from(whytext.current, {
      x: -600,
      scrollTrigger: {
        trigger: whytext.current,
        start: "top 70%",
        end: "top 10%",
        scrub: true,
      },
    });

    const tl = gsap.timeline({
  scrollTrigger: {
      trigger: wrapperRef.current,
      start: "top top",
      end: () => "+=" + wrapperRef.current.offsetHeight * 8, // ⭐ AUTO PIN LENGTH
      scrub: true,
      pin: true,
      markers: false,
  },
    });

    // card 3 moving
    tl.to(card1Ref.current, { y: -500, opacity: 0, duration: 2 });
    tl.to(card2Ref.current, { y: -500, opacity: 0, duration: 2 });
    tl.to(card3Ref.current, { y: -500, opacity: 0, duration: 2 });
    tl.to(card4Ref.current, { y: -500, opacity: 0, duration: 2 });
    tl.to(card5Ref.current, { y: -500, opacity: 0, duration: 2 });
    // tl.to(card6Ref.current, { y: -500, opacity: 0, duration: 2 });
  });

  return (
    <Box sx={{ position: "relative" }}>
      {/* WHY TEXT SECTION */}
      <Box
        sx={{
          paddingTop: {
            xs: "50px", // mobile
            sm: "15px", // tablet
            md: "2vw", // laptop/desktop (your original)
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "14px", // mobile
              sm: "18px", // tablet
              md: "20px", // laptop
              lg: "20px", // desktop
            },
            zIndex: 2,
          }}
          ref={whyline}
        >
          <img src={homecardimgline} alt="" />
        </Box>

        <Box sx={{ overflow: "hidden", marginLeft: "10px" }}>
          <Box
            ref={whytext}
            sx={{
              textAlign: "center",
              padding: "20px",
              fontSize: {
                xs: "6vw", // mobile
                sm: "4.5vw", // tablet
                md: "3vw", // laptop
                lg: "2.5vw", // desktop
              },
              letterSpacing: "3px",
              fontFamily: "beardeys",
              whiteSpace: "nowrap",
            }}
          >
            Why choose us
          </Box>
        </Box>
      </Box>

      {/* CARD STACK */}
      <Box
        ref={wrapperRef}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "stack",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          {/* CARD 1 */}
          <Box
            ref={card1Ref}
            sx={{
              backgroundColor: "#EFE9E2",
              border: "10px solid #EEAA1E",
              borderRadius: "50px",
              padding: "30px 50px",
              textAlign: "center",
              position: "relative",
              zIndex: 5,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-5deg)",
              width: {
                xs: "85%", // mobile (full width)
                sm: "75%", // tablet
                md: "500px", // laptop
                lg: "550px", // large desktop (optional)
              },
            }}
          >
            <Box sx={{ width: "250px", margin: "auto" }}>
              <img src={homecard1} alt="" />
            </Box>
            <Box
              sx={{
                padding: "20px 0",
                fontSize: {
                  xs: "5vw", // mobile
                  sm: "3.5vw", // tablet
                  md: "1.8vw", // laptop/desktop (your original)
                },
                fontWeight: "bold",
              }}
            >
              100% Verified & Secure Setup
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: "3.5vw", // mobile
                  sm: "2.5vw", // tablet
                  md: "1vw", // laptop/desktop (your original)
                },
              }}
            >
              Safe. Verified. Compliant.
            </Box>
          </Box>

          {/* CARD 2 */}
          <Box
            ref={card2Ref}
            sx={{
              backgroundColor: "#EFE9E2",
              border: "10px solid #A699F9",
              borderRadius: "50px",
              padding: "30px 50px",
              textAlign: "center",
              position: "absolute",
              zIndex: 4,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(5deg)",
              width: {
                xs: "85%", // mobile (full width)
                sm: "75%", // tablet
                md: "500px", // laptop
                lg: "550px", // large desktop (optional)
              },
            }}
          >
            <Box sx={{ width: "250px", margin: "auto" }}>
              <img src={homecard2} alt="" />
            </Box>
            <Box
              sx={{
                padding: "20px 0",
                fontSize: {
                  xs: "5vw", // mobile
                  sm: "3.5vw", // tablet
                  md: "1.8vw", // laptop/desktop (your original)
                },
                fontWeight: "bold",
              }}
            >
              24×7 Seller Support Team
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: "3.5vw", // mobile
                  sm: "2.5vw", // tablet
                  md: "1vw", // laptop/desktop (your original)
                },
              }}
            >
              Always here when you need help.
            </Box>
          </Box>

          {/* CARD 3 */}
          <Box
            ref={card3Ref}
            sx={{
              backgroundColor: "#EFE9E2",
              border: "10px solid #F16454",
              borderRadius: "50px",
              padding: "30px 50px",
              textAlign: "center",
              position: "absolute",
              zIndex: 3,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-5deg)",
              width: {
                xs: "85%", // mobile (full width)
                sm: "75%", // tablet
                md: "500px", // laptop
                lg: "550px", // large desktop (optional)
              },
            }}
          >
            <Box sx={{ width: "250px", margin: "auto" }}>
              <img src={homecard3} alt="" />
            </Box>
            <Box
              sx={{
                padding: "20px 0",
                fontSize: {
                  xs: "5vw", // mobile
                  sm: "3.5vw", // tablet
                  md: "1.8vw", // laptop/desktop (your original)
                },
                fontWeight: "bold",
              }}
            >
              Quick Onboarding — Start in 24 hours
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: "3.5vw", // mobile
                  sm: "2.5vw", // tablet
                  md: "1vw", // laptop/desktop (your original)
                },
              }}
            >
              Fast setup, zero hassle.
            </Box>
          </Box>

          {/* CARD 4 */}
          <Box
            ref={card4Ref}
            sx={{
              backgroundColor: "#EFE9E2",
              border: "10px solid #EEAA1E",
              borderRadius: "50px",
              padding: "30px 50px",
              textAlign: "center",
              position: "absolute",
              zIndex: 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-7deg)",
              width: {
                xs: "85%", // mobile (full width)
                sm: "75%", // tablet
                md: "500px", // laptop
                lg: "550px", // large desktop (optional)
              },
            }}
          >
            <Box sx={{ width: "250px", margin: "auto" }}>
              <img src={homecard4} alt="" />
            </Box>
            <Box
              sx={{
                padding: "20px 0",
                fontSize: {
                  xs: "5vw", // mobile
                  sm: "3.5vw", // tablet
                  md: "1.8vw", // laptop/desktop (your original)
                },
                fontWeight: "bold",
              }}
            >
              Affordable Packages
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: "3.5vw", // mobile
                  sm: "2.5vw", // tablet
                  md: "1vw", // laptop/desktop (your original)
                },
              }}
            >
              Get premium service at the best price.
            </Box>
          </Box>

          {/* CARD 5 */}
          <Box
            ref={card5Ref}
            sx={{
              backgroundColor: "#EFE9E2",
              border: "10px solid #6C63FF",
              borderRadius: "50px",
              padding: "30px 50px",
              textAlign: "center",
              position: "absolute",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-10deg)",
              width: {
                xs: "85%", // mobile (full width)
                sm: "75%", // tablet
                md: "500px", // laptop
                lg: "550px", // large desktop (optional)
              },
            }}
          >
            <Box sx={{ width: "250px", margin: "auto" }}>
              <img src={homecard5} alt="" />
            </Box>
            <Box
              sx={{
                padding: "20px 0",
                fontSize: {
                  xs: "5vw", // mobile
                  sm: "3.5vw", // tablet
                  md: "1.8vw", // laptop/desktop (your original)
                },
                fontWeight: "bold",
              }}
            >
              Friendly Dashboard
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: "3.5vw", // mobile
                  sm: "2.5vw", // tablet
                  md: "1vw", // laptop/desktop (your original)
                },
              }}
            >
              Manage your business anywhere.
            </Box>
          </Box>

          {/* CARD 6 */}
          <Box
          // ref = {card6Ref}
            sx={{
              backgroundColor: "#EFE9E2",
              border: "10px solid #F16454",
              borderRadius: "50px",
              padding: "30px 50px",
              textAlign: "center",
              position: "absolute",
              zIndex: 0,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(0deg)",
              width: {
                xs: "85%", // mobile (full width)
                sm: "75%", // tablet
                md: "500px", // laptop
                lg: "550px", // large desktop (optional)
              },
            }}
          >
            <Box sx={{ width: "250px", margin: "auto" }}>
              <img src={homecard6} alt="" />
            </Box>
            <Box
              sx={{
                padding: "20px 0",
                fontSize: {
                  xs: "5vw", // mobile
                  sm: "3.5vw", // tablet
                  md: "1.8vw", // laptop/desktop (your original)
                },
                fontWeight: "bold",
              }}
            >
              Business Growth Guidance
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: "3.5vw", // mobile
                  sm: "2.5vw", // tablet
                  md: "1vw", // laptop/desktop (your original)
                },
              }}
            >
              Boost Sales, Grow Smartly
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCard;
