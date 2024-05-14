import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import WeatherError from './components/WeatherError/WeatherError';
import Spiner from 'components/Spiner/Spiner';
import { WeatherData } from './types';

import {
  WeatherWrapper,
  WeatherHeader,
  WeatherTitle,
  WeatherSearchWrapper,
  WeatherButton,
  WeatherInput,
  WeatherMain,
} from './styles';
import { ChangeEvent, useState } from 'react';

function Weather2() {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData>({
    city: '',
    temp: '',
    feelsLike: '',
    icon: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showWeatherInfo, setShowWeatherInfo] = useState<boolean>(false);
  const [showWeatherError, setShowWeatherError] = useState<boolean>(false);

  const API_key = 'f648a0bad836a08ddbddfc508621ebf2';

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const getWeather = async () => {
    
    

    if (!city && city.trim().length===0) {
      alert('Please, enter the city');
      return;
    }

    setCity('');
    setShowWeatherInfo(false);
    setShowWeatherError(false);

    setLoading(true);
    setError(null);

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
      );
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('API Error'), {
          response: result,
        });
      } else {
        
        const celc = (kelv: number): string =>{
          return `${(Number(kelv) - 273.15).toFixed(1)}°`;
        }
        
        const weatherInfo = {
          city: result.name,
          temp: celc(result.main.temp),
          feelsLike: celc(result.main.feels_like),
          icon: result.weather[0].icon
        };

        setWeatherData(weatherInfo);
        setShowWeatherInfo(true);
        setCity('');
        setShowWeatherError(false);
      }
    } catch (error) {
      console.log(error)
      setError('API Error');
      setShowWeatherError(true);
      setCity('');
    } finally {
      setLoading(false);
    }
  };



  return (
    <WeatherWrapper>
      <WeatherHeader>
        <WeatherTitle> Weather App </WeatherTitle>
      </WeatherHeader>
      <WeatherMain>
        <WeatherSearchWrapper>
          <WeatherInput
            placeholder="Colorado"
            value={city}
            onChange={onChangeInput}
          />
          <WeatherButton onClick={getWeather}>Search</WeatherButton>
        </WeatherSearchWrapper>
        {loading && <Spiner />}
        {weatherData && showWeatherInfo && (<WeatherInfo WeatherData={weatherData} />)}
        {showWeatherError && <WeatherError />}
      </WeatherMain>
    </WeatherWrapper>
  );
}

export default Weather2;

//Содержание страницы с приложением Weather App

// заголовок - “Weather app”
// поле для ввода города, данные по погоде которого мы хотим получить
// кнопка “Получить погоду”
// область для отображения данных о погоде или ошибке

// Требования к функциональности приложения Weather App
// Работу нужно вести в отдельной ветке
// При нажатии на кнопку “Получить погоду”, должен отправляться запрос на url:
// https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}
// Во время ожидания ответа нужно отображать индикатор (внешний вид на ваше усмотрение)
// После успешного получения данных, их нужно отобразить на странице.
// Иконку для отображения результата, нужно получить по url:
// http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png
// При получении ошибки, её данные нужно отобразить на странице, вместо данных о погоде
// При отсутствии названия города, после нажатия на кнопку
// “Получить погоду” должен появиться alert с просьбой ввести название города
