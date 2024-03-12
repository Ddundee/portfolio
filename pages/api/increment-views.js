import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://flapeld:Sarojini%401234@db.8v8ijmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name } = req.body;

        try {
            await client.connect();
            const database = client.db('port');
            const blogs = database.collection('port');
            const query = { name };

            const updateResult = await blogs.updateOne(query, { $inc: { views: 1 } });

            if (updateResult.modifiedCount === 0) {
                res.status(404).json({ message: 'Blog not found' });
            } else {
                const updatedBlog = await blogs.findOne(query);
                res.status(200).json(updatedBlog);
            }
        } catch (error) {
            console.error('Error incrementing views:', error);
            res.status(500).json({ message: 'Internal server error' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
