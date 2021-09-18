import styled from "styled-components";


const Wrapper = styled.div`
    max-width: 90%;
    margin: 1em auto;
    padding: 0.4em 0;
    border: 2px solid hsl(246, 25%, 92%);
    border-radius: 0.3em;
    background-color: white;
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
        <Wrapper>
            <Input placeholder={props.placeholder}/>
        </Wrapper>
    )
}