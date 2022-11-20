import NavSideComp from "./components/NavSide/NavSide";
import Form from './components/Form/Form';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
`;

function App() {
  return (
    <StyledDiv>
      <NavSideComp />
      <Form />
    </StyledDiv>
  )
}

export default App
