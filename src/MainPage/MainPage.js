import React, { useState } from 'react'

const MainPage = () => {

  const [expression,setExpression]=useState("");

  const HandleNum = (event) => {
    setExpression(prev=> prev+ event.target.innerHTML);
  }

  const HandleReset = () => {
    setExpression("");
  }
  
  const HandleClear = () => {
    try{
      setExpression(expression.slice(0,expression.length-1).toString());
    }catch(error){
      setExpression(expression)
      alert('C button is Not Applicable For Expression')
    }
  }
  
  const HandleResult = () => {
    try{
      setExpression(eval(expression));
    }catch(error){
      alert("Invalid Expression");
    }
  }

  return (
    <div className='grid place-content-center left-[39%] top-[50%] bottom-[50%] absolute w-[320px]'>
          <input type="text" value={expression}/>
      <div className='calculator'>
          <button id='clear-button' className="high-btn" onClick={HandleReset}>AC</button>
          <button className='high-btn' onClick={HandleClear}>C</button>
          <button className='high-btn' onClick={HandleNum}>%</button>
          <button onClick={HandleNum}>7</button>
          <button onClick={HandleNum}>8</button>
          <button onClick={HandleNum}>9</button>
          <button className='high-btn' onClick={HandleNum}>/</button>
          <button onClick={HandleNum}>4</button>
          <button onClick={HandleNum}>5</button>
          <button onClick={HandleNum}>6</button>
          <button className='high-btn' onClick={HandleNum}>*</button>
          <button onClick={HandleNum}>1</button>
          <button onClick={HandleNum}>2</button>
          <button onClick={HandleNum}>3</button>
          <button className='high-btn' onClick={HandleNum}>-</button>
          <button onClick={HandleNum}>0</button>
          <button onClick={HandleNum}>.</button>
          <button className='high-btn' onClick={HandleResult}>=</button>
          <button className='high-btn' onClick={HandleNum}>+</button>
      </div>
    </div>
  )
}

export default MainPage