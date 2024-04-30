import { ChangeEvent, useState, useEffect } from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import {
  Homework09Container,
  InputContainer,
  InputResult,
  ResultBlock
} from './styles';

function Homework09_2() {
  const [firstNote, setFirstNote] = useState<string>('');
  const [secondNote, setSecondNote] = useState<string>('');

  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  const onFirstNoteInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setFirstNote(event.target.value);
  };

  const onSecondNoteInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSecondNote(event.target.value);
  };

const onShowResult = ()=>{
  //setIsShowResult(true);
  setIsShowResult(!isShowResult);
}

  return (
    <Homework09Container>
      <Input
        placeholder="First note"
        onInputChange={onFirstNoteInputChange}
        name="firstNote"
        label="firstNote"
        value={firstNote}
      />
      <Input
        placeholder="Second note"
        onInputChange={onSecondNoteInputChange}
        name="secondNote"
        label="secondNote"
        value={secondNote}
      />
      <Button name="Show notes" onButtonClick={onShowResult} />
      <ResultBlock isShowResult={isShowResult}>
        <InputResult>{firstNote}</InputResult>
      <InputResult>{secondNote}</InputResult>
      </ResultBlock>
      
    </Homework09Container>
  );
}

export default Homework09_2;
