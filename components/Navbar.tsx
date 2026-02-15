import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const sections = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#0a0a0a', boxShadow: 'none', borderBottom: '1px solid #222' }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1100, width: '100%', mx: 'auto' }}>
        <Link href="/" passHref legacyBehavior>
          <Typography
            variant="h6"
            component="a"
            sx={{ fontWeight: 700, cursor: 'pointer', letterSpacing: 1, textDecoration: 'none', color: 'white' }}
          >
            DM
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {sections.map((s) => (
            <Link key={s.href} href={s.href} passHref legacyBehavior>
              <Button
                component="a"
                sx={{
                  color: (s.href === '/#about' ? router.pathname === '/' : router.pathname === s.href) ? 'primary.main' : '#ccc',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                }}
              >
                {s.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
