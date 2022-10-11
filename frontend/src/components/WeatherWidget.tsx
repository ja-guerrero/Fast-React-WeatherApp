import React, { useEffect } from "react";
import {data} from "./data"
import DayWidget from "./DayWidget";
import HourWidget from "./HourWidget";


interface dataProps{
	date:string
	date_epoch: number
	day:any
	astro: any
	hour: any
}

export default function Widget(){

	const getDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		const date = yyyy + "-" + mm + dd
		return date
	}

	const findForecastDate = (date:String, forecastDay:dataProps[]) => {
		for(let i = 0; i < forecastDay.length; i++) {
			const dates = forecastDay[i]?.date
			
			console.log(dates)

		}
	}

	useEffect(() => {
	  findForecastDate(getDate(), data.forecast.forecastday)
	})
	


    return(
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">
		<div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
			<div className="flex justify-between">
				<div className="flex flex-col"> 
					<span className="text-6xl font-bold">{data.current.temp_f} F°</span>
					<span className="font-semibold mt-1 text-gray-500">{data.location.name}</span>
				</div>
				<svg className="h-24 w-24 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>
			</div>
			<div className="flex justify-between mt-12">
				<HourWidget/>
				<HourWidget/>
				<HourWidget/>
				<HourWidget/>
				<HourWidget/>
			</div>
		</div>

		<div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
			
		</div>

	</div>
)}