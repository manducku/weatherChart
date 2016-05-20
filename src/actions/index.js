import axios from 'axios';
const API_KEY='3d0aec4e3471a4a6a655501513ab847e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetch_weather(city) {
        console.log(city);
        const url = `${ROOT_URL}&q=${city},us`;
        const request = axios.get(url);
        console.log(url);
        return {
                type: FETCH_WEATHER,
                payload: request 
        };
    }
