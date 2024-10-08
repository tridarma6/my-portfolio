import Image from "next/image";
export default function Project(){
    return(
        <div className="my-10">
        <div className="flex flex-row mt-10 justify-between">
            <div className="flex items-center gap-2">
                <h1 className="font-regular text-2xl"><span className="text-[#C778DD]">#</span>project</h1>
                <div className="border border-[#C778DD] w-[240px] h-0"></div>
            </div>
            <p className="">View all</p>
        </div>
        <div className="flex flex-row mt-10 justify-between">
            <div className="flex flex-col">
                <Image src={"/images/itcc.jpg"} alt="ITCC" width={300} height={250} className="border border-gray-400 p-2"/>
                <div className="border border-gray-400">
                    <p className="flex px-2 py-[2px] text-gray-400 w-[290px]">Next TypeScript MariaDB</p>
                </div>
                <div className="flex flex-col gap-2 border border-gray-400 px-2 py-[2px] w-[300px]">
                    <h1 className="text-2xl">ITCC UDAYANA 2024</h1>
                    <p className="text-gray-400">Himpunan Mahasiswa Teknologi Informasi</p>
                </div>
            </div>
            <div className="flex flex-col">
                <Image src={"/images/buildit.jpg"} alt="BUILDIT" width={300} height={250} className="border border-gray-400 p-2"/>
                <div className="border border-gray-400">
                    <p className="flex px-2 py-[2px] text-gray-400 w-[290px]">Laravel React JavaScript </p>
                </div>
                <div className="flex flex-col gap-2 border border-gray-400 px-2 py-[2px] w-[300px]">
                    <h1 className="text-2xl">BUILD IT 2024</h1>
                    <p className="text-gray-400">Himpunan Mahasiswa Teknologi Informasi</p>
                </div>
            </div>
            <div className="flex flex-col">
                <Image src={"/images/portofolio.jpg"} alt="BUILDIT" width={300} height={250} className="border border-gray-400 p-2"/>
                <div className="border border-gray-400">
                    <p className="flex px-2 py-[2px] text-gray-400 w-[290px]">Next JavaScript </p>
                </div>
                <div className="flex flex-col gap-2 border border-gray-400 px-2 py-[2px] w-[300px]">
                    <h1 className="text-2xl">My Portfolio</h1>
                    <p className="text-gray-400">My First Portfolio Project </p>
                </div>
            </div>
        </div>
        </div>
    );
}