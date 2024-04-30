import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import {
  Lesson10Container,
  ButtonContainer,
  ResultContainer,
  CatFactWrapper,
} from './styles';
import Button from 'components/Button/Button';
import Spiner from 'components/Spiner/Spiner';

function Lesson10() {
  const [catFacts, setCatFacts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCatFact = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://catfact.ninja/fact');
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('API Error'), {
          response: result,
        });
      } else {
        setCatFacts((prevValues) => [...prevValues, result.fact]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCatFact();
  }, []);

  const catFactsElement = catFacts.map((catFact: string) => {
    return <CatFactWrapper key={v4()}>{catFact}</CatFactWrapper>;
  });

  const deleteCatFacts = (): void => {
    setCatFacts([]);
  };

  return (
    <Lesson10Container>
      <ButtonContainer>
        <Button name="GET MORE INFO" onButtonClick={getCatFact} />
        <Button name="DELETE ALL DATA" onButtonClick={deleteCatFacts} disabled={!catFacts.length}/>
      </ButtonContainer>
      {isLoading ? <Spiner /> : 
      <ResultContainer isShowBlock={!!catFacts.length}>
        {catFactsElement}
      </ResultContainer>}
    </Lesson10Container>
  );
}

export default Lesson10;

// При загрузке страницы должен происходить запрос на получение данных
// Данные должны отображаться в стилизованном блоке на странице
// Пока данных нет, то блок отображаться не должен
// Также на странице должна быть кнопка ‘GET MORE INFO’, при нажатии на которую также должен происходить запрос данных
// При получении данных после клика на кнопку они должны появиться на экране под предыдущими данными в том же блоке
// Когда размер блока с данными заходит за предел 700px блок расширяться в высоту не должен,
//а должен появиться скролл внутри блока с данными
// На странице должна быть вторая кнопка “DELETE ALL DATA”, которая будет удалять все полученные данные

// Задача*:

// Создайте компонент индикатора загрузки, который будет появляться в процессе
//получения данных и исчезать, когда данные получены (Spinner или др)
// P.S. Индикатором загрузки не должен быть текст
