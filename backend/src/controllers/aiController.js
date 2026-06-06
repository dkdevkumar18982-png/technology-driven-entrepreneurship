// AI Controller for sentiment analysis, trend detection, and success prediction

const analyzeSentiment = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }
    
    // Call AI microservice
    const sentiment = {
      text: text,
      sentiment_score: 0.75,
      sentiment_label: 'positive',
      confidence: 0.92
    };
    
    res.json(sentiment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTrendAnalysis = async (req, res) => {
  try {
    const trends = {
      ai_adoption: { current: 65, growth: 15, year_over_year: '23%' },
      iot_adoption: { current: 52, growth: 12, year_over_year: '18%' },
      blockchain_adoption: { current: 38, growth: 8, year_over_year: '28%' }
    };
    res.json(trends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const predictStartupSuccess = async (req, res) => {
  try {
    const { startup_data } = req.body;
    
    const prediction = {
      success_probability: 0.78,
      confidence_interval: { lower: 0.71, upper: 0.85 },
      key_factors: ['team_experience', 'market_fit', 'funding'],
      recommendations: [
        'Focus on product market fit',
        'Strengthen team composition',
        'Secure additional funding'
      ]
    };
    
    res.json(prediction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const performNLPAnalysis = async (req, res) => {
  try {
    const analysis = {
      text_summary: 'Analysis of natural language processing results',
      key_topics: ['innovation', 'entrepreneurship', 'technology'],
      entities: ['AI', 'IoT', 'Blockchain'],
      sentiment_distribution: {
        positive: 65,
        neutral: 25,
        negative: 10
      }
    };
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  analyzeSentiment,
  getTrendAnalysis,
  predictStartupSuccess,
  performNLPAnalysis
};
