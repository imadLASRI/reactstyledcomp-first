import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    height: 45px;
    margin: 8px 0;
    padding: 0 25px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #efefef;
    border-radius: 30px;
    color: #737373;
    font-size: 15px;

    &:hover, &:focus{
        border-color: #00abe9;
    }

    &:before {
        content: "${props => (props.dateInput) ? props.placeholder : ''}";
        margin-right: 5px;
    }
`;