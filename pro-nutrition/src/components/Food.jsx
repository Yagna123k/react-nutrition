import React, { useState } from 'react'

import './Food.css'
const Food = (props) => {

    // let {data, index} = props
    // let {cal,id,img,name} = data

    let {data:{cal,id,img,name},index} = props
    const [input ,setInput] = useState(0) 
    const [quantity ,setQuantity] = useState(0)

    const quantityHandler = () => {
        setQuantity(input)
    }

  return (
    <div className='foodbox-main'>
        <div className='foodbox-main-left'>
            <img src={img} alt="" />
            <div className='foodbox-main-left-1'>
                <h2>{name}</h2>
                <h4>{cal}</h4>
            </div>
            <div className='foodbox-main-left-2'>
                <input type="number" id='num' min={0} onChange={(e)=>{
                    setInput(e.target.value)
                }} />
                <button onClick={quantityHandler} value={input} className='add'>+</button>
             </div>
        </div>

        <div className='foodbox-main-right'>
            <h4>{name} x {quantity} = {quantity*cal} Calories</h4>
            <button onClick={()=>{
                setQuantity(0),
                setInput(0)
            }}>RESET</button>
        </div>
    </div>
  )
}

export default Food
