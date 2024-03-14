import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import img from "../../assets/image/product details/2.png"
const CardProduct = () => {
    const [qtantity, setQtantity] = useState(1)

    const updateQuantityINc = () => {
        setQtantity(qtantity + 1)
    }
    const updateQuantityDEC = () => {
        if (qtantity !== 1) {
            setQtantity(qtantity - 1)
        }
    }
    return (
        <div className=" mt-6 flex  ">
            <div className="w-20 mr-6">
                <img src={img} className=" rounded-sm" alt="" />
            </div>
            <div className="flex flex-1 max-md:flex-col max-md:text-left text-right">
                <div className="desc grow  text-left mr-6">
                    <div className="">
                        <h1 className="text-base font-bold mb-3 max-sm:mb-1 ">The Joni High Rise Loose 29L</h1>
                        <h1 className="text-lg text-[#6b6b6b]  mb-3 max-sm:mb-1">Black / M</h1>
                    </div>
                </div>
                <div className="price  w-28 pt-1">
                    <h1>LE 600.34</h1>
                </div>
                <div className="quantity mx-6 max-md:mx-0 max-md:mt-2 pt-1 text-center  flex  flex-wrap  md:flex-col
                                gap-2 items-center  w-32 max-md:w-auto   ">
                    <div className="w-32 border border-[#bbb]  py-2 justify-between flex items-center ">
                        <h1 className="w-2/5 text-center pt-1 " onClick={() => updateQuantityDEC()}>
                            <FontAwesomeIcon icon={faMinus} className='mr-1  text-[#6b6b6b]   text-lg  cursor-pointer' />
                        </h1>
                        <h1 className="text-lg font-medium  text-[#6b6b6b] text-center">{qtantity}</h1>
                        <h1 className="w-2/5 text-center pt-1 " onClick={() => updateQuantityINc()}>
                            <FontAwesomeIcon icon={faPlus} className='mr-1  text-[#6b6b6b]  font-medium  text-lg cursor-pointer' />
                        </h1>
                    </div>
                    <h1 className="text-slate-500  underline underline-offset-4 text-xs duration-200 ease-in-out  cursor-pointer hover:text-red-500">Remove</h1>
                </div>
                <div className="quantity mx-6 pt-1 text-center w-24 max-md:hidden">
                    <h1> LE {qtantity * 600.00}</h1>
                </div>
            </div>
        </div>
    )
}

export default CardProduct