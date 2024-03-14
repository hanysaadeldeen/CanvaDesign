import img from "../../assets/image/product details/2.png"
const UserCardOrder = () => {
    return (
        <div className="cursor-pointer mb-6 rounded-md flex max-sm:flex-col max-sm:p-3 bg-[#F9F9F9] ">
            <div className="w-32 max-[400px]:mx-auto  mr-6">
                <img src={img} className="max-sm:rounded-md  rounded-l-md" alt="" />
            </div>
            <div className="flex  py-3 pr-3 flex-1 max-md:flex-col max-md:text-left text-right">
                <div className="desc grow  text-left mr-6">
                    <div className="">
                        <h1 className="text-base text-[#6b6b6b] font-bold mb-3 max-sm:mb-1 ">order-number:#1235456</h1>
                        <h1 className="text-base font-bold mb-3 max-sm:mb-1 ">The Joni High Rise Loose 29L</h1>
                        <h1 className="text-lg text-[#6b6b6b]  mb-3 max-sm:mb-1">Black / M</h1>
                        <h1 className="text-lg text-[#6b6b6b]  mb-3 max-sm:mb-1">situation:Your order is confirmed</h1>
                    </div>
                </div>
                <div className="price font-bold   w-28 pt-1">
                    <h1>LE 600.34</h1>
                </div>
            </div>
        </div>
    )
}

export default UserCardOrder