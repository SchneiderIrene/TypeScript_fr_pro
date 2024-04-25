import styled from "@emotion/styled";

export const ButtonComponent = styled.button`
    width: 100%;
    height: 70px;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 20px;
    background-color:${({disabled}) => disabled ? '#CEDBF4' : '#1f27f5' } ;
    color: white;
    font-size: 16px;
    cursor: pointer;
` 


// background: ${({ mainButton }) => mainButton ? '#E84162' : '#E87241'} ;