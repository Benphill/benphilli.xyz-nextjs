import "./styles.css"
import Image from "next/image";

export default function ImageMarquee() {
  // Sample image URLs - replace with your actual images
  const images = [
    "https://max.nekoweb.org/images/button.png",
    "https://max.nekoweb.org/images/button.png",
    "https://max.nekoweb.org/images/button.png",
    "https://max.nekoweb.org/images/button.png",
    "https://max.nekoweb.org/images/button.png",
    "https://max.nekoweb.org/images/button.png"
  ];

  const links = [
    "https://max.nekoweb.org",
    "https://max.nekoweb.org",
    "https://max.nekoweb.org",
    "https://max.nekoweb.org",
    "https://max.nekoweb.org",
    "https://max.nekoweb.org",
  ];

  return (
    <div className="w-full max-w-md lg:max-w-xl xl:max-w-3xl 2xl:max-w-5xl mx-auto mt-8 pt-1 pb-1 bg-maincol">
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
                  alt={`Image ${idx + 1}`}
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