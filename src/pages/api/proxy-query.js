// pages/api/proxy-query.js
export default async function handler(req, res) {
    console.log("in handler")
    const apiKey = process.env.YOUR_API_KEY; // Store your API key in an environment variable
    const response = await fetch('http://api.sciphi.ai/query', {
      method: req.method,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
      body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
    });
}  