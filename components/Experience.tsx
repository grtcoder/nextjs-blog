import { Box, Typography, Stack } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import { experiences } from '../data/experiences';

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: 10, maxWidth: 900, mx: 'auto', px: 3 }}>
      <Typography variant="h4" fontWeight={700} color="white" gutterBottom>
        Experience
      </Typography>
      <Stack spacing={4} sx={{ mt: 2 }}>
        {experiences.map((exp) => (
          <Box
            key={exp.role + exp.company}
            sx={{
              borderLeft: '2px solid #333',
              pl: 3,
              '&:hover': { borderColor: 'primary.main' },
              transition: 'border-color 0.2s',
              display: 'flex',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                flexShrink: 0,
                bgcolor: '#1a1a1a',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #222',
              }}
            >
              <BusinessIcon sx={{ color: 'grey.600' }} />
            </Box>
            <Box>
            <Typography variant="h6" color="white" fontWeight={600}>
              {exp.role}
            </Typography>
            <Typography variant="subtitle2" color="primary.light">
              {exp.company}
            </Typography>
            <Typography variant="caption" color="grey.500">
              {exp.period}
            </Typography>
            <Box component="ul" sx={{ mt: 1, pl: 2, color: 'grey.400' }}>
              {exp.description.map((item, i) => (
                <li key={i}>
                  <Typography variant="body2" color="grey.400">
                    {item}
                  </Typography>
                </li>
              ))}
            </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
