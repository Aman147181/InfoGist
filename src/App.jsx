import Header from "./components/Header"
import Desc from "./components/Desc"
import "./index.css"
import Main from "./components/Main"
import { useState } from "react"
export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleDarkTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };
  return (
    <div className={darkTheme?'dark':''}> 
<div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100 to-purple-200 dark:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] dark:from-blue-700 dark:via-blue-800 dark:to-gray-900 w-screen min-h-screen ">
<Header darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
      <Desc />
      <Main/>
    </div>
    </div>
    
  )
}

