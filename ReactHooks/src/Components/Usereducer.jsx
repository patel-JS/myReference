import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'
import { useReducer } from 'react'

const Usereducer = () => {

  const initialValue = 5;

  const reducer = (count, action) => {
    if (action.type == "INCR"){
      return count += 1;
    }

    if(action.type == "DECR"){
      if(count>0){
        return count -= 1;
      }

    }
    return count;

  }

  const [count, dispatch]  = useReducer(reducer, initialValue)




  return (

    <>
    <div className="container">
        <button onClick={() => dispatch({type : "INCR"}) }>+</button>
        <h1>{count}</h1>
        <button onClick={ () => dispatch({type : "DECR"})} >-</button>
    </div>
    </>

  )
}

export default Usereducer