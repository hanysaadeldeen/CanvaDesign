import { Link } from "react-router-dom"
const RegisterPage = () => {
    return (
        <div className='py-20'>
            <div className="container  ">

                <div className="w-full text-center py-14 max-sm:py-7">
                    <h1 className='text-2xl  tracking-wide font-extrabold  w-fit mx-auto border-b-[3px] pb-2 px-3 border-black rounded-sm'>Create Account</h1>
                    <form className="flex flex-col my-8 max-sm:my-4  max-sm:gap-3 gap-5">
                        <input type="text" name="" id="" placeholder="First Name" className="py-3 px-5 w-[500px] max-w-full mx-auto   rounded-sm border  border-[#c0c0c0]" />
                        <input type="text" name="" id="" placeholder="Last Name" className="py-3 px-5 w-[500px] max-w-full mx-auto   rounded-sm border  border-[#c0c0c0]" />
                        <input type="email" name="" id="" placeholder="Email" className="py-3 px-5 w-[500px] max-w-full mx-auto   rounded-sm border  border-[#c0c0c0]" />
                        <input type="password" name="" id="" placeholder="Password" className="py-3 px-5 w-[500px] max-w-full mx-auto   rounded-sm border  border-[#c0c0c0]" />
                        <input type="password" name="" id="" placeholder="Confirm password" className="py-3 px-5 w-[500px] max-w-full mx-auto   rounded-sm border  border-[#c0c0c0]" />
                        <input type="phone" name="" id="" placeholder="phone" className="py-3 px-5 w-[500px] max-w-full mx-auto   rounded-sm border  border-[#c0c0c0]" />
                    </form>

                    <div className="mt-5">
                        <div className="rounded-sm  uppercase  mb-3  w-[500px] max-w-full mx-auto  leading-9 py-2 tracking-wider text-center bg-black text-white cursor-pointer   ">
                            create
                        </div>
                        <div className=" gap-4 flex flex-col">
                            <Link to="/loginPage">
                                <h1 className="text-md underline font-light underline-offset-2">return to <span className="font-bold tracking-wider"> Login</span>  </h1>
                            </Link>
                            <Link to="/">
                                <h1 className="text-md underline  font-light  underline-offset-2"> Return to <span className="font-bold tracking-wider"> Store</span>  </h1>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RegisterPage