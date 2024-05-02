import Input from "components/Input/Input";
import Button from "components/Button/Button";
import {Loginform, LoginformName, InputsContainer} from './styles';
import {LoginFormValues, LOGIN_FIELD_NAMES} from './types';

import { useFormik } from "formik";
import * as Yup from 'yup';


function LoginForm() {

  const shema = Yup.object().shape({
    [LOGIN_FIELD_NAMES.EMAIL]: Yup.string().required('Fieid email required').email('Field type email'),
   // [LOGIN_FIELD_NAMES.PASSWORD]: Yup.string().required('Fieid password required'),
    [LOGIN_FIELD_NAMES.PASSWORD]: Yup.number()
    .typeError('enter number')
    .required('Fieid password required')
    .max(10, 'Max 10 symbols')
    .min(3, 'Min 3 simbols'),
  })

const formik = useFormik({
  initialValues: {
[LOGIN_FIELD_NAMES.EMAIL]: '',
[LOGIN_FIELD_NAMES.PASSWORD]: '',
  } as LoginFormValues,
  validationSchema: shema,
  validateOnChange: false,
  validateOnMount: false,
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
          name={LOGIN_FIELD_NAMES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.EMAIL]}
          error={formik.errors[LOGIN_FIELD_NAMES.EMAIL]}
          onBlur={}
        />
        <Input
          name={LOGIN_FIELD_NAMES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.PASSWORD]}
          error={formik.errors[LOGIN_FIELD_NAMES.PASSWORD]}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </Loginform>
  );
}

export default LoginForm;