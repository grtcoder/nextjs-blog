import type { AppProps } from 'next/app';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import '../styles/globals.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0a0a0a', paper: '#111' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ParticleBackground />
      <Box sx={{ bgcolor: 'transparent', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Box sx={{ pt: 8 }}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
