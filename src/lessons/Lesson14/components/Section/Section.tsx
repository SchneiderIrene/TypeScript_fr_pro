import Content from '../Content/Content';
import { SectionComponent, SectionTitle } from './styles';


function Section() {
  return (
    <SectionComponent>
      <SectionTitle>Section Block</SectionTitle>
      <Content />
    </SectionComponent>
  );
}

export default Section;
