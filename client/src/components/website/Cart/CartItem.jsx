'use client'
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { qtyChange } from "@/redux/features/cartSlice";

const CartItem = ({ item }) => {

    const dispatcher = useDispatch()
    return (
        <>
        
        <div className="flex gap-6 bg-white p-4 rounded-lg">
             

            {/* Image */}
            <div className="relative w-32 h-32 bg-gray-100 rounded-lg p-2">
                <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-3">
                <h4 className="font-medium">{item.name}</h4>

                <p className="text-red-600 font-semibold">
                    ₹{item.orginal_price}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-3 border rounded-md w-max px-3 py-1">
                    <FaMinus onClick={() => dispatcher(qtyChange({id:item.id, flag: "dec"}))} className="cursor-pointer" />
                    <span>{item.qty}</span>
                    <FaPlus onClick={() => dispatcher(qtyChange({id:item.id, flag: "inc"}))} className="cursor-pointer" />
                </div>

                {/* Stock */}
                <p className={`text-sm ${item.stock ? 'text-green-600' : 'text-red-600'}`}>
                    {item.stock ? '● In stock' : 'Out of stock'}
                </p>
            </div>
        </div>
        </>
    );
};

export default CartItem;