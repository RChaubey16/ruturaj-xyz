import { client } from "@/sanity/lib/client";

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
const photos = gallery[0]?.images ?? [];

console.log(`PHOTOS`, photos)

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Gallery Page</h1>

      {/* {posts.length === 0 && (
        <p className="text-gray-500">No posts yet.</p>
      )}

      <div className="space-y-6">
        {posts.map((post: any) => (
          <article key={post._id}>
            <h2 className="text-xl font-bold">{post.title}</h2>
            {post.author?.name && (
              <p className="text-sm text-gray-600">
                by {post.author.name}
              </p>
            )}
          </article>
        ))}
      </div> */}
    </main>
  );
}
