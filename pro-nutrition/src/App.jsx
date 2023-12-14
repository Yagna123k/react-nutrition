import './App.css'
import Food from './components/Food'
import Search from './components/Search'
import foodData from './resources/FoodData'
import React, { useState } from 'react'



function App(){

  const [search, setSearch] = useState('')
  const[count,setCount] = useState(0)

  return (
    <>
    <h1>PRO NUTRITION🍅</h1>
    <Search setSearch={setSearch}/>

    {foodData.filter((e)=>{
      return e.name.toLowerCase().includes(search.toLowerCase())
    }).map((e,i)=>{
      return <Food key={i} data={e} index={i}/>
    })}

    </>
  )
}

export default App