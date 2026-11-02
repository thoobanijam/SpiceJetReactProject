import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const addons = () => {
const [showTerms, setShowTerms] = useState(false);
    const addcats =[
 {Image:"img/cat1.png", name:"EXTRA SPACE BETWEEN SEATS"},
 {Image:"img/cat2.png", name:"MEAL WITH BEVERAGE"},
 {Image:"img/cat5_new.png", name:"SHORTER QUEUES WITH PRIORITY CHECK-IN"},
 {Image:"img/cat4.png", name:"QUICK BOARDING"},
   {Image:"img/cat3.png", name:"LESSER WAITING TIME WITH PRIORITY BAG-OUT"},
   {Image:"img/cat6.png", name:"WELCOME DRINK & REFRESHING TOWEL"},
       {Image:"img/cat7.png", name:"PILLOW AND BLANKET"},
    ];
  return (
    <>
    <div className="w-full">
      <img
        src="/img/addon.png"
        alt="Add-ons"
        className="block h-auto w-full"
      />
    </div>
    <div className="mx-auto mt-4 flex w-[75%] items-center justify-center p-6 text-center text-2xl font-extrabold leading-[1.3]">
  <h6>
    Upgrade your travel with a more comfortable and spacious seating option, a host of convenient services and priority privileges for a modest add-on fee starting from <span className='text-red-600'>₹950</span> for domestic flights and <span className='text-red-600'>₹1250</span> for international flights.
  </h6>
</div>
{/* MAP */}
{/* MAP */}
<div className="mx-auto mt-4 flex w-[80%] flex-wrap justify-between gap-y-8">
  {addcats.map((addcat) => (
    <div
      key={addcat.name}
      className="h-80 w-70 overflow-hidden rounded-[30px] bg-[#f3f3f4] shadow-2xl shadow-[#a3a1a1]"
    >
      <div className="flex h-full flex-col gap-2 overflow-hidden rounded-[40px]">
        <img
          src={addcat.Image}
          alt={addcat.name}
          className="h-60 w-full object-contain"
        />

        <h6 className="w-full px-2 text-center font-extrabold">
          {addcat.name}
        </h6>
      </div>
    </div>
  ))}
</div>
<div className="mx-auto mt-6 w-[80%]">

  {/* Dropdown Heading */}
  <div
  onClick={() => setShowTerms(!showTerms)}
  className="relative flex h-[100px] cursor-pointer items-center justify-center rounded-xl bg-[#eef0f0] p-4 text-center"
>
  <h6 className="text-3xl font-extrabold text-red-600">
    TERMS AND CONDITIONS
  </h6>

  {showTerms ? (
    <ChevronUp
      size={30}
      className="absolute right-6 text-red-600"
    />
  ) : (
    <ChevronDown
      size={30}
      className="absolute right-6 text-red-600"
    />
  )}
</div>

  {/* Dropdown Content */}
  {showTerms && (
    <div className="rounded-xl border border-gray-200  bg-white p-6 shadow-md">

      <ol className="list-decimal space-y-4 pl-6 text-2xl">

        <li>Charges for SpiceMax seats are over and above the ticket price; charges vary depending on the length of the flight.</li>
        <li>Add-on services are subject to availability.</li>
        <li>Passengers must provide correct booking details.</li>
        <li>Additional charges may apply for selected services.</li>
        <li>All payments must be completed during booking.</li>
        <li>Services may vary depending on the flight route.</li>
        <li>Changes to add-on services are subject to airline policies.</li>
        <li>Some services may not be refundable.</li>
        <li>Passengers must follow airline instructions.</li>
        <li>The airline reserves the right to modify these conditions.</li>

      </ol>

    </div>
  )}

</div>
  
    </>
  );
};

export default addons;