
import AdminSidePare from "./AdminSidePare"
import AdminOrderContainerCard from "./AdminOrderContainerCard"

const AdminAllOrderPage = () => {
    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <AdminSidePare allOrders={"allOrders"} />
                    <div className=" lg:w-full  lg:ml-5">
                        <h1 className="max-lg:hidden mb-3 text-xl font-semibold">All Orders</h1>
                        <div className="">
                            <AdminOrderContainerCard />
                            <AdminOrderContainerCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAllOrderPage