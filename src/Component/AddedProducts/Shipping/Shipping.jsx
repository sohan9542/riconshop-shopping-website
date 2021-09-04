import React from 'react'
import { City, Country } from '../../fakeproduct/FakePorduct'
import { States } from '../../fakeproduct/FakePorduct'
import {  useState } from 'react'
import classes from './shipping.module.css'
const Shipping = () => {
    const [country, setCountry] = useState('Asia')
    const [mycity, setMyCity] = useState('Bangladesh')
    const handleCountry = (e) => {
        setCountry(e)
    }

    const stateData = Object.values(States[`${country}`])
    const handleState = (e) => {
        setMyCity(e)
    }
    const cityData = Object.values(City[`${mycity}`]) 
    return (
        <div className={classes.selectShipping}>
            <h6 className={classes.heading}>SHIPPING AVAIBILITY</h6>
            <div className={classes.country}>
                <h6>Select Country</h6>
                <select id="country" onChange={(e) => handleCountry(e.target.value)}>
                <option>Select Country</option>
                    {
                        Country.map(cty => <option value={cty} key={cty}>{cty}</option>)
                    }

                </select>
            </div>
            <div>
                <h6>Select State</h6>
                <select id="state" onChange={(e) => handleState(e.target.value)}>
                <option>Select State</option>
                    {
                        stateData.map(stt => <option value={stt} key={stt}>{stt}</option>)
                    }

                </select>
            </div>
            <div>
                <h6>Select City</h6>
                <select id="state">
                <option>Select City</option>
                    {
                        cityData.map(stt => <option value={stt} key={stt}>{stt}</option>)
                    }

                </select>
            </div>


        </div>

    )
}

export default Shipping
