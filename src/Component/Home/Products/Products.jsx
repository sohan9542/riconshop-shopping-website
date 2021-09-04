import React from 'react'
import { fakeProducts } from '../../fakeproduct/FakePorduct'
import Product from './Product/Product';
import classes from './Products.module.css'


const Products = (props) => {
    const bestSeller = fakeProducts.filter(pd => pd.seller === 'best');
    return (
        <>
            <section className={classes.bestseller}>
                <div className={classes.container}>
                    <div className={classes.bestseller__info}>
                        <h5>Our Best Producs</h5>
                        <p style={{ color: 'rgb(30, 202, 30)' }}>From Our Best Trusted Sellers</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ab quae ill
                            um. Nam sequi, voluptatem placeat mollitia doloribus tenetur tempora!</p>
                    </div>
                    {
                        bestSeller.map(pd => <Product handleProduct={props.handleProduct}  product={pd} key={pd.id} />)
                    }
                </div>
            </section>
        </>
    )
}

export default Products
