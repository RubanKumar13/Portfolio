import React, { useState } from 'react'
function In() {
    var [count,setcount]=useState(0);
    var inc=()=>(
        setcount(count+1) 
    )
    var dec=()=>(
        setcount(count-1)
    )
    var n=()=>{
        setcount(0)
    }
  return (
    <>
    <h1>Count is:{count}</h1>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrement</button>
    <button onClick={n}>n</button>
    </>
  )
}


export default In