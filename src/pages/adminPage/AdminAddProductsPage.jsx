
import { useState } from "react";
import AdminSidePare from "./AdminSidePare"
import Select from "react-dropdown-select";
import { GithubPicker } from 'react-color'
import img from "../../assets/image/avatar.png"
import addcolor from "../../assets/image/add.png"

const AdminAddProductsPage = () => {

    const [Catoegory, useCatoegory] = useState([]);
    const [SubCatoegory, useSubCatoegory] = useState([]);
    const [setBrand, useBrand] = useState([]);
    console.log(Catoegory);
    console.log(SubCatoegory);
    console.log(setBrand);
    const [ChoosenColor, getChoosedColor] = useState([]);
    const [ShowColorPicker, setShowColorPicker] = useState(false);
    const colors = ['#4D4D4D', '#999999', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']
    const AllSubCatoegory = [
        {
            id: 1,
            name: "Featured"
        },
        {
            id: 2,
            name: "Price, low to high"
        },
        {
            id: 3,
            name: "Price, high to low"
        },
        {
            id: 4,
            name: "Date, old to new"
        }
    ];
    const AllCatoegory = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const Brand = [
        { value: 'Nike', label: 'Nike' },
        { value: 'townTeam', label: 'townTeam' },
        { value: 'Emoje', label: 'Emoje' },
    ];

    const SetCatoegory = (e) => {
        console.log(e);
        useCatoegory(e)
    }

    const SetSubCatoegory = (e) => {
        console.log(e);
        useSubCatoegory(e);
    }

    const GetBrand = (e) => {
        console.log(e);
        useBrand(e);
    }
    const GetProductColors = (e) => {
        if (!ChoosenColor.find((color) => color === e)) {
            getChoosedColor([...ChoosenColor, e]);
        } else {
            setShowColorPicker(!ShowColorPicker)
        }
    }



    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <AdminSidePare addProduct={"addProduct"} />
                    <div className=" lg:w-full  lg:ml-5">
                        <h1 className="max-lg:hidden mb-3 text-xl font-semibold">Add new product</h1>
                        <div className="relative ">
                            <img src={img} className="my-3 w-28 cursor-pointer " alt="upload img" />
                            <div className="inputs child:my-2 w-3/5 max-lg:w-full">
                                <input type="text" name="" id="" placeholder="Prouct Name" className=" py-2 px-3    w-full rounded-sm border border-[#c0c0c0]" />
                                <textarea name="" id="" placeholder="Product Description" cols="30" rows="3" className=" py-2 px-3  rounded-sm  w-full  border border-[#c0c0c0]"></textarea>
                                <input type="text" name="" id="" placeholder="Price Before Discount" className=" py-2 px-3    w-full rounded-sm border border-[#c0c0c0]" />
                                <input type="text" name="" id="" placeholder="Price After Discount" className=" py-2 px-3    w-full rounded-sm border border-[#c0c0c0]" />
                                <div className="child:mb-4">
                                    <Select
                                        placeholder={"Choose Catoegory"}
                                        closeOnScroll={true}
                                        clearOnBlur={true}
                                        options={AllCatoegory}
                                        onChange={(values) => SetCatoegory(values)} />
                                    <Select
                                        labelField="name"
                                        valueField="id"
                                        placeholder={"Choose SubCatoegory"}
                                        closeOnScroll={true}
                                        clearOnBlur={true}
                                        multi={true}
                                        options={AllSubCatoegory}
                                        onChange={(values) => SetSubCatoegory(values)} />
                                    <Select
                                        placeholder={"Choose Brand"}
                                        closeOnScroll={true}
                                        clearOnBlur={true}
                                        options={Brand}
                                        onChange={(values) => GetBrand(values)} />
                                </div>
                                <div className="Product_colors relative ">
                                    <h1 className="mb-2 pl-1 font-bold text-xl text-[#6F6F6F]">Choose Product Colors</h1>
                                    <div className="p-1 flex  items-center child:mr-3">
                                        {
                                            ChoosenColor.map((color, index) => {
                                                return (
                                                    <div
                                                        className="w-8 h-8 rounded-full" key={index}
                                                        style={{ backgroundColor: color }}
                                                    >
                                                    </div>
                                                )
                                            })
                                        }
                                        <img src={addcolor} className="w-8 cursor-pointer " alt=""
                                            onClick={() => setShowColorPicker(!ShowColorPicker)} />
                                    </div>
                                    {
                                        ShowColorPicker && <GithubPicker
                                            width={"300px "}
                                            colors={colors}
                                            triangle={"top-right"}
                                            onChange={(value) => GetProductColors(value.hex)}
                                        />
                                    }

                                </div>
                                <div className="mt-2 border border-[#bbb]  uppercase 
                                    w-fit leading-9 py-1 px-5 text-center tracking-wide 
                                    bg-black text-white cursor-pointer
                                    ">
                                    save product
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddProductsPage