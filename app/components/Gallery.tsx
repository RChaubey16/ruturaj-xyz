import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    url: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
    alt: "banner",
  },
  {
    url: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
    alt: "banner",
  },
  {
    url: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
    alt: "banner",
  },
  {
    url: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
    alt: "banner",
  },
];

const Gallery = ({ photos = images, useButton = true }) => {
  return (
    <section id="gallery" className="my-22">
      <h1 className="mb-2 heading">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative w-full h-48">
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              className="object-cover rounded-sm"
            />
          </div>
        ))}
      </div>
      {useButton && (
        <div className="mt-8 flex justify-center">
          <Link href={"/gallery"} className="">
            <Button
              variant="outline"
              size={"lg"}
              className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-200 hover:gap-4"
            >
              More Photos
              <ArrowUpRight />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Gallery;
