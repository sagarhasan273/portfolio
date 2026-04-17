import { Brain, Rocket, Users, Target, ExternalLink } from "lucide-react";
import { Box, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import sagarhasan from "../assets/images/sagarhasan.jpg";

const values = [
  {
    icon: Brain,
    title: "Problem Solver",
    description: "Structured thinking, strong DSA foundations, and scalable system design principles.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapts to new technologies, frameworks, and architectural patterns.",
    checkout: undefined,
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Cross-functional collaboration, clean code culture, and shared ownership.",
    checkout: "https://www.linkedin.com/posts/lyxa_lyxaemployeerecognition-awardwinner-teamappreciation-activity-7373632136979001345-2p-b/",
  },
  {
    icon: Target,
    title: "Impact Focused",
    description: "Measurable improvements in performance, scalability, and user experience.",
  },
];

const stats = [
  { value: "50K+", label: "Users on Talk2Active" },
  { value: "200+", label: "Articles Published" },
  { value: "5+", label: "OSS Contributions" },
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "#050A14", position: "relative", overflow: "hidden" }}
    >
      {/* top gradient accent */}
      <Box sx={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(0,122,255,0.3), transparent)",
      }} />

      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="overline" sx={{ color: "#007AFF", letterSpacing: "0.2em", fontWeight: 700 }}>
            About Me
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700, color: "#F9FAFB", mt: 1,
              fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Driven by curiosity,{" "}
            <Box component="span" sx={{ color: "#007AFF" }}>built for scale</Box>
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="flex-start" sx={{ mb: 8 }}>
          {/* Photo */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  borderRadius: "16px", overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={sagarhasan}
                  alt="Sagar Hasan"
                  sx={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block" }}
                />
                <Box sx={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
                  background: "linear-gradient(to top, rgba(5,10,20,0.95), transparent)",
                }} />
                <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
                  <Typography sx={{ fontWeight: 700, color: "#F9FAFB", fontSize: "1rem" }}>Sagar Hasan</Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: "#007AFF" }}>Software Engineer · Dhaka, BD</Typography>
                </Box>
              </Box>

              {/* LeetCode floating badge */}
              <Paper
                sx={{
                  position: "absolute", top: 20, right: -16, px: 2.5, py: 1.5,
                  borderRadius: "12px", bgcolor: "rgba(5,10,20,0.9)",
                  border: "1px solid rgba(0,122,255,0.3)", backdropFilter: "blur(12px)",
                  textAlign: "center",
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "1.3rem", color: "#007AFF" }}>1200+</Typography>
                <Typography sx={{ fontSize: "0.65rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  LeetCode
                </Typography>
              </Paper>
            </Box>
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={8}>
            <Stack spacing={3} sx={{ mb: 5 }}>
              <Typography sx={{ color: "#9CA3AF", lineHeight: 1.8, fontSize: "1rem" }}>
                I'm a{" "}
                <Box component="span" sx={{ color: "#F9FAFB", fontWeight: 600 }}>
                  Software Engineer with 2+ years of professional experience
                </Box>
                , specializing in JavaScript-based development and backend system design. I've contributed to
                production-grade platforms handling large-scale user activity.
              </Typography>
              <Typography sx={{ color: "#9CA3AF", lineHeight: 1.8, fontSize: "1rem" }}>
                My work includes designing optimized APIs, implementing caching strategies, building modular React
                applications, and developing scalable Node.js backends. Most notably, I{" "}
                <Box component="span" sx={{ color: "#007AFF", fontWeight: 600 }}>solely built Talk2Active</Box>
                {" "}— a language practice platform serving{" "}
                <Box component="span" sx={{ color: "#007AFF", fontWeight: 600 }}>50,000+ active users</Box>,
                designed from architecture to deployment.
              </Typography>
              <Typography sx={{ color: "#9CA3AF", lineHeight: 1.8, fontSize: "1rem" }}>
                Passionate about clean architecture, maintainable code, and continuous learning.
              </Typography>
            </Stack>

            {/* Stats */}
            <Grid container spacing={2}>
              {stats.map((s) => (
                <Grid item xs={4} key={s.label}>
                  <Box
                    sx={{
                      borderRadius: "12px", p: 2.5, textAlign: "center",
                      border: "1px solid rgba(0,122,255,0.12)",
                      bgcolor: "rgba(0,122,255,0.04)",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: "1.5rem", color: "#007AFF" }}>{s.value}</Typography>
                    <Typography sx={{ fontSize: "0.7rem", color: "#6B7280", mt: 0.5, lineHeight: 1.3 }}>{s.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 6 }} />

        {/* Value cards */}
        <Grid container spacing={2}>
          {values.map((v, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Paper
                onClick={() => v.checkout && window.open(v.checkout, "_blank")}
                sx={{
                  p: 3, borderRadius: "14px", height: "100%",
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  cursor: v.checkout ? "pointer" : "default",
                  transition: "all 0.2s",
                  "&:hover": {
                    border: "1px solid rgba(0,122,255,0.3)",
                    bgcolor: "rgba(0,122,255,0.04)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44, height: 44, borderRadius: "10px",
                    bgcolor: "rgba(0,122,255,0.1)", display: "flex",
                    alignItems: "center", justifyContent: "center", mb: 2,
                  }}
                >
                  <v.icon size={20} color="#007AFF" />
                </Box>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                  <Typography sx={{ fontWeight: 600, color: "#F9FAFB", fontSize: "0.95rem" }}>{v.title}</Typography>
                  {v.checkout && <ExternalLink size={12} color="#007AFF" />}
                </Stack>
                <Typography sx={{ fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.6 }}>{v.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}