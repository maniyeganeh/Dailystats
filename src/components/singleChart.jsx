import React from 'react';
import { Bar , defaults } from "react-chartjs-2";

const SingleChart = ({ worldRecover, worldDeaths, worldCase }) => {

    const chartData = {
        labels: [new Date()],
        datasets: [{
            label: "مبتلایان",
            data: [worldCase],
            width:"10px",
            backgroundColor: "#fa973a",
            barThickness: 25,
            barPercentage: 1,
        }, {
            label: "بهبود یافتگان",
            data: [worldRecover],
            backgroundColor: "#009431d5",
            border:"2px black",
            barThickness:25,
            barPercentage: 1,
        }, {
            label: "جان باختگان",
            data: [worldDeaths],
            backgroundColor: "#e84118",
            barThickness: 25,
            barPercentage: 1,
           
        },]
    }
    defaults.global.defaultFontFamily = "Peyda" ;
    return (
        <Bar
           
            data={chartData}
        
           
         
        />



    )
}
export default SingleChart;