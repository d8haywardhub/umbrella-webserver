  const PROXY_CONFIG = [
    {
      "context": [
        "/customer/customers",
        "/customer/customer"
      ],
      "target": "http://localhost:3001",
      "secure": false
    }
  ];
  
  module.exports = PROXY_CONFIG;