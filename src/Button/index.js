import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    height: 45px;
    outline: none;
    box-sizing: border-box;
    border-radius: 30px;
    border: 0;
    color: white;
    font-size: 14px;
    font-weight: bold;
    background: #00abe9;
    text-align: center;
    text-transform: uppercase;

    &:hover{
        background: #167ca1;
        cursor: pointer;
    }
`;