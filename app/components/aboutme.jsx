import Image from "next/image";
import Dot from "../icons/dot";
import Decor from "../icons/decor";
export default function AboutMe(){
    return(
        <>
        <div className="flex flex-row mt-10 items-center gap-2">
            <h1 className="font-regular text-2xl"><span className="text-[#C778DD]">#</span>about-me</h1>
            <div className="border border-[#C778DD] w-[240px] h-0"></div>
        </div>
        <div className="flex flex-row my-10 justify-between">
            <div className="relative flex flex-col gap-3 justify-start text-[16px] text-gray-400 tracking-widest w-1/2">
                <h1 className="">Hello I’m Tridarma</h1>
                <p className="">I’m a self-taught front-end developer based in Bali, Indonesia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
                <p className="">Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                <div className="absolute -left-48 top-1/2">
                    <Decor/>
                </div>
            </div>
            <div className="flex flex-col relative">
                <div className="absolute -left-10 top-1/2">
                    <Dot/>
                </div>
                <div className="absolute -left-16 -top-14">
                    <Decor/>
                </div>
                <Image src={"/images/new-photo.png"} alt="" width={377} height={500} className=""/>
                <div className="absolute -right-10 top-0">
                    <Dot/>
                </div>
                <div className="absolute -right-36 -bottom-14">
                    <Decor/>
                </div>
            </div>
        </div>
        </>
    );
}