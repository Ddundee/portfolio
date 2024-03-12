import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.URI;

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

export default async function handler(req, res) {
	if (req.method === "POST" || req.method === "GET") {
		const { slug } = req.query;
		try {
			await client.connect();
			const database = client.db("port");
			let blogs = database.collection("port");
			const query = { name: slug };
			await blogs.updateOne(query, { $inc: { views: 1 } });

			blogs = await database
				.collection("port")
				.find()
				.sort({ views: -1 })
				.toArray();
			res.json(blogs);
		} catch (error) {
			console.error("Error:", error);
			res.status(500).json({ message: "Internal Server Error" });
		} finally {
			await client.close();
		}
	} else {
		res.status(405).json({ message: "Method not allowed" });
	}
}
