import React from 'react'

function BankDetails({changeStep}: {changeStep: () => void}){
const nigerianBanks: string[] = [
"Access Bank",
"Zenith Bank",
"Guaranty Trust Bank (GTBank)",
"United Bank for Africa (UBA)",
"First Bank of Nigeria",
"Ecobank Nigeria",
"Fidelity Bank Nigeria",
"Union Bank of Nigeria",
"Sterling Bank",
"Stanbic IBTC Bank",
"First City Monument Bank (FCMB)",
"Wema Bank",
"Unity Bank",
"Heritage Bank",
"Keystone Bank",
"Polaris Bank",
"Citibank Nigeria",
"Standard Chartered Bank Nigeria",
"Providus Bank",
"SunTrust Bank Nigeria",
"Titan Trust Bank",

];


const handleClickEvent = ()=>{
    console.log('clicked')
    changeStep()

}
return (
<div>
    <div className='bg-[white] border border-slate-200 mt-5  px-8 rounded-lg py-4 text-[dark] w-full  mx-auto'>
        <form action="#" className='py-4'>

            <div>
                <label htmlFor="bankName" className='font-semibold '>Bank Name</label>
                <select id="bankName" name="bankName"
                    className="h-full w-full rounded-md border bg-transparent py-4  mt-3 px-3 pl-2 pr-7 text-gray-900 focus:ring-0 outline-0 ring-0  border-slate-200   sm:text-sm ">
                    {nigerianBanks.map((bank, index) => (
                    <option key={index} value={bank} selected={index==0 ?true:false} className='text-dark-100 px-3'>
                        {bank}
                    </option>
                    ))}
                </select>
            </div>
            <div className='mt-4'>

                <label htmlFor="bankName" className='font-semibold  '>Account Number</label>
                <input type="text" name="accountNumber" id="accountNumber"
                    className="block w-full rounded-md border bg-transparent py-3  mt-3 px-3 pl-2 pr-7 text-gray-900 focus:ring-0 outline-0 ring-0  border-slate-200   sm:text-sm "
                    placeholder="Enter your account number" />
                <small id='beneficiaryName' className='text-gray-300'>John doe</small>
            </div>

            <div className='mt-4'>
                <button className= 'bg-purple-600 text-white-100 text-sm w-full py-3 rounded-lg'
                    onClick={handleClickEvent}>
                    Validate Beneficiary
                </button>
            </div>
        </form>
    </div>
</div>
);
}

export default BankDetails
