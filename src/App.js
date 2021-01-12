import Container from './components/Container';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import About from './components/About';
import CV from './components/CV';
import Contact from './components/Contact';
import {ThemeProvider} from 'styled-components';

let theme = {
  primary: '#FFF',
  secondary: '#000',
  textColour: '#000',
  fontFamily: "'Raleway', sans-serif",
  fontWeight: '300',
  borderColour: '#AAA',
  darkMode: 0
};

const ToggleTheme = () => {
  
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar />
        <Projects />
        <About />
        <CV />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

export default App;
