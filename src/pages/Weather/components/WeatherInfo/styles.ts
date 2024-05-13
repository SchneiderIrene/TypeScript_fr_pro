import styled from "@emotion/styled";

import { IconTemp } from "assets";



export const WeatherInfoWrapper = styled.div`
display: flex;
flex-direction: column;
width: 709px;
height: 302px;
gap: 20px;

`

export const WeatherBlock = styled.div`
width: 100%;
height: 129px;
background-color: rgba(47, 72, 111, 0.62);
border-radius: 18px;
color: aliceblue;
padding: 20px;
`
export const FeelsLikeBlock = styled.div`
display: flex;
align-items: start;
width: 223px;
height: 141px;
background-color: rgba(47, 72, 111, 0.62);
border-radius: 18px;
padding: 15px;
gap: 10px;
color: aliceblue;
padding: 20px 10px;
`

export const FeelsLikeTitle = styled.div`
color: rgba(255, 255, 255, 0.57);
font-size: 12px;
`

export const IconTemperatur = styled.img`
color: rgba(255, 255, 255, 0.57);
width: 23px;
height: 23px;
`
IconTemperatur.defaultProps = { src: IconTemp };