export interface EmployeeFormValues {
  firstName: string;
  lastName: string;
  age: string;
  position: string;
  iAgree: boolean;
}

export enum EMPLOYEE_FORM_FIELD_NAMES {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  AGE = 'age',
  POSITION = 'position',
  I_AGREE = 'iAgree',
}
