import { ChangeEvent, useState, useEffect } from 'react';
import { Lesson09Component, InputExample, Result } from './styles';
import { log } from 'console';

function Lesson09() {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

useEffect(()=>{
    console.log('Mouting');
}, []);

useEffect(()=>{
    console.log('Updating');
}, [inputValue]);


useEffect(()=>{
    return ()=>{
        console.log('Unmouting');
    }
},[]);


// console.log('render');

  return (
    <Lesson09Component>
      <InputExample
        name="example"
        placeholder="example text"
        onChange={onChangeInput}
      />
      <InputExample
        name="example2"
        placeholder="example text2"
        onChange={onChangeInput2}
      />
      <Result>{inputValue}</Result>
      <Result>{inputValue2}</Result>
    </Lesson09Component>
  );
}

export default Lesson09;
