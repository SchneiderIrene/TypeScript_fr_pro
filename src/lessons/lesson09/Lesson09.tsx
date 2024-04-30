import { ChangeEvent, useState, useEffect } from 'react';
import { Lesson09Component, InputExample, Result } from './styles';
import { error, log } from 'console';

function Lesson09() {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  const [activity, setActivity] = useState<string>('');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

useEffect(()=>{
    console.log('Mouting');
    getActivity()
}, []);

useEffect(()=>{
    if(!!activity){
      getActivity();
      console.log('Updating');
    }
}, [inputValue, inputValue2]);


useEffect(()=>{
    return ()=>{
        console.log('Unmouting');
    }
},[]);


const getActivity = async()=>{
  try {

    const responce = await fetch('https://www.boredapi.com/api/activity')
const result = await responce.json();
console.log(result.activity);

if (!responce.ok) {
  throw Object.assign(new Error('API Error'), {
    response: result 
  });
} else{
  // setActivity(result.activity)
}
  }catch (error){
    console.log(error);
  }

}

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
      <Result>{activity}</Result>
    </Lesson09Component>
  );
}

export default Lesson09;
