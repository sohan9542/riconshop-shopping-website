import React from 'react'
import cls from './login.module.css'
import { Link } from 'react-router-dom'
const Login = () => {

    return (
        <>
            <div className={cls.login}>
                <div className={cls.container}>
                    <div className={cls.loginForm}>
                        <form>
                           <label htmlFor="email">Email *</label>
                           <input type="email" name="email" id="" required/>
                           <label htmlFor="password">Password *</label>
                           <input type="password" name="password" id="" required/>
                           <button>Log In</button>
                           <p>Do not have any account? <Link to="/signup">Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
