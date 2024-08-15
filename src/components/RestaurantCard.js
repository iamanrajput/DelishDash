import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

const {
    cloudinaryImageId,
    name,
    areaName,
    cuisines,
    avgRating
} = resData?.info;

    return (
        <div className="res-card" style = {{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src = {CDN_URL + resData.info.cloudinaryImageId} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.cuisines.join(" , ")}</h4>
            <h4>⭐{resData.info.avgRating}</h4>
        </div>
    )
};

export default RestaurantCard;