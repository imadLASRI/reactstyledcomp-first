import styled from 'styled-components';

export const Navicon = styled.div`
    width: 22px;
    height: 20px;
    background-image: url(${props => props.imgsrc});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    &:hover{
        background-image: url(${props => props.imgsrchover});
    }
`;
