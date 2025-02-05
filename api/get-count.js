const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const count = await kv.get('counter') || 0;
      res.status(200).json({ count });
    } catch (error) {
      res.status(500).json({ error: `An error occurred ${error}` });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};