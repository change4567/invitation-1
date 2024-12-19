const { ReportGenerator } = require('../public/generator.js');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { userName, userProblem } = JSON.parse(event.body);
    const generator = new ReportGenerator(userName, userProblem);
    const report = await generator.generateReport();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ report })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate report' })
    };
  }
}; 