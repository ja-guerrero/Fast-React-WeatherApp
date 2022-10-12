import React, { useEffect } from "react";


export default function HourWidget({hour}:any){

    const formatHour =(time:any) => {
        let timeOfDay = "AM"
        let curHour = time.slice(-5,-3)
        curHour = parseInt(curHour)
        curHour = curHour % 12
        if (curHour >= 12)
            timeOfDay = "PM"
        if (curHour == 0){
            curHour = 12
        }
        return `${curHour} ${timeOfDay}`
    }


    return (
        <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">{hour?.temp_f} F°</span>
            <img src={hour?.condition.icon} alt=""/>
            <span className="font-semibold mt-1 text-sm">{formatHour(hour?.time)}</span>
		</div>
    )
}