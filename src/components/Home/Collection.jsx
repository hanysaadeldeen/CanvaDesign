import { Link } from "react-router-dom"
import { SliderImg } from "../subComponents/SliderImg"


const Collection = () => {
    return (
        <div className="max-sm:pt-7 pt-10  Collection">
            <div className="container">
                <h2 className="font-semibold text-3xl tracking-wider  max-sm:text-2xl  mb-3  capitalize  w-fit mx-auto">
                    New for you
                </h2>
                <Link to={"/ShopProductPage"}>
                    <h1 className=" border border-[#bbb]  mb-3 uppercase grow
                    leading-9 py-2 px-7 mx-auto tracking-wide  w-fit 
                    hover:bg-black duration-300 ease-in-out hover:text-white cursor-pointer">
                        Show all product
                    </h1>
                </Link>
                <div className="flex items-center justify-center border-b-2  border-slate-200 w-[40%] mx-auto  max-sm:w-full ">
                </div>
                <div className="mb-10 md:pl-9 md:pr-7 ">
                    <SliderImg />
                </div>
            </div>
        </div>
    )
}

export default Collection