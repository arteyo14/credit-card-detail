import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 40%;

    .btn {
        margin-top: 1rem;
        background-color: #22092f;
        border: none;
        padding: 0.7rem;
    }

    Form.Control:focus {
        outline: none
    }
`;

const FormComps = ({ handleEventMonth, handleEventName, handleEventCardNo, handleEventCvc, handleEventYear, formatCardNo, ...props }) => {
    return (
        <StyledForm className='m-auto text'>
            <Form.Group>
                <Form.Label>CARDHOLDER NAME</Form.Label>
                <Form.Control type='text' placeholder='e.g. Jane Appleseed' onChange={(e) => handleEventName(e)} required/>
            </Form.Group>
            <Form.Group className='mt-4'>
                <Form.Label >CARD NUMBER</Form.Label>
                <Form.Control type='text' placeholder='e.g. 1234 5678 9123 0000' required onChange={(e) => handleEventCardNo(e)} maxLength={16} />
                <Form className='d-flex mt-4 w-100'>
                <Form.Group className='d-flex flex-column w-50'>
                    <Form.Label>EXP.DATE (MM/YY)</Form.Label>
                    <div className='d-flex w-100'>
                        <Form.Control className='me-2' type='text' placeholder='MM' onChange={(e) => handleEventMonth(e)} maxLength={2} required/>
                        <Form.Control className='me-3' type='text' placeholder='YY' onChange={(e) => handleEventYear(e)} maxLength={2} required />
                    </div>
                </Form.Group>
                <Form.Group className='w-50'>
                    <Form.Label>CVC</Form.Label>
                    <Form.Control className='w-100' type='text' placeholder='e.g. 123' onChange={(e) => handleEventCvc(e)} maxLength={3} required />
                </Form.Group>
            </Form>
            </Form.Group>
            <button className='btn btn-primary' type="submit">Confirm</button>
        </StyledForm>
    )
};

export default FormComps;