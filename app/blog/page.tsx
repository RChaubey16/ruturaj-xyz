import { client } from "@/lib/sanity"

export const revalidate = 60 // ISR (optional)

export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == "post"]{
    _id,
    title,
    author->{ name }
  }`)

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Blog Page</h1>

      {posts.length === 0 && (
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
      </div>
    </main>
  )
}
