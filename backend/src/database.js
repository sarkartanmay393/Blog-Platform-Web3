import { MongoClient} from "mongodb";

let db;

// connectDB helps us by giving db instance
async function connectDB (cb) {
    const client = new MongoClient("mongodb://0.0.0.0:27017");
    await client.connect();
    db = client.db("blog-db");
    cb();
}

export {
    db,
    connectDB
};