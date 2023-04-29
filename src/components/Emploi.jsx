import React, {useState} from 'react';
import SingleCalendarEvents from 'react-single-calendar-events'
import Navbar from "./Navbar"
import './emp.css'

const Emploi = () => {
    let options = {
        positionX:'right',
        positionY:'top', 
        badge:'circle', 
        pattern:'alternate',
        fontSize:16,
        border:true,
        presentOnly:true,
        accessibility:true,
        tooltip:true,
        tooltipPosition:'top',
        tooltipTitle:true
      }
      let data = {
            month: 'May',
            year: '2023',
            list: [
              {
                day: 3,
                events: [
                  {
                    title: "react-js",
                    details:{
                      "Start Date":"25-12-2023",
                      "End Date":"31-12-2023"
                    }
                  }
                ]
              }

            ]
          }

    return (
		<>
		<Navbar />
        <SingleCalendarEvents  options={options} events={data}/>
		</>
    )
}
export default Emploi;