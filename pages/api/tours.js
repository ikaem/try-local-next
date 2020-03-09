import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.get(async(req, res) => {
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "application/json");

    const tours = await req.db.collection("tours").find().toArray();

    res.json(tours.map(tour => ({
        tourId: tour._id,
        tourTitle: tour.tourTitle,
        tourFeaturedImage: tour.tourFeaturedImage,
        tourLead: tour.tourLead,
        tourType: tour.tourType
    })));
});

export default handler;