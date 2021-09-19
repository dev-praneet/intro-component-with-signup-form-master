import styled from 'styled-components';
import Theme from './Components/Theme';
import { GlobalStyle } from './Components/GlobalStyle';
import Content from './Components/Content';
import Ad from './Components/Ad';
import Details from './Components/Details';

import bgMobile from './images/bg-intro-mobile.png';
import bgDesktop from './images/bg-intro-desktop.png';

const Container = styled.div`
  padding: 4em 0em 3em 0em;
  background: ${props => props.theme.color.red} url(${bgMobile}) no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoint.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
    'content ad'
    'content details';
    max-width: 1500px;
    margin: 5em auto 0 auto;
    padding: 4em 3em 3em 2em;
    background: ${props => props.theme.color.red} url(${bgDesktop}) no-repeat;
  }
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