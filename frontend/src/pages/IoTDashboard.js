import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import axios from 'axios';

const IoTDashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/iot/adoption-metrics'
        );
        setMetrics(response.data);
      } catch (error) {
        console.error('Error fetching IoT metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) return <Typography>Loading IoT metrics...</Typography>;

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        IoT Dashboard
      </Typography>
      {metrics && (
        <>
          <Card style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total IoT Devices
              </Typography>
              <Typography variant="h5">
                {metrics.total_iot_devices} {metrics.unit}
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h6" gutterBottom>
            Top Industries
          </Typography>
          <Grid container spacing={2}>
            {metrics.top_industries &&
              metrics.top_industries.map((industry, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        {industry.industry}
                      </Typography>
                      <Typography variant="h6">
                        {industry.adoption_rate}%
                      </Typography>
                      <Typography color="textSecondary">
                        {industry.companies} companies
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default IoTDashboard;
