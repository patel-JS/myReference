import React, { useEffect, useState } from 'react'

const Useeffect = () => {

    const [count, setCount] = useState(5);

    useEffect(() => {
        document.title = `Chats (${count})`
    })



    return (

        <>

            <div className="container">
                <button  onClick={() => setCount(count+1)} > + </button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count - 1)} > - </button>
            </div>

        </>

    )
}

export default Useeffect