import { XDiamondFill } from "react-bootstrap-icons"
import { Truck } from "react-bootstrap-icons"
import { ArrowReturnRight } from "react-bootstrap-icons"
import { Cursor } from "react-bootstrap-icons"
import classes from './quality.module.css'

import React from 'react'


const Quality = (props) => {
    const { id, name, icon, theme } = props.product;
    return (
        <>
            <div className={classes.qCard}>
               <h2> <XDiamondFill /></h2>
                <h6>{name}</h6>
                <p>{theme}</p>
            </div>
        </>
    )
}

export default Quality
