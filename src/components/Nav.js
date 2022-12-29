import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
       localStorage.clear();
       navigate('/signup');
    }
    return(
        <div>
            <img alt='logo'
            src='https://banner2.cleanpng.com/20181112/lhw/kisspng-morning-express-online-shopping-e-commerce-logisti-app-insights-elink-apptopia-5be98a85d56155.781165371542032005874.jpg' className='logo'
            />
            {auth?
            <ul className='nav-ul'>
                <li><Link to='/'>Product</Link></li>
                <li><Link to='/add'>Add Product</Link></li>
                <li><Link to='/update'>Update Product</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>
             
            </ul>
            :
            <ul className='nav-ul nav-right'>
                 <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
}
        </div>
    )
}

export default Nav;