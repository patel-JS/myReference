import React, {useState} from 'react'
import { useEffect } from 'react';

const Clearup = () => {

    const [screenSize, setScreenSize] = useState(window.screen.width);

    const changeScreenSize = () => {
        setScreenSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", changeScreenSize);

        return () => {
            window.removeEventListener("resize", changeScreenSize);

        }
    })
    
  return (

    <>
        {<h1>Current Screen Size is {screenSize} </h1>}
    </>


    )
}

export default Clearup
