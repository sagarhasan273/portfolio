import { Code, Database, Globe, Smartphone, Cloud, Terminal } from "lucide-react";
import { Box, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "MySQL"],
    color: "#007AFF",
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"],
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Material UI"],
    color: "#F59E0B",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "CI/CD", "GCP"],
    color: "#8B5CF6",
  },
  {
    icon: Terminal,
    title: "Tools & Practices",
    skills: ["Git", "Linux", "Microservices", "System Design", "Computer Networks"],
    color: "#EC4899",
  },
  {
    icon: Smartphone,
    title: "Mobile & Other",
    skills: ["WebRTC", "WebSockets", "JWT", "React Native", "Socket.io"],
    color: "#06B6D4",
  },
];

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "#070C18", position: "relative", overflow: "hidden" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="overline" sx={{ color: "#007AFF", letterSpacing: "0.2em", fontWeight: 700 }}>
            Technical Skills
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700, color: "#F9FAFB", mt: 1,
              fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Tools I build{" "}
            <Box component="span" sx={{ color: "#007AFF" }}>with</Box>
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {skillCategories.map((cat, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                sx={{
                  p: 3.5, borderRadius: "16px", height: "100%",
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.22s ease",
                  "&:hover": {
                    border: `1px solid ${cat.color}30`,
                    bgcolor: `${cat.color}06`,
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      width: 42, height: 42, borderRadius: "10px",
                      bgcolor: `${cat.color}15`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <cat.icon size={20} color={cat.color} />
                  </Box>
                  <Typography sx={{ fontWeight: 600, color: "#F9FAFB", fontSize: "0.95rem" }}>
                    {cat.title}
                  </Typography>
                </Stack>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {cat.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.04)",
                        color: "#9CA3AF",
                        border: "1px solid rgba(255,255,255,0.07)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        height: 28,
                        "&:hover": { bgcolor: `${cat.color}12`, color: cat.color, borderColor: `${cat.color}30` },
                        transition: "all 0.15s",
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Footer accent */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography sx={{ fontSize: "0.8rem", color: "#374151", letterSpacing: "0.1em" }}>
            CONTINUOUSLY EXPANDING · ALWAYS LEARNING
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}