import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

// const client = new MongoClient("mongodb://heroku_h7w01kcr:crg8j14vhrnhinfmcvauddn7f8@ds235078.mlab.com:35078/heroku_h7w01kcr", {
const client = new MongoClient(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@ds235078.mlab.com:35078/heroku_h7w01kcr`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database (req, res, next) {
    if(!client.isConnected()) await client.connect();
    req.dbClient = client;
    // req.db = client.db("try-local");
    req.db = client.db("heroku_h7w01kcr");
    return next();
};

const middleware = nextConnect();
middleware.use(database);

export default middleware;