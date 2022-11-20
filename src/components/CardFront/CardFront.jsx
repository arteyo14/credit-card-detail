import bg from '../../assets/bg-card-front.png';
import styled from 'styled-components';

const StyledDiv = styled.div`
    position: relative;
    top: 10rem;
    left: 15rem;

    img {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 10px;
    }

    .sub-circle {
        position: absolute;
        top: 2.3rem;
        left: 6rem;
        border-radius: 50%;
        border: 1px solid #fff;
        width: 25px;
        height: 25px;
    }

    .circle {
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
    }

    .card-number {
        position: absolute;
        top: 9rem;
        left: 4rem;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.2rem;
    }

    .name-expire {
        position: absolute;
        top: 12.5rem;
        left: 4rem;
        display: flex;
        justify-content: space-between;
        color: #fff;
        width: 20rem;
    }
`;

const CardFront = ({ month, cardNo, name, year, ...props }) => {
    return (
        <StyledDiv>
            <img src={bg} alt="card-front" />
            <div className="circle"></div>
            <div className="sub-circle"></div>
            <p className='card-number'>{cardNo}</p>
            <div className="name-expire">
                <span>{name}</span>
                <span>{month}/{year}</span>
            </div>
        </StyledDiv>
    );
};

export default CardFront;