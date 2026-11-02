import React from 'react';

const Irresistibledeals = () => {
  return (
    <div className="relative z-0 flex w-full justify-center bg-[#f8f8f8] py-8">
      <div className="flex min-h-[350px] w-full flex-col p-4 sm:p-6 lg:w-[75%]">

        <h2 className="mb-4 p-2 text-2xl font-bold text-[#c30b12] sm:p-4 sm:text-3xl lg:text-4xl">
          Irresistible Deals
        </h2>

<div className="flex min-h-[350px] flex-col items-stretch gap-6 p-2 sm:p-4 2xl:flex-row 2xl:items-center 2xl:justify-between">

          {/* First Deal Card */}
          <div className="flex min-h-[280px] w-full flex-col rounded-2xl border border-red-500 p-2 sm:p-3 2xl:w-[32%]">

            <h3 className="p-2 text-xl font-bold sm:text-2xl">
              SpiceMax
            </h3>

            <h4 className="mt-2 pl-2 text-lg font-bold sm:text-xl">
              The Best Seat in the sky at
            </h4>

            <div className="flex items-center justify-between gap-2 px-2">
              <h3 className="text-2xl font-extrabold text-red-600 sm:text-3xl lg:text-4xl">
                30% Off
              </h3>

              <img
                src="/img/sjlogo.png"
                alt="SpiceJet logo"
                className="h-auto w-20 object-contain sm:w-24 lg:w-27"
              />
            </div>

            <h4 className="mt-5 p-2 text-lg font-bold sm:text-xl">
              SMA X30
            </h4>

            <p className="pl-2 text-sm text-gray-500 sm:text-base">
              Valid till: September 30, 2026
            </p>
          </div>

          {/* Explore More Button */}
          <div className="flex w-full items-center justify-center 2xl:w-[30%]">
            <button
              type="button"
              className="h-14 w-full rounded-lg bg-[#faad46] px-6 text-lg font-semibold text-white transition hover:bg-[#f0931a] sm:h-16 sm:text-xl lg:h-20 lg:text-2xl"
            >
              Explore More
            </button>
          </div>

          {/* Second Deal Card */}
          <div className="flex min-h-[280px] w-full flex-col rounded-2xl border border-red-500 p-2 sm:p-3 2xl:w-[32%]">

            <h3 className="p-2 text-xl font-bold sm:text-2xl">
              Enjoy ADDONS at
            </h3>

            <h4 className="mt-2 pl-2 text-lg font-bold sm:text-xl">
              Upto
            </h4>

            <div className="flex items-center justify-between gap-2 px-2">
              <h3 className="text-2xl font-extrabold text-red-600 sm:text-3xl lg:text-4xl">
                25% Off
              </h3>

              <img
                src="/img/sjlogo.png"
                alt="SpiceJet logo"
                className="h-auto w-20 object-contain sm:w-24 lg:w-27"
              />
            </div>

            <h4 className="mt-5 p-2 text-lg font-bold sm:text-xl">
              ADDON25
            </h4>

            <p className="pl-2 text-sm text-gray-500 sm:text-base">
              Valid till: March 31, 2027
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Irresistibledeals;