import React from 'react'
import { useState } from 'react'
import classes from './review.module.css'
import {FaStar} from 'react-icons/fa'
const Review = () => {
  const [descriptions__color, setDescriptions__color] = useState('#e6f2e6')
  const [review__color, setReview__color] = useState('white')
  const [show, setShow] = useState(true)
  function description() {
    setDescriptions__color('#e6f2e6')
    setReview__color('white')
    setShow(true)
  }
  function review() {
    setDescriptions__color('white')
    setReview__color('#e6f2e6')
    setShow(false)
  }
  return (

    <>
      <section className={classes.Review__description}>
        <div className={classes.container}>
          <div className={classes.headings}>
            <h6 onClick={description} style={{ background: `${descriptions__color}` }}>Descriptions</h6>
            <h6 onClick={review} style={{ background: `${review__color}` }}>Reviews</h6>
          </div>
          <div className={classes.changable__sections}>
            {
              show ? <div className={classes.Descriptions}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea harum, nobis quibusdam tempora perferendis, nisi ab ipsa quis pariatur iusto minima voluptas alias incidunt nihil sint natus, consectetur necessitatibus?</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea harum, nobis quibusdam tempora perferendis, nisi ab ipsa quis pariatur iusto minima voluptas alias incidunt nihil sint natus, consectetur necessitatibus?</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea harum, nobis quibusdam tempora perferendis, nisi ab ipsa quis pariatur iusto minima voluptas alias incidunt nihil sint natus, consectetur necessitatibus?</p>
              </div>
                :
                <div>
                  <p style={{ fontSize: '13px' }}>1 review for this product</p>
                  <div className={classes.review}>
                    <div className={classes.review__photo}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0wA1r-SKd1UmBHgeqsmLaNT-o-ZAz1N63FcUMTVOpMWWgDjMB0O89P_6o6S34lfWEKs&usqp=CAU" alt="" />
                    </div>
                    <div className={classes.review__description}>
                      <div className={classes.star}>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </div>
                      <div className={classes.name}>
                        <h6>Mark Peterson</h6>
                        <p>This wil do great with my hodile that i orderd a few weeks ago.</p>
                      </div>

                    </div>
                  </div>
                  <div className={classes.myReview}>
                    <h5>Add A Review</h5>
                    <div className={classes.review__form}>
                      
                    </div>
                  </div>
                </div>
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Review
