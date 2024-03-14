import ProductCard from "../subComponents/ProductCard"

const FollowingAndStaff = () => {
    return (
        <div className="container  mb-10">

            <h2 className="font-semibold text-3xl tracking-wider  max-sm:text-2xl  mb-5   capitalize  w-fit mx-auto">
                picked by staff
            </h2>
            <div className="grid grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2  gap-3 ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default FollowingAndStaff