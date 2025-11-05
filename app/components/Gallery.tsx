import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <section id="gallery" className="my-22">
      <h1 className="mb-2 heading">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full h-48">
          <Image
            src="https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg"
            fill
            alt="banner"
            className="object-cover rounded-sm"
          />
        </div>
        <div className="relative w-full h-48">
          <Image
            src="https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg"
            fill
            alt="banner"
            className="object-cover rounded-sm"
          />
        </div>
        <div className="relative w-full h-48">
          <Image
            src="https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg"
            fill
            alt="banner"
            className="object-cover rounded-sm"
          />
        </div>
        <div className="relative w-full h-48">
          <Image
            src="https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg"
            fill
            alt="banner"
            className="object-cover rounded-sm"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Link href={"/builds"} className="">
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
    </section>
  );
};

export default Gallery;
