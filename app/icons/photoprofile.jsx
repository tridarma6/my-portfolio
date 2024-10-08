import Image from "next/image";
export default function PhotoProfile(){
    return(
        <Image src={"/images/manggik.png"} alt={"LOGO"} width={400} height={400} className="z-20"/>
    );
}