import {
  Box, Button, Container, Grid,  InputBase,
  Paper, Stack, Typography,
} from "@mui/material";
import { GitHub, LinkedIn, Mail, LocationOn, ArrowForward, Send } from "@mui/icons-material";
import { useState } from "react";

const contacts = [
  { icon: Mail, label: "Email", value: "sagarhasan273@gmail.com", href: "mailto:sagarhasan273@gmail.com", color: "#007AFF" },
  { icon: GitHub, label: "GitHub", value: "github.com/sagarhasan273", href: "https://github.com/sagarhasan273", color: "#9CA3AF" },
  { icon: LinkedIn, label: "LinkedIn", value: "linkedin.com/in/sagar-hasan-677b5b1ba", href: "https://linkedin.com/in/sagar-hasan-677b5b1ba", color: "#0A66C2" },
  { icon: LocationOn, label: "Location", value: "Dhaka, Bangladesh", href: null, color: "#6B7280" },
];

const inputSx = {
  px: 2, py: 1.5, borderRadius: "12px", fontSize: "0.875rem",
  bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
  color: "#D1D5DB",
  "& input, & textarea": { color: "#D1D5DB", "&::placeholder": { color: "#4B5563" } },
  "&:focus-within": { border: "1px solid rgba(0,122,255,0.5)", bgcolor: "rgba(0,122,255,0.03)" },
  transition: "all 0.2s",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <Box
      id="contact"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "#050A14", position: "relative", overflow: "hidden" }}
    >
      <Box sx={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,122,255,0.06), transparent 70%)",
        pointerEvents: "none",
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "#007AFF", letterSpacing: "0.2em", fontWeight: 700 }}>
            Get In Touch
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700, color: "#F9FAFB", mt: 1,
              fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Let's work together
          </Typography>
          <Typography sx={{ color: "#6B7280", mt: 1.5, fontSize: "1rem", maxWidth: 460, mx: "auto" }}>
            Open to full-time opportunities, interesting projects, or just a conversation about tech.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Left */}
          <Grid item xs={12} md={5}>
            <Typography sx={{ color: "#9CA3AF", lineHeight: 1.8, fontSize: "0.9rem", mb: 4 }}>
              I'm actively seeking full-time opportunities where I can contribute to impactful, scalable projects.
              I bring 2+ years of professional engineering experience, having built systems from the ground up — including
              Talk2Active, now serving{" "}
              <Box component="span" sx={{ color: "#007AFF", fontWeight: 600 }}>50,000+ active users</Box>.
            </Typography>

            <Stack spacing={1.5}>
              {contacts.map(({ icon: Icon, label, value, href, color }) => {
                const inner = (
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{
                      p: 2, borderRadius: "12px",
                      bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                      cursor: href ? "pointer" : "default",
                      transition: "all 0.2s",
                      ...(href ? {
                        "&:hover": {
                          border: "1px solid rgba(0,122,255,0.25)",
                          bgcolor: "rgba(0,122,255,0.04)",
                        },
                      } : {}),
                    }}
                  >
                    <Box
                      sx={{
                        width: 38, height: 38, borderRadius: "9px", flexShrink: 0,
                        bgcolor: "rgba(255,255,255,0.04)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <Icon sx={{ fontSize: 18, color }} />
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography sx={{ fontSize: "0.68rem", color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {label}
                      </Typography>
                      <Typography sx={{ fontSize: "0.82rem", color: "#D1D5DB", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {value}
                      </Typography>
                    </Box>
                    {href && <ArrowForward sx={{ fontSize: 14, color: "#4B5563", flexShrink: 0 }} />}
                  </Stack>
                );

                return href ? (
                  <Box
                    key={label}
                    component="a"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    sx={{ textDecoration: "none", display: "block" }}
                  >
                    {inner}
                  </Box>
                ) : (
                  <Box key={label}>{inner}</Box>
                );
              })}
            </Stack>
          </Grid>

          {/* Right: Form */}
          <Grid item xs={12} md={7}>
            <Paper
              sx={{
                p: { xs: 3, md: 4 }, borderRadius: "20px",
                bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Stack spacing={3}>
                <Box>
                  <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>
                    Name
                  </Typography>
                  <InputBase
                    fullWidth
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    sx={inputSx}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>
                    Email
                  </Typography>
                  <InputBase
                    fullWidth
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    sx={inputSx}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>
                    Message
                  </Typography>
                  <InputBase
                    fullWidth
                    multiline
                    rows={5}
                    placeholder="Tell me about your opportunity or project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    sx={{ ...inputSx, alignItems: "flex-start" }}
                  />
                </Box>
                <Button
                  variant="contained"
                  endIcon={<Send sx={{ fontSize: 16 }} />}
                  fullWidth
                  sx={{
                    bgcolor: "#007AFF", color: "#fff", fontWeight: 600, py: 1.5,
                    borderRadius: "12px", fontSize: "0.9rem", textTransform: "none",
                    "&:hover": { bgcolor: "#0066DD", boxShadow: "0 0 24px rgba(0,122,255,0.35)" },
                    transition: "all 0.2s",
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}