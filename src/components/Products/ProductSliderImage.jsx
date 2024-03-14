
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img from "../../assets/image/follow/5.png"
import img2 from "../../assets/image/follow/6.png"
import img3 from "../../assets/image/follow/4.png"
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slickPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
};
const ProductSliderImage = () => {

    return (
        <div>
            <Slider {...settings} className="grid gap-2 ">
                <div className="">
                    <img src={img} className=" " alt="one" />
                </div>
                <div className="">
                    <img src={img2} className=" " alt="two" />
                </div>
                <div className="">
                    <img src={img3} className=" " alt="three" />
                </div>
            </Slider>
        </div>
    )
}

export default ProductSliderImage