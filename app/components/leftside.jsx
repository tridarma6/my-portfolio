import Github from "../icons/github";
import Discord from "../icons/discord";
import Email from "../icons/email";
export default function LeftSide() {
  return (
    <div className="flex flex-row absolute z-50">
      <div className="flex flex-col gap-4 ml-16 items-center">
        <div className="bg-white w-[1px] h-48"></div>
        <Github/>
        <Discord/>
        <Email/>
      </div>
    </div>
  );
}