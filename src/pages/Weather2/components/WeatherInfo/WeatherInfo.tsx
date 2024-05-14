import {
  WeatherInfoWrapper,
  WeatherBlock,
  FeelsLikeBlock,
  IconTemperatur,
  FeelsLikeTitle,
  City,
  Temperatur,
  IconWeather,
  IconWeatherContainer,
  FeelsLikeResult
} from './styles';

import { WeatherDataProps } from './types';

function WeatherInfo({ WeatherData }: WeatherDataProps) {
  return (
    <WeatherInfoWrapper>
      <WeatherBlock>
        <Temperatur>
          {WeatherData.temp}
          <IconWeatherContainer>
            {WeatherData.icon && (
              <>
                <IconWeather
                  src={`http://openweathermap.org/img/w/${WeatherData.icon}.png`}
                />
                <IconWeather
                  src={`http://openweathermap.org/img/w/${WeatherData.icon}.png`}
                />
                <IconWeather
                  src={`http://openweathermap.org/img/w/${WeatherData.icon}.png`}
                />
              </>
            )}
          </IconWeatherContainer>
        </Temperatur>
        <City> {WeatherData.city}</City>
      </WeatherBlock>
      <FeelsLikeBlock>
        <IconTemperatur />
        <FeelsLikeTitle>
          FEELS LIKE
          <FeelsLikeResult>{WeatherData.feelsLike}</FeelsLikeResult>
          
        </FeelsLikeTitle>
      </FeelsLikeBlock>
    </WeatherInfoWrapper>
  );
}

export default WeatherInfo;
