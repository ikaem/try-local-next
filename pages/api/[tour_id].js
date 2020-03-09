import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectId } from "mongodb";

const handler = nextConnect();
handler.use(middleware);

handler.get(async(req, res) => {
    const { tour_id } = req.query;
    console.log(tour_id);
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "application/json");

    const tour = await req.db.collection("tours").findOne({_id: ObjectId(tour_id)});


    console.log(tour);
    res.json(tour);
});

export default handler;