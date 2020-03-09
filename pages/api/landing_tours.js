import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.get(async(req, res) => {
    const landingTours = await req.db.collection("tours").find({tourType: "for-day"}).toArray();

    const landingBriefs = landingTours.map(tour => ({
        tourId: tour._id,
        tourTitle: tour.tourTitle,
        tourFeaturedImage: tour.tourFeaturedImage,
        tourLead: tour.tourLead,
        tourType: tour.tourType
    }));

    const landingImages = landingTours.filter(tour => tour.tourType === "for-day").map(forDayTour => forDayTour.tourImages).flat().map(image => ({
        image,
        sort: Math.random()
    })).sort((a, b) => a.sort - b.sort).map((landingImage, index) => landingImage.image).slice(0, 4);

    const landingReviews = landingTours.filter(tour => tour.tourType === "for-day").map(forDayTour => forDayTour.tourReviews).flat().map(review => ({
        review,
        sort: Math.random()
    })).sort((a, b) => a.sort - b.sort).map((landingReview, index) => landingReview.review).slice(0, 3);

    res.json({landingBriefs, landingImages, landingReviews});

})

export default handler;