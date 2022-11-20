import bg from '../../assets/bg-card-back.png';
import styled from 'styled-components';

const StyledDiv = styled.div`
    position: relative;
    top: 15rem;
    right: -20rem;
    
    .img-back {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 10px;
    }

    .cvv {
        position: absolute;
        top: 6.8rem;
        right: 13rem;
        color: #fff;
        font-size: 1rem;
    }
`;

const CardBackComp = ({ ...props }) => {
    return (
        <StyledDiv>
            <img src={bg} alt="card-back" className='img-back' />
            <p className='cvv'>000</p>
        </StyledDiv>
    )
};

export default CardBackComp;