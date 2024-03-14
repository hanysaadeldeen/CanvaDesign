import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import ReactStars from "react-rating-stars-component";
import img from "../../assets/image/product details/review/9.jpg"
import img2 from "../../assets/image/product details/review/8.jpg"
import img3 from "../../assets/image/product details/review/10.jpg"
import img4 from "../../assets/image/product details/review/user.jpg"

const ProductReview = () => {
    const [review, serReview] = useState(false)
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className="my-5">
            <h1 className="mx-4 mb-4 text-xl font-extrabold md:text-center" > 9 Review</h1>
            <h1 className=" border border-[#bbb]  uppercase grow
                    leading-9 py-2 px-7 mx-auto tracking-wide  w-fit 
                    hover:bg-black duration-300 ease-in-out hover:text-white cursor-pointer" onClick={() => serReview(!review)}>
                write a review
            </h1>
            <div className={"add_review  bg-[#eeeeee54] px-4 rounded-xl py-4 mt-10 ease-in-out duration-500 " + (review ? "" : "hidden")}  >
                <div className=" mb-4   flex flex-col">
                    <label className="font-bold ml-1 capitalize" htmlFor="name"> add your Review (100)  </label>
                    <input type="text" placeholder="Your Review" className="rounded-md  py-2 px-2 border  mt-2 md:w-1/2 w-full " />
                </div>
                <div className="flex items-center gap-3 ">
                    <h1 className="font-bold text-xl ml-1 capitalize">rating </h1>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={27}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
                <div className="my-4 border border-[#bbb]  uppercase 
                    w-fit  leading-9 py-2 px-6  rounded-sm tracking-wide text-center
                    bg-black text-white cursor-pointer">
                    submit review
                </div>
            </div>



            <div className="people_review mt-10">
                <div className="mx-4 my-5 border-b pb-5">
                    <div className="flex items-center gap-4 mb-2 ">
                        <img src={img2} alt="user_img" />
                        <div>
                            <div className="flex items-center gap-1">
                                <h1 className="font-bold mt-1">4.5</h1>
                                <FontAwesomeIcon icon={faStar} className=' text-yellow-400   text-lg  cursor-pointer' />
                            </div>
                            <h1 className="text-[#6F6F6F] font-medium tracking-wide"> Miracle Baptista  . Nov 10th, 2021</h1>
                        </div>
                    </div>
                    <h1 className="font-semibold">Overall a great workout shoes and very comfortable</h1>
                </div>
                <div className="mx-4 my-5 border-b pb-5">
                    <div className="flex items-center gap-4 mb-2 ">
                        <img src={img} alt="user_img" />
                        <div>
                            <div className="flex items-center gap-1">
                                <h1 className="font-bold mt-1">2</h1>
                                <FontAwesomeIcon icon={faStar} className=' text-yellow-400   text-lg  cursor-pointer' />
                            </div>
                            <h1 className="text-[#6F6F6F] font-medium tracking-wide"> Miracle Baptista  . Nov 10th, 2021</h1>
                        </div>
                    </div>
                    <h1 className="font-semibold">Overall a great workout shoes and very comfortable</h1>
                </div>
                <div className="mx-4 my-5 border-b pb-5">
                    <div className="flex items-center gap-4 mb-2 ">
                        <img src={img3} alt="user_img" />
                        <div>
                            <div className="flex items-center gap-1">
                                <h1 className="font-bold mt-1">4.5</h1>
                                <FontAwesomeIcon icon={faStar} className=' text-yellow-400   text-lg  cursor-pointer' />
                            </div>
                            <h1 className="text-[#6F6F6F] font-medium tracking-wide"> Miracle Baptista  . Nov 10th, 2021</h1>
                        </div>
                    </div>
                    <h1 className="font-semibold">Overall a great workout shoes and very comfortable</h1>
                </div>
                <div className="mx-4 my-5 border-b pb-5">
                    <div className="flex items-center gap-4 mb-2 ">
                        <img src={img4} className="max-w-[48px] rounded-full" alt="user_img" />
                        <div>
                            <div className="flex items-center gap-1">
                                <h1 className="font-bold mt-1">1</h1>
                                <FontAwesomeIcon icon={faStar} className=' text-yellow-400   text-lg  cursor-pointer' />
                            </div>
                            <h1 className="text-[#6F6F6F] font-medium tracking-wide"> Miracle Baptista  . Nov 10th, 2021</h1>
                        </div>
                    </div>
                    <h1 className="font-semibold">Overall a great workout shoes and very comfortable</h1>
                </div>
            </div>

        </div >
    )
}

export default ProductReview