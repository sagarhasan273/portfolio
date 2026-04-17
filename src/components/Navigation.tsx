import { useState, useEffect } from "react";
import {
  AppBar, Box, Button, Drawer, IconButton, List, ListItemButton,
  ListItemText, Stack, Toolbar, Typography,
} from "@mui/material";
import { Menu, Close, Download } from "@mui/icons-material";
import resume from "../assets/resume/Sagar_Hasan_Software_Engineer_Exp_2yrs+.pdf";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href === "#home" ? "body" : href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(href);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(5,10,20,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%", px: { xs: 2, md: 4 }, py: 0.5 }}>
          {/* Logo */}
          <Typography
            component="button"
            onClick={() => scrollTo("#home")}
            sx={{
              fontWeight: 700, fontSize: "1.25rem", color: "#F9FAFB",
              background: "none", border: "none", cursor: "pointer", p: 0,
              fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
              "&:hover": { color: "#007AFF" }, transition: "color 0.2s",
            }}
          >
            SH<Box component="span" sx={{ color: "#007AFF" }}>.</Box>
          </Typography>

          {/* Desktop nav */}
          <Stack direction="row" spacing={0.5} alignItems="center" sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                sx={{
                  color: active === item.href ? "#007AFF" : "#9CA3AF",
                  fontSize: "0.875rem", fontWeight: 500, px: 1.5, py: 1,
                  borderRadius: "8px", textTransform: "none", minWidth: "auto",
                  bgcolor: active === item.href ? "rgba(0,122,255,0.08)" : "transparent",
                  "&:hover": { color: "#F9FAFB", bgcolor: "rgba(255,255,255,0.04)" },
                  transition: "all 0.15s",
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              component="a"
              href={resume}
              download
              variant="contained"
              startIcon={<Download sx={{ fontSize: 16 }} />}
              sx={{
                ml: 1.5, bgcolor: "#007AFF", color: "#fff", fontWeight: 600,
                fontSize: "0.8rem", px: 2.5, py: 1, borderRadius: "10px",
                textTransform: "none",
                "&:hover": { bgcolor: "#0066DD", boxShadow: "0 0 18px rgba(0,122,255,0.35)" },
                transition: "all 0.2s",
              }}
            >
              Resume
            </Button>
          </Stack>

          {/* Mobile icons */}
          <Stack direction="row" alignItems="center" spacing={1} sx={{ ml: "auto", display: { md: "none" } }}>
            <IconButton component="a" href={resume} download sx={{ color: "#9CA3AF", p: 1 }}>
              <Download fontSize="small" />
            </IconButton>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "#9CA3AF" }}>
              <Menu />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, bgcolor: "#0A0F1E", borderLeft: "1px solid rgba(255,255,255,0.07)" } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#6B7280" }}>
            <Close />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.href}
              onClick={() => scrollTo(item.href)}
              sx={{
                borderRadius: "10px", mb: 0.5,
                color: active === item.href ? "#007AFF" : "#9CA3AF",
                bgcolor: active === item.href ? "rgba(0,122,255,0.08)" : "transparent",
                "&:hover": { bgcolor: "rgba(255,255,255,0.04)", color: "#F9FAFB" },
              }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: "0.95rem", fontWeight: 500 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}