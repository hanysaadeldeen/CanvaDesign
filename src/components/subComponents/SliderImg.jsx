
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import img from "../../assets/image/follow/5.png"
import img2 from "../../assets/image/category/1.png"
import img3 from "../../assets/image/follow/1.png"
import img5 from "../../assets/image/follow/3.png"
import img6 from "../../assets/image/follow/4.png"

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slickPlay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,


    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            }
        },
    ]
};

export const SliderImg = () => {
    return (
        <div className="mt-3 ">
            <Slider {...settings} className="grid gap-3">
                <Link to="/Product">
                    <div className="px-1.5">
                        <div className="cursor-pointer mb-5 max-md:mb-3   pb-2 ">
                            <img src={img} className="max-w-full " alt="one" />
                            <h2 className="capitalize font-bold pl-1 mt-4 mb-1"> the lola high rise </h2>
                            <h2 className="capitalize font-bold pl-1 mb-2"> shkinny 3OL </h2>
                            <div className="flex gap-2 pl-1 text-lg">
                                <h1 className=" "> $83.44 </h1>
                                <del className="text-[#6F6F6F]"> $100 </del>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Product">
                    <div className="px-1.5">
                        <div className="cursor-pointer mb-5 max-md:mb-3   pb-2 ">
                            <img src={img2} className="max-w-full " alt="one" />
                            <h2 className="capitalize font-bold pl-1 mt-4 mb-1"> the lola high rise </h2>
                            <h2 className="capitalize font-bold pl-1 mb-2"> shkinny 3OL </h2>
                            <div className="flex gap-2 pl-1 text-lg">
                                <h1 className=" "> $83.44 </h1>
                                <del className="text-[#6F6F6F]"> $100 </del>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Product">
                    <div className="px-1.5">
                        <div className="cursor-pointer mb-5 max-md:mb-3   pb-2 ">
                            <img src={img3} className="max-w-full " alt="one" />
                            <h2 className="capitalize font-bold pl-1 mt-4 mb-1"> the lola high rise </h2>
                            <h2 className="capitalize font-bold pl-1 mb-2"> shkinny 3OL </h2>
                            <div className="flex gap-2 pl-1 text-lg">
                                <h1 className=" "> $83.44 </h1>
                                <del className="text-[#6F6F6F]"> $100 </del>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Product">
                    <div className="px-1.5">
                        <div className="cursor-pointer mb-5 max-md:mb-3   pb-2 ">
                            <img src={img6} className="max-w-full " alt="one" />
                            <h2 className="capitalize font-bold pl-1 mt-4 mb-1"> the lola high rise </h2>
                            <h2 className="capitalize font-bold pl-1 mb-2"> shkinny 3OL </h2>
                            <div className="flex gap-2 pl-1 text-lg">
                                <h1 className=" "> $83.44 </h1>
                                <del className="text-[#6F6F6F]"> $100 </del>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Product">
                    <div className="px-1.5">
                        <div className="cursor-pointer mb-5 max-md:mb-3   pb-2 ">
                            <img src={img5} className="max-w-full " alt="one" />
                            <h2 className="capitalize font-bold pl-1 mt-4 mb-1"> the lola high rise </h2>
                            <h2 className="capitalize font-bold pl-1 mb-2"> shkinny 3OL </h2>
                            <div className="flex gap-2 pl-1 text-lg">
                                <h1 className=" "> $83.44 </h1>
                                <del className="text-[#6F6F6F]"> $100 </del>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/Product">
                    <div className="px-1.5">
                        <div className="cursor-pointer mb-5 max-md:mb-3   pb-2 ">
                            <img src={img6} className="max-w-full " alt="one" />
                            <h2 className="capitalize font-bold pl-1 mt-4 mb-1"> the lola high rise </h2>
                            <h2 className="capitalize font-bold pl-1 mb-2"> shkinny 3OL </h2>
                            <div className="flex gap-2 pl-1 text-lg">
                                <h1 className=" "> $83.44 </h1>
                                <del className="text-[#6F6F6F]"> $100 </del>
                            </div>
                        </div>
                    </div>
                </Link>






            </Slider>
        </div>
    )
}
