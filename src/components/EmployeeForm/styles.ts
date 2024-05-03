import styled from '@emotion/styled';

export const EmployeeFormContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 10px;
  flex: 1;
  width: 400px;
`;
export const EmployeeFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  background-color: rgba(255, 0, 255, 0.3);
  box-shadow: 2px 2px 2px black;
`;

export const CheckBox = styled.input`
  cursor: pointer;
  width: 50px;
`;
export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const CheckBoxError = styled.p`
  color: red;
  height: 10px;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 60px;
  outline: none;
  border-radius: 4px;
  font-size: 20px;
  border: 1px solid black;
  width: 100%;
  background-color: rgba(255, 0, 255, 0.3);
  box-shadow: 2px 2px 2px black;
`;
export const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  gap: 85px;
  padding-top: 30px;
`;

export const ValueResult = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 4px;
  font-size: 20px;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  box-shadow: 2px 2px 2px black;
`;
