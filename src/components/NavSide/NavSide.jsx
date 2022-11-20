import bg from '../../assets/bg-main-desktop.png';
import styled from 'styled-components';
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

const StyledDiv = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: 35rem;
    height: 100vh;
`;

const NavSideComp = ({ format, ...props }) => {
    return (
        <StyledDiv>
            <CardFront format={format} {...props} />
            <CardBack/>
        </StyledDiv>
    )
};

export default NavSideComp;