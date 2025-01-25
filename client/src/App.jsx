import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Info from './Components/Game Page/Info'
import Login from './Components/Login/login';
import Loading from './Components/Loading/loading.jsX';
import Intro from './Components/Intro/Intro'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/login' element={<Login />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/intro' element={<Intro />} />
      </Routes>
    </div>
  )
}

export default App
