import Image from "next/image";
import Dot from "../icons/dot";

export default function Project() {
  return (
    <div className="my-10 relative px-4 sm:px-6 md:px-12">
      {/* Project Title and View All */}
      <div className="flex flex-row justify-between mt-16">
        <div className="flex items-center gap-2">
          <h1 className="font-regular text-2xl sm:text-3xl">
            <span className="text-[#C778DD]">#</span>project
          </h1>
          <div className="border border-[#C778DD] w-[240px] sm:w-[300px] h-0"></div>
        </div>
        <p className="text-sm sm:text-base text-gray-400 cursor-pointer">View all</p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col sm:flex-row gap-8 mt-10 justify-between ml-[70px] mr-10">
        {/* First Project */}
        <div className="flex flex-col w-full sm:w-1/3">
          <Image
            src={"/images/itcc.jpg"}
            alt="ITCC"
            width={300}
            height={250}
            className="border border-gray-400 p-2"
          />
          <div className="border border-gray-400">
            <p className="px-2 py-[2px] text-gray-400">Next TypeScript MariaDB</p>
          </div>
          <div className="flex flex-col gap-2 border border-gray-400 px-2 py-[2px]">
            <h1 className="text-xl sm:text-2xl">ITCC UDAYANA 2024</h1>
            <p className="text-gray-400">Himpunan Mahasiswa Teknologi Informasi</p>
          </div>
        </div>

        {/* Second Project */}
        <div className="flex flex-col w-full sm:w-1/3">
          <Image
            src={"/images/buildit.jpg"}
            alt="BUILDIT"
            width={300}
            height={250}
            className="border border-gray-400 p-2"
          />
          <div className="border border-gray-400">
            <p className="px-2 py-[2px] text-gray-400">Laravel React JavaScript</p>
          </div>
          <div className="flex flex-col gap-2 border border-gray-400 px-2 py-[2px]">
            <h1 className="text-xl sm:text-2xl">BUILD IT 2024</h1>
            <p className="text-gray-400">Himpunan Mahasiswa Teknologi Informasi</p>
          </div>
        </div>

        {/* Third Project */}
        <div className="flex flex-col w-full sm:w-1/3">
          <Image
            src={"/images/portofolio.jpg"}
            alt="My Portfolio"
            width={300}
            height={250}
            className="border border-gray-400 p-2"
          />
          <div className="border border-gray-400">
            <p className="px-2 py-[2px] text-gray-400">Next JavaScript</p>
          </div>
          <div className="flex flex-col gap-2 border border-gray-400 px-2 py-[2px]">
            <h1 className="text-xl sm:text-2xl">My Portfolio</h1>
            <p className="text-gray-400">My First Portfolio Project</p>
          </div>
        </div>
      </div>

      {/* Dot Icon */}
      <div className="absolute -left-28 -top-20 sm:left-0 sm:top-0">
        <Dot />
      </div>
    </div>
  );
}
