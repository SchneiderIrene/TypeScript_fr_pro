import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  color: aliceblue;
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 4px 4px 4px gray;
  background-color: #06006f;
`;
export const ClientPageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 100px;
  gap: 100px;
`;
export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 100px;
`;
export const TextCompany = styled.p`
  font-size: 30px;
`;

export const ButtonContainer = styled.div`
  width: 350px;
`;

export const CompanyName = styled.h2`
font-size: 36px;
font-weight: bold;
`
