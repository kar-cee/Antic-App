import React from 'react'
import "./Review.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faStar, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default function Review() {
  return (
      <div>
          <div className="heading">Customer Reviews</div>
          <div className='reviewPage'>
              <FontAwesomeIcon icon={faAngleLeft} className="arrow" />
              <div className='reviewBox'>
                  <div className="customerProfile"></div>
                  <div className='customerName'>Huyasang kim</div>
                  <div className="curstomerRating">
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                  </div>
                  <div className='reviewText'>
                      <FontAwesomeIcon icon={faQuoteLeft} className="qoutationMark leftQoute"/>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      <FontAwesomeIcon icon={faQuoteRight} className="qoutationMark rightQoute" />
                  </div>
              </div>

              <FontAwesomeIcon icon={faAngleRight} className="arrow" />
          </div>
    </div>
  )
}
