import { useState } from "react";
import { Link } from "react-router-dom";

import searchh from "../../assets/image/search.png"
import logo from "../../assets/image/logo.png"
import cart from "../../assets/image/shopping-cart.png"

export default function Navbar() {
  const [search, setSearch] = useState(false)


  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setSearch(false)
    }
    prevScrollpos = currentScrollPos;
  }

  const SearchFun = () => {
    setSearch(!search)
  }
  return (
    <div className="navbar relative">

      <div className={"absolute  h-[60px] flex justify-center w-full items-center duration-300 ease-in-out    z-20  " +
        (search ? "translate-y-[60px]" : "top-0")
      }>
        <input type="search" name="" id="" placeholder="Search.."
          className="py-3 px-5  rounded-full border w-[700px]   bg-gray-50 border-[#c0c0c0]" />
      </div>

      <div className='bg-gray-50  w-full   fixed z-30'>
        <div className="container">
          <div className="about   flex justify-between  items-center ">
            <Link to="/" className=' max-md:p-2' >
              <img src={logo} alt="Logo" />
            </Link>
            <ul className="flex  text-lg capitalize max-md:hidden ">
              <Link to="/" >
                <li className=" hover:bg-slate-100 cursor-pointer transition  duration-300 ease-in-out   p-4 ">
                  home</li>
              </Link>
              <Link to="/Category">
                <li className=" hover:bg-slate-100 cursor-pointer transition  duration-300 ease-in-out   p-4">
                  category</li>
              </Link>
              <Link to="/user/FavoritePage" >
                <li className=" hover:bg-slate-100 cursor-pointer transition  duration-300 ease-in-out   p-4 ">
                  favorite</li>
              </Link> <Link to="/loginPage">
                <li className=" hover:bg-slate-100 cursor-pointer transition  duration-300 ease-in-out   p-4 ">
                  profile</li>
              </Link>
            </ul>
            <div className='flex gap-2 items-center'>
              <img src={searchh}
                onClick={() => SearchFun()}
                className='w-[22px] mr-2 md:mt-1 cursor-pointer' alt="" />
              <Link to="/CartPage" className='mt-1 max-md:hidden'>
                <img src={cart} className='w-[25px] cursor-pointer' alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
