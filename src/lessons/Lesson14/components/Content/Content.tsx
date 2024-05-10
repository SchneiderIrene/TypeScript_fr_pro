import { useState } from 'react';
import { ContenComponent, DataItem } from './styles';
import { UserData } from '../MainContent/types';

import { useContext } from 'react';
import { MainContext } from '../MainContent/MainConten';

function Content() {
const userData = useContext(MainContext)
  return (
    <ContenComponent>
      <DataItem>First Name: {userData.firstName}</DataItem>
      <DataItem>Last Name: {userData.lastName}</DataItem>
      <DataItem>Age: {userData.age}</DataItem>
    </ContenComponent>
  );
}

export default Content;
