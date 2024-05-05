import Button from 'components/Button/Button';
import {
  CompanyContainer,
  TextCompany,
  ButtonContainer,
  CompanyName,
} from '../styles';
import { StyledNavLink } from '../../../components/Layout/styles';

function Company3() {
  return (
    <CompanyContainer>
      <CompanyName>Company3</CompanyName>
      <TextCompany>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odio
        nesciunt doloremque ducimus sit reiciendis ipsum asperiores molestiae
        est itaque laudantium illum eveniet sequi, error quas assumenda
        praesentium blanditiis. Soluta maxime rerum nisi sunt assumenda
        similique dolores possimus velit, alias doloremque aut quia excepturi,
        nulla officiis laborum inventore voluptatem qui error placeat porro
        eveniet veniam. Consequuntur distinctio dignissimos reiciendis
        asperiores ut assumenda cupiditate perferendis doloribus veniam, quis
        minima odio vero ducimus quas nulla doloremque voluptate laboriosam
        quod. Earum minus beatae ducimus, suscipit ullam laudantium eveniet
        perspiciatis. Nemo facilis porro dolor eaque. Dolorum commodi culpa
        nostrum ab mollitia? Dignissimos, laborum ipsum.
      </TextCompany>
      <ButtonContainer>
        <StyledNavLink
          to="/client"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          <Button name="Go back" />
        </StyledNavLink>
      </ButtonContainer>
    </CompanyContainer>
  );
}

export default Company3;
