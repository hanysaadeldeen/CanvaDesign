import { useEffect, useRef, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { CirclePicker } from 'react-color'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Select from "react-dropdown-select";
import ProductCard from "../components/subComponents/ProductCard"

import Bagination from "../components/subComponents/Bagination"
const ShopProductPage = () => {

    const colors = ['#fff', '#D9E3F0', '#F47373',
        '#697689', '#37D67A', '#2CCCE4',
        '#000', '#dce775', '#ff8a65', '#ba68c8']

    const setColor = (e) => {
        console.log(e);
    }
    // double slider 
    const [value, setValue] = useState([300, 700]);

    const [isOpen, setOpen] = useState("full");
    const [isFilter, setIsFilter] = useState("[calc(100%+32px)]");


    // toogle for drop down slider
    const btnref = useRef()
    useEffect(() => {
        let handler = (event) => {
            if (!btnref.current.contains(event.target)) {
                setOpen("full")
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])
    const btnrefIlter = useRef()

    useEffect(() => {
        let handlerFilter = (event) => {
            if (!btnrefIlter.current.contains(event.target)) {
                setIsFilter("[calc(100%+32px)]")
            }
        }
        document.addEventListener("mousedown", handlerFilter)
        return () => {
            document.removeEventListener("mousedown", handlerFilter)
        }
    }, [])


    const options1 = [
        {
            value: 1,
            label: "Featured"
        },
        {
            value: 2,
            label: "Price, low to high"
        },
        {
            value: 3,
            label: "Price, high to low"
        },
        {
            value: 4,
            label: "Date, old to new"
        },
        {
            value: 5,
            label: "Date, new to old"
        },
        {
            value: 6,
            label: "Alphabetically, A- Z"
        },
        {
            value: 7,
            label: "Alphabetically, Z - A"
        },
        {
            value: 8,
            label: "Best price,  high to low "
        },
        {
            value: 9,
            label: "Best price, low to high"
        }
    ];
    const items_per_page = [

        {
            value: 10,
        },
        {
            value: 15,
        },
        {
            value: 20,
        },
        {
            value: 30,
        },
        {
            value: 50,
        }

    ];
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
        {
            value: "XL"
        },
        {
            value: "2XL"
        },
        {
            value: "3XL"
        },
        {
            value: "5XL"
        },
    ]

    // selected drop down
    const setValues = (e) => {
        console.log(e[0].label);
    }
    const getlabel = (e) => {
        console.log(e);
    }
    const getSize = (e) => {
        console.log(e);
    }
    const setItems = (e) => {
        console.log(e[0].value);
    }

    // const pageCount = items.length
    return (
        <div className={` pt-20 relative `}>
            {
                isOpen === 0 || isFilter === 0 ?
                    <div className="fixed  top-0 left-0  bg-[#232323cc] h-screen duration-150  ease-in-out
            w-full z-40 cursor-pointer"></div>
                    : null
            }
            <div className="container ">
                {/* number products */}
                <div className="flex max-md:pb-2  max-lg:pb-4 lg:pb-7 items-center pl-2 text-lg font-semibold child:text-[#707070] gap-1">
                    <span className=" cursor-pointer">show <span className=" ml-1">800 product </span> </span>
                </div>
                <div className="flex gap-4">
                    {/* slider for all screen */}
                    <div ref={btnrefIlter} className={"max-w-[200px] lg:w-[210px] pl-2  bg-white max-lg:w-3/5 max-lg:max-w-[300px] max-lg:z-50  max-lg:pl-4 max-lg:pt-1 max-lg:fixed max-lg:left-0 max-lg:bottom-0 max-lg:top-0 max-lg:duration-[.6s] max-lg:ease-in-out " +
                        (isFilter !== 0 ? "max-lg:-translate-x-[calc(100%+32px)]" : "max-lg:-translate-x-0")}>

                        <div className="w-full">
                            <div className="lg:hidden w-full relative slider_name ">
                                <h1 className="font-extrabold text-2xl tracking-wider mt-2">slider</h1>
                                <div className={"absolute -right-8 -top-3 w-8 h-8  text-center p-1  duration-75 " +
                                    (isFilter !== 0 ? "bg-[#5e5e5e]" : "bg-[#353434]")} >
                                    <FontAwesomeIcon icon={faXmark} className={"text-2xl  cursor-pointer duration-75  text-white " +
                                        (isFilter !== 0 && "opacity-20")}
                                        onClick={() => setIsFilter("[calc(100%+32px)]")} />
                                </div>
                            </div>
                            <div className="max-lg:h-screen max-lg:overflow-y-auto  max-lg:pb-24 max-lg:pr-3">
                                <div className="AVAILABILITY   mt-5 ">
                                    <h1 className="font-extrabold  uppercase border-b  border-[#787878] pb-2 mb-6">AVAILABILITY</h1>
                                    <div className="control mb-1">
                                        <input type="checkbox" id="Stock" />
                                        <label htmlFor="Stock">In Stock (63)</label>
                                    </div>
                                    <div className="control ">
                                        <input type="checkbox" id="Out Of Stock" />
                                        <label htmlFor="Out Of Stock">Out Of Stock (57)</label>
                                    </div>
                                </div>
                                <div className="category mt-8">
                                    <h1 className="font-extrabold text-sm uppercase border-b  border-[#787878] pb-2 mb-6">category</h1>
                                    <div className="control mb-1">
                                        <input type="checkbox" id="T-shirt" />
                                        <label htmlFor="T-shirt">T-shirt</label>
                                    </div>
                                    <div className="control ">
                                        <input type="checkbox" id="Shoose" />
                                        <label htmlFor="Shoose">Shoose</label>
                                    </div>
                                </div>
                                <div className="brand mt-8">
                                    <h1 className="font-extrabold text-sm uppercase border-b  border-[#787878] pb-2 mb-6">brand</h1>
                                    <div className="control mb-1">
                                        <input type="checkbox" id="one" />
                                        <label htmlFor="one">River Nine (1)</label>
                                    </div>
                                    <div className="control ">
                                        <input type="checkbox" id="two" />
                                        <label htmlFor="two">Town Team (48)</label>
                                    </div>
                                </div>
                                <div className="size mt-7 ">
                                    <h1 className="font-extrabold text-sm uppercase border-b  border-[#787878] pb-2 mb-2">size</h1>
                                    <div className="flex child:border child:border-[#dadada]
                                    child:py-1 child:px-3 child:min-w-[45px] child:font-medium
                                    child:my-1 child:mr-2 flex-wrap child:text-center child:cursor-pointer
                                    ">
                                        {size.map((e) => {
                                            return (
                                                <div key={e.value} onClick={() => getSize(e.value)}>{e.value}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="color mt-7 ">
                                    <h1 className="font-extrabold text-sm uppercase border-b  border-[#787878] pb-2 mb-6">colors</h1>
                                    <CirclePicker width=""
                                        circleSpacing={8}
                                        colors={colors}
                                        onChangeComplete={(e, colors) => setColor(colors.target.title)}
                                    />
                                </div>
                                <div className="price mt-10">
                                    <h1 className="font-extrabold uppercase border-b  border-[#787878] pb-2 mb-6">price</h1>
                                    <RangeSlider
                                        min={200} max={1000} step={10} defaultValue={[300, 700]}
                                        value={value} onInput={setValue}
                                    />
                                    <div className="mt-6 flex justify-between items-center px-1">
                                        <h1 className="font-semibold">range</h1>
                                        <div className="child:text-[#6F6F6F] child:font-semibold">
                                            <span> ${value[0]}</span>
                                            <span>--${value[1]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-lg:w-full w-[calc(100%-210px)] " >
                        <div className="flex items-center justify-between lg:gap-5 lg:justify-end px-2 py-5 ">
                            {/* start sort for large screen  */}
                            <div className="max-lg:hidden flex gap-2 items-center ">
                                <h1 className="uppercase font-medium tracking-wide">ITEMS PER PAGE </h1>
                                <Select
                                    placeholder={"10"}
                                    color={"#c7c7c7"}
                                    closeOnScroll={true}
                                    className={"text-black  "}
                                    clearOnBlur={true}
                                    labelField={"value"}
                                    options={items_per_page} onChange={(values) => setItems(values)} />
                            </div>
                            <div className="max-lg:hidden flex gap-2 items-center sort-by ">
                                <h1 className="uppercase font-medium tracking-wide">sort by </h1>
                                <Select
                                    placeholder={"feature"}
                                    color={"#c7c7c7"}
                                    closeOnScroll={true}
                                    className={"text-black  "}
                                    clearOnBlur={true}
                                    options={options1} onChange={(values) => setValues(values)} />
                            </div>
                            {/* end sort for large screen  */}


                            {/* filter icon for smole  screen */}
                            <div className="lg:hidden" >
                                <div onClick={() => setIsFilter(prev => prev === "[calc(100%+32px)]" ? 0 : "[calc(100%+32px)]")} className="cursor-pointer">
                                    <FontAwesomeIcon icon={faFilter} className='mr-1 text-red-500  cursor-pointer' />
                                    <span className="cursor-pointer  font-light  font-serif tracking-wider">filter</span>
                                </div>
                            </div>

                            {/* sort product in smole  screen */}
                            <div className=" gap-1 lg:hidden" ref={btnref} >
                                <div className="cursor-pointer flex items-center "
                                    onClick={() => setOpen(prev => prev === "full" ? 0 : "full")}>
                                    <h1 className="font-semibold">Sort</h1>
                                    <FontAwesomeIcon icon={faAngleDown} className=' mt-1 ml-1 text-[#878787]' />
                                </div>
                                <div className={"dropdown-menu-body fixed bottom-0 left-0 w-full h-3/6 z-50  bg-white  translate-y-0 duration-300 ease-in-out " +
                                    (isOpen === 0 ? "translate-y-0" : "translate-y-full")}
                                >
                                    <div className="flex justify-between items-center border-b h-[57px]  py-2 px-5 border-[#ddd]">
                                        <h1 className="uppercase tracking-wide font-bold text-xl ">sort by :</h1>
                                        <FontAwesomeIcon icon={faXmark} className='text-3xl text-[#606060] cursor-pointer'
                                            onClick={() => setOpen(prev => prev === "full" ? 0 : "full")}
                                        />
                                    </div>
                                    <div className="dropdown-menu-body-sort overflow-auto">
                                        {
                                            options1.map((e) => {
                                                return (
                                                    <div key={e.value} className="hover:bg-[#f8f8f8] py-[10px] px-[20px] cursor-pointer"
                                                        onClick={() => getlabel(e.label)}>
                                                        <h2 className="font-semibold  text-lg" >{e.label}</h2>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* products */}
                        <div className="grid  pb-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
                <Bagination />

            </div>
        </div>
    )
}

export default ShopProductPage