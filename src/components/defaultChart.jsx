import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { defaults } from 'react-chartjs-2'
import axios from 'axios'
import { toast } from 'react-toastify';
// const DefaultChart = ({ countryTodayRecover,countryTodayDeaths,countryTodayCase,countryCritic,coutryRecover,countrDeaths,countryCase}) => {
const DefaultChart = () => {
  const [chart, setChart] = useState({})
  const iranChart = () => {
    axios.get("https://api.covid19api.com/total/country/Iran")
      .then(function ({ data }) {

        
      
        let chartDt = [];
        let date = [];
        let active =[];
        let activeCase = [];
        for (const detail of data) {
          chartDt.push(detail.Deaths);
          date.push(new Date (detail.Date).toDateString())
          active.push(detail.Confirmed)
          activeCase.push(detail.Active)

          
          
         setChart ({
            labels: date,
            datasets:[
              {
                label:"جانباختگان",
                data:chartDt,
                backgroundColor:"red"

              },
              {
                label:"مبتلایان",
                data:active,
                backgroundColor:"orange"

              },
              {
                label:"بیماران فعال",
                data:activeCase,
                backgroundColor:"grey"

              }
            ]
          })

        }
      }).catch(function (err) {
        console.log(err);

      })
  }
  useEffect(() => {
    iranChart();
    toast.success("برای مشاهده آمار روی گزینه های نمودار کلیک کنید!!!",{
      position:"bottom-right",
      autoClose:false,
      closeOnClick:true
    })


  }, [])





  //     labels: ["آمار کلی" , "آمار روزانه"],
  //     datasets: [
  //          {
  //         label: " مبتلایان",
  //         data: [countryCase , countryTodayCase],
  //         backgroundColor: "#f79b46",
  //         border:"2px black",
  //         barThickness:25,
  //         barPercentage: 0.2,
  //     }, {
  //         label: "بهبود یافتگان",
  //         data: [coutryRecover , countryTodayRecover],
  //         backgroundColor: "#009431d5",
  //         barThickness: 25,
  //         barPercentage: 0.2,

  //     },
  //   {
  //     label: "جان باختگان",
  //     data: [countrDeaths ,countryTodayDeaths ],
  //     backgroundColor: "#e44821da",
  //     barThickness: 25,
  //     barPercentage: 0.2,
  //   },{
  //     label: " بیماران در شرایط وخیم",
  //     data: [countryCritic],
  //     backgroundColor: "maroon",
  //     barThickness: 25,
  //     barPercentage: 0.2,
  // },]

  // }
  defaults.global.defaultFontFamily = "Peyda";
  return (
    <div>
      <Line
        data={chart}
    
      //   options={{ maintainAspectRatio: false },
      // {
      //   width:"10%"
      // }
      // }
      />

    </div>
    // <Bar
    // data={chartData}
    // />


  );
}

export default DefaultChart;