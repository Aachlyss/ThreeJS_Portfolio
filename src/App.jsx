import styled from 'styled-components';
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";  // Ensure these components are imported if used
import Work from "./components/Works"; // Ensure these components are imported if used
import Test from './components/Test';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Work/>
      <Contact/>
    </Container>
    
  );
}

export default App;