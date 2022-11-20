import bg from '../../assets/bg-card-back.png';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 0;
    position: relative;
    top: 15rem;
    right: -20rem;
    overflow: hidden;
    
    .img-back {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 10px;
    }

    .cvv {
        position: absolute;
        top: 6.8rem;
        right: 14.5rem;
        color: #fff;
        font-size: 1rem;
    }
`;

const CardBackComp = ({ cvc, ...props }) => {
    return (
        <StyledDiv>
            <img src={bg} alt="card-back" className='img-back' />
            <p className='cvv'>{cvc}</p>
        </StyledDiv>
    )
};

export default CardBackComp;