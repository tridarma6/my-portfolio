import Link from "next/link";
import Image from "next/image";
export default function ApplicationLogo() {
    return (
        <Link className="cursor-pointer" href={"/"}>
            <Image src={"/images/icon.png"} alt={"LOGO"} width={150} height={100}/>
        </Link>
    );
}
