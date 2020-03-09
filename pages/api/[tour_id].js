import {tours} from "../../public/tempDB/tempDB";

export default (req, res) => {
    const { tour_id } = req.query;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const tour = tours.find(tour => Number(tour.tourId) === Number(tour_id));
    res.end(JSON.stringify(tour));
}