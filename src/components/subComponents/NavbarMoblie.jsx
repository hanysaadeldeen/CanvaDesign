// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

import img from "../../assets/image/house.png"
import img2 from "../../assets/image/menu.png"
import cart from "../../assets/image/shopping-cart.png"
import fav from "../../assets/image/fav-off.png"
const NavbarMoblie = () => {
    return (
        <div className='border-t-2 bg-white border-slate-100  md:hidden  bottom-0   w-full z-30 fixed'>
            <div className='container '>
                <div className='px-5 pb-4  pt-3 flex justify-between items-center'>
                    <div className=' relative flex  hover:scale-105 duration-100 ease-in-out'>
                        <Link to="/">
                            <img src={img} className="w-[22px] " alt="" />
                            <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] -bottom-[11px]'></span>
                        </Link>
                    </div>
                    <div className=' relative flex hover:scale-105 duration-100 ease-in-out'>
                        <Link to="/Category">
                            <img src={img2} className="w-[22px]" alt="" />
                            <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] -bottom-[11px]'></span>
                        </Link>
                    </div>
                    <div className='relative flex  hover:scale-105 duration-100 ease-in-out'>
                        <Link to="/CartPage">
                            <img src={cart} alt="" className='w-[24px]' />
                            <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] -bottom-[12px]'></span>
                        </Link>
                    </div>
                    <div className='relative flex  hover:scale-105 duration-100 ease-in-out'>
                        <Link to="/user/FavoritePage">
                            <img src={fav} alt="" className='w-[30px]' />
                            <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] -bottom-[8px]'></span>
                        </Link>
                    </div>
                    <div className=' relative flex  hover:scale-105 duration-100 ease-in-out'>
                        <Link to="/LoginPage">
                            <span className='absolute w-5 h-5 rounded-full bg-red-600 text-white text-center -right-[12px] -top-[12px]  leading-5'>6</span>
                            <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] bottom-[-10px]'></span>
                            <FontAwesomeIcon icon={faUser} className='text-[#6F6F6F] font-bolder text-xl cursor-pointer' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMoblie