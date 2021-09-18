import styled from 'styled-components';
import Theme from './Components/Theme';
import { GlobalStyle } from './Components/GlobalStyle';
import Content from './Components/Content';
import Ad from './Components/Ad';
import Details from './Components/Details';

import bgMobile from './images/bg-intro-mobile.png'


const Container = styled.div`
  background: ${props => props.theme.color.red} url(${bgMobile}) no-repeat;
  // background-color: ${props => props.theme.color.red};
  // background-position: center;
  // background-size: cover;
`;

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Container>
        <Content />
        <Ad />
        <Details />
      </Container>
    </Theme>
  )
}

export default App;