import { Form } from 'react-bootstrap';


const FormComps = ({ ...props }) => {
    return (
        <Form className='w-50 m-auto'>
            <Form.Group>
                <Form.Label>CARDHOLDER NAME</Form.Label>
                <Form.Control type='text' placeholder='e.g. Jane Appleseed' required/>
            </Form.Group>
            <Form.Group className='mt-4'>
                <Form.Label >CARD NUMBER</Form.Label>
                <Form.Control type='text' placeholder='e.g. 1234 5678 9123 0000' required/>
                <Form className='d-flex mt-4 w-100'>
                <Form.Group className='d-flex flex-column w-50'>
                    <Form.Label>EXP.DATE (MM/YY)</Form.Label>
                    <div className='d-flex w-100'>
                        <Form.Control className='me-2' type='text' placeholder='MM' required />
                        <Form.Control className='me-3' type='text' placeholder='YY' required />
                    </div>
                </Form.Group>
                <Form.Group className='w-50'>
                    <Form.Label>CVC</Form.Label>
                    <Form.Control className='w-100' type='text' placeholder='e.g. 123' required />
                </Form.Group>
            </Form>
            </Form.Group>
        </Form>
    )
};

export default FormComps;