import React from 'react'
import classes from './features.module.css'
import Product from '../Products/Product/Product'
import { fakeProducts } from '../../fakeproduct/FakePorduct'
const FeaturesProducts = (props) => {
    const availProduct = fakeProducts.filter(pd=> pd.seller !== 'best');
    const SliceProduct = availProduct.slice(0, 10)
    return (
        <>
            <section className={classes.features}>
                <div className={classes.heading}>
                    <h1>FEATURED PRODUCTS</h1>
                    <p className={classes.styleTheme}>Newest Trends Top Brands</p>
                </div>
                <div className={classes.container}>
                    {SliceProduct.map(pd => <Product handleProduct={props.handleProduct} product={pd} key={pd.id}/>)}
                </div>
            </section>
        </>
    )
}

export default FeaturesProducts
