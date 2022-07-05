import React from 'react'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Logout from '../pages/Logout'
import { Route,Routes,BrowserRouter as Router, NavLink} from 'react-router-dom';
import Home from '../pages/Home';
import Create from '../Backend/Create';
import Edit from '../Backend/Edit';
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  return (
    <div>

       <Router>

       <ul>
<li>
<NavLink to="/">Home</NavLink>
</li>
<li>
<NavLink to="/About">About</NavLink>
</li>
<li>
<NavLink to="/Contact/">Contact</NavLink>
</li>
<li>
<NavLink to="/logout">logout</NavLink>
</li>
</ul>





       <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logout" element={<Logout />} />

      <Route path='/create' element={<Create/>}/>
        <Route path='/edit' element={<Edit />}/>
    </Routes>
       </Router>
    </div>
  )
}

export default Navbar