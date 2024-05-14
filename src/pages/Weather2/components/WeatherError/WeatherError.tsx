import {WeatherErrorWrapper, ApiError, MessageError} from './styles'

function WeatherError(){
    return(
<WeatherErrorWrapper>
<ApiError>API Error</ApiError>
<MessageError>City not found</MessageError>
</WeatherErrorWrapper>
    )
}

export default WeatherError;