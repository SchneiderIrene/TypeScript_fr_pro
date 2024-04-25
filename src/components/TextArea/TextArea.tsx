import { TextAreaProps } from './types';
import {Text, TextAreaContainer} from './styles';


function TextArea({ placeholder, name, label }: TextAreaProps) {
  return (
    <TextAreaContainer>
     <label>{label}</label>
      <Text/>
    </TextAreaContainer>
  );
}

export default TextArea;
