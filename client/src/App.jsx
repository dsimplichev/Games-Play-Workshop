import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home'
import GameList from './components/game-list/GameList'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCreate from './components/game-create/GameCreate'

function App() {


  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/games/create" element={<GameCreate />} />
      </Routes>


    </div>
  )
}

export default App
