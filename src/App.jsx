import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl px-3 py-2 rounded-xl'>
          <button 
          onClick={() => setColor("red")}
          className='rounded-full px-4 py-1 outline-none text-white shadow-xl' 
          style={{backgroundColor : "red "}}
          > red
          </button>
          <button
          onClick={() => setColor("blue")}
          className='rounded-full px-4 py-1 outline-none text-white shadow-xl' 
          style={{backgroundColor : "blue "}}
          > blue
          </button>
          <button
          onClick={()=> setColor("green")} 
          className='rounded-full px-4 py-1 outline-none text-white shadow-xl' 
          style={{backgroundColor : "green "}}
          > green
          </button>
          <button
          onClick={()=> setColor("black")} 
          className='rounded-full px-4 py-1 outline-none text-white shadow-xl' 
          style={{backgroundColor : "black "}}
          > black
          </button>
          <button
          onClick={()=> setColor("pink")} className='rounded-full px-4 py-1 outline-none text-white shadow-xl' 
          style={{backgroundColor : "pink "}}
          > pink
          </button>
          <button
          onClick={()=>setColor("yellow")} 
          className='rounded-full px-4 py-1 outline-none text-white shadow-xl' 
          style={{backgroundColor : "yellow "}}
          > yellow
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
