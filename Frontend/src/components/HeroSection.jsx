import React from "react";
const HeroSection = () => {
  return (
    <>
    <div class="relative overflow-hidden flex justify-evenly">
      <div class="z-[10] max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class=" max-w-2xl text-center mx-auto">
          <h1 class="block text-3xl font-bold text-black sm:text-4xl md:text-6xl ">
            Designed for you to bid
          </h1>
           <span class="block text-3xl font-bold mt-3 text-green-500 sm:text-4xl md:text-6xl">Trouble Free</span>
          <p class="mt-3 text-sm md:text-lg text-neutral-400">
            Live Auction. Bid Anytime. Get Your Liked Items to Your Place.
          </p>
        </div>
      </div>
      <div class="absolute bottom-12 -start-20 z-[1] size-52 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg ">
        <div class="bg-white size-48 rounded-lg "></div>
      </div>
      
      <div class="absolute bottom-1 start-28 -z-[1] size-52 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg ">
        <div class="bg-white size-48 rounded-lg "></div>
      </div>

      <div class="absolute -top-4 -end-16 -z-[1] size-52 bg-gradient-to-b  from-cyan-400 to-blue-600 pl-[4px] pb-[1px] rounded-lg ">
        <div class="bg-white size-48 rounded-lg "></div>
      </div>
      <div class="absolute -top-16 end-9 -z-[21] size-52 bg-gradient-to-b  from-cyan-400 to-blue-600 pl-[2px] pb-[1px] rounded-lg ">
        <div class="bg-white size-48 rounded-lg "></div>
      </div>
    </div>
    
    </>
  );
};

export default HeroSection;
