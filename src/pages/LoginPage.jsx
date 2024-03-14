import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <div className='py-20'>
            <div className="container  ">
                <div className="w-full text-center py-14 max-sm:py-7">
                    <h1 className='text-2xl font-extrabold tracking-wide  w-fit mx-auto border-b-[3px] pb-2 px-3 border-black rounded-sm'>Login</h1>
                    <form className="flex flex-col my-8 gap-5">
                        <input type="email" name="" id="" placeholder="Email" className="py-3 px-5 w-[500px] max-w-full mx-auto   rounded-sm border  border-[#c0c0c0]" />
                        <input type="password" name="" id="" placeholder="Password" className="py-3 px-5 w-[500px] max-w-full mx-auto   rounded-sm border  border-[#c0c0c0]" />
                    </form>
                    <Link to="/forgotPassword">
                        <h1 className="text-md underline  underline-offset-2">Forgot your password? </h1>
                    </Link>
                    <div className="mt-5">
                        <div className="rounded-sm  uppercase  mb-4  w-[500px] max-w-full mx-auto  leading-9 py-2 tracking-wider text-center bg-black text-white cursor-pointer   ">
                            sign in
                        </div>
                        <div className=" gap-4 flex flex-col">
                            <Link to="/RegisterPage">
                                <h1 className="text-md underline font-light underline-offset-2">Create account </h1>
                            </Link>
                            <Link to="/">
                                <h1 className="text-md underline  font-light  underline-offset-2"> Return to Store </h1>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link to="/user/order" className="text-red-500 block text-center"> user Page</Link>
                <Link to="/admin/Allproduct" className="text-red-500 block text-center"> admin Page</Link>
            </div>
        </div>
    )
}

export default LoginPage