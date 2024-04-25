
import { InputProps } from "./types";
import {InputComponentContainer, InputComponentLabel, InputComponent} from './styles'

function Input({ name, type = "text", placeholder, label, onInputChange }: InputProps) {
  return (
    <InputComponentContainer>
      <InputComponentLabel>{label}</InputComponentLabel>
      <InputComponent>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
      />
      </InputComponent>
    </InputComponentContainer>
  );
}

export default Input;