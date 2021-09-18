import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 90%;
    margin: 0 auto;
    padding: 3em 0em 2em 0;
`;

const Head = styled.h1`
    text-align: center;
    color: white;
    `;
    
const Text = styled.p`
    text-align: center;
    color: white;
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