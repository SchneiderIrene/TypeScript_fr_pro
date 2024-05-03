import Button from "components/Button/Button";

import{UserWrapper, UserTitle}from './styles'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Users() {

const navigate = useNavigate();


const location = useLocation();
console.log(location);


const goNoHomePage = ()=> {
  navigate('/')
}

useEffect(()=>{
  return()=>{
    console.log('Component users unmounting');
  }}, []);


    return (
      <UserWrapper>
       <UserTitle>Users page</UserTitle>
       <Button name="Go to Home page" onButtonClick={goNoHomePage}/>
    </UserWrapper>
    )
  }
  
  export default Users;