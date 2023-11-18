import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home'
import GameList from './components/game-list/GameList'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'

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
        <Route path="/games/:gameId" element={<GameDetails />} />
      </Routes>


    </div>
  )
}

export default App
