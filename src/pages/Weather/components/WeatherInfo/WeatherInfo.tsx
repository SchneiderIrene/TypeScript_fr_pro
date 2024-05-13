import { WeatherInfoWrapper, WeatherBlock, FeelsLikeBlock, IconTemperatur, FeelsLikeTitle } from "./styles";

import { WeatherDataProps } from "./types";

function WeatherInfo({WeatherData}: WeatherDataProps ){
    return(
<WeatherInfoWrapper>
<WeatherBlock>{WeatherData.city} {WeatherData.temp}</WeatherBlock>
<FeelsLikeBlock>
<IconTemperatur/>
    <FeelsLikeTitle>FEELS LIKE</FeelsLikeTitle>
    </FeelsLikeBlock>
</WeatherInfoWrapper>
    )
}

export default WeatherInfo;