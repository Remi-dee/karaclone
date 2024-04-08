"use Client"
import React from 'react'
import BalanceDropdown from './components/BalanceDropdown'
import { FaEye } from 'react-icons/fa';


function Home() {

const quickActions = [
{title:"Fund Wallet",
description:"Easily topup your wallet",
icon:"/svg/featured_wallet.svg"},
{title:"Exchange",description:"Convert your funds easily", icon:"/svg/featured_exchange.svg"},

{title:"Withdrawal",description:"Make a withdrawal", icon:"/svg/featured_withdrawal.svg"},
{title:"P2P",description:"Initiate peer to peer transfer", icon:"/svg/featured_p2p.svg"}
]





return (
<div>
    <div className="block lg:flex items-center gap-4">
        <div className="md:w-full lg:w-1/2 flex flex-col gap-4  h-full">


            {/* kyc verification card */}

            <div className="relative flex-1 grow overflow-hidden min-h-fit rounded-2xl ">
                <img src="/Images/Background.png" className='absolute top-0' alt="" />
                <div className="relative items-center flex text-white-100 py-5 px-4">
                    <div className='pl-5 w-max lg:px-5'>

                        <p className='font-bold text-base lg:text-xl '>Complete your account setup by verifying your KYC</p>
                        <p className='text-sm'>Verify your KYC to access all features</p>
                        <button className=' mt-3 lg:mt-5 rounded-lg bg-primaryBtn text-white-100 font-bold px-4 py-2 md:py-3 text-xs  block focus:outline-0 '> Start Kyc
                            Verification</button>
                    </div>

                    <img src="/svg/cardImage.svg" className='h-[100px] lg:h-[200px]' />
                </div>
            </div>



            {/* Wallet balances cards */}


            <div
                className=" bg-white-100 rounded-xl flex-1 grow flex mb-3 lg-mb-0  justify-between border border-slate-200 py-5 h-full ">
                <div className=" bg-white-100  rounded-md p-4">
                    <div className="flex items-center gap-2">
                        <h2 className="  text-gray-300">Wallet Balance</h2><span className='text-gray-300'>
                            <FaEye />
                        </span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800 mt-2">0.00 <span
                            className='text-gray-300 text-base font-medium'>
                            NGN
                        </span> </p>
                </div>
                <div className="px-3 p-4">

                    <div>

                        <BalanceDropdown />

                    </div>
                </div>

            </div>

        </div>

        {/* Quick actions cards*/}
        <div className="md:w-full lg:w-1/2 bg-white-100 rounded-2xl border border-slate-200  p-5 h-full">
            <p className="font-bold text-lg pb-5">
                Quick Actions
            </p>

            <div className="grid grid-rows-2 grid-flow-col gap-4">
                {quickActions.map((eachdata, index)=>(

                <div className=" border border-slate-200 px-2 rounded py-3 px-3">
                    <img src={`${eachdata.icon }`} alt="" />

                    <p className='font-bold text-lg mt-2'>{eachdata.title}</p>
                    <p className='text-gray-300 mt-1 text-sm'>{eachdata.description}</p>

                </div>

                ))}



            </div>
        </div>
    </div>


    {/* table */}
    <div className=" border  border-slate-200 mt-5 bg-white-100 rounded-lg overflow-hidden w-full">


        <div className="p-6  mx-auto bg-white    border-b border-slate-200 flex items-center justify-between space-x-4">


            <div className="text-xl font-medium text-black-200">Recent Transactions</div>

            <a href="#" className="text-gray-300 hover:text-gray-300">See All</a>

        </div>

        <div className="p-6  bg-white-100 flex flex-col items-center space-x-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-8700 uppercase tracking-wider">
                            Type</th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-8700 uppercase tracking-wider">
                            Description</th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-8700 uppercase tracking-wider">
                            Amount</th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-8700 uppercase tracking-wider">
                            Date</th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status</th>
                    </tr>
                </thead>

                <tbody>

                </tbody>

                {/* empty transactions */}

            </table>
            <div className='text-center w-full flex flex-col items-center justify-center py-10'>
                <img src="/Images/emptyTransaction.png" alt="" />
                <p className="text-center text-gray-900 font-bold">No transactions yet</p>
                <p className='text-gray-300 '>Start making transactions and track your activities here ....</p>
            </div>


        </div>





    </div>
</div>


)
}

export default Home
