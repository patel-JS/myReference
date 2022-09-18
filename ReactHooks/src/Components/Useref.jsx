import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {

    const [inputData, setInputData] = useState();

    const count = useRef(0);

    useEffect(() => {
        count.current += 1;
    })


    return (

        <>

            <div className="container col-6">
                <label htmlfor="inputPassword5" className="form-label">Username</label>
                <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" value={inputData} onChange={(event) => setInputData(event.target.value)} />
                <div id="passwordHelpBlock" className="form-text">
                    {`${count.current}`}
                </div>

            </div>
        </>

    )
}

export default Useref