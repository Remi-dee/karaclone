import React from 'react'

function ConfirmTransaction({changeStep}:{changeStep: () => void}){


const handleClickEvent = () => {

// iincememtn step if everything is valid
    changeStep()
}
return ( < div>
    < div className='bg-[white] shadow-sm border border-slate-200 mt-5  px-8 rounded-lg py-4 text-[dark] w-full  mx-auto'>
        <div className="flex items-center justify-between py-2  text-gray-300">
            <p>Account Name</p>
            <p className='ml-auto text-black-200'>Ogunsola Omorinsola E</p>
        </div>

        <div className="flex items-center justify-between py-2  text-gray-300">
            <p>Account Number</p>
            <p className='ml-auto text-black-200'>0123456789</p>
        </div>

        <div className="flex items-center justify-between py-2  text-gray-300">
            <p>Bank Name</p>
            <p className='ml-auto text-black-200'>Access Bank</p>
        </div>

        <div className="flex items-center justify-between py-2  text-gray-300">
            <p>Amount Tendered</p>
            <p className='ml-auto text-black-200'>$10</p>
        </div>
        <div className="flex items-center justify-between py-2  text-gray-300">
            <p>Today's Rate</p>
            <p className='ml-auto text-black-200'>1USD = 1,500NGN</p>
        </div>

        <div className="flex items-center justify-between py-2  text-gray-300">
            <p>Total Fees</p>
            <p className='ml-auto text-black-200'>$0.03</p>

        </div>

        <div className="flex items-center justify-between py-2  text-gray-300">
            <p>Amount To Be Recieved</p>
            <p className='ml-auto text-black-200'>150,000 NGN</p>
        </div>


        <div className='mt-4'>
            <button className= 'bg-purple-600 text-white-100 text-sm w-full py-3 rounded-lg' onClick={handleClickEvent}>
                Validate Beneficiary
            </button>

            <button
                className= 'bg-white-100 text-purple-900 border border-purple-400 mt-2 text-sm w-full py-3 rounded-lg'
                onClick={handleClickEvent}>
                Validate Beneficiary
            </button>
        </div>

        </div>

        </div>
        );
        }

        export default
        ConfirmTransaction
