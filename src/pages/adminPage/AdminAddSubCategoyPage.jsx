
import { useState } from "react";
import AdminSidePare from "./AdminSidePare"
import Select from "react-dropdown-select";

const AdminAddSubCategoyPage = () => {
    const [Catoegory, useCatoegory] = useState([]);

    const AllCatoegory = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const SetCatoegory = (e) => {
        useCatoegory(e)
        console.log(Catoegory);
    }

    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <AdminSidePare addSubcategory={"addSubcategory"} />
                    <div className="lg:w-3/4 max-lg:pl-2">
                        <h1 className="max-lg:hidden mb-5 text-xl font-semibold">add subCategory</h1>
                        <div className=" w-3/5 max-md:w-full">
                            <input type="text" name="" id="" placeholder="SubCategory Name" className=" py-2 mb-3 px-3  w-full rounded-sm border border-[#c0c0c0]" />
                            <Select
                                placeholder={"Main Catoegory"}
                                closeOnScroll={true}
                                clearOnBlur={true}
                                options={AllCatoegory}
                                onChange={(values) => SetCatoegory(values)} />
                        </div>

                        <div className="mt-5 border border-[#bbb]  uppercase 
                                    w-fit leading-9 py-1 px-5 text-center tracking-wide 
                                    bg-black text-white cursor-pointer max-md:w-full 
                                    ">
                            save SubCategory
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddSubCategoyPage