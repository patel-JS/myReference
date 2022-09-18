import React, { useContext } from 'react'
import { AppContext } from './Context/Newcontext';

const Childs = () => {

    const userData = useContext(AppContext);

  return (

    <div>
          <h1>username{userData.username}</h1>
          <h1>age{userData.age}</h1>

    </div>

  )
}

export default Childs