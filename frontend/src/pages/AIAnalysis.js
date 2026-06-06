import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const AIAnalysis = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyzeSentiment = async () => {
    if (!text.trim()) {
      alert('Please enter text to analyze');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:5000/api/ai/analyze-sentiment',
        { text }
      );
      setResult(response.data);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      alert('Error analyzing sentiment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        AI Analysis Module
      </Typography>
      <Card>
        <CardContent>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Enter text for sentiment analysis"
            value={text}
            onChange={(e) => setText(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAnalyzeSentiment}
            disabled={loading}
            style={{ marginTop: '10px' }}
          >
            {loading ? 'Analyzing...' : 'Analyze Sentiment'}
          </Button>

          {result && (
            <Box style={{ marginTop: '20px' }}>
              <Typography variant="h6">Results:</Typography>
              <Typography>Sentiment: {result.sentiment_label}</Typography>
              <Typography>Score: {result.sentiment_score}</Typography>
              <Typography>Confidence: {result.confidence}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AIAnalysis;
