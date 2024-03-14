import CardProductFav from "../../components/favorite/CardProductFav"

const UserFavoritePage = () => {
    return (
        <div className='pt-20 '>
            <div className="container">
                <div className="flex  items-center pb-3 md:mt-4 child:text-[#999999] gap-1">
                    <span className=" cursor-pointer">home </span>
                    <span className="  text-2xl font-semibold "> {`>`}</span>
                    <span className=" cursor-pointer">Wishlist
                    </span>
                </div>
                <div className="max-md:hidden w-full h-[1px] bg-[#dedede]"></div>
                <div className="py-5">
                    <div className="grid pb-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
                        <CardProductFav />
                        <CardProductFav />
                        <CardProductFav />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserFavoritePage