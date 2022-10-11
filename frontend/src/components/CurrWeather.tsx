import React from "react";
import LineChart from "./Chart";
import {data} from "./data"
import Widget from "./WeatherWidget";


export default function Weather(){
    const location = data.location
    const current = data.current
    const condition = current.condition
    return(
        <div className="Weather ">
            <div className="main"> 
                <Widget/>
            </div>
            
        </div>
    )
}