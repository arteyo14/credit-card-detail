import { useState } from 'react'
import NavSideComp from "./components/NavSide/NavSide";
import Form from './components/Form/Form';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
`;

function App() {
  const [cardNo, setCardNo] = useState('0000 0000 0000 0000');
  const [name, setName] = useState('jane appleseed'.toUpperCase());
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [cvc, setCvc] = useState('000');
  
  const handleEventCardNo = (e) => {
    let value = e.target.value;
    let format;
    if (value.length === 0) {
      setCardNo('0000 0000 0000 0000');
    } else {
      format = value.trim().split('').map((data, index) => {
        if ((index + 1) % 4 == 0) {
          data = data + ' ';
        }
        return data
      })

      return setCardNo(format.join(''))
    }
  }

  const handleEventName = (e) => {
    let nameUser = e.target.value;
    return !nameUser ? setName('jane appleseed'.toUpperCase()) : setName(nameUser.toUpperCase());
  }

  const handleEventMonth = (e) => {
    let monthNo = e.target.value;
    return !monthNo ? setMonth('00')  : setMonth(monthNo);
  }

  const handleEventYear = (e) => {
    let yearNo = e.target.value;
    return !yearNo ? setYear('00') : setYear(yearNo);
  }

  const handleEventCvc = (e) => {
    let cvcNo = e.target.value;
    return !cvcNo ? setCvc('000') : setCvc(cvcNo);
  }

  return (
    <StyledDiv>
      <NavSideComp 
      cardNo={cardNo} 
      name={name} 
      month={month}
      year={year}
      cvc={cvc}
      />
      <Form 
      handleEventCardNo={handleEventCardNo} 
      handleEventName={handleEventName} 
      handleEventMonth={handleEventMonth} 
      handleEventYear={handleEventYear}
      handleEventCvc={handleEventCvc}
      />
    </StyledDiv>
  )
}

export default App
