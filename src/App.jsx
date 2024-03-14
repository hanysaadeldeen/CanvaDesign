
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
// import CatTypes from "./components/Category/CatTypes";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/subComponents/Navbar";
import CatTypesChoosePage from "./components/Category/CatTypesChoose";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPassword from "./pages/ForgotPassword";
import UserFavoritePage from "./pages/userPage/UserFavoritePage";
import UserAllOrdersPage from "./pages/userPage/UserAllOrdersPage";
import NavbarMoblie from "./components/subComponents/NavbarMoblie";
import UserLocationPage from "./pages/userPage/UserLocationPage";
import UserProfilePage from "./pages/userPage/UserProfilePage";
import UserAddNewAddressPage from "./pages/userPage/UserAddNewAddressPage";
import UserEditAdressPage from "./pages/userPage/UserEditAdressPage";
import AdminAllOrderPage from "./pages/adminPage/AdminAllOrderPage";
import AdminAllProductPage from "./pages/adminPage/AdminAllProductPage";
import AdminAddBrandPage from "./pages/adminPage/AdminAddBrandPage";
import AdminAddCategoyPage from "./pages/adminPage/AdminAddCategoyPage";
import AdminAddSubCategoyPage from "./pages/adminPage/AdminAddSubCategoyPage";
import AdminOrderDetailsPage from "./pages/adminPage/AdminOrderDetailsPage";
import AdminAddProductsPage from "./pages/adminPage/AdminAddProductsPage";
import ShopProductPage from "./pages/ShopProductPage";
import Footer from "./components/subComponents/Footer";
import Privacy from "./pages/footer/Privacy";
import Contact from "./pages/footer/Contact";
import ReturnProduct from "./pages/footer/ReturnProduct";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Category" element={<CategoryPage />} />
          <Route path="/ShopProductPage" element={<ShopProductPage />} />
          {/* <Route path="/Category/Types" element={<CatTypes />} /> */}
          <Route path="/Category/:id" element={<CatTypesChoosePage />} />
          <Route path="/Product" element={<ProductPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/user/FavoritePage" element={<UserFavoritePage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/user/order" element={<UserAllOrdersPage />} />
          <Route path="/user/location" element={<UserLocationPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />

          <Route path="/user/AddNewAddress" element={<UserAddNewAddressPage />} />
          <Route path="/user/editAdress" element={<UserEditAdressPage />} />
          <Route path="/admin/Allproduct" element={<AdminAllProductPage />} />
          <Route path="/admin/Allorder" element={<AdminAllOrderPage />} />
          <Route path="/admin/addBrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addProduct" element={<AdminAddProductsPage />} />
          <Route path="/admin/Addcategory" element={<AdminAddCategoyPage />} />
          <Route path="/admin/AddSubCategoy" element={<AdminAddSubCategoyPage />} />
          <Route path="/admin/orderInfo" element={<AdminOrderDetailsPage />} />
          <Route path="/Privacy-Policy" element={<Privacy />} />
          <Route path="/Return-Product" element={<ReturnProduct />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
        <NavbarMoblie />
      </BrowserRouter>
    </>
  )
}

export default App
