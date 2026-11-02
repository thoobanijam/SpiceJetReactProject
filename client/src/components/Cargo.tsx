import React from 'react'

const Cargo = () => {
  return (
    <div className='bg-[#f8f8f8] w-full min-h-[400px] mb-4 flex justify-center items-center py-6'>

      <div className='w-[95%] 2xl:w-[75%]  flex flex-col 2xl:flex-row justify-center items-center px-3 py-4 gap-6 2xl:gap-2'>

        {/* First Cargo */}
        <div className='flex flex-row w-full 2xl:w-1/2 min-w-0 items-center'>

          <img
            src='img/cargo.png'
            alt='Cargo'
            className='w-[55%] h-[250px] 2xl:h-[300px] object-contain shrink-0'
          />

          <div className="flex flex-col gap-2 pl-2 w-[55%] min-w-0">

            <h2 className="text-2xl font-bold text-[#c30b12] mt-3 mb-3">
              Cargo
            </h2>

            <h2 className="text-lg font-bold text-gray-500">
              Small, Medium, Large & X-Large
            </h2>

            <p className="text-gray-400 text-base">
              Get your cargo shipped from one place to another at a convenient and cost-effective manner.
            </p>

            <div>
              <button
                type="button"
                className="h-12 w-full mt-4 rounded-lg bg-[#faad46] font-semibold text-white transition hover:bg-[#f0931a]"
              >
                Book Now!
              </button>
            </div>

          </div>
        </div>

        {/* Second Cargo */}
        <div className='flex flex-row w-full 2xl:w-1/2 min-w-0 items-center'>

          <img
            src='img/charter.png'
            alt='Charter'
            className='w-[55%] h-[250px] 2xl:h-[300px] object-contain shrink-0'
          />

          <div className="flex flex-col gap-2 pl-2 w-[55%] min-w-0">

            <h2 className="text-2xl font-bold text-[#c30b12] mt-3 mb-3">
            Charter
            </h2>

            <h2 className="text-lg font-bold text-gray-500">
              Your private space in the sky
            </h2>

            <div className='flex flex-col text-gray-400 text-base'>
              <p>
                Your private space in the sky
              </p>
            
            </div>

            <div>
              <button
                type="button"
                className="h-12 w-full mt-4 rounded-lg bg-[#faad46] font-semibold text-white transition hover:bg-[#f0931a]"
              >
                Book Now!
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Cargo