"use client"
import "./style.css";
import Image from "next/image";
import imagerotator from "./imagerotator";

export function TimelineItem({ img, text, subtext }: { img: string; text: string; subtext: string }) {
    return(
        <div className="flex mt-10">
            <Image src={img} width={300} height={200} alt="timeline item image" className="object-cover hover:animate-[scale_0.1s_forwards]" />
            <div className="bg-[#111111] max-w-120 basis-2/3">
                <h1 className="text-2xl font-bold text-lotraccent m-10">{text}</h1>
                <h1 className="text-xl font-bold italic text-lotraccent m-10">{subtext}</h1>
            </div>
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
                    <TimelineItem img={imagerotator(["/lotr/boromir.jpg", "/lotr/boromir2.jpg"])} text="Why should we not think that the Great Ring has come into our hands to serve us in the very hour of need?" subtext="- Boromir speaking to the council of Elrond about using the ring to help Gondor"/>
                    <TimelineItem img={imagerotator(["/lotr/gollum.jpg", "/lotr/gollum2.jpeg", "/lotr/gollum3.jpg"])} text="Still, he&apos;s a Baggins, my precious, yes, a Baggins. A  Baggins stole it. [..] We hates Bagginses. [...] All peoples that keep the Precious. We must have it!" subtext="- Gollum speaking to Smeagol about Frodo"/>
                    <TimelineItem img={imagerotator(["/lotr/saruman.jpg", "/lotr/saruman2.jpg"])} text="The time of the Elves is over, but our time is at hand: the world of men, which we must rule. But we must have power, power to order all things as we will. [...] The Ruling Ring? If we could command that, then the power could pass to us." subtext="- Saruman speaking to Gandalf"/>
                 </div>
                 <div className="w-full h-max mt-15 overflow-hidden p-3 mb-0 whitespace-nowrap border border-lotraccent">
                    <div className="inline-flex animate-[scroll_40s_linear_infinite]">
                        <h1 className="text-lotraccent text-2xl italic font-bold">Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men doomed to die, One for the Dark Lord on his dark throne, In the Land of Mordor where the Shadows lie. One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them, In the Land of Mordor where the Shadows lie. ~ </h1>
                        <h1 className="text-lotraccent text-2xl italic font-bold">Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men doomed to die, One for the Dark Lord on his dark throne, In the Land of Mordor where the Shadows lie. One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them, In the Land of Mordor where the Shadows lie. ~ </h1>
                    </div>
                 </div>
            </div>
            <Image src={"/baraddur.png"} width={500} height={500} alt="barad-dûr image" className="hover:animate-[scale_0.1s_forwards] absolute top-94 left-280"></Image>
            <Image src={"/collage.png"} width={1000} height={500} alt="lotr collage" unoptimized={true} className="absolute top-5 left-84"></Image>
            <Image src={"/thering.png"} width={300} height={300} alt="ring image" className="absolute top-20 left-60 rotate-330 hover:animate-[scale_0.1s_forwards]"></Image>
        </div>
    )
}