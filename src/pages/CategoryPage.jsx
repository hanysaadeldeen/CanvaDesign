import { Link } from "react-router-dom";


import img from "../assets/image/register/2.jpeg"
import img2 from "../assets/image/register/7.jpeg"
import img3 from "../assets/image/register/6.jpeg"
import img4 from "../assets/image/register/4.jpeg"
import img5 from "../assets/image/register/1.jpeg"
const CategoryPage = () => {

    return (
        <>
            <div className="pt-20 Collection">
                <div className="container">
                    {/* <div className="flex items-center justify-center border-b-2  border-slate-200 w-[30%]  mx-auto  max-sm:w-full">
                        <div className="py-3 px-5 cat-type cursor-pointer w-1/2  hover:font-semibold  relative">
                            <h1 className=" text-center ">Women</h1>
                        </div>
                        <div className="px-5 py-3 cat-type cursor-pointer w-1/2 relative">
                            <h1 className=" text-center">Man</h1>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="container pb-10 ">
                <div className="py-8  max-sm:block   grid  grid-cols-4   max-lg:grid-cols-3    gap-2">
                    <Link to={"/Category/choose"}>
                        <div className="my-1 font-bold  relative cursor-pointer max-sm:hover:bg-slate-50 max-sm:p-3 ">
                            <img src={img} className=" max-sm:hidden" alt="" />
                            <div className="max-sm:relative w-full absolute bottom-2 left-2">
                                <div className="relative w-fit">
                                    <h1 className="text-4xl max-sm:text-black  text-white">new</h1>
                                    <div className="sm:hidden absolute top-[-10px] right-[-80px]   py-1 px-2"  >
                                        <span className="text-red-600 text-sm uppercase ">2 added</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" max-sm:hidden absolute top-2 left-2    py-1 px-2"  >
                                <span className="text-red-600 text-sm uppercase ">12 added</span>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/Category/choose"}>
                        <div className="my-1 font-bold  relative cursor-pointer max-sm:hover:bg-slate-50 max-sm:p-3 ">
                            <img src={img2} className=" max-sm:hidden" alt="" />
                            <div className="max-sm:relative w-full absolute bottom-2 left-2">
                                <div className="relative w-fit">
                                    <h1 className="text-4xl max-sm:text-black  text-white">bages</h1>
                                    <div className="sm:hidden absolute top-[-10px] right-[-80px]   py-1 px-2"  >
                                        <span className="text-red-600 text-sm uppercase ">10 added</span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-sm:hidden absolute top-2 left-2   py-1 px-2"  >
                                <span className="text-red-600 text-sm uppercase ">10 added</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Category/choose"}>
                        <div className="my-1 font-bold  relative cursor-pointer max-sm:hover:bg-slate-50 max-sm:p-3 ">
                            <img src={img3} className=" max-sm:hidden" alt="" />
                            <div className="max-sm:relative w-full absolute bottom-2 left-2">
                                <div className="relative w-fit">
                                    <h1 className="text-4xl max-sm:text-black  text-white">shoes</h1>
                                    <div className="sm:hidden absolute top-[-10px] right-[-80px]   py-1 px-2"  >
                                        <span className="text-red-600 text-sm uppercase "></span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-sm:hidden absolute top-2 left-2   py-1 px-2"  >
                                <span className="text-red-600 text-sm uppercase "></span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Category/choose"}>
                        <div className="my-1 font-bold  relative cursor-pointer max-sm:hover:bg-slate-50 max-sm:p-3   ">
                            <img src={img4} className=" max-sm:hidden" alt="" />
                            <div className="max-sm:relative w-full absolute bottom-2 left-2">
                                <div className="relative w-fit">
                                    <h1 className="text-4xl max-sm:text-black  text-white">Clothings</h1>
                                    <div className="sm:hidden absolute top-[-10px] right-[-80px]   py-1 px-2"  >
                                        <span className="text-red-600 text-sm uppercase "></span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-sm:hidden absolute top-2 left-2   py-1 px-2"  >
                                <span className="text-red-600 text-sm uppercase "></span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/Category/choose"}>
                        <div className="my-1 font-bold  relative cursor-pointer max-sm:hover:bg-slate-50 max-sm:p-3   ">
                            <img src={img5} className=" max-sm:hidden" alt="" />
                            <div className="max-sm:relative w-full absolute bottom-2 left-2">
                                <div className="relative w-fit">
                                    <h1 className="text-4xl max-sm:text-black  text-white">Accessories</h1>
                                    <div className="sm:hidden absolute top-[-10px] right-[-80px]   py-1 px-2"  >
                                        <span className="text-red-600 text-sm uppercase ">3 added</span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-sm:hidden absolute top-2 left-2    py-1 px-2"  >
                                <span className="text-red-600 text-sm uppercase ">3 added</span>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default CategoryPage