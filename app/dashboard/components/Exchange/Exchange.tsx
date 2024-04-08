"use client"
import React from 'react'
import {ArrowLeftIcon } from '@heroicons/react/24/outline'
import BalanceDropdown from '../BalanceDropdown'
import WithdrawalForm from '../props/withdrawForm'
import { useState } from 'react';


function Exchange() {
const [amount, setAmount] = useState<number>(0);
    const [isValid, setIsValid] = useState<boolean>(false);
        const handleAmountChange = (newAmount: number) => {
        setAmount(newAmount);
        setIsValid(newAmount > 0); // Update validity based on entered amount
        };

        const haExchangebmit = () => {
        // Handle form submission, for example, send amount to the server
        console.log('Submitted amount:', amount);
        };


        return (


        <div className=''>
            {/* top bar */}
            <div className="flex items-center justify-between w-full ">

                <div className=" flex items-center ">
                    <div className="bg-purple-600 p-1.5 rounded mr-2">

                        <ArrowLeftIcon className=" h-4 w-4 text-white-100 font-bold" />
                    </div>
                    <p className="text-purple-600 font-bold text-base">Go Back</p>
                </div>



            </div>
            <div className='w-full mx-auto md:w-1/2 lg:w-2/4 xl:1/3 '>

                <div className="flex flex-col items-center justify-center pt-10 px-2">
                    <h3 className='font-bold text-xl'>Exchange</h3>
                    <p className='text-gray-300 mt-3 text-sm text-center'>Enter the amount and currency you want to
                        convert to</p>
                </div>
                <div
                    className='bg-[white] border border-slate-100 mt-5  px-8 rounded-lg py-4 text-[dark] w-full  mx-auto'>
                    <div className="bg-[#F9F5FF] py-3 px-4 border border-purple-200 rounded">
                        <div className="flex items-center justify-between">
                            <p className='text-gray-100 text-sm'>Wallet Balance</p>
                            <BalanceDropdown currency="usd" />

                        </div>
                        <div>
                            <h4 className='font-bold text-lg'>$2000</h4>
                        </div>
                    </div>

                    <WithdrawalForm amountToRecieveId="amountToWithdraw" headerText="Amount to Withdraw " currency="usd"
                        placeholder="Amount" onChange={handleAmountChange} />

                    <div className="border-t  border-slate-200 mt-3 text-sm font-medium">

                        <div className="flex items-center justify-between py-2 mt-2 text-gray-300">
                            <p>Conversion Fee</p>
                            <p className='ml-auto text-black-200'>$0.00</p>
                        </div>

                        <div className="flex items-center justify-between py-2  text-gray-300">
                            <p>Transaction Fee</p>
                            <p className='ml-auto text-black-200'>$0.00</p>
                        </div>

                        <div className="flex items-center justify-between py-2  text-gray-300">
                            <p>Today's Rate</p>
                            <p className='ml-auto text-black-200'>$0.00</p>
                        </div>
                    </div>
                    <WithdrawalForm amountToRecieveId="amountToRecieve" headerText="Amount to Recieve" currency="naira"
                        placeholder="Amount" onChange={handleAmountChange} />

                    {/* submit button */}
                    <div className="mt-5">
                        <button className='bg-purple-600 text-white-100 w-full py-2 rounded-lg' disabled={!isValid}
                            onClick={handleWithdrawalSubmit}>Continue</button>
                    </div>

                </div>
            </div>
        </div>
        )
        }

        export default Withdraw
