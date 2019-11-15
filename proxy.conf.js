  const PROXY_CONFIG = [
    {
      "context": [
        "/customer/customers"
      ],
      "target": "http://localhost:3001",
      "secure": false
    }
  ];
  
  module.exports = PROXY_CONFIG;