import { Box, Typography } from '@mui/material';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <Box sx={{ py: 4, textAlign: 'center', borderTop: '1px solid #222' }}>
      <Typography variant="body2" color="grey.600">
        {new Date().getFullYear()} {profile.name}
      </Typography>
    </Box>
  );
}
