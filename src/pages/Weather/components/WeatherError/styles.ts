import styled from "@emotion/styled";

export const WeatherErrorWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
align-items: center;
width: 709px;
height: 129px;
background-color: rgba(47, 72, 111, 0.62);
border-radius: 18px;
padding: 10px;
`
export const ApiError = styled.h1`
font-size: 57px;
color: rgba(243, 94, 94, 1);
font-family: 'Inter';
font-weight: normal;
`

export const MessageError = styled.p`
font-size: 18px;
color: aliceblue;
font-family: 'Inter';
`