
import Button from 'components/Button/Button';
import { CounterProps } from './types'; 
import { CounterWrapper, ButtonControl } from './stiles';





function Counter({countValue, onMinusClick, onPlusClick}: CounterProps) {
  

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinusClick} name="-" />
      </ButtonControl>
      <p>{countValue}</p>
      <ButtonControl>
        <Button onButtonClick={onPlusClick} name="+" />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
