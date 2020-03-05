import styled from 'styled-components';

export const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 100%; */
    height: 75px;
    padding: 22px 50px;
    background-color: ${props => (props.theme === 'light') ? 'black' : 'darkslategrey'};
`;