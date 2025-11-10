import Gallery from "../components/Gallery";

export default async function GalleryPage() {
  return (
    <main className="pt-20 max-w-3xl mx-auto p-4">
      <Gallery useButton={false} />
    </main>
  );
}
