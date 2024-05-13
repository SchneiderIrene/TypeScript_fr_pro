import { createContext, useState } from 'react';
import {MessageContainer} from './styles'



export const MessageContext = createContext('')



function Message(){

const [message, setMessage] = useState<string>('');

    
    return (
<MessageContext.Provider value={message}>

    <MessageContainer></MessageContainer>
</MessageContext.Provider>

    )
}

export default Message;

//useContext