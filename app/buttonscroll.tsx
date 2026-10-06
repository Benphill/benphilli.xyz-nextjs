import "./styles.css"
import Image from "next/image";

export default function ImageMarquee() {
  const images = [
    "/marquee/88x31.gif",
    "/marquee/bestcanada.gif",
    "/marquee/button_88x31.png",
    "/marquee/Button_Firefox_Now.png",
    "/marquee/Button_Indie_Games_Now.png",
    "/marquee/Button_Starwalker.gif",
    "/marquee/button.webp",
    "/marquee/cssdif.webp",
    "/marquee/ezgif2.gif",
    "/marquee/neopenguinjaa.gif"
  ];

  const links = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  const alts = [
    "Dimden.dev",
    "The Best Place is Canada",
    "Wheel of Time Button",
    "Firefox NOW",
    "Indie Games NOW",
    "This Button is Pissing Me Out I'm the Original Starwalker",
    "Max's Apartment",
    "CSS is Difficult",
    "Swatch Deltarune",
    "NEOPENGUINJAA",
  ];

  return (
    <div className="max-w-full mt-4 pt-1 pb-1">
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-infinite gap-1">
          {Array(30).fill(null).map((_, repeatIdx) => (
            images.map((src, idx) => (
              <a
                key={`${repeatIdx}-${idx}`}
                href={links[idx]}
                className="flex-shrink-0 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={src}
                  alt={alts[idx]}
                  width={88}
                  height={31}
                />
              </a>
            ))
          ))}
        </div>
      </div>
    </div>
  );
}