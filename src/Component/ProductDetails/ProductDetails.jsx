import React from 'react'
import { useParams } from 'react-router-dom'
import { fakeProducts } from '../fakeproduct/FakePorduct';
import classes from './productdetails.module.css'
import { FaStar } from 'react-icons/fa'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { AiFillHeart } from 'react-icons/ai'
import Review from './Review/Review';
import { useState } from 'react';
import Product from '../Home/Products/Product/Product';

const ProductDetails = (props) => {
    let { id } = useParams();
    const selectedProduct = fakeProducts.find(pd => pd.id == id)

    const Related__products = fakeProducts.filter(pd => pd.categories === selectedProduct.categories)
    const [count, setCount] = useState(1)
    const increase__count = () => {
        setCount(count + 1)
    }
    const decrease__count = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div className={classes.productdetails}>
                <div className={classes.container}>
                    <div className={classes.name__img}>
                        <div className={classes.product__img}>
                            <div className={classes.big__img}>
                                <img src={selectedProduct.img} alt="" />
                            </div>
                            <div className={classes.small__img}>
                                <img src={selectedProduct.img} alt="" />
                                <img src={selectedProduct.img} alt="" />
                                <img src={selectedProduct.img} alt="" />
                            </div>
                        </div>
                        <div className={classes.product__description}>
                            <h2>{selectedProduct.name}</h2>
                            <div className={classes.price__stars}>
                                <h3>{selectedProduct.price}$</h3>
                                <div className={classes.star}>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa libero deserunt.
                                Error suscipit vitae aspernatur, temporibus cupiditate tempora ipsum voluptas quis
                                cumque nesciunt deleniti laboriosam aut dolorem, delectus voluptatum,
                                adipisci provident nihil dicta maxime. Itaque odio cupiditate iste impedit.
                            </p>
                            <div className={classes.selectColors__size}>
                                <div className={classes.size}>
                                    <select id="">
                                        <option>Select Size</option>
                                        <option>Lg</option>
                                        <option>Md</option>
                                        <option>Sm</option>
                                    </select>
                                </div>
                                <div className={classes.color}>
                                    <select id="">
                                        <option>Select Color</option>
                                        <option>Red</option>
                                        <option>Green</option>
                                        <option>Blue</option>
                                    </select>
                                </div>
                            </div>
                            <div className={classes.quantity}>
                                <h6 className={classes.design} onClick={decrease__count}>-</h6>
                                <h6 className={classes.quantityCount}>{count}</h6>
                                <h6 className={classes.design} onClick={increase__count}>+</h6>
                            </div>
                            <div className={classes.addToCart__love}>
                                <button onClick={() => props.handleProduct(selectedProduct)}><ShoppingCartIcon /> Add To Cart</button>
                                <button className={classes.heart}><AiFillHeart /></button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.review}>
                        <Review />
                    </div>
                    <div >
                        <h3 style={{ textAlign: 'center' }}>RELATED PRODUCT</h3>
                        <div className={classes.related__products}>
                            {Related__products.map(pd => <Product handleProduct={props.handleProduct} product={pd} key={pd.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
