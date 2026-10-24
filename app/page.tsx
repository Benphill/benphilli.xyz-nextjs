"use client"
import Marquee from "react-fast-marquee";
import Image from "next/image";
import "./home/styles.css";


export default async function opening() {
    return(
        <div className="w-full">
            <div className="ml-auto mr-auto mt-50 w-200 border-3 border-black border- outline-white outline-3 bg-white font-[grapeSoda] shadow-[10px_10px_0px_#00000030] flex-col">
                <header className="w-full h-8 bg-black flex justify-items-end-safe">
                    <div className="ml-3 text-white font-[grapeSoda] text-2xl">
                        welcome :3
                    </div>  
                    <div className="font-[Typewriter] mr-3 ml-auto text-white text-l mt-auto mb-auto">
                        - ☐ X
                    </div>
                </header>
                <div className="mr-3 ml-3 mt-3">
                    <Marquee className="bg-[#ff6969] border-l-5 border-r-5 border-[#ff2a2ad9]" autoFill={true}>
                        <p className="ml-auto mr-auto whitespace-pre text-2xl">Warning!!!!         </p>
                    </Marquee>
                </div>
                <div className="text-center mt-5">
                    <h1 className="text-5xl">
                        This site is criminally unfinished ;-;
                    </h1>
                </div>
                <hr className="border-t-3 ml-5 mr-5 mb-3 mt-3" />
                <div className="font-[Typewriter] ml-5 mr-5">
                    If you choose to continue, what you will bear witness to is an ongoing project of mine that has taken far too long for what little's currently there. for such a simple personal site, it's truly remarkable how strange my priorities can be in adding things to it.
                    <h1 className="font-[TypewriterBold] mt-5 text-center text-xl">Currently, only the blog and main pages are directly accessible.</h1>
                </div>
                
                <div className="flex">
                    <div className="text-7xl basis-2xl ml-5 mt-5 pt-4">
                        DONT USE A PHONE ONLY COMPUTER :3
                    </div>
                    <img src="/Niko_pancakes.png" onMouseOver={(event) => {event.currentTarget.src = "/Niko_smile.png";}} onMouseLeave={(event) => {event.currentTarget.src = "/Niko_pancakes.png";}} width={200} height={200} alt="Niko Oneshot" className="pixel m-5 broider"/>
                </div>
                <div className="text-center ml-5 mr-5 mb-5">
                    <a className="bg-violet-300 text-xl font-[Typewriter] w-full border-violet-200 border-4 pr-50 pl-50" href="/home">Venture Forth</a>
                </div>
            </div>
        </div>
    )
}