import "./styles.css"
import Image from "next/image";

export default function ImageMarquee() {
  // Sample image URLs - replace with your actual images
  const images = [
    "https://max.nekoweb.org/images/button.png",
    "https://cyber.dabamos.de/88x31/bestcanada.gif",
    "https://cyber.dabamos.de/88x31/cssdif.gif",
    "https://penguinjaa.com/images/buttons/neopenguinjaa.gif",
    "https://dimden.dev/services/images/88x31.gif",
    "https://cyber.dabamos.de/88x31/ezgif2.gif"
  ];

  const links = [
    "https://max.nekoweb.org",
    "",
    "",
    "https://penguinjaa.com",
    "https://dimden.dev/",
    ""
  ];

  const alts = [
    "Max's Apartment",
    "The Best Place is Canada",
    "CSS is Difficult",
    "NEOPENGUINJAA",
    "Dimden.dev",
    "Swatch Deltarune"
  ];

  return (
    <div className="max-w-full mt-4 pt-1 pb-1">
      {/* Container that clips overflow */}
      <div className="relative overflow-hidden">
        {/* Scrolling wrapper - duplicated many times for truly infinite scroll */}
        <div className="flex animate-scroll-infinite gap-4">
          {/* Repeat the images enough times to ensure continuous coverage */}
          {Array(20).fill(null).map((_, repeatIdx) => (
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