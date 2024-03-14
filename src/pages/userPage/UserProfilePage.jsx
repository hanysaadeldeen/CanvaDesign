import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import UserSidePare from "./UserSidePare"

const UserProfilePage = () => {



    return (
        <div className='py-20 relative'>

            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <UserSidePare profile={"profile"} />
                    <div className="lg:w-3/4 max-lg:pl-2">
                        <h1 className="font-bold text-xl tracking-wide ml-2 mb-2">main profile </h1>

                        <div className="mb-6 rounded-md flex  bg-[#F9F9F9] ">
                            <div className="flex  p-3 flex-1 max-sm:flex-col  max-sm:gap-3 ">
                                <div className=" grow text-left mr-6">
                                    <h1 className="text-base font-bold mb-3 max-sm:mb-1 ">name : <span className="text-[#6b6b6b]">  hany mohamed </span></h1>
                                    <h1 className="text-base font-bold mb-3 max-sm:mb-1">email : <span className="text-[#6b6b6b] lowercase">  hsss@gmail.com </span> </h1>
                                    <h1 className="text-base font-bold mb-3 max-sm:mb-1">phone : <span className="text-[#6b6b6b]">  01093720956 </span> </h1>
                                </div>
                                <div className="">
                                    <h1 className="cursor-pointer font-bold text-[#6b6b6b]">edit <FontAwesomeIcon icon={faEdit} className="ml-1" /></h1>
                                </div>
                            </div>
                        </div>


                        <div className="password gap-4 flex flex-col">
                            <input type="password" name="" id="" placeholder="old password" className="p-2
                                w-full  rounded-md  border border-[#c0c0c0]" />
                            <input type="password" name="" id="" placeholder="new Password" className="p-2
                                w-full  rounded-md  border border-[#c0c0c0]" />
                            <input type="password" name="" id="" placeholder="Confirm password " className="p-2
                                w-full  rounded-md  border border-[#c0c0c0]" />
                        </div>
                        <h1 className="border border-[#bbb]  uppercase
                            leading-9 py-1 px-4 tracking-wide text-center w-fit  rounded-sm mt-4
                            bg-black text-white   cursor-pointer ">
                            save password
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfilePage