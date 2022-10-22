import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import ScrollTop from './components/ScrollTop';
import { Toggle } from './components/Toggle';
import { UseDarkMode } from './components/UseDarkMode';
import { GlobalStyle, lightTheme, darkTheme } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import './App.css'


function App() {
  const [theme, toggleTheme] = UseDarkMode();
 
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
   <ThemeProvider theme={themeMode}>
   <Router>
      <GlobalStyle />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <ScrollTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   </Router>
   </ThemeProvider>
  )
}

export default App
