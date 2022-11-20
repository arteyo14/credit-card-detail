import { useState } from 'react'
import NavSideComp from "./components/NavSide/NavSide";
import Form from './components/Form/Form';
import styled from 'styled-components';
import { useEffect } from 'react';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
`;

function App() {
  const [format, setFormat] = useState('0000 0000 0000 0000')

  
  const handleEventCardNo = (e) => {
    let value = e.target.value;
    let format = value.trim().split('').map((data, index) => {
      if ((index + 1) % 4 === 0) {
        data = data + " ";
      }
      return data;
    })

    return setFormat(format.join(''))
  }

  const handleEventName = (e) => {
    let value = e.target.value;
  }

  return (
    <StyledDiv>
      <NavSideComp format={format} />
      <Form handleEventCardNo={handleEventCardNo} />
    </StyledDiv>
  )
}

export default App
