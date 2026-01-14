import "./style.css"
import Image from "next/image";

export const metadata = {
  title: 'Ben ~ Jasper: School Work',
  description: 'Ben&apos;s Site',
};

export default async function School() {
    return(
        <div className="size-full">
            <div>
                <Image src={"/paper.jpg"} width={1000} height={1400} alt="paper background" className="rotate-6 mr-auto ml-auto mt-20"></Image>
            </div>
            
        </div>
    )
}