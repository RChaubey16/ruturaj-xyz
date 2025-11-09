import { client } from "@/sanity/lib/client";
import Gallery from "../components/Gallery";

export default async function GalleryPage() {
  const gallery = await client.fetch(`*[_type=="gallery"] {
  _id,
  images[] {
    _key,
    _type,
    alt,
    "url": asset->url
  }
}`);

  const photos =
    gallery[0]?.images?.map((item) => ({
      url: item?.url,
      alt: item?.alt,
    })) ?? [];

  return (
    <main className="pt-20 max-w-3xl mx-auto p-4">
      <Gallery photos={photos} useButton={false} />
    </main>
  );
}
