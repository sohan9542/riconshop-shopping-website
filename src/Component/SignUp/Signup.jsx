import React from 'react'
import classes from './signup.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { updateProfile } from "firebase/auth";
const Signup = () => {
    const [username, setUsername] = useState('')
    const [useEmail, setUseEmail] = useState('')
    const [usePassword, setUsePassword] = useState('pass123')
    const [useConfirmPassword, setUseConfirmPassword] = useState('pass123')
    const [success, setSuccess] = useState(false)

    const handleUserName = (name) => {
        setUsername(name)
    }
    const handleUserEmail = (email) => {
        setUseEmail(email)
    }
    const handleUserPassword = (pass) => {
        setUsePassword(pass)
    }
    const handleUserConfirmPassword = (pass) => {
        setUseConfirmPassword(pass)
    }
    const auth = getAuth();
    const [errormsg, setErrormsg] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, useEmail, usePassword)
            .then(() => {
                setSuccess(true)
            })
            .catch((error) => {
                setErrormsg(error.message)
            });


        console.log(username, useEmail, usePassword, useConfirmPassword);
    }
    const history = useHistory()
    const gotoLogin = () => {
        updateProfile(auth.currentUser, {
            displayName: username
        }).then(() => {
        }).catch((error) => {
            setErrormsg(error.message)
        });
        history.push('/login')
    }



    const handleGogleSignUp = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                setSuccess(true)
            }).catch((error) => {
                setErrormsg(error)
            });
    }

    return (
        <>
            <div className={classes.signup}>
                <div className={classes.container}>
                    {success ?
                        <div className={classes.success}>
                            <img src="data:image/png;base64,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" alt="" />
                            <h2>Sign Up SuccessFull</h2>
                            <div style={{ display: 'none' }}>
                                {
                                    setTimeout(() => {
                                        gotoLogin()
                                    }, 2000)
                                }
                            </div>
                        </div>
                        :
                        <div className={classes.signupContainer}>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <label htmlFor="Username">Username *</label>
                                <input type="text" name="Username" id="" required onBlur={(e) => handleUserName(e.target.value)} />
                                <label htmlFor="Email" >Email *</label>
                                <input type="email" onBlur={(e) => handleUserEmail(e.target.value)} name="Email" id="" required />
                                <label htmlFor="Password">Password *</label>
                                <input type="password" name="Password" onChange={(e) => handleUserPassword(e.target.value)} id="" required />
                                <label htmlFor="Password">Confirm Password *</label>
                                <input type="password" name="Password" onChange={(e) => handleUserConfirmPassword(e.target.value)} id="" required />
                                {(usePassword.length >= 6) || <p style={{ color: 'red' }}>Your Password Must be 6 Charecters Or More</p>}
                                {(usePassword === useConfirmPassword) || <p style={{ color: 'red' }}>Your Password Does Not Match</p>}
                                {(usePassword === useConfirmPassword) && (usePassword.length >= 6) ? <button type="submit">Sign Up</button> :
                                    <button type="submit" style={{ background: 'red', borderColor: 'red' }} disabled>Sign Up</button>}
                                <div className={classes.signupWithGogle}>
                                    <button type="button" onClick={handleGogleSignUp}>Sign Up With Gogle</button>
                                </div>
                                <p>Already Have An Account? <Link to="/login">Log In</Link></p>
                                {errormsg && <p style={{ color: 'red', marginTop: '10px' }}>{errormsg}</p>}
                            </form>
                        </div>

                    }
                </div>
            </div>
        </>
    )
}

export default Signup
