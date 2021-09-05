import React from 'react'
import classes from './signup.module.css'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <>
            <div className={classes.signup}>
                <div className={classes.container}>
                    <div className={classes.signupContainer}>
                        <form>
                            <label htmlFor="Username">Username *</label>
                            <input type="text" name="Username" id="" required />
                            <label htmlFor="Email">Email *</label>
                            <input type="email" name="Email" id="" required />
                            <label htmlFor="Password">Password *</label>
                            <input type="password" name="Password" id="" required />
                            <label htmlFor="Password">Confirm Password *</label>
                            <input type="password" name="Password" id="" required />
                            <button>Sign Up</button>
                            <div className={classes.signupWithGogle}>
                                <button>Signup With Gogle</button>
                            </div>
                            <p>Already Have An Account? <Link to="/login">Log In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
