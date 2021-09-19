import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 90%;
    margin: 0 auto;
    padding: 0em 0em 2em 0;

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        grid-area: content;
        align-self: center;
        max-width: min(80%, 550px);
      }
`;

const Head = styled.h1`
    text-align: center;
    color: white;

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        text-align: left;
    }
    `;
    
const Text = styled.p`
    text-align: center;
    color: white;

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        text-align: left;
    }
`;

const Dummy = styled.div`
    height: ${props => props.height};
`;

export default () => {
    return (
        <Wrapper>
            <Head>
                Learn to code by watching others
            </Head>
            <Dummy height='1em' />
            <Text>
                See how experienced developers solve problems in real-life. Watching scripted tutorials is great, but understanding how developers think is invaluable.
            </Text>
        </Wrapper>
    )
}