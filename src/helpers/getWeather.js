
import axios from 'axios';

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=23&longitude=-102&current=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperatura = async () => {
    const response = await axios.get(API_URL);
    return response.data.current.temperature_2m;
}