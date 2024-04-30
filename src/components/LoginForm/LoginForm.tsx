import Input from "components/Input/Input";
import Button from "components/Button/Button";
import {Loginform, LoginformName, InputsContainer} from './styles';
import {LoginFormValues} from './types';

import { useFormik } from "formik";


function LoginForm() {

const formik = useFormik({
  initialValues: {
email: '',
password: '',
  } as LoginFormValues,
  onSubmit: (values: LoginFormValues)=>{
    console.log(values);
  }
});

console.log(formik);


  return (
    <Loginform onSubmit={formik.handleSubmit}>
      <LoginformName>Login form</LoginformName>
      <InputsContainer>
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          onInputChange={formik.handleChange}
          value={formik.values.password}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </Loginform>
  );
}

export default LoginForm;