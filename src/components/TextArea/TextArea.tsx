import { TextAreaProps } from './types';
import {Text, TextAreaContainer, Label} from './styles';


function TextArea({ placeholder, name, label }: TextAreaProps) {
  return (
    <TextAreaContainer>
     <Label>{label}</Label>
      <Text/>
    </TextAreaContainer>
  );
}

export default TextArea;
