import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react";
import CardProdctInfo from "./CardProdctInfo"
import { Link } from "react-router-dom"

const CartProductInfo = () => {

    const [openOrders, setOpenOrder] = useState(false)
    if (openOrders === true) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }

    return (
        <>
            <div className="mt-10">
                <Link to={"/"}>
                    <h1 className="text-center text-black tracking-wide cursor-pointer"> Continue shopping</h1>
                </Link>
            </div>
            <div className=" mt-5 border-y border-black px-1  py-4 flex justify-between items-center">
                <h1 className="font-extrabold text-xl">subtotal</h1>
                <h1 className="font-extrabold text-xl">LE 440.00</h1>
            </div>
            <div className="my-3 mb-4 text-center px-2 ">
                <Link to={"/"}>
                    <h1 className=" text-sm  text-black tracking-wide cursor-pointer"> ADD A NOTE TO YOUR ORDER</h1>
                </Link>
                <textarea name="" id="" className="text-sm resize-none border border-slate-400 rounded-sm h-36 mt-3 w-full sm:w-[445px] p-3"></textarea>
                <h1 className=" text-sm  mt-4 text-black tracking-wide cursor-pointer">Taxes and <span className="underline underline-offset-4" > shipping </span> calculated at checkout</h1>
            </div>
            <div
                onClick={() => setOpenOrder(!openOrders)}
                className=" mx-auto order_now mt-3 border border-[#bbb]  uppercase 
                    w-full lg:max-w-[90%]  leading-9 py-2 tracking-wide text-center
                    bg-black text-white cursor-pointer max-sm:text-sm rounded-sm
                    ">
                <FontAwesomeIcon icon={faBagShopping} className='mr-3  text-white  text-lg  cursor-pointer' />
                Order Now - Cash on Delivery
            </div>
            {
                (openOrders ? <div className={"Order_now fixed  bottom-0 right-0 block w-full h-full bg-[rgba(0,0,0,0.46)] left-0 top-0 z-40 "
                }>
                    <div className="w-[600px] max-md:w-[95%]  mx-auto font-bold  rounded-lg pt-2 pb-6  px-5 bg-white z-50 mt-5 h-[95%] overflow-auto
                        flex flex-col justify-between">
                        <div className="border-b border-[#d9d9d9] flex justify-between items-center pb-3 pt-1 text-base font-extrabold ">
                            <h1>Please fill in the form to order</h1>
                            <FontAwesomeIcon icon={faClose} className='text-2xl text-slate-600 cursor-pointer' onClick={() => setOpenOrder(!openOrders)} />
                        </div>
                        <div className="mb-2 product_details">
                            <CardProdctInfo />
                            <CardProdctInfo />
                            <CardProdctInfo />
                            <CardProdctInfo />
                        </div>
                        <div className="price_&_subtotal border mb-2 border-[#d3d3d3] rounded-md bg-[#f9f9f9] p-2">
                            <div className="subtotal flex justify-between items-center">
                                <h1 className="font-medium text-[#555]">subtotal</h1>
                                <h1 className="font-bold">LE 2,070.00 EGP</h1>
                            </div>
                            <div className="subtotal flex justify-between items-center my-2">
                                <h1 className="font-medium text-[#555]">SALE 70%+10% </h1>
                                <h1 className="font-bold text-[#f44336]">- LE 2,070.00 EGP</h1>
                            </div>
                            <div className="Shipping flex justify-between items-center  mb-1">
                                <h1 className="font-medium text-[#555]">Shipping</h1>
                                <h1 className="font-bold">??</h1>
                            </div>
                            <div className="total border-t py-1 flex justify-between items-center">
                                <h1>total</h1>
                                <h1 className="font-extrabold">LE 2,070.00 EGP</h1>
                            </div>
                        </div>
                        <div className="userInfo mt-2">
                            <div className="name my-3 flex max-sm:flex-col sm:items-center">
                                <div className="w-1/4 ">
                                    <div className="w-fit">
                                        <h1 className="font-bold relative 
                                    after:absolute after:content-['*'] after:-top-0.5 after:text-sm after:-right-3 after:text-[#DC4732] max-sm:ml-1 max-sm:mb-2">name</h1>
                                    </div>
                                </div>
                                <div className="max-sm:w-full w-3/4 ">
                                    <div className=" flex w-full  ">
                                        <span className="text-center flex items-center bg-[#E1E1E1] p-3  rounded-tl-md rounded-bl-md border border-[#c0c0c0]">
                                            <FontAwesomeIcon icon={faCircleUser} className='text-black text-lg' />
                                        </span>
                                        <input type="text" name="" id="" placeholder="Name" className="px-2   w-full rounded-tr-md rounded-br-md border-y border-r border-[#c0c0c0]" />
                                    </div>
                                </div>
                            </div>
                            <div className="phone my-3 flex max-sm:flex-col sm:items-center">
                                <div className="w-1/4 ">
                                    <div className="w-fit">
                                        <h1 className="font-bold relative 
                                    after:absolute after:content-['*'] after:-top-0.5 after:text-sm after:-right-3 after:text-[#DC4732] max-sm:ml-1 max-sm:mb-2">phone</h1>
                                    </div>
                                </div>
                                <div className="max-sm:w-full w-3/4 ">
                                    <div className=" flex w-full  ">
                                        <span className="text-center flex items-center bg-[#E1E1E1] p-3  rounded-tl-md rounded-bl-md border border-[#c0c0c0]">
                                            <FontAwesomeIcon icon={faPhone} className='text-black text-lg' />
                                        </span>
                                        <input type="number" name="" id="" placeholder="Name" className="px-2   w-full rounded-tr-md rounded-br-md border-y border-r border-[#c0c0c0]" />
                                    </div>
                                </div>
                            </div>
                            <div className="address my-3 flex max-sm:flex-col sm:items-center">
                                <div className="w-1/4 ">
                                    <div className="w-fit">
                                        <h1 className="font-bold relative 
                                    after:absolute after:content-['*'] after:-top-0.5 after:text-sm after:-right-3 after:text-[#DC4732] max-sm:ml-1 max-sm:mb-2">address</h1>
                                    </div>
                                </div>
                                <div className="max-sm:w-full w-3/4 ">
                                    <div className=" flex w-full  ">
                                        <span className="text-center flex items-center bg-[#E1E1E1] p-3  rounded-tl-md rounded-bl-md border border-[#c0c0c0]">
                                            <FontAwesomeIcon icon={faLocationDot} className='text-black text-lg' />
                                        </span>
                                        <input type="text" name="" id="" placeholder="Name" className="px-2   w-full rounded-tr-md rounded-br-md border-y border-r border-[#c0c0c0]" />
                                    </div>
                                </div>
                            </div>
                            <div className="city my-3 flex max-sm:flex-col sm:items-center">
                                <div className="w-1/4 ">
                                    <div className="w-fit">
                                        <h1 className="font-bold relative 
                                    after:absolute after:content-['*'] after:-top-0.5 after:text-sm after:-right-3 after:text-[#DC4732] max-sm:ml-1 max-sm:mb-2">city</h1>
                                    </div>
                                </div>
                                <div className="max-sm:w-full w-3/4 ">
                                    <div className=" flex w-full  ">
                                        <span className="text-center flex items-center bg-[#E1E1E1] p-3  rounded-tl-md rounded-bl-md border border-[#c0c0c0]">
                                            <FontAwesomeIcon icon={faLocationDot} className='text-black text-lg' />
                                        </span>
                                        <input type="text" name="" id="" placeholder="Name" className="px-2   w-full rounded-tr-md rounded-br-md border-y border-r border-[#c0c0c0]" />
                                    </div>
                                </div>
                            </div>
                            <div className="Subscribe_input">
                                <div className="control mb-1">
                                    <input type="checkbox" id="Subscribe" />
                                    <label className="text-xs" htmlFor="Subscribe">Subscribe to stay updated with new products and offers!</label>
                                </div>
                            </div>
                            <div className="email my-3 flex max-sm:flex-col sm:items-center">
                                <div className="w-1/4 ">
                                    <div className="w-fit">
                                        <h1 className="font-bold relative 
                                    after:absolute after:content-['*'] after:-top-0.5 after:text-sm after:-right-3 after:text-[#DC4732] max-sm:ml-1 max-sm:mb-2">email</h1>
                                    </div>
                                </div>
                                <div className="max-sm:w-full w-3/4 ">
                                    <div className=" flex w-full  ">
                                        <span className="text-center flex items-center bg-[#E1E1E1] p-3  rounded-tl-md rounded-bl-md border border-[#c0c0c0]">
                                            <FontAwesomeIcon icon={faEnvelope} className='text-black text-lg' />
                                        </span>
                                        <input type="email" name="" id="" placeholder="Name" className="px-2   w-full rounded-tr-md rounded-br-md border-y border-r border-[#c0c0c0]" />
                                    </div>
                                </div>
                            </div>
                            <div className="coupon my-4 flex gap-3 sm:items-center">
                                <input type="text" name="" id="" placeholder="Discount code" className=" px-2 py-3 w-full rounded-md border border-[#c0c0c0]" />
                                <h1 className="cursor-pointer duration-300 ease-linear hover:text-black  bg-[#E1E1E1] p-3 px-4 rounded text-[#666666]">   apply  </h1>
                            </div>
                            <div className="payment my-4">
                                <h1 className="text-2xl mb-1">Payment </h1>
                                <p className="text-[#666666] text-sm"> All transactions are secure and encrypted.</p>

                                <div className="checkbox-wrapper-15 mt-4">
                                    <div className="border py-3 px-4  mb-3  rounded-md">
                                        <input className="inp-cbx hidden" id="cbx-15" name="payment" type="radio" />
                                        <label className="cbx" htmlFor="cbx-15">
                                            <span>
                                                <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                    <polyline points="1 5 4 8 11 1"></polyline>
                                                </svg>
                                            </span>
                                            <span className="font-bold text-lg">Pay via (Debit/Credit cards/Wallets/Installments)</span>
                                        </label>
                                    </div>
                                    <div className="border py-3 px-4  mb-5  rounded-md">
                                        <input className="inp-cbx hidden" id="cbx-1" name="payment" type="radio" />
                                        <label className="cbx" htmlFor="cbx-1">
                                            <span>
                                                <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                    <polyline points="1 5 4 8 11 1"></polyline>
                                                </svg>
                                            </span>
                                            <span className="font-bold text-lg">Cash on Delivery (COD)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" mx-auto order_now mt-4 rounded-sm   uppercase  w-full   leading-9 py-2 tracking-wide text-center bg-black text-white cursor-pointer max-sm:text-base  ">
                                BUY IT NOW - LE 1,809.00 EGP
                            </div>


                        </div>
                    </div>
                </div> : null)
            }
        </>
    )
}

export default CartProductInfo