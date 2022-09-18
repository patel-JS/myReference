import React, { useRef } from 'react'

const Useref_DOM = () => {

    const element = useRef();

    const handleClick = () => {
        element.current.style.backgroundColor = "red";
        element.current.style.color = "white";
    }


    return (

        <>

            <div className="container col-6">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={element} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
            </div>

        </>


    )
}

export default Useref_DOM