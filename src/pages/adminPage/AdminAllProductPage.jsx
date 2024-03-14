// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AdminProductCard from "./AdminProductCard"
import AdminSidePare from "./AdminSidePare"
// import { faEdit } from "@fortawesome/free-solid-svg-icons"

const AdminAllProductPage = () => {
    return (
        <div className='py-20 relative'>
            <div className="container ">
                <div className="flex max-lg:flex-col gap-4">
                    <AdminSidePare allProducts={"allProducts"} />
                    <div className=" lg:w-full  lg:ml-5">
                        <h1 className="max-lg:hidden mb-3 text-xl font-semibold">All Products</h1>
                        <div className="grid grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2  gap-3">
                            <AdminProductCard />
                            <AdminProductCard />
                            <AdminProductCard />
                            <AdminProductCard />
                            <AdminProductCard />
                            <AdminProductCard />
                            <AdminProductCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAllProductPage