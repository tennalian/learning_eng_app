require('@babel/register')({
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
})

module.exports = require('./server.js')