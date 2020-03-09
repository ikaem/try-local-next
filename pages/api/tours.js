import { tours } from "../../tempDB/tempDB";

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(tours.map(tour => ({
        tourId: tour.tourId,
        tourTitle: tour.tourTitle,
        tourFeaturedImage: tour.tourFeaturedImage,
        tourLead: tour.tourLead,
        tourType: tour.tourType
    }))));
}