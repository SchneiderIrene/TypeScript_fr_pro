import { useFormik } from 'formik';

import {
  EmployeeFormComponent,
  CheckBox,
  Label,
  CheckBoxContainer,
} from './styles';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { EmployeeFormValues } from './types';

function EmployeeForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      position: '',
      checkbox: false,
    } as EmployeeFormValues,
    onSubmit: (values: EmployeeFormValues) => {
      console.log(values);
    },
  });

  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <Input
        name="firstName"
        label="First name"
        placeholder="First name"
        onInputChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <Input
        name="lastName"
        label="Last name"
        placeholder="Last name"
        onInputChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <Input
        name="age"
        label="Age"
        placeholder="Age"
        onInputChange={formik.handleChange}
        value={formik.values.age}
      />

      <Input
        name="position"
        label="Position"
        placeholder="Position"
        onInputChange={formik.handleChange}
        value={formik.values.position}
      />

      <CheckBoxContainer>
        <Label htmlFor='checkbox-id'>I Agree</Label>
        <CheckBox
        id='checkbox-id'
          type="checkbox"
          name="checkbox"
          onChange={formik.handleChange}
          checked={formik.values.checkbox}
        />
      </CheckBoxContainer>

      <Button name="Create" type="submit" disabled={!formik.values.checkbox}/>
    </EmployeeFormComponent>
  );
}

export default EmployeeForm;
