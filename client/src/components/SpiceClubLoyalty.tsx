import React from 'react';

const SpiceClubLoyalty = () => {
  const loyalties = [
    { image: 'img/freevoucher.png', name: 'Free Flight Vouchers' },
    { image: 'img/rewards.png', name: 'Earn SC Points' },
    { image: 'img/privileges.png', name: 'Complimentary Upgrades' },
  ];

  return (
    <div className="relative z-0 flex w-full justify-center bg-white py-8">
<div className="min-h-[700px] w-full px-4 py-8 2xl:w-[75%]">

        <h2 className="mb-6 px-2 text-2xl font-bold text-[#c30b12] sm:text-3xl 2xl:text-4xl">
          SpiceClub Loyalty Program
        </h2>

       <div className="grid min-h-[550px] grid-cols-1 gap-6 bg-[#f5f5f5] p-6 sm:p-8 2xl:grid-cols-2">

          {/* SpiceClub Image */}
          <div className="flex w-full items-center justify-center">
            <img
              src="img/spiceclubloyalty.png"
              alt="SpiceClub Loyalty Program"
             className="h-[200px] w-full rounded-lg object-cover sm:h-[330px] 2xl:h-[250px]"
            />
          </div>

          {/* Loyalty Benefits */}
          <div className="flex w-full flex-col justify-center gap-6">

            <h3 className="text-2xl font-bold sm:text-3xl">
              As a member you get access to
            </h3>

            <div className="grid  grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-3">

              {loyalties.map((loyalty) => (
                <div
                  key={loyalty.name}
                  className="flex flex-col items-center   justify-center gap-3  p-4 text-center shadow-sm"
                >
                  <img
                    src={loyalty.image}
                    alt={loyalty.name}
                    className="h-20 w-20 object-contain"
                  />

                  <h4 className="text-2xl font-semibold sm:text-xl">
                    {loyalty.name}
                  </h4>
                  
                </div>
                
              ))}
<div className="mt-6 flex w-full items-center justify-center ml-55 2xl:w-[90%]">
  <button
    type="button"
    className="h-14 w-full rounded-lg bg-[#faad46] px-6 text-lg font-semibold text-white transition hover:bg-[#f0931a] sm:h-16 sm:text-xl lg:h-20 lg:text-2xl"
  >
    Join SpiceClub
  </button>
</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SpiceClubLoyalty;