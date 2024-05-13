import {WeatherErrorWrapper, ApiError, MessageError} from './styles'

function WeatherError(){
    return(
<WeatherErrorWrapper>
<ApiError>API Error</ApiError>
<MessageError>Something went wrong with API data</MessageError>
</WeatherErrorWrapper>
    )
}

export default WeatherError;