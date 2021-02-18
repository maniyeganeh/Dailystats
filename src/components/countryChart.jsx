import React from 'react';
import {Bar} from "react-chartjs-2";
import { defaults } from 'react-chartjs-2'
const CountryChart = ({resultsCases , resultsRecover , resultsDeaths , resultsCrit}) => {
    const chartData = {
        labels: [new Date() ],
        datasets: [{
            label: "مبتلایان",
            data: [resultsCases],
            width:"10px",
            backgroundColor: "#fa973a",
            barThickness: 85,
            barPercentage:2 
        }, {
            label: "بهبود یافتگان",
            data: [resultsRecover],
            backgroundColor: "#009431d5",
            barThickness: 85,
            barPercentage:2 
        }, {
            label: "جان باختگان",
            data: [resultsDeaths],
            backgroundColor: "#e84118",
            
            barThickness: 85,
            barPercentage:2 
        },{
            label:"بیماران در شرایط بحرانی",
            data:[resultsCrit],
            barThickness: 85,
            barPercentage:2,
            backgroundColor: "grey",
            
        }]
    }
    defaults.global.defaultFontFamily = "Peyda" ;
    return(
        <Bar
        data={chartData}
        
        />
    )
}
export default CountryChart;