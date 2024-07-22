import { useState } from "react";
import { categories } from "../data";
import "../styles/Listings.scss"
import ListingCard from "./ListingCard";
import Loader from "./Loader"
import { useDispatch, useSelector } from "react-redux";


import React from "react";

const Listings = ()=> {
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(true);

    const [selectedCategory, setSelectedCategory]=useState("")

    const listings=useSelector((state)=>state.listings)

    


  return (
    <div className="category-list">
        {categories?.map((category,index)=>(
            <div className={'category'} key={index}>
                <div className="category_icon">{category.icon}</div>
                <p>{category.lable}</p>
            </div>
        ))}

    </div>

  )
}

export default Listings ;
