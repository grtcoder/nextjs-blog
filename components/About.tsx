import { Box, Typography, Chip, Stack } from '@mui/material';
import { profile } from '../data/profile';

export default function About() {
  return (
    <Box id="about" sx={{ py: 10, maxWidth: 900, mx: 'auto', px: 3 }}>
      <Typography variant="h4" fontWeight={700} color="white" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color="grey.400" sx={{ mb: 4, lineHeight: 1.8 }}>
        {profile.bio}
      </Typography>
      <Typography variant="h6" color="white" gutterBottom>
        Skills
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {profile.skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            variant="outlined"
            sx={{ color: 'grey.300', borderColor: 'grey.700' }}
          />
        ))}
      </Stack>
    </Box>
  );
}
