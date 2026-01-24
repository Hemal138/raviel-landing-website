import { Box } from "@mui/material";
import React from "react";
import hoemvideo1 from "../../assets/images/home/videos/alien.mp4";
import hoemvideo2 from "../../assets/images/home/videos/angry.mp4";
import hoemvideo3 from "../../assets/images/home/videos/blue.mp4";
import hoemvideo4 from "../../assets/images/home/videos/cat-fire.mp4";
import hoemvideo5 from "../../assets/images/home/videos/cat.mp4";
import hoemvideo6 from "../../assets/images/home/videos/cofee.mp4";
import hoemvideo7 from "../../assets/images/home/videos/dishes.mp4";
import hoemvideo8 from "../../assets/images/home/videos/feelings.mp4";
import hoemvideo9 from "../../assets/images/home/videos/friends.mp4";
import hoemvideo10 from "../../assets/images/home/videos/girl.mp4";
import hoemvideo11 from "../../assets/images/home/videos/hand-wash.mp4";
import hoemvideo12 from "../../assets/images/home/videos/happy.mp4";
import hoemvideo13 from "../../assets/images/home/videos/plants.mp4";
import hoemvideo14 from "../../assets/images/home/videos/work.mp4";

const HomeTrusted = () => {
  return (
    <>
      <Box sx={{ overflow: "hidden", fontFamily: "stack" }}>
        {/* top */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "20px"
          }}
        >
          {/* COLUMN 1 */}
          <Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo1} autoPlay loop muted playsInline style={styles.video} />
            </Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo2} autoPlay loop muted playsInline style={styles.video} />
            </Box>

          </Box>

          {/* COLUMN 2 */}
          <Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo4} autoPlay loop muted playsInline style={styles.video} />
            </Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo5} autoPlay loop muted playsInline style={styles.video} />
            </Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <Box sx={{ ...styles.socialBox, bgcolor: "#83FFC1" }}>
                Twitter
              </Box>
            </Box>
          </Box>

          {/* COLUMN 3 */}
          <Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <Box
                component="a"
                href="https://www.instagram.com/raviel.in/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  ...styles.socialBox,
                  bgcolor: "#FCE78D",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Instagram
              </Box>

            </Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo7} autoPlay loop muted playsInline style={styles.video} />
            </Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo3} autoPlay loop muted playsInline style={styles.video} />
            </Box>
          </Box>

          {/* COLUMN 4 */}
          <Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo12} autoPlay loop muted playsInline style={styles.video} />
            </Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo10} autoPlay loop muted playsInline style={styles.video} />
            </Box>
          </Box>

          {/* COLUMN 5 */}

          <Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <Box
                component="a"
                href="https://wa.me/916354310766?text=Hello%20I%20visited%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  ...styles.socialBox,
                  bgcolor: "#F8A5D1",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                WhatsApp
              </Box>

            </Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo14} autoPlay loop muted playsInline style={styles.video} />
            </Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo1} autoPlay loop muted playsInline style={styles.video} />
            </Box>
          </Box>

          {/* COLUMN 6 */}
          <Box>

            <Box sx={{ ...styles.mianboxcss }}>
              {/* FIXED TYPO hoemvide11 → hoemvideo11 */}
              <video src={hoemvideo11} autoPlay loop muted playsInline style={styles.video} />
            </Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo6} autoPlay loop muted playsInline style={styles.video} />
            </Box>
          </Box>

          {/* COLUMN 7 */}
          <Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo13} autoPlay loop muted playsInline style={styles.video} />
              <Box sx={{ ...styles.mianboxcss }}>
              </Box>
              <video src={hoemvideo5} autoPlay loop muted playsInline style={styles.video} />
            </Box>

            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo8} autoPlay loop muted playsInline style={styles.video} />
            </Box>

          </Box>

          {/* COLUMN 8 */}
          <Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <video src={hoemvideo9} autoPlay loop muted playsInline style={styles.video} />
            </Box>
            <Box sx={{ ...styles.mianboxcss }}>
              <Box sx={{ ...styles.socialBox, bgcolor: "#83FFC1" }}>
                linkedin
              </Box>
            </Box>
          </Box>
        </Box>


        {/* bottom text */}
        <Box></Box>
      </Box>
    </>
  );
};

const styles = {
  mianboxcss: {
    width: { xs: "120px", sm: "150px", md: "180px", lg: "200px", xl: "200px" }
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
    margin: "10px"
  },
  socialBox: {
    height: {
      xs: "120px",   // mobile
      sm: "150px",   // small screens
      md: "180px",   // tablets
      lg: "200px",   // laptops
      xl: "220px",   // big screens
    },
    width: "100%",
    fontSize: {
      xs: "12px",   // mobile
      sm: "14px",   // small screen
      md: "16px",   // tablet
      lg: "1.2vw",  // large screens use vw
      xl: "1.1vw",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    objectFit: "cover",
    margin: "10px"
  },
};

export default HomeTrusted;
