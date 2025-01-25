import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Info from './Components/Game Page/main_info/Info'
import Login from './Components/Login/login';
import Loading from './Components/Loading/loading.jsX';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/login' element={<Login />} />
        <Route path='/loading' element={<Loading />} />
      </Routes>
    </div>
  )
}

export default App
