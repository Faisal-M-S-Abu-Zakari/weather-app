import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk('weatherSlice/fetchWeather' , async(param)=>{
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=77f2599c7bdc05a63402462133676a29&units=metric`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const weather = await response.json();
        return weather
    } catch (e) {
        console.error("Error fetching weather data:", e);
    }
})

const weatherSlice = createSlice({
    initialState:{
        weatherData : [] ,
        citySearch: 'London'
    } , 
    name:'weatherSlice',
    reducers:{
        getCityName:(state , action)=>{
            state.citySearch = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchWeather.fulfilled , (state , action)=>{
            state.weatherData = [action.payload]
        })
    }
})

export const {getCityName} = weatherSlice.actions ;
export default weatherSlice.reducer