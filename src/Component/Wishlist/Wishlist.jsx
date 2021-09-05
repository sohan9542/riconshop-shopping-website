import React, { useContext } from 'react'
import classes from './wishlist.module.css'
import { Link } from 'react-router-dom'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { RapperContent } from '../../App'
import WishProduct from './wishProduct/WishProduct'

const Wishlist = (props) => {
    const { wishProduct } = useContext(RapperContent)
    const uniqueObjects = [...new Map(wishProduct.map(item => [item.id, item])).values()]
    return (
        <>
            <div className={classes.wish__list}>
                <div className={classes.container}>
                    <div className={classes.location}>
                        <li><Link to='/'>Home</Link></li>
                        <AiOutlineDoubleRight className={classes.icon} />
                        <li className={classes.active}>My Wishes</li>
                    </div>
                    {
                        wishProduct.length === 0 ?
                            <div className={classes.noData}>
                                <h1>No Wishes To Show</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis suscipit aliquam eum, perspiciatis enim natus doloribus soluta ut velit!</p>
                                <p>Add Some <Link to='/'>Wishes</Link></p>
                            </div>
                            :
                            <div className={classes.table}>
                            <div className={classes.tableHeader}>
                                <ul>
                                    <li>Products</li>
                                    <li>Categories</li>
                                    <li>Price</li>
                                </ul>
                            </div>
                            <div className={classes.tableData}>
                               {uniqueObjects.map(pd=> <WishProduct handleWishRemove={props.handleWishRemove} handleProduct={props.handleProduct} product={pd} key={pd.id}/>)}
                            </div>
                            <div className={classes.ConitinueShopping}>
                                <h6><Link to="/">Add More Wishes</Link></h6>
                                <h6><Link to="" onClick={props.removeAllwishes}>Discard All</Link></h6>
                            </div>
           
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Wishlist
