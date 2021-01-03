import Body from './components/Body';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import About from './components/About';
import CV from './components/CV';
import Contact from './components/Contact';
import ThemeProvider from 'styled-components';

let theme = {
  primary: '',
  secondary: '',
  text: '',
  darkMode: 'true'
};

const ToggleTheme = () => {
  
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <NavBar />
        <Projects />
        <About />
        <CV />
        <Contact />
      </Body>
    </ThemeProvider>
  );
}

export default App;
