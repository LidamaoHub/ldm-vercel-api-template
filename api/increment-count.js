import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const namespace = process.env.KV_NAMESPACE || 'default';
      const newCount = await kv.incr(`${namespace}:counter`);
      res.status(200).json({ count: newCount });
    } catch (error) {
      console.error('Error incrementing count:', error);
      res.status(500).json({ error: 'An error occurred while incrementing the count' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}