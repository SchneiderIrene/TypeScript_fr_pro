import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import {
  EmployeeFormComponent,
  CheckBox,
  Label,
  CheckBoxContainer,
  EmployeeFormContainer,
  CardContainer,
  CheckBoxError,
  Card,
  ValueResult
} from './styles';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { EmployeeFormValues, EMPLOYEE_FORM_FIELD_NAMES } from './types';

function EmployeeForm() {

  const [formValues, setFormValues] = useState<EmployeeFormValues>({
    firstName: '',
      lastName: '',
      age: '',
      position: '',
      iAgree: false,
  });


  const shema = Yup.object().shape({
    [EMPLOYEE_FORM_FIELD_NAMES.FIRST_NAME]: Yup.string()
      .required('Please, enter your first name')
      .min(2, 'Min 2 symbols')
      .max(50, 'Max 50 symbols'),

    [EMPLOYEE_FORM_FIELD_NAMES.LAST_NAME]: Yup.string()
      .required('Please, enter your first name')
      .max(15, 'Max 15 symbols'),

    [EMPLOYEE_FORM_FIELD_NAMES.AGE]: Yup.number()
      .required('Please, enter your age')
      .typeError('Enter number')
      .min(1, 'Min 1 symbol')
      //.test('check lenght', 'Max 3 symbols', value => String(value).length<=3)
      .max(999, 'Max 3 symbols'),

    [EMPLOYEE_FORM_FIELD_NAMES.POSITION]: Yup.string().max(
      30,
      'Max 30 symbols'
    ),

    [EMPLOYEE_FORM_FIELD_NAMES.I_AGREE]: Yup.boolean().oneOf(
      [true],
      'Accept argument'
    ),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      position: '',
      iAgree: false,
    } as EmployeeFormValues,
    validationSchema: shema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      formik.setValues(values);
      setFormValues(values);
    },
  });



  return (
    <EmployeeFormContainer>
      <EmployeeFormComponent onSubmit={formik.handleSubmit}>
        <Input
          name={EMPLOYEE_FORM_FIELD_NAMES.FIRST_NAME}
          label="First name"
          placeholder="First name"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FORM_FIELD_NAMES.FIRST_NAME]}
          error={formik.errors[EMPLOYEE_FORM_FIELD_NAMES.FIRST_NAME]}
        />

        <Input
          name={EMPLOYEE_FORM_FIELD_NAMES.LAST_NAME}
          label="Last name"
          placeholder="Last name"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FORM_FIELD_NAMES.LAST_NAME]}
          error={formik.errors[EMPLOYEE_FORM_FIELD_NAMES.LAST_NAME]}
        />

        <Input
          name={EMPLOYEE_FORM_FIELD_NAMES.AGE}
          label="Age"
          placeholder="Age"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FORM_FIELD_NAMES.AGE]}
          error={formik.errors[EMPLOYEE_FORM_FIELD_NAMES.AGE]}
        />

        <Input
          name={EMPLOYEE_FORM_FIELD_NAMES.POSITION}
          label="Position"
          placeholder="Position"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FORM_FIELD_NAMES.POSITION]}
          error={formik.errors[EMPLOYEE_FORM_FIELD_NAMES.POSITION]}
        />

        <CheckBoxContainer>
          <Label htmlFor="checkbox-id">I Agree</Label>
          <CheckBox
            id="checkbox-id"
            type="checkbox"
            name={EMPLOYEE_FORM_FIELD_NAMES.I_AGREE}
            onChange={formik.handleChange}
            checked={formik.values[EMPLOYEE_FORM_FIELD_NAMES.I_AGREE]}
          />
        </CheckBoxContainer>
        <CheckBoxError>
          {formik.errors[EMPLOYEE_FORM_FIELD_NAMES.I_AGREE]}
        </CheckBoxError>

        {/* <Button name="Create" type="submit" disabled={!formik.values.iAgree} /> */}
        <Button name="Create" type="submit" />
      </EmployeeFormComponent>

      <CardContainer >
        <Card>
          <ValueResult>Name: {formValues[EMPLOYEE_FORM_FIELD_NAMES.FIRST_NAME]}</ValueResult>
          <ValueResult>Surname: {formValues[EMPLOYEE_FORM_FIELD_NAMES.LAST_NAME]}</ValueResult>
          <ValueResult>Age: {formValues[EMPLOYEE_FORM_FIELD_NAMES.AGE]}</ValueResult>
          <ValueResult>Position: {formValues[EMPLOYEE_FORM_FIELD_NAMES.POSITION]}</ValueResult>
        </Card>
      </CardContainer>
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
