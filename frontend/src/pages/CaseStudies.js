import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography, Box, Chip } from '@mui/material';
import axios from 'axios';

const CaseStudies = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/case-studies'
        );
        setStudies(response.data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudies();
  }, []);

  if (loading) return <Typography>Loading case studies...</Typography>;

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Case Studies
      </Typography>
      <Grid container spacing={3}>
        {studies.map((study) => (
          <Grid item xs={12} md={6} key={study._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {study.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {study.company}
                </Typography>
                <Box style={{ marginBottom: '10px' }}>
                  <Chip
                    label={study.technology}
                    color="primary"
                    size="small"
                    style={{ marginRight: '5px' }}
                  />
                  <Chip
                    label={study.industry}
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {study.description}
                </Typography>
                <Box style={{ marginTop: '10px' }}>
                  <Typography variant="body2">
                    <strong>ROI:</strong> {study.roi}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Timeline:</strong> {study.timeline}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Cost:</strong> {study.cost}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CaseStudies;
