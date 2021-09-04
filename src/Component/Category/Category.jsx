import React from 'react'
import classes from './category.module.css'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { fakeProducts } from '../fakeproduct/FakePorduct'
import Categorylist from './categorylist/Categorylist'
import { GoSearch } from 'react-icons/go'
import TopProduct from './Top__product/TopProduct'
import CategoryProduct from './CategoryProduct/CategoryProduct'
const Category = () => {
    const newProductCategory = fakeProducts.map(pd => pd.categories);
    const filterCategory = new Set(newProductCategory)
    const [filterValue, setFilterValue] = React.useState(50)
    const handleInput = (e) => {
        setFilterValue(e)
    }
    const topProduct = fakeProducts.filter(pd => pd.seller === 'best');


    const [filterProduct, setFilterProduct] = React.useState([...fakeProducts.slice(0, 12)])
    const allProduct = () =>{
        setFilterProduct(fakeProducts.slice(0, 12))
    }
    const handleFilterList = (e) => {
        const filterdByList = fakeProducts.filter(pd => pd.categories === e)
        setFilterProduct(filterdByList)
    }
    const handleRangeFilter = () =>{
        const filter__by__range = fakeProducts.filter(pd=> pd.price <= filterValue)
        const Cut__by__slice = filter__by__range.slice(0, 12)
        setFilterProduct(Cut__by__slice)
    }
    const handleByColor = (e) =>{
        console.log(e);
    }
    return (
        <>
            <div className={classes.categoryPage}>
                <div className={classes.container}>
                    <div className={classes.location}>
                        <li><Link to='/'>Home</Link></li>
                        <AiOutlineDoubleRight className={classes.icon} />
                        <li className={classes.active}>Category</li>
                    </div>
                    <div className={classes.searchBar}>
                        <input type="text" placeholder="Search Here" />
                        <button>Search</button>
                    </div>
                    <div className={classes.mainCategory}>
                        <div className={classes.left__sidebar}>
                            <div className={classes.category__list}>
                                <h6>CATEGORIES</h6>
                                <ul>
                                    <li onClick={allProduct}>All Product</li>
                                    {[...filterCategory].map(pd => <Categorylist handleFilterList={handleFilterList} category={pd} key={pd} />)}
                                </ul>
                            </div>
                            <div className={classes.price__filter}>
                                <h6>PRICE FILTER</h6>
                                <input type="range" min="50" max="1000" className={classes.slider} onInput={(e) => handleInput(e.target.value)} />
                                <div className={classes.rangeShow}>
                                    <input type="text" value={filterValue} />
                                    <input type="text" value="1000" />
                                    <button onClick={handleRangeFilter}><GoSearch /></button>
                                </div>

                            </div>
                            <div className={classes.sizeContainer}>
                                <h6>SIZE</h6>
                                <div className={classes.size}>
                                    <button>XS</button>
                                    <button className={classes.active}>S</button>
                                    <button>M</button>
                                    <button>M</button>
                                    <button>L</button>
                                    <button>SL</button>
                                    <button>SL</button>
                                    <button>XL</button>
                                    <button>XXL</button>
                                </div>
                            </div>
                            <div className={classes.colors}>
                                <h6>COLORS</h6>
                                <div className={classes.colorsCheckbox}>
                                    <input type="checkbox" onSelect={(e)=>handleByColor(e.target.value)} value="red" name="" id="" />
                                    <label style={{ marginLeft: '8px' }} htmlFor="checkbox">Red</label>
                                    <br />
                                    <input type="checkbox" onChange={(e)=>handleByColor(e.target.value)} value="green" name="" id="" />
                                    <label style={{ marginLeft: '8px' }} htmlFor="checkbox">Green</label>
                                    <br />
                                    <input type="checkbox" onChange={(e)=>handleByColor(e.target.value)} value="blue"  name="" id="" />
                                    <label style={{ marginLeft: '8px' }} htmlFor="checkbox">Blue</label>
                                    <br />
                                    <input type="checkbox" onChange={(e)=>handleByColor(e.target.value)} value="yallow" name="" id="" />
                                    <label style={{ marginLeft: '8px' }} htmlFor="checkbox">Yellow</label>
                                </div>
                            </div>
                            <div className={classes.top__rated}>
                                <h6>TOP RATED</h6>
                                <div className={classes.top__rated__products}>
                                    {topProduct.map(pd => <TopProduct product={pd} key={pd.id} />)}
                                </div>
                            </div>
                        </div>
                        <div className={classes.right__product}>
                            <div className={classes.all__filter__product}>
                                {filterProduct.map(pd => <CategoryProduct product={pd} key={pd.id} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
