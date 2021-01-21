exports.handler = async (event, context) => {
  return {
      statusCode: 200,
      body: JSON.stringify({
      API_KEY: process.env.API_KEY, 
      CLIENT_ID: process.env.CLIENT_ID,
      }),
  }
}