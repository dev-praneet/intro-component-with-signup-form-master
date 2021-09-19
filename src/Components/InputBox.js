import styled, { css } from "styled-components";


const Wrapper = styled.div`
    position: relative;
    max-width: 90%;
    margin: 1.4em auto;
    padding: 0.4em 0;
    border: 2px solid hsl(246, 25%, 92%);
    border-radius: 0.3em;
    background-color: white;

    ${props =>
        props.error &&
        css`
        border: 2px solid red;

        &::after {
            content: ${props => props.errorMsg};
            font-size: 0.6em;
            position: absolute;
            right: 0em;
            top: 4.2em;
            color: ${props => props.theme.color.red};
        }
        `};
`;

const Input = styled.input.attrs(props => ({}))`
    width: 100%;
    border: 0;
    padding-left: 1em;

    &:focus {
        outline: none;
    }
    
    &::placeholder {
        font-weight: 600;
        border: 2px solid red;
        color: ${props => props.theme.color.darkBlue};
        opacity: 0.6;
    }
    
    &:focus::placeholder {
        opacity: 0.9;
    }

`;

export default (props) => {
    return (
        <Wrapper error={props.error} errorMsg={props.errorMsg}>
            <Input placeholder={props.placeholder} onChange={props.onChange} onClick={props.onClick}/>
        </Wrapper>
    )
}