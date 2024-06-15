import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function  App() {
  return (
    <>
     <Navbar/>
     <Card />
    </>
  )
}

export default App