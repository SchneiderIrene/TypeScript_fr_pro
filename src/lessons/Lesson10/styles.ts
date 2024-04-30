import styled from "@emotion/styled";

export const Lesson10Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 30px 100px;
flex: 1;
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
gap: 300px;
padding: 30px 0px;
width: 100%;
`

interface ResultContainerPropsStyled{
    isShowBlock?: boolean,
}

export const ResultContainer = styled.div<ResultContainerPropsStyled>`
padding: 30px;
/* min-height: 500px; */
max-height: 700px;
width: 100%;
background-image: url('https://img.freepik.com/premium-photo/horizontal-wallpaper-black-cat-black-background_506604-1390.jpg');
background-size: cover;
border: 2px solid black;
overflow: auto;
color: aliceblue;
font-size: 28px;
border-radius: 4px;
display: ${({isShowBlock})=> isShowBlock ? 'flex' : 'none' };
flex-direction: column;
align-items: center;
gap: 10px;
`


export const CatFactWrapper = styled.div`
border: 2px solid aliceblue;
width: 100%;
border-radius: 4px;
`
