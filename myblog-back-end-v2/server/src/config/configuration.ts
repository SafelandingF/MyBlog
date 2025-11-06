export default () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  nodeEnv: process.env.NODE_ENV,
  meshy: {
    baseUrl: process.env.MESHY_BASE_URL,
    apiKey: process.env.MESHY_API_KEY,
  },
});
