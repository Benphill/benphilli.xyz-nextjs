"use client"
import "./style.css"
import Image from "next/image";

export function TimelineItem({ img, text }: { img: string; text: string }) {
    return(
        <div className="flex mt-10">
            <Image src={img} width={100} height={100} alt="timeline item image" />
            <h1 className="text-2xl font-bold text-lotraccent m-10">{text}</h1>
        </div>
    )
}


export default function Lotr() {
    return(
        <div className="size-full overflow-clip">
            <div className="h-215 w-[80%] mr-auto ml-auto bg-black font-serif overflow-clip">
                <style jsx global>{`
                    body {
                        background-image: url('/redlotr.jpg');
                    }
                `}</style>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="ml-10 overflow-auto max-h-107">
                    <h1 className="text-4xl font-bold text-lotraccent">- The Lord of the Rings -</h1>
                    <hr className="border-lotraccent w-3/4 mt-2 mb-4 border-dashed"/>
                    <TimelineItem img="/kindle.png" text="Optional Quote 1"/>
                    <TimelineItem img="/kindle.png" text="Optional Quote 2"/>
                    <TimelineItem img="/kindle.png" text="Optional Quote 3"/>
                    <TimelineItem img="/kindle.png" text="Optional Quote 4"/>
                 </div>
                 <div className="w-full h-20 mt-10 bg-gray-900 overflow-hidden p-3 mb-0 whitespace-nowrap">
                    <div className="inline-flex animate-[scroll_25s_linear_infinite]">
                        <h1 className="text-lotraccent text-2xl font-bold animate-marquee">Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men doomed to die, One for the Dark Lord on his dark throne, In the Land of Mordor where the Shadows lie. One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them, In the Land of Mordor where the Shadows lie.</h1>
                    </div>
                 </div>
            </div>
            <Image src={"/baraddur.png"} width={500} height={500} alt="barad-dûr image" className="absolute top-94 left-280"></Image>
            <Image src={"/collage.png"} width={1000} height={500} alt="lotr collage" unoptimized={true} className="absolute top-5 left-84"></Image>
        </div>
    )
}