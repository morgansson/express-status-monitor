module.exports = {
  title: 'Express Status',
  path: '/status',
  spans: [
    {
      interval: 5,
      retention: 60,
    },
    {
      interval: 10,
      retention: 60,
    },
    {
      interval: 30,
      retention: 60,
    },
  ],
  port: null,
  websocket: null,
  iframe: false,
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    responseTime: false,
    rps: false,
    statusCodes: false,
  },
  ignoreStartsWith: '/admin',
  healthChecks: []
};
