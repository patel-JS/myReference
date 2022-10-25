>to install react router
    npm i react-router-dom

## App.js

    import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

---

       <Router>
            <Navbar />
                <Routes>
                    <Route exact path='/' element={ <Home /> } ></Route>
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

     <div className="app__navbar--links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/shop">Shop</Link>
     </div>
