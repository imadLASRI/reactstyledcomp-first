import styled from 'styled-components';


export const Switchtheme = styled.div`
    width: auto;
    padding: 0 10px;
    height: 25px;
    margin: 20px;
    border: 3px solid darkslategrey;
    border-radius: 20px;
    background: ${props => (props.theme == 'light') ? 'black' : 'white'};
    color: ${props => (props.theme == 'light') ? 'white' : 'black'};
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
`;
