import { Box, Typography, Card, CardContent, Chip, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ImageIcon from '@mui/icons-material/Image';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 10, maxWidth: 900, mx: 'auto', px: 3 }}>
      <Typography variant="h4" fontWeight={700} color="white" gutterBottom>
        Projects
      </Typography>
      <Stack spacing={3} sx={{ mt: 2 }}>
        {projects.map((project) => (
          <Card
            key={project.title}
            sx={{
              bgcolor: '#111',
              border: '1px solid #222',
              borderRadius: 2,
              '&:hover': { borderColor: '#444' },
              transition: 'border-color 0.2s',
            }}
          >
            <Box
              sx={{
                height: 160,
                bgcolor: '#1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid #222',
              }}
            >
              <ImageIcon sx={{ fontSize: 48, color: 'grey.700' }} />
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Typography variant="h6" color="white" fontWeight={600}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="grey.400" sx={{ mt: 1, mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ bgcolor: '#1a1a2e', color: 'grey.300', fontSize: '0.75rem' }}
                      />
                    ))}
                  </Stack>
                </Box>
                <Stack direction="row" spacing={0.5}>
                  {project.github && (
                    <IconButton href={project.github} target="_blank" rel="noopener" sx={{ color: 'grey.400' }}>
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                  )}
                  {project.live && (
                    <IconButton href={project.live} target="_blank" rel="noopener" sx={{ color: 'grey.400' }}>
                      <LaunchIcon fontSize="small" />
                    </IconButton>
                  )}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
