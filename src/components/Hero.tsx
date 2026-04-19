import { GitHub, LinkedIn, Mail, KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Backend Architect",
  "System Designer",
  "Full-Stack Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length)
          setTimeout(() => setIsDeleting(true), 1800);
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        // bgcolor: "#050A14",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,122,255,0.15), transparent)`,
        },
      }}
    >
      {/* Subtle dot grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "radial-gradient(circle, #60A5FA 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Available badge */}
        <Chip
          label={
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#22C55E",
                  boxShadow: "0 0 8px #22C55E",
                  animation: "pulse 2s infinite",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  letterSpacing: 1,
                  color: "#22C55E",
                  fontSize: "0.7rem",
                }}
              >
                OPEN TO FULL-TIME ROLES
              </Typography>
            </Stack>
          }
          sx={{
            mb: 4,
            bgcolor: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.25)",
            height: 36,
            px: 1,
          }}
        />

        {/* Sub-label */}
        <Typography
          variant="overline"
          sx={{
            color: "#949596",
            letterSpacing: "0.25em",
            display: "block",
            mb: 2,
            fontSize: "0.85rem",
          }}
        >
          Sagar Hasan — Software Engineer
        </Typography>

        {/* Typewriter headline */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
            fontWeight: 700,
            fontSize: { xs: "2.4rem", md: "4rem" },
            lineHeight: 1.1,
            color: "#F9FAFB",
            mb: 1,
            minHeight: { xs: "3rem", md: "5rem" },
          }}
        >
          {displayText}
          <Box
            component="span"
            sx={{ color: "#007AFF", animation: "blink 1s step-end infinite" }}
          >
            |
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#9CA3AF",
            fontSize: "1.1rem",
            maxWidth: 560,
            mx: "auto",
            mb: 5,
            lineHeight: 1.7,
          }}
        >
          Building scalable, reliable systems — from production platforms to
          open-source engineering tools.{" "}
          <Box component="span" sx={{ color: "#60A5FA" }}>
            2+ years of full-stack software engineering
          </Box>{" "}
          with three production applications (real-time lobby finder, language practice
          platform, file processing tools).
        </Typography>

        {/* Stats row */}
        <Stack
          direction="row"
          sx={{ gap: 5, justifyContent: "center", flexWrap: "wrap", mb: 6 }}
        >
          {[
            { v: "2+", l: "Years Experience" },
            { v: "1500+", l: "DSA Problems Solved" },
            { v: "20+", l: "LeetCode Badges" },
            { v: "3+", l: "Production Apps" },
            { v: "1", l: "NPM Package" },
          ].map((s) => (
            <Box
              key={s.l}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  color: "#007AFF",
                  fontFamily: '"SF Pro Display", sans-serif',
                }}
              >
                {s.v}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "#6B7280",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s.l}
              </Typography>
            </Box>
          ))}
        </Stack>

        {/* CTA Buttons */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", flexWrap: "wrap", mb: 5 }}
        >
          <Button
            href="#contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#007AFF",
              color: "#fff",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              fontSize: "0.9rem",
              letterSpacing: "0.02em",
              "&:hover": {
                bgcolor: "#0066DD",
                boxShadow: "0 0 24px rgba(0,122,255,0.4)",
              },
              transition: "all 0.2s",
            }}
          >
            Hire Me
          </Button>
          <Button
            href="#projects"
            variant="outlined"
            size="large"
            sx={{
              borderColor: "rgba(255,255,255,0.12)",
              color: "#D1D5DB",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              fontSize: "0.9rem",
              "&:hover": {
                borderColor: "rgba(255,255,255,0.3)",
                bgcolor: "rgba(255,255,255,0.04)",
              },
            }}
          >
            View Projects
          </Button>
        </Stack>

        {/* Socials */}
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
          {[
            {
              icon: <GitHub />,
              href: "https://github.com/sagarhasan273",
              label: "GitHub",
            },
            {
              icon: <LinkedIn />,
              href: "https://linkedin.com/in/sagar-hasan-677b5b1ba",
              label: "LinkedIn",
            },
            {
              icon: <Mail />,
              href: "mailto:sagarhasan273@gmail.com",
              label: "Email",
            },
          ].map(({ icon, href, label }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                color: "#4B5563",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                p: 1.2,
                "&:hover": {
                  color: "#007AFF",
                  borderColor: "rgba(0,122,255,0.4)",
                  bgcolor: "rgba(0,122,255,0.06)",
                },
                transition: "all 0.2s",
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounceY 1.5s ease-in-out infinite",
        }}
      >
        <KeyboardArrowDown sx={{ color: "#374151", fontSize: 28 }} />
      </Box>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.3)} }
        @keyframes bounceY { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
      `}</style>
    </Box>
  );
}
