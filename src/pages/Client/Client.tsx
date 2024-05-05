import Company1 from 'pages/Client/Company1/Company1';
import Company2 from 'pages/Client/Company2/Company2';
import Company3 from 'pages/Client/Company3/Company3';

import { StyledNavLink, ClientPageContainer } from './styles';

function Client() {
  return (
    <ClientPageContainer>
      <StyledNavLink
        to="/clients/company1"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        Company1
      </StyledNavLink>
      <StyledNavLink
        to="/clients/company2"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        Company2
      </StyledNavLink>
      <StyledNavLink
        to="/clients/company3"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        Company3
      </StyledNavLink>
    </ClientPageContainer>
  );
}

export default Client;
