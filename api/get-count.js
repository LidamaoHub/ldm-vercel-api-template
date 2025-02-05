import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const namespace = process.env.KV_NAMESPACE || 'default';
      const count = await kv.get(`${namespace}:counter`) || 0;
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error fetching count:', error);
      res.status(500).json({ error: 'An error occurred while fetching the count' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}