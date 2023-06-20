
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
import React, {useState} from 'react';
import styled, {ThemeProvider} from "styled-components";
import { LightTheme,DarkTheme, GlobalStyle } from './components/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import Film from './components/Films';
import Contact from './components/Contact';
import Detail from './components/Detail'

function App() {
  // const [theme, setTheme] = useState("Light");
  // const themeToggler = () =>{
  //   theme === "Light" ? setTheme("dark"): setTheme("Light");
  // }
  return (
    // <ThemeProvider theme={theme === "Light" ? LightTheme : DarkTheme} >
    // <GlobalStyle/>
    <div className="App">
   // <button className='toggle' onClick={()=> themeToggler()}>Change Theme</button>  
    <Navigation/>
      <Routes>
        <Route path='/' element={<Film/>} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
   // </ThemeProvider>
  );
}

export default App;
