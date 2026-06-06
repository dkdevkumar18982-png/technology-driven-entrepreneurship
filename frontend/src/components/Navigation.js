import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Tech Entrepreneurship Analysis
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/ai-analysis">
            AI Analysis
          </Button>
          <Button color="inherit" component={Link} to="/iot-dashboard">
            IoT Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/blockchain">
            Blockchain
          </Button>
          <Button color="inherit" component={Link} to="/case-studies">
            Case Studies
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
