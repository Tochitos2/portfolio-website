import react, { useState } from 'react';
import {ThemeProvider} from 'styled-components';

import Container from './components/Container';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import About from './components/About';
import CV from './components/CV';
import Contact from './components/Contact';
import ThemeToggleButton from './components/ThemeToggleButton';


const lightTheme = {
  primary: '#FFF',
  secondary: '#000',
  textColour: '#000',
  fontFamily: "'Raleway', sans-serif",
  fontWeight: '300',
  borderColour: '#AAA',
  backgroundInvert: 0,
  toggleIcon: "sunset.svg"
};

const darkTheme = {
  primary: '#000',
  secondary: '#FFF',
  textColour: '#FFF',
  fontFamily: "'Raleway', sans-serif",
  fontWeight: '300',
  borderColour: '#EEE',
  backgroundInvert: 1,
  toggleIcon: "sunrise.svg"
}

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <NavBar />
        <Projects />
        <About />
        <CV />
        <Contact />
        <ThemeToggleButton OnClick={ toggleTheme } toggleIcon= { theme === 'light' ? lightTheme.toggleIcon : darkTheme.toggleIcon }/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
