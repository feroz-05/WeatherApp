import Hours from "./Hours";
import { useState, useEffect } from "react";
import fetchWeatherData from '../api'; // Ensure this function is correctly defined and imported

function Card() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [cityName, setCityName] = useState('bengaluru');
    const [inputVal, setInputVal] = useState('bengaluru');
   

        useEffect(() => {
            async function fetchData() {
                try {
                    const response = await fetchWeatherData(cityName);
                    console.log('Fetched weather data:', response); // Log the fetched data
                    setWeatherData(response);
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                    setError(error);
                }
            }
            fetchData();
        }, [cityName]);

        const handleInputChange = (e) => {
            setInputVal(e.target.value); // Update cityName state with user input
        };
        const handleButtonClick = () => {
            // Example: Change city name and trigger useEffect
           setCityName(inputVal)
        };
        
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!weatherData) {
        return <div>Loading...</div>;
    }
    const hourData = weatherData.forecast.forecastday[0].hour
    console.log(hourData)
    return (
        
        <div className="card">
            <br/>
            <div className="temp">
                <span className="day">Today</span>
                <span className="celcius">  <span className="cloud">&#x2601;</span>
                    {weatherData.current.temp_c}&deg;
                </span>
                <span className="weather">{weatherData.current.condition.text}</span>
                <span className="city">{weatherData.location.name + " , " +weatherData.location.region }</span>
                <span className="date">{new Date().toLocaleDateString()}</span>  
            </div>

            <div className="timing1">
                <Hours hour='00:00' celcius={hourData[0].temp_c}/>
                <Hours hour='02:00' celcius={hourData[2].temp_c}/>
                <Hours hour='04:00' celcius={hourData[4].temp_c}/>
                <Hours hour='06:00' celcius={hourData[6].temp_c}/>
                <Hours hour='08:00' celcius={hourData[8].temp_c}/>
                <Hours hour='10:00' celcius={hourData[10].temp_c}/>
            </div>
            
            <div className="timing2">
                <Hours hour='12:00' celcius={hourData[12].temp_c}/>
                <Hours hour='14:00' celcius={hourData[14].temp_c}/>
                <Hours hour='16:00' celcius={hourData[16].temp_c}/>
                <Hours hour='18:00' celcius={hourData[18].temp_c}/>
                <Hours hour='20:00' celcius={hourData[20].temp_c}/>
                <Hours hour='22:00' celcius={hourData[22].temp_c}/>
            </div>
            <div className="input">
                <center>
                <input
                        type="text"
                        value={inputVal}
                        onChange={handleInputChange}
                        />
                <button type="button" onClick={handleButtonClick} class=" mx-3  text-black bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Change</button>
                </center>
            </div>
            <div className="text">
                <b>
                    <center><p>A web application designed to provide users with real-time weather information. It displays various weather-related metrics such as temperature, humidity, weather conditions, and forecasts.</p>
                    </center>
                    </b>
            </div>
        </div>
    );
}

export default Card;
