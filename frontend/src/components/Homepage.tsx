
import React, {useState, useEffect, useRef} from "react";
import LineChart from "./Chart";
import Weather from "./CurrWeather";


const server = process.env.REACT_APP_API_URL

export default function Homepage(){
    return(
        <div className="Homepage ">

            <Weather/>
            
        </div>
    )


}   