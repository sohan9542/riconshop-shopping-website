import React from 'react'

const Categorylist = (props) => {
    return (
        <>
            <li onClick={()=> props.handleFilterList(props.category)} style={{textTransform: 'capitalize'}}>{props.category}</li>
        </>
    )
}

export default Categorylist
