import React from 'react'
import "./Hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as faRCircle } from '@fortawesome/free-regular-svg-icons'

export default function Hero() {
    return (
        <>
            <div className='hero'>
                <FontAwesomeIcon icon={faAngleLeft} className="angle" />
                <div className='homeText'>
                    <div className='text'>Shopping above 50,000 on <span>Wooden Furniture</span> u will get 2,000 discount.</div>
                    <div className='btnBorder'>
                        <button className='goPage'>Go to the Page</button>
                    </div>
                </div>

                <FontAwesomeIcon icon={faAngleRight} className="angle" />
            </div>
            <div className='circles'>
                <FontAwesomeIcon icon={faRCircle} className="ring" />
                <FontAwesomeIcon icon={faRCircle} className="ring" />
                <FontAwesomeIcon icon={faCircle} className="circle" />
                <FontAwesomeIcon icon={faRCircle} className="ring" />
                <FontAwesomeIcon icon={faRCircle} className="ring" />
                <FontAwesomeIcon icon={faRCircle} className="ring" />
                <FontAwesomeIcon icon={faRCircle} className="ring" />
            </div>
        </>
    )
}
