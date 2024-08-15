import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listofRestaurant, setListofRestaurant] = useState([]);

    useEffect (() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5602839&lng=77.1617881&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   
        const json = await data.json();
        console.log(json);

        setListofRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    return ! listofRestaurant|| listofRestaurant.length === 0 ? (<Shimmer/>)
     : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" />
                </div>
                <button className="filter-btn" onClick={() => {
                    //Filter Logic here
                    const filteredList = listofRestaurant.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setListofRestaurant(filteredList);
                     
                }}
                >
                Top Rated Restaurant
                 </button>
            </div>
            <div className="res-container">
                {listofRestaurant.map((restaurant) => (
                <RestaurantCard key = {restaurant.info.id} resData= {restaurant} />
                ))}
            </div>
        </div>
    )
};

export default Body;