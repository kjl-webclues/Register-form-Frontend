import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {  
    const { state} = useContext(UserContext);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <NavLink to='/'><button>Sign Up</button></NavLink>
                    {/* <NavLink to='/loginpage'><button>Sign In</button></NavLink> */}
                    <NavLink to='/dashbord'><button>Dashbord</button></NavLink>
                    <NavLink to='/Logout'><button>Logout</button></NavLink>
                </>
            )
        } else {
            return (
                <>
                    <NavLink to='/'><button>Sign Up</button></NavLink>
                    <NavLink to='/loginpage'><button>Sign In</button></NavLink>
                    <NavLink to='/dashbord'><button>Dashbord</button></NavLink>
                    {/* <NavLink to='/Logout'><button>Logout</button></NavLink> */}
                </>
            )
        }
    }

    return (
        <>
            <div className='nav-div'>                
                {/* {isAuth ? (<button onClick={logout}>Logout</button>):(<button onClick={login}>Login</button>)} */}
                <RenderMenu />
            </div>
        </>
    )
}

export default Navbar
