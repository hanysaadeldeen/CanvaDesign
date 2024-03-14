
import img from "../../assets/image/follow/5.png"
const ProductCard = () => {
    return (
        <div className="cursor-pointer mb-5 max-md:mb-3  pb-2 ">
            <img src={img} className="max-w-full " alt="one" />
            <h2 className="capitalize font-bold pl-1 mt-4 mb-1"> the lola high rise </h2>
            <h2 className="capitalize font-bold pl-1 mb-2"> shkinny 3OL </h2>
            <div className="flex gap-2 pl-1 text-lg">
                <h1 className=" "> $83.44 </h1>
                <del className="text-[#6F6F6F]"> $100 </del>
            </div>
        </div>
    )
}

export default ProductCard