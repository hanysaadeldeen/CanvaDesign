
import ReactStars from "react-rating-stars-component";
import { CirclePicker } from 'react-color'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
const ProductInfo = () => {

    const [qtantity, setQtantity] = useState(1)
    const colors = ['#fff', '#D9E3F0', '#F47373', '#697689']
    // const colors = ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']
    const size = [
        {
            value: "S"
        },
        {
            value: "M"
        },
        {
            value: "LG"
        },

    ]
    const getFinalColor = (e) => {
        console.log(e);
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const getSize = (e) => {
        console.log(e);
    }

    const updateQuantityINc = () => {
        setQtantity(qtantity + 1)
    }
    const updateQuantityDEC = () => {
        if (qtantity !== 1) {
            setQtantity(qtantity - 1)
        }
    }
    return (
        <div className="max-sm:mt-4">
            <h2 className="text-xl tracking-wide font-extrabold leading-9 text-black">The Lola High Rise Skinny 30L</h2>
            <div className="rating flex gap-2 items-center  mb-4 mt-2 ">
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={27}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
                <p className="font-medium text-base pt-1">no reivews</p>
            </div>
            <h2 className="stock font-medium text-base  mt-5">
                Availability: 1 In Stock
            </h2>
            <div className="price font-extrabold text-xl mt-4 ">
                <span className="mr-3 line-through text-slate-500">
                    LE 599.00
                </span>
                <span className="text-[#e95144]">LE 189.00
                </span>
            </div>
            <div className='colors flex items-center mt-5 '>
                <h1 className='font-semibold text-base mr-2'>colors:</h1>
                <CirclePicker width=""
                    circleSpacing={8}
                    colors={colors}
                    onChangeComplete={(e, colors) => getFinalColor(colors.target.title)}
                />
            </div>
            <div className="size mt-5 ">
                <h1 className="font-extrabold text-sm uppercase  pb-2">size</h1>
                <div className="flex child:border child:border-[#dadada] child:py-1 child:px-3 child:min-w-[45px] child:font-medium child:my-1 child:mr-2 flex-wrap child:text-center child:cursor-pointer ">
                    {size.map((e) => {
                        return (
                            <div key={e.value} onClick={() => getSize(e.value)}>{e.value}</div>
                        )
                    })}
                </div>
            </div>
            <div className="quantity_and_order mt-5 " >
                <h1 className="my-3 text-base font-normal italic"><span className="underline pb-2 ">Shipping</span>  calculated at checkout</h1>
                <div className=" mb-4 border border-[#bbb]  uppercase 
                    w-full lg:max-w-[90%]  leading-9 py-2 tracking-wide text-center
                    bg-black text-white font-serif">
                    free shipping on order over <span className="text-[#e95144]"> 750 </span>l.e
                </div>
                <div className="max-sm:w-full lg:max-w-[90%] lg:flex gap-2">
                    <div className="quantity max-lg:my-3">

                        <div className="w-32 border border-[#bbb]  py-3 justify-between flex items-center ">
                            <h1 className="w-2/5 text-center pt-1 " onClick={() => updateQuantityDEC()}>
                                <FontAwesomeIcon icon={faMinus} className='mr-1  text-[#6b6b6b]   text-lg  cursor-pointer' />
                            </h1>
                            <h1 className="text-lg font-medium  text-[#6b6b6b] text-center">{qtantity}</h1>
                            <h1 className="w-2/5 text-center pt-1 " onClick={() => updateQuantityINc()}>
                                <FontAwesomeIcon icon={faPlus} className='mr-1  text-[#6b6b6b]  font-medium  text-lg cursor-pointer' />
                            </h1>
                        </div>


                    </div>
                    <div className="add_to_cart border border-[#bbb]  uppercase grow
                    w-full  leading-9 py-2 tracking-wide text-center
                    hover:bg-black duration-300 ease-in-out hover:text-white cursor-pointer ">
                        add to cart
                    </div>
                </div>
                <div className="order_now mt-2 border border-[#bbb]  uppercase 
                    w-full lg:max-w-[90%]  leading-9 py-2 tracking-wide text-center
                    bg-black text-white cursor-pointer
                    ">
                    <FontAwesomeIcon icon={faBagShopping} className='mr-3  text-white  text-lg  cursor-pointer' />
                    Order Now - Cash on Delivery
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default ProductInfo