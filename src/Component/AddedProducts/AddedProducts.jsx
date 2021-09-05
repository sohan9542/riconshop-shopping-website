import React from 'react'
import { useContext } from 'react'
import { RapperContent } from '../../App'
import classes from './addedProducts.module.css'
import AddedProduct from './addedProduct/AddedProduct'
import { Link } from 'react-router-dom'
import Shipping from './Shipping/Shipping';
import {AiOutlineDoubleRight} from 'react-icons/ai'
const AddedProducts = (props) => {
    console.log(props);
    const { selectProduct } = useContext(RapperContent)
    const uniqueObjects = [...new Map(selectProduct.map(item => [item.id, item])).values()]
    let arr = []
    selectProduct.forEach((e) => {
        arr = [...arr, e.price]
    })
    const price = arr.reduce((total, num) => total + num, 0)
    return (
        <>
            <section className={classes.addedProduct}>
                <div className={classes.container}>
                    <div className={classes.location}>
                        <li><Link to='/'>Home</Link></li>
                        <AiOutlineDoubleRight className={classes.icon} />
                        <li className={classes.active}>Added Products</li>
                    </div>
                    {uniqueObjects.length === 0 ?

                        <div className={classes.noData}>
                            <h1>No Product To Show</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis suscipit aliquam eum, perspiciatis enim natus doloribus soluta ut velit!</p>
                            <p>Add Some <Link to='/'>Product</Link></p>
                        </div>
                        :
                        <div className={classes.table}>
                            <div className={classes.tableHeader}>
                                <ul>
                                    <li>Products</li>
                                    <li>Categories</li>
                                    <li>Quantity</li>
                                    <li>Price</li>
                                    <li>Total</li>
                                </ul>
                            </div>
                            <div className={classes.tableData}>
                                {uniqueObjects.map(pd => <AddedProduct product={pd} handleRemove={props.handleRemove} key={pd.id} />)}
                            </div>
                            <div className={classes.ConitinueShopping}>
                                <h6><Link to="/">Add More Products</Link></h6>
                                <h6><Link to="" onClick={props.removeAll} >Discard All</Link></h6>
                            </div>
                            <div className={classes.cuponContainer}>
                                <div className={classes.use}>
                                    <h6>Use Cupon Code</h6>
                                    <div className={classes.input}>
                                        <input type="text" placeholder="Input your cupon code" />
                                        <button>Apply</button>
                                    </div>
                                </div>
                                <div className={classes.use}>
                                    <h6>Use Gift Voucher</h6>
                                    <div className={classes.input}>
                                        <input type="text" placeholder="Input your gift voutcher" />
                                        <button>Apply</button>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.shiping_checkout}>
                                <div className={classes.shipping}>
                                    <Shipping />
                                </div>
                                <div>
                                    <h6>SHOPPING CART CALCULATION</h6>
                                    <div className={classes.calcu}>

                                        <div className={classes.subtotal}>
                                            <div className={classes.money}>
                                                <h6>Subtotal</h6>
                                                <h6>{price}$</h6>
                                            </div>
                                            <div className={classes.money}>
                                                <h6>Cupon</h6>
                                                <h6>-50$</h6>
                                            </div>
                                            <div className={classes.money}>
                                                <h6>Shipping</h6>
                                                <h6>Free Shipping</h6>
                                            </div>
                                        </div>
                                        <div className={classes.total}>
                                            <h6>Total</h6>
                                            <h6>{price - 50}$</h6>
                                        </div>
                                        <button className={classes.checkout}>Checkout</button>
                                    </div>
                                </div>

                            </div>
                        </div>}
                </div>
            </section>
        </>
    )
}

export default AddedProducts
