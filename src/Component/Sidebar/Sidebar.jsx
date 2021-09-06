import React from 'react'
import classes from './sidebar.module.css'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Sidebar = (props) => {
    const { show, isLogIn, useInfo, setIsLogIn, setUserInfo , setIsSignOut} = props;

    const auth = getAuth();
    const logOut = () =>{
        signOut(auth).then(() => {
            setIsLogIn(false)
            setUserInfo({})
            setIsSignOut(true)
            history.push('/login')
        }).catch((error) => {
            console.log(error);
        });
    }
    const history = useHistory()

    return (
        <>
           {isLogIn && <div className={classes.sidebar} style={show ? { transform: 'translateX(0px)' } : { transform: 'translateX(3000px)' }}>
                <div className={classes.sidebarContainer}>
                    {isLogIn && <div className={classes.logedInUser}>
                        <div className={classes.user__image}>
                            <img src={useInfo.photoURL} alt="" />
                        </div>
                        <div className={classes.user__info}>
                            <h5>{useInfo.displayName}</h5>
                            <p>{useInfo.email}</p>
                        </div>
                    </div>}
                    <div className={classes.sidebar__options}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={classes.log}>
                        {isLogIn ? <li><Link to="" onClick={logOut}>Log Out</Link></li>
                            : <li><Link to="/login">Log In</Link></li>}
                    </div>
                </div>

            </div>}
        </>
    )
}

export default Sidebar
