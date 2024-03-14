import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import img from "../../assets/image/product details/1.png"
const CardProdctInfo = () => {
    return (
        <div className=" my-4 border-b  border-[#d9d9d9] pb-2 px-1   flex items-center  ">
            <div className="relative img_section w-fit mr-3">
                <div className="w-16 h-16 overflow-hidden">
                    <img src={img} alt="" />
                </div>
                <span className="absolute -top-3 bg-red left-14 bg-[#7c7c7c] w-5 h-5 text-xs rounded-full  text-center leading-5 text-white ">4</span>
            </div>
            <div className="grow  info   mr-1 name_order_now">
                <h1 className="font-semibold text-base  mb-1"> Grey Crew Neck Sweatshirt</h1>
                <h1 className="text-[#7b7b7b] font-light "> GREY / M / SWEATSHIRTS</h1>
            </div>
            <div className="price flex items-center gap-2 flex-wrap justify-center " >
                <h1 > LE 330.00 EGP</h1>
                <FontAwesomeIcon icon={faClose} className=' text-[#7b7b7b]  text-base  cursor-pointer hover:text-black ' />
            </div>
        </div>
    )
}

export default CardProdctInfo