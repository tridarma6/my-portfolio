import Image from "next/image";
import Decor from "../icons/decor";
import Dot from "../icons/dot";
import Quote from "../icons/quote";

export default function Main() {
  return (
    <div className="sm:px-6 md:px-12 lg:px-24">
      <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-12 lg:gap-16 ">
        <div className="flex flex-col gap-5 w-full sm:w-1/2 pl-[80px]">
          <h1 className="text-2xl text-gray-400">Hello Dude!</h1>
          <h1 className="text-4xl sm:text-5xl text-white font-semibold">
            Tri Darma is a <span className="text-4xl sm:text-5xl text-[#C778DD]">front-end developer</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="border border-[#C778DD] w-32 sm:w-40 p-2 text-center">
            <p>Contact me!</p>
          </button>
        </div>

        <div className="flex flex-col ml-[16px] items-center sm:items-start w-full sm:w-1/2 relative">
          <div className="relative">
            <Image
              src="/images/main.png"
              alt="Profile Picture"
              width={440}
              height={413}
              className="z-20"
            />
            <div className="absolute top-1/4 -left-8 sm:left-0">
              <Decor />
            </div>
            <div className="absolute top-2/3 right-[10px] sm:right-0">
              <Dot />
            </div>
          </div>
          <div className="border border-white flex flex-row justify-center items-center mt-4 sm:mt-6">
            <div className="w-3 p-2 my-2 mx-2 bg-[#C778DD]"></div>
            <p className="text-sm sm:text-base">
              Currently working on <span className="font-bold">Portfolio</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex relative justify-center items-center border border-gray-400 p-5 ml-[35px] sm:mx-16 md:mx-32 mt-16 sm:mt-20">
        <div className="absolute lg:-top-1/2 -top-1/3 left-2 sm:left-4 mt-5">
          <Quote />
        </div>
        <p className="text-lg sm:text-xl">Everything always happen for a reason</p>
        <div className="absolute lg:-bottom-1/2 -bottom-1/3 right-2 sm:right-4 mb-5">
          <Quote />
        </div>
      </div>

      <div className="flex justify-end items-center text-sm sm:text-base border border-gray-400 pr-7 py-3 mb-16 mr-0 sm:mr-16 ml-[250px] sm:ml-[40px]">
        - Eminem
      </div>
    </div>
  );
}
