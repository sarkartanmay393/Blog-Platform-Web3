import { MongoClient } from "mongodb";

let db;

// connectDB helps us by giving db instance
async function connectDB (cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.eucuekw.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect();
    db = client.db("blog-db");
    cb();
}

export {
    db,
    connectDB
};


