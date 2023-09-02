import Header from "./components/Header"
import Desc from "./components/Desc"
import "./index.css"
import Main from "./components/Main"
export default function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100 to-purple-200 w-screen min-h-screen ">
      <Header />
      <Desc />
      <Main/>
    </div>
  )
}

