
import { Link } from "react-router-dom";
import UserCardLocation from "./UserCardLocation";
import UserSidePare from "./UserSidePare";
const UserLocationPage = () => {


    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <UserSidePare location={"location"} />
                    <div className="lg:w-3/4">
                        <UserCardLocation />
                        <Link to={"/user/AddNewAddress"}>
                            <h1 className="add_to_cart border border-[#bbb]  uppercase grow
                            leading-9 py-2 tracking-wide text-center w-fit mx-auto px-6 rounded-sm
                        hover:bg-black duration-300 ease-in-out hover:text-white cursor-pointer ">
                                add new address
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLocationPage