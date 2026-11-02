import React from 'react';

const Recommended = () => {
  const recoms = [
    {
      image: '/img/SpiceMax.png',
      title: 'SpiceMax',
      content:
        'Upgrade your flying experience with more space and a host of convenient services and priority privileges.',
    },
    {
      image: '/img/Spicecafethumbnail.jpg',
      title: 'SpiceCafe',
      content:
        'Pamper your taste buds with our variety of delicious hot meals and sandwiches.',
    },
    {
      image: '/img/Excess-Baggage.jpg',
      title: 'Excess Baggage',
      content:
        'Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%.',
    },
  ];

  return (
    <div className="relative z-0 flex w-full justify-center bg-white py-8">
      <div className="min-h-[500px] w-full px-4 py-6 2xl:w-[75%]">

        <h2 className="mb-6 px-2 text-2xl font-bold text-[#c30b12] sm:text-3xl 2xl:text-4xl">
          Recommended Add-Ons
        </h2>

        <div className="grid grid-cols-1 gap-4 bg-[#f5f5f5] p-4 sm:p-6 2xl:grid-cols-3">

          {recoms.map((recom) => (
            <div
              key={recom.title}
              className="flex w-full flex-col gap-3 rounded-lg bg-white p-4 shadow-sm"
            >
              <img
                src={recom.image}
                alt={recom.title}
                className="h-64 w-full rounded-md object-cover sm:h-72 2xl:h-80"
              />

              <h3 className="text-2xl font-bold text-[#c30b12] sm:text-3xl">
                {recom.title}
              </h3>

              <p className="text-base leading-7 text-gray-700">
                {recom.content}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Recommended;