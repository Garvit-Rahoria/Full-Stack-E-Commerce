'use client'
import Link from "next/link";
import { useSelector } from "react-redux";

const OrderSummary = () => {

    const cart = useSelector((store) => store.cart);
    console.log(cart)


    return (
        <div className="border border-green-400 rounded-xl p-6 sticky top-24">

            <h3 className="font-semibold mb-6">Order Summary</h3>

            <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                    <span>Sub Total:</span>
                    <span>₹{cart.original_total}</span>
                </div>

                <div className="flex justify-between">
                    <span>Saving:</span>
                    <span>₹{(cart.original_total - cart.final_total)}</span>
                </div>

                {/* <div className="flex justify-between">
                    <span>Tax (GST 18%):</span>
                    <span>₹{tax.toFixed(2)}</span>
                </div> */}

                <hr />

                <div className="flex justify-between font-semibold">
                    <span>ORDER TOTAL:</span>
                    <span>₹{cart.final_total}</span>
                </div>
            </div>

            <Link href="/checkout">
            <button className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg font-medium cursor-pointer">
                CHECKOUT
            </button>
            </Link>
        </div>
    );
};

export default OrderSummary;