import React from 'react'
import Capture from '../../../image/Capture.PNG'
const Offer = () => {
    const offerStyle = {
        width: '100%',
    }
    return (
        <>
            <div style={offerStyle}>
                <div>
                    <img src={Capture} alt="" />
                </div>
            </div>
        </>
    )
}

export default Offer
