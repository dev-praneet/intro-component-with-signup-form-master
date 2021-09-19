import { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';

const Wrapper = styled.div`
    max-width: 90%;
    margin: 0 auto;
    background-color: white;
    padding: 0.5em 0 1.5em 0;
    border-radius: 0.5em;
    box-shadow: 0 7px hsl(0, 100%, 71%);
`;

const Button = styled.button`
    display: block;
    width: 90%;
    // max-width: 90%;
    margin: 0 auto;
    padding: 1em 2em;
    border: 0;
    border-radius: 0.3em;
    box-shadow: 0 3px hsl(154, 59%, 45%);
    background-color: ${props => props.theme.color.green};
    
    &:hover {
        background-color: hsl(154, 65%, 41%);

        & p {
            color: hsl(0, 25%, 95%);
        }
    }
`;
    
    const CTAText = styled.p`
    color: white;
    font-weight: 600;
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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongFirstName, setWrongFirstName] = useState(false);
    const [wrongLastName, setWrongLastName] = useState(false);
    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPassword, setWrongPassword] = useState(false);

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    function submitHandler() {
        console.log('submit handler function is being called on click');
        if (firstName == '') {
            console.log('the state of wrongFirstName prior to click is ', wrongFirstName)
            setWrongFirstName(true);
            console.log('first name submit handler working');
            console.log('the state of firstName after click is ', wrongFirstName)
            
        };
        if (lastName == '') {
            setWrongLastName(true);
            console.log('last name submit handler working');
        };
        if (!emailRegex.test(email)) {
            setWrongEmail(true)
            console.log('email submit handler working');
        };
        if (password == '') {
            setWrongPassword(true);
            console.log('password submit handler working');
        };
    }

    useEffect(() => {console.log('The state of wrongFirstName changed to ', wrongFirstName)}, [wrongFirstName])

    return (
        <Wrapper>
            <InputBox placeholder='First Name' onChange={event => {setFirstName(event.target.value)}} onClick={() => {setWrongFirstName(false); console.log('the click on the input box was registered')}} error={wrongFirstName} errorMsg="'First Name cannot be empty'"/>
            <InputBox placeholder='Last Name' onChange={event => {setLastName(event.target.value); console.log('the last name changed to ', lastName)}} onClick={() => setWrongLastName(false)} error={wrongLastName} errorMsg="'Last Name cannot be empty'"/>
            <InputBox placeholder='Email Address' onChange={event => {setEmail(event.target.value)}} onClick={() => setWrongEmail(false)} error={wrongEmail} errorMsg="'Looks like this is not an email'"/>
            <InputBox placeholder='Password' onChange={event => {setPassword(event.target.value)}} onClick={() => setWrongPassword(false)} error={wrongPassword} errorMsg="'Password cannot be empty'" /> 
            <Button onClick={submitHandler}>
                <CTAText>
                    CLAIM YOUR FREE TRIAL
                </CTAText>
            </Button>
            <Dummy height='10px'/>
            <Disclaimer>
                By clicking the button, you are agreeing to our <TandC> Terms and Services</TandC>
            </Disclaimer>
        </Wrapper>
    )
}