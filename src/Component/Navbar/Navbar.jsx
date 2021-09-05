import React from 'react'
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import { useContext } from 'react';
import { RapperContent } from '../../App';


const NavbarHeader = () => {
    const {selectProduct, wishProduct} = useContext(RapperContent)
    return (
        <>
            <section className={classes.navbar}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <div className={classes.brand}>
                            <span className={classes.styleBold}>RICON</span>SHOP
                        </div>
                        <div className={classes.navbar__option}>
                            <ul className={classes.navbar__options}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/categories'>Сategories</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/login'>login</Link></li>
                            </ul>
                        </div>
                        <div className={classes.addToCart}>
                            <Badge badgeContent={selectProduct.length} color="secondary" style={{color: 'rgb(17, 172, 17)'}}>
                                <Link to="/addedProducts" className={classes.shoppingIcon}><ShoppingCartIcon /></Link>
                            </Badge>
                            <Badge badgeContent={wishProduct.length} color="secondary" style={{color: 'rgb(17, 172, 17)', marginLeft:'10px'}}>
                                <Link to="/wishList" className={classes.shoppingIcon}><FavoriteIcon /></Link>
                            </Badge>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavbarHeader
