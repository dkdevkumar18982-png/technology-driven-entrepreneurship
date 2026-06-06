const mongoose = require('mongoose');

const caseStudySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    company: {
      type: String,
      required: true
    },
    technology: {
      type: [String],
      enum: ['AI', 'IoT', 'Blockchain'],
      required: true
    },
    industry: {
      type: String,
      required: true
    },
    description: String,
    implementation: {
      cost: Number,
      timeline: String,
      challenges: [String]
    },
    results: {
      roi: String,
      efficiency_gain: Number,
      revenue_increase: Number
    },
    lessons_learned: [String],
    created_at: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('CaseStudy', caseStudySchema);
