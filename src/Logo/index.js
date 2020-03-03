import styled from 'styled-components';

export const Logo = styled.div`
    width: 115px;
    height: 30px;
    background-image: url( ${props => props.imgsrc} );
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;