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
    if (req.method === 'POST' || req.method === 'GET') {
        const { name } = req.body;

        try {
            await client.connect();
            const database = client.db('port');
            const blogs = await database.collection('port').find({})
                .sort({ views: -1 })
                .limit(10)
                .toArray();
                
                res.json(blogs);
            await client.close();

        } catch (error) {
            console.log(e)
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
