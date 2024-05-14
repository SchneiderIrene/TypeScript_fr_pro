import styled from "@emotion/styled";

import { Background } from "assets";

export const WeatherWrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
background-image: url(${Background});

`

export const WeatherHeader = styled.header`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(18, 45, 77, 0.5);
height: 80px;
border-bottom: 1px solid aliceblue;
backdrop-filter: blur(8px);
`

export const WeatherTitle = styled.h1`
font-size: 24px;
font-family: 'Inter';
color: #FFFFFF;
`

export const WeatherMain = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
padding: 120px;
gap: 50px;
`

export const WeatherSearchWrapper = styled.div`
display: flex;
gap: 14px;

`

export const WeatherButton = styled.button`
width: 146px;
height: 48px;
border-radius: 50px;
background-color: rgba(54, 120, 180, 1);
border: none;
color: aliceblue;
font-size: 20px;
cursor: pointer;
`

export const WeatherInput = styled.input`
height: 48px;
width: 550px;
border-radius: 40px;
background-color: rgba(255, 255, 255, 0.1);
border: 1px solid aliceblue;
outline: none;
padding: 20px;
color: aliceblue;
gap: 10px;
font-size: 20px;
padding: 20px;
font-weight: bold;

::placeholder{
    color: rgba(255, 255, 255, 0.6);
}

`