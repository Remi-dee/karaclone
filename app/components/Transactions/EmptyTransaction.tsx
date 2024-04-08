import Image from 'next/image'
import React from 'react'
import empty_img from "../../../public/Images/EmptyImage.png"

const EmptyTransaction = () => {
  return (
    <div className='p-0 m-0 box-border'>
        <div className=' w-[100%] flex flex-col justify-center items-center'>
            <div className='w-[200px] h-[200px]'>
                <Image src={empty_img} alt='empty image' className='w-full h-full'/>
            </div>
            <h3 className='py-4 font-semibold text-center text-sm'>No Transactions Yet</h3>
            <p className='text-gray-800 text-center'>Start making transactions and track your activity here</p>
        </div>
    </div>
  )
}

export default EmptyTransaction