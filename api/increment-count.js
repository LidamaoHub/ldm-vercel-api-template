const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const newCount = await kv.incr('counter');
      res.status(200).json({ count: newCount });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};