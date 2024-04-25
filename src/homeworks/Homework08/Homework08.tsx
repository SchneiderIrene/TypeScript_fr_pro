import Button from 'components/Button/Button';
import AnimalCard from 'components/AnimalCard/AnimalCard';
import { ButtonComponentContainer, Homework08Container } from './styles';
import {LionData, ZebraData} from './data'
import Counter from 'components/Counter/Counter';
import { useState } from 'react';
import Feedback from 'components/Feedback/Feedback';
import Input from 'components/Input/Input';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import TextArea from 'components/TextArea/TextArea';



function Homework08() {
const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((p) => p - 1);
  };

  const onPlus = (): void => {
    setCount((p) => p + 1);
  };


const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const addLike = (): void => {
    setLike((prevValue) => prevValue + 1);
  };

  const addDislike = (): void => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };


  return (
    <Homework08Container>
        <ButtonComponentContainer>
      <Button name="Homework08" disabled={true}/>
    </ButtonComponentContainer>
    <AnimalCard animalData={LionData}/>
    <AnimalCard animalData={ZebraData}/>
    <Counter countValue={count} onMinusClick={onMinus} onPlusClick={onPlus}/>
    <Feedback like={like}
        addLike={addLike}
        dislike={dislike}
        addDislike={addDislike}
        resetResults={resetResults}/>
    <Input  name='name' placeholder='name' label='name'/>  
    < ProfileCard/>
    <TextArea placeholder='Name' name='Name' label='Name'/>
    </Homework08Container>
    
  );
}

export default Homework08;
