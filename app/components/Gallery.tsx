import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ImageItem {
  _key: string;
  _type: string;
  alt?: string;
  url: string;
}

interface GalleryItem {
  _id: string;
  images: ImageItem[];
}

const Gallery = async ({ useButton = true }) => {
  const gallery: GalleryItem[] = await client.fetch(`
      *[_type == "gallery"] {
        _id,
        images[] {
          _key,
          _type,
          alt,
          "url": asset->url
        }
      }
    `);

  const photos =
    gallery[0]?.images?.map((item) => ({
      url: item.url,
      alt: item.alt || "",
    })) ?? [];

  return (
    <section id="gallery" className="my-20">
      <h1 className="mb-2 heading">Gallery</h1>

      {useButton ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {photos.slice(0, 4).map((photo, index) => (
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
        </>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="mb-8">
              <div className="relative w-full h-96">
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <p className="mt-2 para-text text-center">{photo.alt}</p>
            </div>
          ))}
        </div>
      )}

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
