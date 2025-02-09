import Image from "next/image";
import Dot from "../icons/dot";
import Decor from "../icons/decor";

export default function AboutMe() {
  return (
    <>
      {/* Section Title */}
      <div className="flex flex-row mt-10 items-center gap-2 relative ml-4" id="about-me">
        <h1 className="font-regular text-2xl sm:text-3xl">
          <span className="text-[#C778DD]">#</span>about-me
        </h1>
        <div className="border border-[#C778DD] w-[240px] sm:w-[300px] h-0"></div>
      </div>

      {/* About Me Content */}
      <div className="flex flex-col sm:flex-row my-10 justify-between gap-8">
        {/* Text Section */}
        <div className="relative flex flex-col gap-3 justify-start text-[16px] sm:text-lg text-gray-400 tracking-widest w-full sm:w-1/2 ml-6">
          <h1 className="text-2xl sm:text-3xl font-semibold">Hello I’m Tridarma</h1>
          <p>
            I’m a self-taught <span className="text-[#C778DD]">front-end developer</span> based in Bali, Indonesia. I
            can develop <span className="text-[#C778DD]">responsive websites</span> from scratch and raise them into modern <span className="text-[#C778DD]">user-friendly web experiences.</span>
          </p>
          <p className="hidden lg:block">
            Transforming my creativity and knowledge into websites has been <span className="text-[#C778DD]">my passion for over a year.</span> I have been helping various clients to establish their presence online. I always <span className="text-[#C778DD]"> strive to learn</span> about the newest technologies and frameworks.
          </p>
          
        </div>

        {/* Image Section */}
        <div className="flex flex-col relative w-full sm:w-1/2">
          <div className="absolute -left-10 top-1/2 sm:left-0 sm:top-1/2">
            <Dot />
          </div>
          <div className="absolute -left-16 -top-14 sm:left-0 sm:top-0">
            <Decor />
          </div>
          <Image
            src={"/images/new-manggik.png"}
            alt="Tridarma"
            width={377}
            height={500}
            className="w-full sm:w-auto"
          />
          <div className="absolute -right-[20px] top-0 sm:right-0 sm:top-0">
            <Dot />
          </div>
          <div className="absolute -right-[20px] -bottom-[50px] sm:right-0 sm:bottom-0">
            <Decor />
          </div>
        </div>
      </div>
    </>
  );
}
