const createProxyMiddleware = require('http-proxy-middleware');
const https = require('https');

module.exports = function(app) {
  app.use(
    '/covid19',
    createProxyMiddleware({
      target: 'https://opendata.ecdc.europa.eu/',
    //   changeOrigin: true,
      logLevel: 'debug',
      agent: https
    })
  );
};