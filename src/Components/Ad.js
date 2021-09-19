import styled from "styled-components";

const Wrapper = styled.div`
    background-color: ${props => props.theme.color.blue};
    width: 90%;
    margin: 0 auto 1em auto;
    padding: 1em 0em;
    border-radius: 0.5em;
    box-shadow: 0 7px hsl(0, 100%, 71%);

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        grid-area: ad;
        max-width: min(80%, 550px);
      }
`;

const Text = styled.p`
    color: white;
    text-align: center;
`;

export default () => {
    return (
        <Wrapper>
            <Text>
                <p>
                <span style={{fontWeight: '500'}}>Try it free 7 days </span> then $20/mo. thereafter
                </p>
            </Text>
        </Wrapper>
    )
}