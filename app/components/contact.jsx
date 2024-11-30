import Discord from "../icons/discord";
import Email from "../icons/email";
import Telegram from "../icons/telegram";
import Link from "next/link";
import Dot from "../icons/dot";

export default function Contact() {
  return (
    <div className="relative">
      {/* Section Title */}
      <div className="flex flex-row mt-10 items-center gap-2 ml-4" id="contact">
        <h1 className="font-regular text-2xl sm:text-3xl">
          <span className="text-[#C778DD]">#</span>contact
        </h1>
        <div className="border border-[#C778DD] w-[240px] sm:w-[300px] h-0"></div>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row my-10 justify-between gap-8 sm:gap-16 ml-4">
        {/* Contact Message */}
        <p className="text-[16px] sm:text-lg text-gray-400 tracking-widest w-full sm:w-1/2">
          I’m interested in freelance opportunities. However, if you have
          other requests or questions, don’t hesitate to contact me.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col border border-white p-4 gap-4 text-[16px] sm:text-lg text-gray-400 tracking-widest w-full sm:w-1/2">
          <h1 className="text-white mb-4 text-xl sm:text-2xl">Message me here</h1>
          <Link
            className="flex flex-row gap-2 justify-start items-center"
            href={"https://discord.com"}
            target="_blank"
          >
            <Discord />
            <p>trikwhy</p>
          </Link>
          <Link
            className="flex flex-row gap-2 justify-start items-center"
            href={"mailto: triidarma06@gmail.com"}
          >
            <Email />
            <p>triidarma06@gmail.com</p>
          </Link>
          <Link
            className="flex flex-row gap-2 justify-start items-center"
            href={"https://tele.me/tri6darma"}
            target="_blank"
          >
            <Telegram />
            <p>tri6darma</p>
          </Link>
        </div>
      </div>

      {/* Decorative Dot */}
      <div className="absolute -left-44 top-1/4 sm:left-10 sm:top-1/4">
        <Dot />
      </div>
    </div>
  );
}
