import './App.css'
import Food from './components/Food'
import Search from './components/Search'
import FoodData from './resources/FoodData'
import foodData from './resources/FoodData'
import React, { useState } from 'react'



function App(){

  const [search, setSearch] = useState('')
  const Data = foodData.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
    <h1>PRO NUTRITION🍅</h1>
    <Search setSearch={setSearch}/>
    {Data.map((e,i)=>{
      return <Food key={i} data={e} index={i} />
    })}
    {
      !(Data.length) && <h2>No Food Result Found</h2>
    }
    </>
  )
}

export default App