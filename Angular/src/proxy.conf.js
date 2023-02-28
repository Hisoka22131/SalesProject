const PROXY_CONFIG = [
  {
    context: [
      "/*",
    ],
    target: "https://localhost:7188",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
