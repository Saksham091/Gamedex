import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Info from './Components/Game Page/main_info/Info'
import Mission from './Components/Game Page/mission_info/mission'
import Login from './Components/Login/login';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
