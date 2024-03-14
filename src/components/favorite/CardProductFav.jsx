import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


import img from "../../assets/image/fav-off.png"
import img2 from "../../assets/image/follow/5.png"
const CardProductFav = () => {
    const [faveOnOFf, setFaveOnOFf] = useState(true)

    return (
        <div className=" mb-5 max-md:mb-3 relative  pb-2 ">
            {
                faveOnOFf ?
                    <FontAwesomeIcon icon={faHeart} className='p-1 absolute top-1 left-1 text-3xl cursor-pointer text-[#DC4732] ' onClick={() => setFaveOnOFf(!faveOnOFf)} /> :
                    <img src={img} alt="one" className='p-1 w- h-12 w-12 absolute   cursor-pointer  ' onClick={() => setFaveOnOFf(!faveOnOFf)} />
            }

            <img src={img2} className="max-w-full " alt="one" />
            <div className="cursor-pointer">
                <h2 className="capitalize font-bold pl-1 mt-4 mb-1"> the lola high rise </h2>
                <h2 className="capitalize font-bold pl-1 mb-2"> shkinny 3OL </h2>
                <div className="flex gap-2 pl-1 text-lg">
                    <h1 className=" "> $83.44 </h1>
                    <del className="text-[#6F6F6F]"> $100 </del>
                </div>
            </div>

        </div>
    )
}

export default CardProductFav