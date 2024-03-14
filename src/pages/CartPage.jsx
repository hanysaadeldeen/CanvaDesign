
import CardProduct from "../components/Cart/CardProduct"
import CartProductInfo from "../components/Cart/CartProductInfo"
const CartPage = () => {

    return (
        <div className="py-20 cart_Page">
            <div className="container">
                <h1 className="text-center font-extrabold max-sm:text-xl text-2xl ">Shopping cart</h1>
                <div className=" md:mt-6 max-w-[900px] mx-auto py-2 md:px-8">
                    <div className=" flex flex-1 text-right py-3   border-b  max-md:hidden">
                        <div className="w-16 mr-6">
                            <h1>Product</h1>
                        </div>
                        <div className="desc grow  text-left mr-6">
                        </div>
                        <div className="price w-28">
                            <h1>price</h1>
                        </div>
                        <div className="quantity mx-6 text-center w-32">
                            <h1>  quantity</h1>
                        </div>
                        <div className="quantity mx-6 text-center w-24">
                            <h1>total</h1>
                        </div>
                    </div>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CartProductInfo />
                </div>
            </div>
        </div>
    )
}

export default CartPage