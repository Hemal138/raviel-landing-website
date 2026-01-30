import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useRef } from "react";
import navbarLogo from "../../assets/images/logos/png.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Refs for GSAP
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef([]);
  const iconRef = useRef(null);

  // ✅ ONLY CHANGE: clean + lowercase URLs
  const menuItems = [
    { label: "HOME", link: "/" },
    { label: "ABOUT US", link: "/about" },
    { label: "SERVICES", link: "/services" },
    { label: "LEARN", link: "/learn" },
    { label: "CONTACT US", link: "/contact" },
    { label: "START", link: "/payment", isButton: true },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    tl.from(navRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from(
      logoRef.current,
      {
        opacity: 0,
        x: -40,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.3"
    );

    tl.from(
      menuRef.current.filter(Boolean),
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.25,
        duration: 10,
        delay: 5,
        ease: "power3.out",
      },
      "-=0.2"
    );

    tl.from(
      iconRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <>
      {/* ✅ SEMANTIC NAV TAG (UI SAME) */}
      <Box
        component="nav"
        ref={navRef}
        sx={{
          fontFamily: "stack",
          width: "100%",
          padding: { xs: "5vw 6vw", sm: "4vw 5vw", md: "2vw 3vw" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1000,
          backgroundColor: "transparent",
        }}
      >
        {/* ✅ LOGO WITH HOME LINK */}
        <Box sx={{ width: "300px", userSelect: "none" }} ref={logoRef}>
          <a href="/" aria-label="Raviel Home">
            <img src={navbarLogo} alt="Raviel Logo" />
          </a>
        </Box>

        {/* DESKTOP MENU (UNCHANGED UI) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "80px",
            fontSize: "1.1vw",
            color: "#333",
            fontWeight: 500,
            alignItems: "center",
          }}
        >
          {menuItems.map((item, i) => (
            <a
              key={item.label}
              href={item.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                ref={(el) => (menuRef.current[i] = el)}
                sx={{
                  px: item.isButton ? "22px" : 0,
                  py: item.isButton ? "10px" : 0,
                  borderRadius: item.isButton ? "999px" : 0,
                  backgroundColor: item.isButton ? "#000" : "transparent",
                  color: item.isButton ? "#fff" : "inherit",
                  fontWeight: item.isButton ? 600 : 500,
                  transition: "0.3s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    backgroundColor: item.isButton ? "#111" : "transparent",
                  },
                }}
              >
                {item.label}
              </Box>
            </a>
          ))}
        </Box>

        {/* MOBILE ICON */}
        <IconButton
          ref={iconRef}
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon
            sx={{
              fontSize: {
                xs: "6vw",
                sm: "4.5vw",
                md: "3vw",
                lg: "2vw",
                xl: "1.6vw",
              },
            }}
          />
        </IconButton>

        {/* MOBILE DRAWER (UNCHANGED UI) */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: "70vw", padding: "30px" }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>

            <List sx={{ mt: 2 }}>
              {menuItems.map((item) => (
                <a key={item.label} href={item.link}>
                  <ListItem button onClick={() => setOpen(false)}>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
