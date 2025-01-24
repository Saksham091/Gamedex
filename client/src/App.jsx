import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Info from './Components/Game Page/main_info/Info'
import Mission from './Components/Game Page/mission_info/mission'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/mission' element={<Mission />} />
      </Routes>
    </div>
  )
}

export default App
