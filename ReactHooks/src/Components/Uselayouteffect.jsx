import React, { useLayoutEffect, useState, useEffect } from 'react'


const Uselayouteffect = () => {

    const [num, setNum] = useState(0)

    useLayoutEffect(() => {
        if (num === 0) {
            const randomNum = (Math.random() * 10)
            setNum(randomNum.toFixed(2))
        }
    }, [num])


    return (

        <>

            <div className="container">
                <h1>{num}</h1>
                <button onClick={() => setNum(0)} >Generate Number</button>
            </div>

        </>

    )
}

export default Uselayouteffect