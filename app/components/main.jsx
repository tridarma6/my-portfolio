import Image from "next/image";
import Decor from "../icons/decor";
import Dot from "../icons/dot";
import Quote from "../icons/quote";
export default function Main(){
    return(
        <>
        <div className="flex flex-row justify-between gap-3">
            <div className="flex flex-col gap-5 w-1/2">
                <h1 className="text-2xl text-gray-400">Hello Dude!</h1>
                <h1 className="text-4xl text-white font-semibold">Tri Darma is a <span className="text-4xl text-[#C778DD]">front-end developer</span></h1>
                <p className="text-xl text-gray-400">He crafts responsive websites where technologies meet creativity</p>
                <button className="border border-[#C778DD] w-32 p-2">
                    <p>
                        contact me!
                    </p>
                </button>
            </div>
            <div className="flex flex-col">
                <div className="relative">
                    <Image src="/images/main.png" alt={"Profile Picture"} width={440} height={413} className="z-20" typeof="image/png"/>                  
                    <div className="absolute top-1/4 -left-8">
                        <Decor/>
                    </div>
                    <div className="absolute top-2/3 -right-4">
                        <Dot/>
                    </div>
                </div>
                <div className="border border-white flex flex-row justify-center items-center">
                    <div className="w-3 p-2 my-2 mx-2 bg-[#C778DD]"></div>
                    <p className="">Currently working on <span className="font-bold">Portfolio</span></p>
                </div>
            </div>
        </div>
        <div className="flex relative justify-center items-center border border-gray-400 p-5 mx-72 mt-16">
            <div className="absolute -top-1/2 left-2 mt-5">
                <Quote/>
            </div>
            <p className="">Everything always happen for a reason</p>
            <div className="absolute -bottom-1/2 right-2 mb-5">
                <Quote/>
            </div>
        </div>
        <div className="flex justify-end items-center border border-gray-400 pr-7 py-3 mb-16 mr-72 ml-[560px]">- Eminem</div>
        </>
    );
}