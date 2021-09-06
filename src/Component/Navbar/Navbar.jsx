import React from 'react'
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import { useContext } from 'react';
import { RapperContent } from '../../App';
import { FaBars } from 'react-icons/fa';
import {ImCross} from 'react-icons/im'

const NavbarHeader = (props) => {
    const {selectProduct, wishProduct} = useContext(RapperContent)
    const {show, setShow, isLogIn, useInfo } = props
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
                                {isLogIn || <li><Link to='/login'>login</Link></li>}
                            </ul>
                        </div>
                        <div className={classes.addToCart}>
                            <Badge badgeContent={selectProduct.length} color="secondary" style={{color: 'rgb(17, 172, 17)'}}>
                                <Link to="/addedProducts" className={classes.shoppingIcon}><ShoppingCartIcon /></Link>
                            </Badge>
                            <Badge badgeContent={wishProduct.length} color="secondary" style={{color: 'rgb(17, 172, 17)', marginLeft:'10px'}}>
                                <Link to="/wishList" className={classes.shoppingIcon}><FavoriteIcon /></Link>
                            </Badge>
                           {isLogIn && <Badge style={{color: 'rgb(17, 172, 17)', marginLeft:'10px'}}>
                                {show ? <Link style={{fontSize: '1.2rem'}} onClick={() => setShow(false)} className={classes.shoppingIcon}>{(isLogIn && useInfo.photoURL !== null) ? <img src={useInfo.photoURL} style={{width:'30px', height:'30px', borderRadius:'50%'}} alt="" /> : <ImCross />}</Link> :
                                <Link style={{fontSize: '1.2rem'}} onClick={() => setShow(true)} className={classes.shoppingIcon}>{(isLogIn && useInfo.photoURL !== null)? <img src={useInfo.photoURL} style={{width:'30px', height:'30px', borderRadius:'50%'}} alt="" /> : <FaBars />}</Link>}
                            </Badge>}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default NavbarHeader
