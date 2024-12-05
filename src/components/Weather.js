import React, { useEffect, useState } from 'react'
import FormComponent from './Form'
import Loading from './Loading'

const Weather = () => {
    const [search , setSearch] = useState('')
    const [loading , setLoading] = useState(false)
    const [weatherData , setWeatherData] = useState(null)
    const fetchData = async (param) => {
        setLoading(true)
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=77f2599c7bdc05a63402462133676a29&units=metric`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const weather = await response.json();
        if(weather){
            setWeatherData(weather)
            setLoading(false)
        }
        console.log(weather);
    } catch (e) {
        console.error("Error fetching weather data:", e);
    }
};

  function handelSearch (){
    fetchData(search)
  }
  useEffect(() => {
    fetchData("bangalore");
  }, []);
  
    const date=new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[date.getDay()];
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();
    const fullDate = `${day}-${month}-${year}`;
  return (
   <>
        <FormComponent search={search} setSearch={setSearch} handelSearch={handelSearch} />
        {
            loading ? 
            <Loading /> :
            <div className='container'>
                <div className='d-flex mt-3'>
                    <h1>{weatherData?.name}</h1>
                    <h1>{`,${weatherData?.sys?.country}`}</h1>
                </div>
                <div className='my-3'>
                    <span className='fst-italic'>{dayName}</span>
                    <span className='fst-italic'>{' , '}{fullDate}</span>
                </div>
                <div>
                    <span className='fw-bold fs-1'>{weatherData?.main?.temp}</span>
                </div>
                <div>
                    <span className='fw-semibold '>{ weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : null}</span>
                </div>
                <div className='d-flex justify-content-between w-50 mt-3'>
                    <div className='d-flex flex-column flex-wrap jstify-content-center align-items-center'>
                        <span className='fw-bolder fs-4'>{weatherData?.wind?.speed}</span>
                        <span className='fw-bold fs-5'>wind speed</span>
                    </div>
                    <div className='d-flex flex-column flex-wrap jstify-content-center align-items-center'>
                        <span className='fw-bolder fs-4'>{weatherData?.main?.humidity}%</span>
                        <span className='fw-bold fs-5'>Humidity</span>
                    </div>
                </div>
            </div>
        }

   </>
  )
}

export default Weather
