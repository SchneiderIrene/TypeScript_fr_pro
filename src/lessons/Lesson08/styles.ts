import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ButtonComponentPropsStyled{
    mainButton?: boolean,
}

const commonBoxStyles = css`
display: flex;
justify-content: center;
align-items: center;
width: 250px;
height: 250px;
`

export const BoxComponent = styled.div`
${commonBoxStyles}
background: #E88EA0;
box-shadow: 3px 4px grey;
border-radius: 4px;
`

export const Lesson08Component = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
gap: 20px;
`

export const ButtonComponent = styled.button<ButtonComponentPropsStyled>`
 width: 200px;
 height: 70px;
 border: none;
 background: ${({ mainButton }) => mainButton ? '#E84162' : '#E87241'} ;
 border-radius: 6px;
 font-size: 24px;
 padding: 10px;
 cursor: pointer;
`