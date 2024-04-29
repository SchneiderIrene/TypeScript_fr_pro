import styled from "@emotion/styled";

interface ResultsBlockStyledProps{
    isShowResult: boolean;
}


export const Homework09Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
padding: 40px;
width: 400px;
`

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`
export const InputResult = styled.div`
width: 100%;
min-height: 100px;
border: 2px solid black;
border-radius: 4px;
padding: 15px;
font-size: 26px;
`

export const InputHomework09 = styled.input`
 width: 200px;
 height: 70px;
 border: 2px solid black;
 padding: 10px;
 font-size: 24px;
 border-radius: 4px;
`

export const ResultBlock = styled.div<ResultsBlockStyledProps>`
display: ${({ isShowResult }) => isShowResult ? 'flex' : 'none'};
gap: 20px;
padding: 20px;
`



//import styled from "@emotion/styled";

// interface ResultsBlockStyledProps {
//     isShowResult: boolean
//   }
  
//   export const Homework09Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 30px;
//     width: 700px;
//     padding: 40px;
//   `
//   export const ResultsBlock = styled.div<ResultsBlockStyledProps>`
//     display: ${({ isShowResult }) => isShowResult ? 'flex' : 'none'};
//     gap: 20px;
//     padding: 20px;
//   `
  
//   export const ResultWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 20px;
//     background: #94B3EB;
//     font-size: 30px;
//   `