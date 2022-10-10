import React from "react";
import {data} from "./data"


export default function Weather(){
    const location = data.location
    const current = data.current
    const condition = current.condition
    return(
        <div className="Weather ">
            <div className="location flex justify-center items-center py-4">
                <span>{location.name}</span>
                <img src={condition.icon} alt="" />
            </div>
            <div className="main">
                <h4>Tempature: </h4>
            </div>
            
        </div>
    )
}