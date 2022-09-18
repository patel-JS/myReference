import React, { useContext } from 'react'
import { AppContext } from './Context/userContext'


const Child = () => {

    const userData = useContext(AppContext);

  return (

    <div>
          <h1>name = {userData.name}</h1>
          <h1>Age = {userData.age}</h1>
    </div>

  )
}

export default Child