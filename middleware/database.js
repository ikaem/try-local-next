import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient("mongodb://heroku_h7w01kcr:crg8j14vhrnhinfmcvauddn7f8@ds235078.mlab.com:35078/heroku_h7w01kcr", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// mongodb://dave:password@localhost:27017?authMechanism=DEFAULT&authSource=db&ssl=true"'

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