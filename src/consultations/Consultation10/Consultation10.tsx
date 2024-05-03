import {Consultation10Container} from './styles'
import Counter from 'components/Counter/Counter';
import { useState } from 'react';

function Consultation10 (){

    const [value, setValue] = useState<number>(0);
    let disabled;

 const onMinusClick = (): void =>{
   if(value>-10){
 setValue((prevValue)=> --prevValue)
   }
   else{
    disabled = true;
   }
 }

 const onPlusClick = ()=>{
    if(value<10){
        setValue((prevValue)=> prevValue + 1);
    }
    else{
        disabled = true;
    }
    
 }

    return(
<Consultation10Container>
    <Counter 
    countValue={value} 
    onMinusClick={onMinusClick} 
    onPlusClick={onPlusClick} 
    disabledMinus={disabled} 
    disabledPlus={disabled}/>
</Consultation10Container>
    )
}

export default Consultation10;