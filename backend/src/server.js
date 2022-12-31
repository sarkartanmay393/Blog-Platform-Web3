import express from 'express';
import { db, connectDB} from "./database.js";

const port = 8080;
const app = express();

app.use(express.json());

// Get request for getting article info
app.get("/api/articles/:name", async (req, res) => {
    const { name } = req.params;
    const article = await db.collection("articles").findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.status(404).send("No matching article found!");
    }
});

// Put request for incrementing votes by one
app.put("/api/articles/:name/upvote", async (req, res) => {
    const { name } = req.params;

    await db.collection("articles").updateOne({ name }, {
        $inc: { upvotes: 1},
    });

    const article = await db.collection("articles").findOne({ name });
    if (article) {
        res.json(article);
    } else {
        res.status(404).send("No matching article found!");
    }
});

// Post request for adding comments in database
app.post("/api/articles/:name/comments", async (req, res) => {
    const { name } = req.params;
    const { username, comment } = req.body;

    await db.collection("articles").updateOne({ name }, {
        $push: { comments: { username, comment } }
    });


    const article = await db.collection("articles").findOne({ name });
    if (article) {
        res.json(article);
    } else {
        res.status(404).send("No matching article found!");
    }
});

// This express server starts listening here by connecting to db first.
let ignoredPromise = connectDB(() => {
    console.log("Database connection is established.")
    app.listen(port, () => {
        console.log("Server is running on port " + port);
    });
});
