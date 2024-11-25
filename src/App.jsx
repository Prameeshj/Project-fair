
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Project from './pages/Project'
import Footer from './components/Footer'
import Pnf from './pages/Pnf'


function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/login' element={<Auth/>}/>
    <Route path='/register' element={<Auth insideRegister={true}/>}/>
    <Route path='/project' element={<Project/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
