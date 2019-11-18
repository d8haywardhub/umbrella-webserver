  const PROXY_CONFIG = [
    {
      "context": [
        "/customers",
        "/report/raining",
        "/report/top4"
      ],
      "target": "http://localhost:3001",
      "secure": false
    }
  ];
  
  module.exports = PROXY_CONFIG;