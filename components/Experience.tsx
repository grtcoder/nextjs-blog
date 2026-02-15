import { Box, Typography, Stack } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import { experiences } from '../data/experiences';

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: 10, maxWidth: 900, mx: 'auto', px: 3, position: 'relative' }}>
      <Typography variant="h4" fontWeight={700} color="white" gutterBottom sx={{ position: 'relative', zIndex: 1 }}>
        Experience
      </Typography>

      {/* Timeline container */}
      <Box sx={{ position: 'relative', mt: 6 }}>
        {/* Center vertical line */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            bgcolor: '#222',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}
        />

        <Stack spacing={6}>
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <Box
                key={exp.role + exp.company}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 20,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    bgcolor: '#0a0a0a',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    animation: 'pulse-dot 3s ease-in-out infinite',
                    animationDelay: `${index * 0.5}s`,
                  }}
                />

                {/* Horizontal connector line */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 26,
                    left: isLeft ? 'calc(50% + 7px)' : undefined,
                    right: !isLeft ? 'calc(50% + 7px)' : undefined,
                    width: 30,
                    height: 2,
                    bgcolor: '#333',
                    zIndex: 1,
                    ...(isLeft ? { transform: 'scaleX(-1)' } : {}),
                  }}
                />

                {/* Card */}
                <Box
                  sx={{
                    width: 'calc(50% - 50px)',
                    bgcolor: '#111',
                    border: '1px solid #222',
                    borderRadius: 2,
                    p: 3,
                    position: 'relative',
                    zIndex: 1,
                    transition: 'border-color 0.3s, transform 0.3s',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: isLeft ? 'row' : 'row-reverse' }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        flexShrink: 0,
                        bgcolor: '#1a1a2e',
                        borderRadius: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #2a2a3e',
                      }}
                    >
                      <BusinessIcon sx={{ color: 'primary.dark', fontSize: 24 }} />
                    </Box>
                    <Box sx={{ textAlign: isLeft ? 'left' : 'right', flex: 1 }}>
                      <Typography variant="subtitle1" color="white" fontWeight={600} sx={{ lineHeight: 1.3 }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="body2" color="primary.light" sx={{ mt: 0.5 }}>
                        {exp.company}
                      </Typography>
                      <Typography variant="caption" color="grey.500">
                        {exp.period}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    component="ul"
                    sx={{
                      mt: 2,
                      pl: 2,
                      color: 'grey.400',
                      '& li': { mb: 0.5 },
                    }}
                  >
                    {exp.description.map((item, i) => (
                      <li key={i}>
                        <Typography variant="body2" color="grey.400" sx={{ lineHeight: 1.6 }}>
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
