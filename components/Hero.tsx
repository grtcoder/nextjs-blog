import { Box, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="h2" fontWeight={700} color="white">
          {profile.name}
        </Typography>
        <Typography variant="h5" color="grey.400">
          {profile.title}
        </Typography>
        <Typography variant="body1" color="grey.500" maxWidth={600}>
          {profile.bio}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link href="/projects" passHref legacyBehavior>
            <Button
              component="a"
              variant="outlined"
              sx={{ color: 'white', borderColor: 'grey.700', textTransform: 'none' }}
            >
              View Projects
            </Button>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <Button component="a" variant="contained" sx={{ textTransform: 'none' }}>
              Get in Touch
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
