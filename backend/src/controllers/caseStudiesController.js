// Case Studies Controller

const getAllCaseStudies = async (req, res) => {
  try {
    const caseStudies = [
      {
        _id: '1',
        title: 'AI-Powered Customer Service',
        company: 'OpenAI',
        technology: 'AI',
        industry: 'Technology',
        cost: '$5M',
        timeline: '12 months',
        roi: '250%',
        description: 'Implementation of AI chatbots for customer support'
      }
    ];
    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCaseStudyById = async (req, res) => {
  try {
    const { id } = req.params;
    const caseStudy = {
      _id: id,
      title: 'AI-Powered Customer Service',
      company: 'OpenAI',
      technology: 'AI',
      industry: 'Technology',
      cost: '$5M',
      timeline: '12 months',
      roi: '250%',
      description: 'Implementation of AI chatbots for customer support',
      challenges: ['Data quality', 'Model training', 'User adoption'],
      lessons_learned: ['Importance of data governance', 'Change management is critical']
    };
    res.json(caseStudy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCaseStudy = async (req, res) => {
  try {
    const caseStudy = req.body;
    res.status(201).json({ message: 'Case study created', data: caseStudy });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCaseStudy = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    res.json({ message: 'Case study updated', id, updates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCaseStudiesByTechnology = async (req, res) => {
  try {
    const { tech } = req.params;
    const caseStudies = [
      {
        _id: '1',
        title: `${tech} Implementation Case Study`,
        technology: tech,
        company: 'Sample Company',
        roi: '200%'
      }
    ];
    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCaseStudiesByIndustry = async (req, res) => {
  try {
    const { industry } = req.params;
    const caseStudies = [
      {
        _id: '1',
        title: `${industry} Technology Implementation`,
        industry: industry,
        company: 'Sample Company',
        roi: '180%'
      }
    ];
    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCaseStudies,
  getCaseStudyById,
  createCaseStudy,
  updateCaseStudy,
  getCaseStudiesByTechnology,
  getCaseStudiesByIndustry
};
