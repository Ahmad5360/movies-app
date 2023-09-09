import React from "react";
import "./ToggleSwitch.css";
import { useEffect , useState } from "react";
  
const ToggleSwitch = ({ label }) => {
  // const toggletheme = () => {
  //   alert('Theme');
  
  

  const [theme, setTheme] = useState("light-theme");
  const toggletheme = () => 
  {
    
    theme ==='dark-theme' ? setTheme('light-theme') : setTheme('dark-theme');
  }
 
  
  useEffect (() => {
    document.body.className=theme;

  },[theme]);
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} onClick={() => (toggletheme())} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

  
export default ToggleSwitch;