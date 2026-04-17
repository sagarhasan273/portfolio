import {
  Box, Button, Chip, Dialog, DialogContent, Divider,
  Grid, IconButton, Stack, Typography,
} from "@mui/material";
import { Close, GitHub, OpenInNew, Star, Group } from "@mui/icons-material";

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    subtitle?: string;
    description: string;
    tags: string[];
    metrics: string[];
    image: string;
    fullDescription?: string;
    technologies?: string[];
    challenges?: string[];
    solutions?: string[];
    outcomes?: string[];
    code?: string;
    demo?: string;
    soloBuilt?: boolean;
    userCount?: string;
  } | null;
}

export default function ProjectDetail({ isOpen, onClose, data }: ProjectDetailProps) {
  if (!data) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: "#0A0F1E", borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 80px rgba(0,0,0,0.7)",
          maxHeight: "90vh",
        },
      }}
      BackdropProps={{ sx: { bgcolor: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)" } }}
    >
      <DialogContent sx={{ p: 0 }}>
        {/* Close btn */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "sticky", top: 16, float: "right", zIndex: 10, m: 2,
            color: "#6B7280", bgcolor: "rgba(255,255,255,0.06)", borderRadius: "10px",
            "&:hover": { bgcolor: "rgba(255,255,255,0.1)", color: "#F9FAFB" },
          }}
        >
          <Close fontSize="small" />
        </IconButton>

        {/* Hero image */}
        <Box sx={{ position: "relative", height: 220, overflow: "hidden", borderRadius: "20px 20px 0 0", mt: -7 }}>
          <Box
            component="img"
            src={data.image}
            alt={data.title}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box sx={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(10,15,30,1) 0%, rgba(10,15,30,0.5) 50%, transparent 100%)",
          }} />
          {data.soloBuilt && (
            <Chip
              icon={<Star sx={{ fontSize: "12px !important", color: "#fff !important" }} />}
              label="Solely Built by Me"
              size="small"
              sx={{ position: "absolute", top: 16, left: 16, bgcolor: "#007AFF", color: "#fff", fontWeight: 700 }}
            />
          )}
          <Box sx={{ position: "absolute", bottom: 20, left: 24, right: 60 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, color: "#F9FAFB", fontFamily: '"SF Pro Display", sans-serif' }}
            >
              {data.title}
            </Typography>
            {data.subtitle && (
              <Typography sx={{ fontSize: "0.8rem", color: "#6B7280" }}>{data.subtitle}</Typography>
            )}
          </Box>
        </Box>

        <Box sx={{ p: { xs: 3, md: 4 } }}>
          {/* User count */}
          {data.userCount && (
            <Stack
              direction="row" alignItems="center" spacing={1.5}
              sx={{ p: 2, borderRadius: "12px", mb: 3, bgcolor: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <Group sx={{ color: "#22C55E", fontSize: 20 }} />
              <Typography sx={{ fontWeight: 700, color: "#22C55E", fontSize: "0.9rem" }}>{data.userCount} Active Users</Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "#6B7280" }}>— Built and scaled entirely as a solo project</Typography>
            </Stack>
          )}

          <Typography sx={{ color: "#9CA3AF", lineHeight: 1.8, fontSize: "0.9rem", mb: 4 }}>
            {data.fullDescription || data.description}
          </Typography>

          {/* Challenges / Solutions */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {data.challenges && data.challenges.length > 0 && (
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontWeight: 700, color: "#F9FAFB", mb: 2, fontSize: "0.9rem" }}>Challenges</Typography>
                <Stack spacing={1.5}>
                  {data.challenges.map((c, i) => (
                    <Stack key={i} direction="row" spacing={1.5}>
                      <Box component="span" sx={{ color: "#EF4444", fontSize: "0.8rem", mt: "1px" }}>→</Box>
                      <Typography sx={{ fontSize: "0.82rem", color: "#9CA3AF", lineHeight: 1.6 }}>{c}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            )}
            {data.solutions && data.solutions.length > 0 && (
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontWeight: 700, color: "#F9FAFB", mb: 2, fontSize: "0.9rem" }}>Solutions</Typography>
                <Stack spacing={1.5}>
                  {data.solutions.map((s, i) => (
                    <Stack key={i} direction="row" spacing={1.5}>
                      <Box component="span" sx={{ color: "#22C55E", fontSize: "0.8rem", mt: "1px" }}>✓</Box>
                      <Typography sx={{ fontSize: "0.82rem", color: "#9CA3AF", lineHeight: 1.6 }}>{s}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            )}
          </Grid>

          {/* Outcomes */}
          {data.outcomes && data.outcomes.length > 0 && (
            <Box sx={{ p: 3, borderRadius: "12px", mb: 4, bgcolor: "rgba(0,122,255,0.04)", border: "1px solid rgba(0,122,255,0.12)" }}>
              <Typography sx={{ fontWeight: 700, color: "#F9FAFB", mb: 2, fontSize: "0.9rem" }}>Key Outcomes</Typography>
              <Stack spacing={1.5}>
                {data.outcomes.map((o, i) => (
                  <Stack key={i} direction="row" spacing={1.5}>
                    <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "#007AFF", mt: "8px", flexShrink: 0 }} />
                    <Typography sx={{ fontSize: "0.82rem", color: "#9CA3AF", lineHeight: 1.6 }}>{o}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          )}

          {/* Tech & Metrics */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {data.technologies && (
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.1em", mb: 1.5 }}>
                  Technologies
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {data.technologies.map((t) => (
                    <Chip key={t} label={t} size="small" sx={{ bgcolor: "rgba(255,255,255,0.04)", color: "#9CA3AF", border: "1px solid rgba(255,255,255,0.07)", fontSize: "0.72rem" }} />
                  ))}
                </Box>
              </Grid>
            )}
            {data.metrics && data.metrics.length > 0 && (
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.1em", mb: 1.5 }}>
                  Key Metrics
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {data.metrics.map((m) => (
                    <Chip key={m} label={m} size="small" sx={{ bgcolor: "rgba(0,122,255,0.08)", color: "#60A5FA", border: "1px solid rgba(0,122,255,0.2)", fontSize: "0.72rem" }} />
                  ))}
                </Box>
              </Grid>
            )}
          </Grid>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 3 }} />

          {/* Actions */}
          <Stack direction="row" spacing={1.5} flexWrap="wrap">
            {data.code && (
              <Button
                variant="outlined"
                startIcon={<GitHub sx={{ fontSize: 16 }} />}
                onClick={() => window.open(data.code, "_blank")}
                sx={{
                  borderColor: "rgba(255,255,255,0.12)", color: "#D1D5DB",
                  textTransform: "none", fontWeight: 600, borderRadius: "10px",
                  "&:hover": { borderColor: "rgba(255,255,255,0.25)", bgcolor: "rgba(255,255,255,0.04)" },
                }}
              >
                View Code
              </Button>
            )}
            {data.demo && (
              <Button
                variant="contained"
                startIcon={<OpenInNew sx={{ fontSize: 16 }} />}
                onClick={() => window.open(data.demo, "_blank")}
                sx={{
                  bgcolor: "#007AFF", color: "#fff", textTransform: "none", fontWeight: 600, borderRadius: "10px",
                  "&:hover": { bgcolor: "#0066DD" },
                }}
              >
                Live Demo
              </Button>
            )}
            <Button
              onClick={onClose}
              sx={{
                ml: "auto !important", color: "#6B7280", textTransform: "none", fontWeight: 600,
                borderRadius: "10px", "&:hover": { bgcolor: "rgba(255,255,255,0.04)", color: "#F9FAFB" },
              }}
            >
              Close
            </Button>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}