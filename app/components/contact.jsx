import Discord from "../icons/discord";
import Email from "../icons/email";
import Telegram from "../icons/telegram";
import Link from "next/link";
export default function Contact(){
    return(
        <>
        <div className="flex flex-row mt-10 items-center gap-2">
            <h1 className="font-regular text-2xl"><span className="text-[#C778DD]">#</span>contact</h1>
            <div className="border border-[#C778DD] w-[240px] h-0"></div>
        </div>
        <div className="flex flex-row my-10 justify-between">
            <p className="flex justify-start text-[16px] text-gray-400 tracking-widest w-1/2">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>

            <div className="flex flex-col border border-white p-4 gap-2 text-[16px] text-gray-400 tracking-widest">
                <h1 className="flex mb-2 text-white">Message me here</h1>
                <Link className="flex flex-row gap-2 justify-start items-center" href={"https://discord.com"} target="_blank">
                    <Discord/>
                    <p className="">trikwhy</p>
                </Link>
                <Link className="flex flex-row gap-2 justify-start items-center" href={"mailto: triidarma06@gmail.com"}>
                    <Email/>
                    <p className="">triidarma06@gmail.com</p>
                </Link>
                <Link className="flex flex-row gap-1 justify-start items-center" href={"https://tele.me/tri6darma"} target="_blank">
                    <Telegram/>
                    <p className="">tri6darma</p>
                </Link>
            </div>
        </div>
        </>
    );
}