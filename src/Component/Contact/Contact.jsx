import React from 'react'
import classes from './contact.module.css'
const Contact = () => {
    return (
        <>
            <div className={classes.contact}>
                <div className={classes.container}>

                    <div className={classes.formContainer}>
                        <form className={classes.contact__form}>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" required />
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name="email" required />
                            <label htmlFor="message">Your Message</label>
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                            <button className={classes.submit} type="submit">Send</button>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact
