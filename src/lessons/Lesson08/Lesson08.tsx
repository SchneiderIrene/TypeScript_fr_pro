import {BoxComponent, Lesson08Component, ButtonComponent} from './styles';

// const style = {
//     fontSize: '36px', 
//     color: 'blue'
// }

function Lesson08() {

  const typeButton = true;
  return (
    <Lesson08Component>
      <BoxComponent>My first emotion block</BoxComponent>
      <ButtonComponent mainButton={typeButton}>Custom button</ButtonComponent>
      <ButtonComponent >Custom button</ButtonComponent>
    </Lesson08Component>
  )
}

export default Lesson08;
