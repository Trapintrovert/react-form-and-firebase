import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';


const Header = ({ currentUser }) =>(
    <div>
        <nav className="navbar navbar-light bg-dark text-white">
            <div className="container">
                <h2 className="navbar-brand text-white" >React</h2>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                    {
                        currentUser ? 
                        <span className='nav-link text-white' onClick={()=> auth.signOut()}>
                            Sign Out
                        </span>
                        :

                        <Link className="nav-link text-white" to='/signin'>
                            Login
                        </Link>
                    }
                    </li>
                </ul>
            </div>
        </nav>
    </div>

)

export default Header;