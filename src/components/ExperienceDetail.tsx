import {
  Box, Button, Chip, Dialog, DialogContent, Divider,
  IconButton, Stack, Typography,
} from "@mui/material";
import { Close, WorkOutline } from "@mui/icons-material";

interface ExperienceDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    company: string;
    role: string;
    period: string;
    description: string;
    achievements: string[];
  } | null;
}

export default function ExperienceDetail({ isOpen, onClose, data }: ExperienceDetailProps) {
  if (!data) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: "#0A0F1E", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px", boxShadow: "0 0 60px rgba(0,0,0,0.6)",
        },
      }}
      BackdropProps={{ sx: { bgcolor: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" } }}
    >
      <DialogContent sx={{ p: 0 }}>
        {/* Header */}
        <Box sx={{ p: 4, pb: 3, position: "relative" }}>
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute", top: 20, right: 20,
              color: "#6B7280", bgcolor: "rgba(255,255,255,0.04)",
              borderRadius: "10px",
              "&:hover": { bgcolor: "rgba(255,255,255,0.08)", color: "#F9FAFB" },
            }}
          >
            <Close fontSize="small" />
          </IconButton>

          <Chip
            label={data.period}
            size="small"
            sx={{ bgcolor: "rgba(0,122,255,0.1)", color: "#60A5FA", border: "1px solid rgba(0,122,255,0.2)", mb: 2, fontWeight: 600 }}
          />

          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#F9FAFB", mb: 1, fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif' }}
          >
            {data.role}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <WorkOutline sx={{ fontSize: 16, color: "#007AFF" }} />
            <Typography sx={{ color: "#007AFF", fontWeight: 600, fontSize: "0.9rem" }}>{data.company}</Typography>
          </Stack>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />

        <Box sx={{ p: 4 }}>
          {/* Description */}
          <Box
            sx={{
              borderLeft: "2px solid rgba(0,122,255,0.4)", pl: 2, mb: 4,
            }}
          >
            <Typography sx={{ color: "#9CA3AF", lineHeight: 1.8, fontSize: "0.9rem" }}>
              {data.description}
            </Typography>
          </Box>

          <Typography sx={{ fontWeight: 700, color: "#F9FAFB", mb: 2.5, fontSize: "0.95rem" }}>
            Key Achievements
          </Typography>

          <Stack spacing={1.5}>
            {data.achievements.map((a, i) => (
              <Box
                key={i}
                sx={{
                  p: 2, borderRadius: "10px",
                  bgcolor: "rgba(0,122,255,0.04)",
                  border: "1px solid rgba(0,122,255,0.08)",
                  display: "flex", gap: 1.5, alignItems: "flex-start",
                }}
              >
                <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "#007AFF", mt: "8px", flexShrink: 0 }} />
                <Typography sx={{ fontSize: "0.83rem", color: "#9CA3AF", lineHeight: 1.7 }}>{a}</Typography>
              </Box>
            ))}
          </Stack>

          <Button
            onClick={onClose}
            fullWidth
            variant="contained"
            sx={{
              mt: 4, bgcolor: "#007AFF", color: "#fff", fontWeight: 600,
              borderRadius: "12px", py: 1.5, textTransform: "none", fontSize: "0.9rem",
              "&:hover": { bgcolor: "#0066DD" },
            }}
          >
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}