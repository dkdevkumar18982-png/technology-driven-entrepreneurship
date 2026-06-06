# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## AI Analysis Endpoints

### 1. Analyze Sentiment
**POST** `/ai/analyze-sentiment`

Analyze sentiment of provided text.

**Request Body:**
```json
{
  "text": "Your text here"
}
```

**Response:**
```json
{
  "text": "Your text here",
  "sentiment_score": 0.75,
  "sentiment_label": "positive",
  "confidence": 0.92
}
```

### 2. Get Trend Analysis
**GET** `/ai/trend-analysis`

Get current technology trends.

**Response:**
```json
{
  "ai_adoption": {
    "current": 65,
    "growth": 15,
    "year_over_year": "23%"
  }
}
```

### 3. Predict Startup Success
**POST** `/ai/predict-success`

Predict startup success probability.

**Request Body:**
```json
{
  "startup_data": { }
}
```

## IoT Endpoints

### 1. Get Adoption Metrics
**GET** `/iot/adoption-metrics`

Get IoT adoption statistics.

### 2. Get IoT Case Studies
**GET** `/iot/case-studies`

Get IoT implementation case studies.

### 3. Perform IoT Analysis
**POST** `/iot/analysis`

Perform detailed IoT analysis.

## Blockchain Endpoints

### 1. Get Transactions
**GET** `/blockchain/transactions`

Get blockchain transaction data.

### 2. Get Blockchain Startups
**GET** `/blockchain/startups`

Get list of blockchain-based startups.

### 3. Analyze Implementation
**POST** `/blockchain/analyze`

Analyze blockchain implementation strategy.

## Case Studies Endpoints

### 1. Get All Case Studies
**GET** `/case-studies`

Retrieve all case studies.

### 2. Get Case Study by ID
**GET** `/case-studies/:id`

Retrieve a specific case study.

### 3. Create Case Study
**POST** `/case-studies`

Create a new case study.

### 4. Update Case Study
**PUT** `/case-studies/:id`

Update an existing case study.

## Error Responses

All errors return appropriate HTTP status codes:

- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error

Error response format:
```json
{
  "message": "Error description"
}
```
