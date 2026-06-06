// IoT Controller for adoption metrics and case studies

const getAdoptionMetrics = async (req, res) => {
  try {
    const metrics = {
      total_iot_devices: 15.1,
      unit: 'billion',
      market_size: {
        value: 567,
        unit: 'billion USD',
        cagr: '13.6%'
      },
      top_industries: [
        { industry: 'Manufacturing', adoption_rate: 78, companies: 4500 },
        { industry: 'Healthcare', adoption_rate: 65, companies: 3200 },
        { industry: 'Smart Cities', adoption_rate: 52, companies: 1800 },
        { industry: 'Agriculture', adoption_rate: 45, companies: 2100 }
      ]
    };
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getIoTCaseStudies = async (req, res) => {
  try {
    const caseStudies = [
      {
        id: 'iot-001',
        company: 'GE Digital',
        technology: 'IoT',
        industry: 'Manufacturing',
        title: 'Predictive Maintenance Platform',
        description: 'Industrial IoT platform for predictive maintenance',
        roi: '340%',
        timeline: '18 months',
        cost: '$2.5M'
      }
    ];
    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const performIoTAnalysis = async (req, res) => {
  try {
    const analysis = {
      analysis_type: 'IoT Implementation Analysis',
      efficiency_gains: 35,
      cost_reduction: 28,
      risk_level: 'Medium',
      recommendations: [
        'Implement gradual rollout strategy',
        'Focus on data security',
        'Train workforce on new systems'
      ]
    };
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getIndustryTrends = async (req, res) => {
  try {
    const trends = {
      emerging_trends: [
        'Edge Computing Integration',
        '5G Connectivity',
        'AI-powered Analytics',
        'Security-First Design'
      ],
      investment_trends: {
        2023: { value: 34.2, unit: 'billion USD' },
        2024: { value: 41.6, unit: 'billion USD' },
        2025: { value: 50.8, unit: 'billion USD' }
      }
    };
    res.json(trends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAdoptionMetrics,
  getIoTCaseStudies,
  performIoTAnalysis,
  getIndustryTrends
};
