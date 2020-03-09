import { tours } from "../../public/tempDB/tempDB";

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    // const landingReviews = tours.filter(tour => tour.tourType === "for-day").map(forDayTour => forDayTour.tourReviews).flat().slice(0, 3);


    const landingReviews = tours.filter(tour => tour.tourType === "for-day").map(forDayTour => forDayTour.tourReviews).flat().map(review => ({
        review,
        sort: Math.random()
    })).sort((a, b) => a.sort - b.sort).map(landingReview => landingReview.review).slice(0, 3);


    const landingImages = tours.filter(tour => tour.tourType === "for-day").map(forDayTour => forDayTour.tourImages).flat().map(image => ({
        image,
        sort: Math.random()
    })).sort((a, b) => a.sort - b.sort).map(landingImage => landingImage.image).slice(0, 4);

    res.end(JSON.stringify({landingReviews, landingImages, landingTours: tours.filter(tour => tour.tourType === "for-day").map(forDayTour => ({
        tourId: forDayTour.tourId,
        tourTitle: forDayTour.tourTitle,
        tourFeaturedImage: forDayTour.tourFeaturedImage,
        tourLead: forDayTour.tourLead,
        tourType: forDayTour.tourType
    }))}))
}