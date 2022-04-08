>to install react router
    npm i react-router-dom

## App.js

    import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

---

       <Router>
            <Navbar />
                <Routes>
                    <Route exact path='/home' element={ <Home /> } ></Route>
                    <Route path='/about' element={ <About /> } ></Route>
                    <Route path='/contact' element={ <Contacts /> } ></Route>
                    <Route path='/service' element={ <Service /> } ></Route>
                    <Route path='*' element={ <Error404 /> } ></Route>
                </Routes>
            <Footer />
        </Router>

---

## Navbar.jsx

    import { Link } from 'react-router-dom'

    <li className='app__navbar-list app__flex' key={index}>
        <Link to={`${menu}`}>{menu}</Link>
    </li>
