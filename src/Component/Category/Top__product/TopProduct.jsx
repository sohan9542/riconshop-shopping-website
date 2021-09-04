import React from 'react'
import { Link } from 'react-router-dom';
const TopProduct = (props) => {
    const  product  = props.product;
    return (
        <>
            <div style={{display:'flex', alignItems:'center',justifyContent:'space-between', width:'100%', padding:'10px 0'}}>
                <img src={product.img} style={{width: '40%'}} alt="" />
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <p><Link style={{color:'rgb(27, 25, 46)', fontWeight: '400'}} to={'/description/' + product.id}>{product.name}</Link></p>
                    <h6 style={{fontWeight: '400', color:'rgb(17, 132, 17)'}}>${product.price}</h6>
                </div>
            </div>
        </>
    )
}

export default TopProduct
