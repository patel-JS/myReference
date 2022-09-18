import React from 'react'
import { useState } from 'react'

const Usestate = () => {

    const [formVal, setFormVal] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    })

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormVal((data) => {
            return { ...data, [name]: value}
        })

        
    }


    return (

        <>
            <div className="container col-6 my-5">
                <form>
                    <h1>Register</h1>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" value={formVal.username}  onChange={handleInput} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formVal.email} onChange={handleInput} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formVal.password} onChange={handleInput} />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="confirm_password" value={formVal.confirm_password} onChange={handleInput} />
                    </div>

                    <button type="button" className="btn btn-primary">Submit</button>

                </form>
            </div>

            <div className="results container col-6 my-5">
                <p>{`Your username is ${formVal.username} and your email is ${formVal.email}`}</p>
            </div>
        </>

    )
}

export default Usestate