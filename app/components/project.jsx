import Image from "next/image";
import Github from "../icons/github";
import Link from "next/link";

export default function Project() {
  return (
    <div className="my-10 relative px-3 md:px-4">
      {/* Project Title and View All */}
      <div className="flex flex-row justify-between mt-16" id="project">
        <div className="flex items-center gap-2">
          <h1 className="font-regular text-2xl sm:text-3xl">
            <span className="text-[#C778DD]">#</span>project
          </h1>
          <div className="border border-[#C778DD] w-[240px] sm:w-[300px] h-0"></div>
        </div>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col sm:flex-row gap-8 mt-10 justify-between ml-[70px] mr-10">
        {/* First Project */}
        <div className="flex flex-col w-full sm:w-1/3">
          <div className="border border-gray-400 p-[9px]">
            <Image
              src={"/images/itcc.jpg"}
              alt="ITCC"
              width={300}
              height={250}
            />
          </div>
          <div className="border border-gray-400">
            <p className="px-2 py-[2px] text-gray-400">Next TypeScript MariaDB</p>
          </div>
          <div className="flex flex-col gap-2 border border-gray-400 px-2 py-[2px]">
            <h1 className="text-xl sm:text-2xl">ITCC 2024</h1>
            <p className="text-gray-400">Team</p>
          </div>
        </div>

        {/* Second Project */}
        <div className="flex flex-col w-full sm:w-1/3">
          <div className="border border-gray-400 p-[9px]">
            <Image
              src={"/images/buildit.jpg"}
              alt="BUILD IT"
              width={300}
              height={250}
            />
          </div>
          <div className="border border-gray-400">
            <p className="px-2 py-[2px] text-gray-400">Laravel React JavaScript</p>
          </div>
          <div className="flex flex-col gap-2 border border-gray-400 px-2 py-[2px]">
            <h1 className="text-xl sm:text-2xl">BUILD IT 2024</h1>
            <p className="text-gray-400">Team</p>
          </div>
        </div>

        {/* Third Project */}
        <div className="flex flex-col w-full sm:w-1/3">
          <div className="border border-gray-400 p-[9px]">
            <Image
              src={"/images/portofolio.jpg"}
              alt="portofolio"
              width={300}
              height={250}
            />
          </div>
          <div className="border border-gray-400">
            <p className="px-2 py-[2px] text-gray-400">Next JavaScript</p>
          </div>
          <div className="flex flex-col gap-2 border border-gray-400 px-2 py-[2px]">
            <h1 className="text-xl sm:text-2xl">My Portfolio</h1>
            <p className="text-gray-400">Solo</p>
          </div>
        </div>
      </div>
      <div className="flex py-3 pl-2 sm:w-1/4 w-full border-2 sm:gap-1 gap-2  justify-center items-center my-5 ml-4 sm:mx-[70px]">
        <a href="https://github.com/tridarma6">Check my github here</a>
        <Link href={"https://github.com/tridarma6"} >
          <Github/>
        </Link>
      </div>
    </div>
  );
}
