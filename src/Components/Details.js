import styled from 'styled-components';
import InputBox from './InputBox';

const Wrapper = styled.div`
    max-width: 90%;
    margin: 0 auto;
    background-color: white;
    padding: 0.5em 0;
    border-radius: 0.5em;
`;

const Button = styled.button`
    display: block;
    max-width: 90%;
    margin: 0 auto;
    padding: 1em 2em;
    border: 0;
    border-radius: 0.3em;
    box-shadow: 0 3px hsl(154, 59%, 45%);
    background-color: ${props => props.theme.color.green};
`;

const Disclaimer = styled.p`
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
    color: ${props => props.theme.color.grayishBlue};
    font-size: 0.7rem;
`;

const Dummy = styled.div`
    height: ${props => props.height};
`;

const TandC = styled.span`
    color: ${props => props.theme.color.red};
    font-weight: 600;
`;

export default () => {
    return (
        <Wrapper>
            <InputBox placeholder='First Name'/>
            <InputBox placeholder='Last Name'/>
            <InputBox placeholder='Email Address'/>
            <InputBox placeholder='Password'/>
            <Button>
                <p style={{color: 'white', fontWeight: '600'}}>
                    CLAIM YOUR FREE TRIAL
                </p>
            </Button>
            <Dummy height='10px'/>
            <Disclaimer>
                By clicking the button, you are agreeing to our <TandC> Terms and Services</TandC>
            </Disclaimer>
        </Wrapper>
    )
}