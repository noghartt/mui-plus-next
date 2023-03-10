import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={theme => ({
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.grey[100],
        })}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
      </Box>
    </Container>
  );
}
