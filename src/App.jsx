import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Posts from "./pages/Posts"
import Todo from "./pages/Todo"
import UsersInfo from "./pages/UsersInfo"

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UsersInfo/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/todos' element={<Todo/>}/>
    </Routes>
    </>
  )
}

export default App
