import React from 'react'
import LightPng from '../../assets/website/light-mode-button.png';
import DarkModePng from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const [theme, settheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;
    React.useEffect(() => {
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    }, [theme])
  return (
    <div className='relative'>
        <img src={LightPng} onClick = {() => settheme(theme ==="light" ? "dark" : "light")} alt="" className={`w-12 cursor-pointer drop-shadow-md transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>
        <img src={DarkModePng} onClick = {() => settheme(theme ==="light" ? "dark" : "light")} alt="" className='w-12 cursor-pointer drop-shadow-md transition-all duration-300' />
    </div>
  )
}

export default DarkMode