
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
import React, {useState} from 'react';
import styled, {ThemeProvider} from "styled-components";
import { LightTheme,DarkTheme, GlobalStyle } from './components/ThemeContext';
function App() {
  const [theme, setTheme] = useState("Light");
  const themeToggler = () =>{
    theme === "Light" ? setTheme("dark"): setTheme("Light");
  }
  return (
    <ThemeProvider theme={theme === "Light" ? LightTheme : DarkTheme} >
    <GlobalStyle/>
    <div className="App">
    <button className='toggle' onClick={()=> themeToggler()}>Change Theme</button>  
    <Navigation/>
      <Main/>
    </div>
    </ThemeProvider>
  );
}

export default App;
