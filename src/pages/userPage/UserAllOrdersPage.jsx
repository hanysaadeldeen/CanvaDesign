
import UserCardOrder from "./UserCardOrder";
import UserSidePare from "./UserSidePare";
const UserAllOrdersPage = () => {

    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex gap-4 max-lg:flex-col">
                    <UserSidePare order={"order"} />
                    <div className="lg:w-3/4">
                        <UserCardOrder />
                        <UserCardOrder />
                        <UserCardOrder />
                        <UserCardOrder />
                        <UserCardOrder />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAllOrdersPage