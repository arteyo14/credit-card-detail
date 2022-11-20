import bg from '../../assets/bg-main-desktop.png';
import styled from 'styled-components';
import CardFront from '../CardFront/CardFront';

const StyledDiv = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: 35rem;
    height: 100vh;
`;

const NavSideComp = () => {
    return (
        <StyledDiv>
            <CardFront/>
        </StyledDiv>
    )
};

export default NavSideComp;