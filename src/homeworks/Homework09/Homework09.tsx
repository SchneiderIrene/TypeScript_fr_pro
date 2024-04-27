import { ChangeEvent, useState, useEffect } from 'react';

import Button from 'components/Button/Button';
import { Homework09Container, InputContainer, InputResult, InputHomework09 } from './styles';

function Homework09() {

    const [inputValue1, setInputValue1] = useState<string>('');
    const [resultValue1, setResultValue1] = useState<string>('');

    const [inputValue2, setInputValue2] = useState<string>('');
    const [resultValue2, setResultValue2] = useState<string>('');

    const onChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue1(event.target.value);
      };

      const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue2(event.target.value);
      };


      const onButtonClick1 = () =>{
        setResultValue1(inputValue1);
      }

      const onButtonClick2 = () =>{
        setResultValue2(inputValue2);
      }



  return (
    <Homework09Container>
      <InputContainer>
        <InputHomework09 name="input 1" onChange={onChangeInput1}/>
        <Button name="button 1" onButtonClick={onButtonClick1}/>
        <InputResult>{resultValue1}</InputResult>
      </InputContainer>
      <InputContainer>
        <InputHomework09 name="input 2" onChange={onChangeInput2}/>
        <Button name="button 2" onButtonClick={onButtonClick2}/>
        <InputResult>{resultValue2}</InputResult>
      </InputContainer>
    </Homework09Container>
  );
}

export default Homework09;
