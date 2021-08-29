import React from 'react'
import { qualityProduct } from '../../fakeproduct/FakePorduct'
import classes from './qualitys.module.css'
import Quality from './Quality/Quality'

const Qualitys = () => {
    
    return (
        <>
            <section className={classes.qualitys}>
                <div className={classes.container}>
                    {
                        qualityProduct.map(pd=> <Quality key={pd.id} product={pd}/>)
                    }
                </div>
            </section>
        </>
    )
}

export default Qualitys
