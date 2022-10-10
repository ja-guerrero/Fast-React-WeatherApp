
import React, {useState, useEffect, useRef} from "react";
import LineChart from "./Chart";
import Weather from "./CurrWeather";


const server = process.env.REACT_APP_API_URL

export default function Homepage(){
    const ref =useRef()
    const [msg, Setmsg] = useState("")
    const fetchdata = async ()=>{
      await fetch(`${server}/`)
      .then(response => response.json())
      .then(data => Setmsg(data.message))
    }
    useEffect(() => {
      fetchdata()
    }, [])

    return(
        <div className="Homepage ">
            <header className="flex justify-center items-center">
            <h1>Welcome to the Weather App</h1>
            </header>
            <Weather/>
            
        </div>
    )


}   