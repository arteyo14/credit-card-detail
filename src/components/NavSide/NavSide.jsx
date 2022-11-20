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

const NavSideComp = ({ month, cardNo, name, cvc, year, ...props }) => {
    return (
        <StyledDiv>
            <CardFront cardNo={cardNo} name={name} month={month} year={year} {...props} />
            <CardBack cvc={cvc} />
        </StyledDiv>
    )
};

export default NavSideComp;