import React from 'react';

const BuyPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-black text-white py-4 px-6">
            <div className="container mx-auto flex flex-col">
            <h1 className="text-lg font-semibold italic">StamPick</h1>
                <div className="flex flex-row">
                    <span className="font-semibold flex flex-row italic">Explore</span>
                    <span className="text-yellow-400 font-semibold flex flex-row italic ml-1"> 
                        Plus
                        <img src="/images/plusBuy.svg" alt="fr" className="mt-1 w-3 h-3" />
                    </span>
                </div>
            </div>
        </header>

        <div className="w-full flex justify-center">
            {/* Main Content */}
            <main className="w-[900px] mt-6 px-4">
                {/* Login Section */}
                <div className="bg-white shadow-lg p-4 mb-4 flex justify-between">
                    <div className="space-x-3 flex flex-row">
                    <div className="text-blue-600 font-bold w-8 h-6 text-center bg-gray-200 rounded-sm">1</div>
                    <div className='flex flex-col'>
                        <div className="text-gray-500 font-medium">
                        LOGIN <span className="text-green-600">✔</span>
                        </div>
                        <div className="text-gray-900">+9182491012XX</div>
                    </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg p-4">
                    {/* Delivery Address Heading */}
                    <div className="flex items-center space-x-3 bg-black text-white p-3">
                    <div className="text-blue-600 bg-gray-200 font-bold w-8 h-6 rounded-sm text-center">2</div>
                    <div className="text-white font-medium">
                        DELIVERY ADDRESS
                    </div>
                    </div>

                    {/* Address Details */}
                    <div className="border-t border-gray-300 py-4 px-6">
                    <label className="flex items-center space-x-3">
                        <input type="radio" className="form-radio text-blue-600" name="address" />
                        <span className="font-medium text-gray-800">Anand</span>
                        <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded">HOME</span>
                        <span className="ml-auto text-gray-600">9124918750</span>
                    </label>
                    <div className="ml-8 text-gray-600 mt-2">
                        123 Maple Lane, Apt 4B, Springfield, IL 62704, United States
                    </div>
                    </div>
                </div>

                {/* Add new address */}
                <div className="w-[870px] mx-auto p-6 bg-white shadow-lg m-4">
                    <form className="space-y-4">
                        <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="addressOption"
                            id="newAddress"
                            className="form-radio"
                        />
                        <label htmlFor="newAddress" className="text-blue-600">
                            ADD A NEW ADDRESS
                        </label>
                        </div>

                        <button type="button" className="w-[300px] h-[50px] bg-black text-white flex items-center justify-center space-x-2">
                            <img src='/images/location.svg' alt="Location Icon" className="w-6 h-6" />
                            <span>Use my current location</span>
                        </button>

                        <div className="grid grid-cols-2 gap-4 text-black">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full p-2 border border-gray-300"
                        />

                        <input
                            type="text"
                            name="mobile"
                            placeholder="10-digit mobile number"
                            className="w-full p-2 border border-gray-300"
                        />

                        <input
                            type="text"
                            name="pincode"
                            placeholder="Pincode"
                            className="w-full p-2 border border-gray-300"
                        />

                        <input
                            type="text"
                            name="locality"
                            placeholder="Locality"
                            className="w-full p-2 border border-gray-300"
                            
                        />
                        </div>

                        <input
                            type="text"
                            name="areaStreet"
                            placeholder="Address (Area and Street)"
                            className="w-full p-2 border h-[100px] border-gray-300"
                            
                        />

                        <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="city"
                            placeholder="City/District/Town"
                            className="w-full p-2 border border-gray-300"
                            
                        />

                        <select
                            name="state"
                            className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                            <option value="" disabled selected>Select your state</option>
                            <option value="Delhi" className='text-black'>Delhi</option>
                            <option value="Delhi" className='text-black'>Uttarakhand</option>
                        </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="landmark"
                            placeholder="Landmark (Optional)"
                            className="w-full p-2 border border-gray-300"
                        />

                        <input
                            type="text"
                            name="alternatePhone"
                            placeholder="Alternate Phone (Optional)"
                            className="w-full p-2 border border-gray-300"
                        />
                        </div>
                    </form>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-gray-500 mt-4">Address Type</h2>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 ml-2 text-black">
                            <input
                                type="radio"
                                name="addressType"
                            />
                            Home (All day delivery)
                            </label>
                            <label className="flex items-center gap-2 text-black">
                            <input
                                type="radio"
                                name="addressType"
                            />
                            Work (Delivery between 10 AM - 5 PM)
                            </label>
                        </div>
                        <div className='flex flex-row'>
                            <button
                                className="bg-orange-600 text-white px-4 py-2 w-64 h-18"
                            >
                                SAVE AND DELIVER HERE
                            </button>
                            <button className="text-blue-500 ml-10 font-semibold">CANCEL</button>
                        </div>
                    </div>
                </div>
                <div className='w-[870px] mx-auto p-6 bg-white shadow-lg m-4 flex justify-between'>
                    <div className="flex justify-between items-center px-4 py-2  rounded-md">
                            <div className="flex items-center">
                                <span className="text-blue-500 mr-2 w-8 h-6 text-center bg-gray-200 rounded-sm">3</span>
                                <h3 className="text-gray-600 font-medium">ORDER SUMMARY</h3>
                                <span className="text-green-600 m-2">✔</span>
                            </div>
                    </div>
                    <button className="bg-white border border-gray-200 text-blue-600 hover:bg-opacity-15 w-32 h-10">CHANGE</button>
                </div>
                {/* payment methods  */}
                <div className='w-[870px] mx-auto p-6 bg-white shadow-lg m-4'>
                    <div className="p-4 bg-black h-[50px] flex flex-row shadow-lg">
                        <span className="text-blue-500 mr-2 w-8 h-6 text-center bg-gray-200 rounded-sm">4</span>
                        <h2 className="text-md font-semibold mb-4 text-center">PAYMENT OPTIONS</h2>
                    </div>
                    <div className='bg-[#FFFFE6] h-[50px] flex flex-row shadow-lg'>
                        <p className="text-black mb-2 p-3">Complete payment</p>
                        <img src='/images/Group.svg' alt="fr" className='w-6 h-6 mt-3 -m-1' />
                        <p className="text-black mb-2 p-3">in: 00:11:54</p>
                    </div>
                    
                    <div className='mx-auto p-6 bg-white m-2'>
                        <ul className="space-y-2">
                            <li className="flex items-center m-3">
                            <div className='flex flex-col'>
                                <div className="ml-2 flex flex-row">
                                    <input
                                        type="radio"
                                        name="payment"
                                    />
                                    <img src='/images/UPI.svg' alt="fr" className='ml-4' />
                                    <span className="text-black ml-4 font-semibold">UPI</span>
                                </div>
                                <div className='m-5 ml-10'>
                                    <p className="text-gray-900 font-semibold">Choose an option</p>
                                    <ul className="pl-4">
                                    <li className="flex items-center text-gray-900">
                                        <input
                                        type="radio"
                                        name="upiOption"
                                        />
                                        <span className="m-2">Your UPI ID</span>
                                    </li>
                                    <span className='text-gray-500 '>Pay by any UPI ID</span>
                                    </ul>
                                </div>
                            </div>
                            </li>
                            <div className='ml-5'>
                            <li className="flex items-center">
                            <input
                                type="radio"
                                name="payment"
                                className='mt-5'
                            />
                            <img src='/images/UPI.svg' alt="fr" className='ml-4 mt-6' />
                            <span className="ml-2 text-black mt-6 font-semibold">Wallets</span>
                            </li>
                            <li className="flex items-center">
                            <input
                                type="radio"
                                name="payment"
                                className='mt-3'
                            />
                            
                            <div className='flex flex-col mt-10'>
                                <span className="ml-2 text-gray-700 font-semibold">Credit / Debit / ATM Card</span>
                                <span className="ml-2 text-gray-400 mt-2">Add and secure cards as per RBI guidelines</span>
                            </div>
                            </li>
                            <li className="flex items-center">
                            <input
                                type="radio"
                                name="payment"
                                className='mt-3'
                            />
                            <div className='flex flex-col mt-10'>
                                <span className="ml-2 text-gray-700 font-semibold">Net Banking</span>
                                <span className="ml-2 text-gray-400 mt-2">This instrument has low success, use UPI or cards for better experience</span>
                            </div>

                            </li>
                            <li className="flex items-center">
                            <input
                                type="radio"
                                name="payment"
                                className='mt-10'
                            />
                            <span className="ml-2 text-gray-700 font-semibold mt-10">Cash on Delivery</span>
                            </li>
                            <li className="flex items-center">
                            <input
                                type="radio"
                                name="payment"
                                className='mt-10'
                            />
                            <span className="ml-2 text-gray-500 mt-10">EMI (Easy Installments)</span>
                            {/* <span className="ml-2 text-gray-500 mt-10">Not applicable</span> */}
                            </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='w-[870px] mx-auto p-6 bg-white shadow-lg m-4 flex flex-row'>
                    <img src='/images/+.svg' alt="fr" className='ml-10 mt-4' />
                    <button className="mt-4 text-black font-semibold px-4 py-2 rounded-md">Add Gift Card</button>
                </div>
            </main>
        </div>
        </div>
    );
};

export default BuyPage;
