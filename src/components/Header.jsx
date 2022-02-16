import { useState, useContext } from "react";

import { createThemeContext } from '../context/ThemeContext';

export const Header = () => {

  const [darkMode, setDarkMode] = useState(false);

  const color = useContext(createThemeContext)

  const handleDarkMode = () => {
        setDarkMode(!darkMode)
  }
  return (
    <div className="Header">
      <h1 style={{color}}>ReactHooks</h1>
      <button 
        type="button" 
        className="btn-primary" 
        onClick={handleDarkMode}>
        {
            darkMode 
            ? "Dark Mode .................." 
            : "Light Mode ................."
        }
      </button>
    </div>
  );
};
