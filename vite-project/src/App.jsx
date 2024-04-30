import { useState } from 'react'
import discordLogo from './assets/discord-logo-bg.png'
import menu from './assets/menu-icon-bg.png'
import image from './assets/discord-background.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <div className='Nav' >
        <img src={discordLogo} alt="" />
        <img src={menu} alt=''/>
      </div>
      <div className='Page'>
      <h1>Imagine a place...</h1>
      <p>…où tu pourrais faire partie d'un club scolaire, d'un groupe de gamers ou d'une communauté d'art internationale. Un endroit où toi et ta bande d'amis pouvez simplement passer du temps ensemble. Un endroit qui permettrait plus facilement de discuter tous les jours et de se retrouver plus souvent.</p>
      <button className='Btn1'>Download for Mac</button>
      <button className='Btn2'>Open Discord on your browser</button>
      </div>
      <img src={image} alt="" />
    </div>
    </>
  )
}

export default App
