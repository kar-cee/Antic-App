import React from 'react'
import "./BestSeller.css"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BestSeller() {
  return (
      <div>
          <div className="heading">Our BestSellers</div>
          <div className='items'>
              <div className="card">
                  <div className="imgContainer"></div>
                  <div className="lightName">Wall Hanging</div>
                  <div className="darkName">Wall Hanging</div>
                  <div className="price">$1230.0</div>
                  <div className="rating">
                     <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                  </div>
              </div>
              <div className="card">
                <div className="imgContainer"></div>
                  <div className="lightName">Wall Hanging</div>
                  <div className="darkName">Wall Hanging</div>
                  <div className="price">$1230.0</div>
                  <div className="rating">
                     <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                  </div>
              </div>
              <div className="card">
                <div className="imgContainer"></div>
                  <div className="lightName">Wall Hanging</div>
                  <div className="darkName">Wall Hanging</div>
                  <div className="price">$1230.0</div>
                  <div className="rating">
                     <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                  </div>
              </div>
              <div className="card">
                <div className="imgContainer"></div>
                  <div className="lightName">Wall Hanging</div>
                  <div className="darkName">Wall Hanging</div>
                  <div className="price">$1230.0</div>
                  <div className="rating">
                     <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                  </div>
              </div>
              <div className="card">
                <div className="imgContainer"></div>
                  <div className="lightName">Wall Hanging</div>
                  <div className="darkName">Wall Hanging</div>
                  <div className="price">$1230.00</div>
                  <div className="rating">
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                  </div>
              </div>
          </div>
    </div>
  )
}
