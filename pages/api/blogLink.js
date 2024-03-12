import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db('your_database_name');
      const collection = db.collection('your_collection_name');
      const result = await collection.findOneAndUpdate(
        { title },
        { $inc: { count: 1 } },
        { upsert: true, returnOriginal: false }
      );

      res.status(200).json({ count: result.value.count });
    } catch (error) {
      console.error('Failed to increment count:', error);
      res.status(500).json({ error: 'Failed to increment count' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
