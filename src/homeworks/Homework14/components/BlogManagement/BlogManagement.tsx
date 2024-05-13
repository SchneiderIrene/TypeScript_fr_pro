import { ChangeEvent, useState } from 'react';
import {BlogManagerContainer, TextArea, ButtonContainer} from './styles'
import Button from 'components/Button/Button';
import Card  from '../Card/Card';

function BlogManagement(){

const [textArea, setTextArea] = useState<string>('');
const [post, setPost] = useState<string>(textArea);

const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>)=>{
    setTextArea(event.target.value);
}

const onPost = ()=>{
setPost(post);
}


    return <BlogManagerContainer>
        <TextArea value={textArea} onChange={onChangeTextArea}/>
        <ButtonContainer>
            <Button name='Post' onButtonClick={onPost}/>
        </ButtonContainer>
        <Card/>
        </BlogManagerContainer>
}

export default BlogManagement;

// createContext