import GroupDecor from "../icons/groupdecor";

export default function Skill() {
  return (
    <>
      {/* Title Section */}
      <div className="flex flex-row mt-10 items-center gap-2 ml-2">
        <h1 className="font-regular text-2xl sm:text-3xl">
          <span className="text-[#C778DD]">#</span>skill
        </h1>
        <div className="border border-[#C778DD] w-[240px] sm:w-[300px] h-0"></div>
      </div>

      {/* Skill Content Section */}
      <div className="flex flex-col sm:flex-row py-8 justify-between items-center gap-8 ml-[37px]">
        <GroupDecor />
        
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 w-full">
          {/* Language Section */}
          <div className="flex flex-col gap-2 lg:gap-4 w-full sm:w-1/3">
            <div className="flex border border-white justify-center items-center py-1">
              <p className="text-sm sm:text-base">Language</p>
            </div>
            <div className="border border-white p-2">
              <p className="text-gray-400">C C++ Java PHP Python JavaScript TypeScript Dart</p>
            </div>
          </div>

          {/* Databases Section */}
          <div className="flex flex-col gap-2 lg:gap-4 w-full sm:w-1/3">
            <div className="flex border border-white justify-center items-center py-1">
              <p className="text-sm sm:text-base">Databases</p>
            </div>
            <div className="border border-white p-2">
              <p className="text-gray-400">SQLite MariaDB MongoDB</p>
            </div>

            <div className="flex border border-white justify-center items-center py-1">
              <p className="text-sm sm:text-base">Other</p>
            </div>
            <div className="border border-white p-2">
              <p className="text-gray-400">HTML CSS EJS JSON</p>
            </div>
          </div>

          {/* Tools Section */}
          <div className="flex flex-col gap-2 lg:gap-4 w-full sm:w-1/3">
            <div className="flex border border-white justify-center items-center py-1">
              <p className="text-sm sm:text-base">Tools</p>
            </div>
            <div className="border border-white p-2">
              <p className="text-gray-400">VSCode Figma SQLyog Git Github</p>
            </div>

            {/* Frameworks Section */}
            <div className="flex border border-white justify-center items-center py-1">
              <p className="text-sm sm:text-base">Frameworks</p>
            </div>
            <div className="border border-white p-2">
              <p className="text-gray-400">Next React Laravel Vue Flutter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
