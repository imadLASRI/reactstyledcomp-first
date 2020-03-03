import styled from 'styled-components';

export const Checkboxcontainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: ${ props => (props.flexCol) ? 'column' : 'row'};
    margin-bottom: ${ props => (props.flexCol) ? '25px' : '10px'};
    margin-top: ${ props => (props.flexCol) ? '10px' : '0'};
`;