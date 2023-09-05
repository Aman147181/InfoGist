import Header from "./components/Header"
import Desc from "./components/Desc"
import "./index.css"
import Main from "./components/Main"
export default function App() {
  return (
    <div className=''> 
<div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100 to-purple-200 dark:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] dark:from-blue-700 dark:via-blue-800 dark:to-gray-900 w-screen min-h-screen ">
      <Header />
      <Desc />
      <Main/>
    </div>
    </div>
    
  )
}

