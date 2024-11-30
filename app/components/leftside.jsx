import Github from "../icons/github";
import Discord from "../icons/discord";
import Email from "../icons/email";
import Link from "next/link";
export default function LeftSide() {
  return (
    <div className="flex flex-row absolute z-50">
      <div className="flex flex-col gap-4 ml-16 items-center">
        <div className="bg-white w-[1px] h-48" ></div>
        <Link href={"https://github.com/tridarma6"} >
          <Github/>
        </Link>
        <Link  href={"https://discord.com"} target="_blank">
            <Discord/>
        </Link>
        <Link  href={"mailto: triidarma06@gmail.com"}>
            <Email/>
        </Link>
      </div>
    </div>
  );
}