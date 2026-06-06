import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

const BlockchainExplorer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/blockchain/transactions'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching blockchain data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Typography>Loading blockchain data...</Typography>;

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Blockchain Explorer
      </Typography>
      {data && (
        <>
          <Grid container spacing={3} style={{ marginBottom: '20px' }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Total Transactions
                  </Typography>
                  <Typography variant="h5">
                    {(data.total_transactions / 1000000).toFixed(1)}M
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Daily Transactions
                  </Typography>
                  <Typography variant="h5">
                    {(data.daily_transactions / 1000000).toFixed(1)}M
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom>
            Recent Transactions
          </Typography>
          <TableContainer component={Card}>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell>From</TableCell>
                  <TableCell>To</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Timestamp</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.recent_transactions &&
                  data.recent_transactions.map((tx, index) => (
                    <TableRow key={index}>
                      <TableCell>{tx.from.slice(0, 10)}...</TableCell>
                      <TableCell>{tx.to.slice(0, 10)}...</TableCell>
                      <TableCell>{tx.value}</TableCell>
                      <TableCell>
                        {new Date(tx.timestamp).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default BlockchainExplorer;
