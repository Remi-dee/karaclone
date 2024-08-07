import React from 'react'

export const Cta = () => {
    {/* CTA */}
    return (
      <div className="flex flex-col w-full bg-[white] py-10 pt-20 px-5">
      <div className="container mx-auto flex flex-col gap-4 items-center ">
        {/* app logo */}
        <img src="/Images/Auto Layout Horizontal.png" alt="App logo" />
        <div className="text-center">
          <h1 className="font-bold text-[#171717]  text-3xl">
            Join us today for simplified transactions.
          </h1>
          <p className="text-[#171717]/60 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.Lorem ipsum dolor sit amet consectetur adipiscing
            elit.
          </p>
        </div>
        <button className="rounded-full bg-[#FF104B] px-6 py-3 text-[white]">
          Get Started
        </button>
      </div>
    </div>

    )
}
