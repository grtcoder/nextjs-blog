import { Box, Typography, Stack, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10, maxWidth: 900, mx: 'auto', px: 3, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight={700} color="white" gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="body1" color="grey.400" sx={{ mb: 4 }}>
        Feel free to reach out for collaborations, opportunities, or just a chat.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          startIcon={<EmailIcon />}
          href={`mailto:${profile.email}`}
          sx={{ color: 'white', borderColor: 'grey.700', textTransform: 'none' }}
        >
          {profile.email}
        </Button>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          href={profile.github}
          target="_blank"
          rel="noopener"
          sx={{ color: 'white', borderColor: 'grey.700', textTransform: 'none' }}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          startIcon={<LinkedInIcon />}
          href={profile.linkedin}
          target="_blank"
          rel="noopener"
          sx={{ color: 'white', borderColor: 'grey.700', textTransform: 'none' }}
        >
          LinkedIn
        </Button>
      </Stack>
    </Box>
  );
}
