import styled from 'styled-components';

export const Formtitle = styled.h1`
    color: ${props => (props.theme == 'light') ? 'black' : 'white'};;
    font-size: 30px;
    margin-bottom: 45px;
`;