import { useContext, useState } from 'react';
import {CardContainer, Name} from './styles'
import Message, { MessageContext } from '../Message/Message';


function Card(){

// const [data, setData] = useState<UserData>({
//     firstName: '',
//     lastName: ''
// })
// const onShowCard = ()=>{
//     //setIsShowResult(true);
//     setIsShowResult(!isShowResult);
const message =  useContext(MessageContext);

    return <CardContainer isShowResult={true}>
        <Name>Irene Schneider: {message}</Name> 
        </CardContainer>
}
export default Card;