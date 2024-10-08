import GroupDecor from "../icons/groupdecor";

export default function Skill(){
    return(
        <>
        <div className="flex flex-row mt-10 items-center gap-2">
            <h1 className="font-regular text-2xl"><span className="text-[#C778DD]">#</span>skill</h1>
            <div className="border border-[#C778DD] w-[240px] h-0"></div>
        </div>
        <div className="flex flex-row py-8 justify-between">
            <GroupDecor/>
            <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-2">
                    <div className="">
                        <div className="flex border border-white justify-center items-center py-1">
                            <p className="">Language</p>
                        </div>
                        <div className="border border-white p-2">
                            <p className="w-36 text-gray-400">C C++ Java PHP Python JavaScript TypeScript Dart</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="">
                        <div className="flex border border-white justify-center items-center py-1">
                            <p className="">Databases</p>
                        </div>
                        <div className="border border-white p-2">
                            <p className="w-36 text-gray-400">SQLite MariaDB MongoDB</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex border border-white justify-center items-center py-1">
                            <p className="">Other</p>
                        </div>
                        <div className="border border-white p-2">
                            <p className="w-36 text-gray-400">HTML CSS EJS JSON</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="">
                        <div className="flex border border-white justify-center items-center py-1">
                            <p className="">Tools</p>
                        </div>
                        <div className="border border-white p-2">
                            <p className="w-36 text-gray-400">VSCode Figma SQLyog Git Github</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex border border-white justify-center items-center py-1">
                            <p className="">Frameworks</p>
                        </div>
                        <div className="border border-white p-2">
                            <p className="w-36 text-gray-400">Next React Laravel Vue Flutter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}