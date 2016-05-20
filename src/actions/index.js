import axios from 'axios';

const API_KEY='v3d0aec4e3471a4a6a655501513ab847e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid={$API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetch_weather(city) {
        const url = `{$ROOT_URL}&q=${city},us`;
        const request = axios.get(url);

        return {
                type: FETCH_WEATHER,
                payload: request 
        };
    }
