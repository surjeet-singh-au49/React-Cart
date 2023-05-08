import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"
import { useSelector } from 'react-redux'
import {HiShoppingCart} from "react-icons/hi"



const Header = () => {

    const {cartItems} =  useSelector((state) => state.cart)

  return (
    <nav>
       <h2 >React Cart <div className='cartIcon'><HiShoppingCart/></div></h2> 


        <div>

            <Link to={"/"} >Home</Link>
            <Link to={"/cart"}><FiShoppingBag/>
            <p>{cartItems.length}</p></Link>
        </div>


    </nav>
  )
}

export default Header