

interface WeatherData{
    icon: string | undefined;
    city: string,
    temp: string,
    feelsLike: string,
};

export  interface WeatherDataProps{
    WeatherData: WeatherData
}
