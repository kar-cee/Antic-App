import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser, } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    return (
    <>
        <div className="offer">20 off at shopping above 20,000 || Get 25 off at shopping Stannding Diya</div>
        <header>
            <div className="logo">RaikarsgoodVibe</div>
            <div className="searchBar">
                <input placeholder='Let’s look for your favourite....' className='searchIp' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="iconColor" />
            </div>
            <div className='icons'>
                <FontAwesomeIcon icon={faHeart} className="iconColor" />
                <FontAwesomeIcon icon={faShoppingCart} className="iconColor" flip="horizontal" />
                <FontAwesomeIcon icon={faUser} className="iconColor" />
            </div>
        </header>
        <div className='hrLine'></div>
    </>
  )
}
