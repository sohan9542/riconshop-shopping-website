import React from 'react'
import { useContext } from 'react'
import { RapperContent } from '../../App'
import classes from './addedProducts.module.css'
import AddedProduct from './addedProduct/AddedProduct'
import { Link } from 'react-router-dom'
const AddedProducts = () => {
    const addedData = useContext(RapperContent)
    const uniqueObjects = [...new Map(addedData.map(item => [item.id, item])).values()]
    return (
        <>
            <section className={classes.addedProduct}>
                <div className={classes.container}>
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
                                {uniqueObjects.map(pd=> <AddedProduct product={pd} key={pd.id}/>)}
                        </div>
                        <div className={classes.ConitinueShopping}>
                            <h6><Link to="/">Add More Products</Link></h6>
                        </div>
                    </div>}
                </div>
            </section>
        </>
    )
}

export default AddedProducts
