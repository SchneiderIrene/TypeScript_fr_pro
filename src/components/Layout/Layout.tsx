import {
  LayoutComponent,
  Header,
  Main,
  Footer,
  HeaderLogoContainer,
  HeaderLogo,
  StyledNavLink,
  NavContainer,
} from './styles';
import { LayoutProps } from './types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Layout({ children }: LayoutProps) {

//const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
        <HeaderLogoContainer>
      {/* onClick={()=>navigate('/')} */}
      
          <Link to="/">
            <HeaderLogo />
          </Link>
        </HeaderLogoContainer>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/client"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Client
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
