

import ProductInfo from "../components/Products/ProductInfo"
import ProductReview from "../components/Products/ProductReview"
import { useState } from "react"
import ProductDescription from "../components/Products/ProductDescription"
import { SliderImg } from "../components/subComponents/SliderImg"
import ProductSliderImage from "../components/Products/ProductSliderImage"

const ProductPage = () => {
    const [reAndDes, setReAndDes] = useState("review")
    return (
        <>
            <div className="ProductPage py-20">
                <div className="container">
                    <div className="flex  items-center pl-5 pb-3  child:text-[#999999] gap-1">
                        <span className=" cursor-pointer">home </span>
                        <span className="  text-2xl font-semibold "> {`>`}</span>
                        <span className=" cursor-pointer">Polo tshirt </span>
                    </div>
                    <div className="flex items-start child:max-md:w-full  max-md:flex-col  gap-4   mt-3">
                        <div className="md:w-1/2   md:pl-5 md:mr-10">
                            <ProductSliderImage />
                        </div>
                        <div className=" md:w-1/2 lg:w-2/5 ">
                            <ProductInfo />
                        </div>
                    </div>
                    <div className="review_and_description">
                        <div className="pt-16 Collection ">
                            <div className="container ">
                                <div className="flex items-center justify-center border-b-2  border-slate-200 w-[30%]  mx-auto  max-md:w-full">
                                    <div className={"py-3 px-5 review_pag cursor-pointer w-1/2  relative before:bottom-[-2px] before:bg-[#0F0F0F] before:left-0  before:absolute  before:h-[2px]  duration-1000 before:ease-in-out " +
                                        (reAndDes === "review" ? "before:w-full font-semibold" : "before:w-0")}
                                        onClick={() => setReAndDes("review")}>
                                        <h1 className=" text-center">review</h1>
                                    </div>
                                    <div className={"py-3 px-5 review_pag cursor-pointer w-1/2  relative before:bottom-[-2px] before:bg-[#0F0F0F] before:left-0  before:absolute  before:h-[2px]  duration-1000 before:ease-in-out " +
                                        (reAndDes !== "review" ? "before:w-full font-semibold" : "before:w-0")}
                                        onClick={() => setReAndDes("description")}
                                    >
                                        <h1 className=" text-center">description</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            reAndDes === "review" ?
                                <ProductReview /> :
                                <ProductDescription />
                        }
                    </div>
                </div>
                <div className="related_product py-5  lg:py-10 bg-[#fbf7f5]">
                    <div className="container">
                        <h1 className="capitalize font-extrabold my-8 mx-4 max-sm:text-xl text-2xl tracking-wider">
                            Recommendation For You
                        </h1>
                        <div className="md:pl-9 md:pr-7">
                            <SliderImg />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductPage