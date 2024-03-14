import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
const UserCardLocation = () => {
    return (

        <div className="mb-6 rounded-md flex  bg-[#F9F9F9] ">
            <div className="flex  p-3 flex-1 max-sm:flex-col  max-sm:gap-4 ">
                <div className=" grow text-left mr-6">
                    <h1 className="text-base font-bold mb-3 max-sm:mb-1 ">location: <span className="text-[#6b6b6b]">  home </span></h1>
                    <h1 className="text-base font-bold mb-3 max-sm:mb-1">deatails: <span className="text-[#6b6b6b]">   egypt,cairo,damitta,elroda </span> </h1>
                    <h1 className="text-base font-bold mb-3 max-sm:mb-1">phone: <span className="text-[#6b6b6b]">  01093720956 </span> </h1>
                </div>
                <div className="flex gap-4">
                    <Link to={"/user/editAdress"}>
                        <h1 className="cursor-pointer font-bold text-[#6b6b6b]">edit <FontAwesomeIcon icon={faEdit} className="ml-1" /></h1>
                    </Link>
                    <h1 className="cursor-pointer font-bold text-[#6b6b6b]">delete <FontAwesomeIcon icon={faTrash} className="text-red-500 ml-1" /> </h1>
                </div>
            </div>
        </div>

    )
}

export default UserCardLocation