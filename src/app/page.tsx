import Link from "next/link";
import { fetchPages } from "./lib/notion";


export default async function Home() {
    const posts: any = await fetchPages();

  return (
    <main>
        {posts.results.map((post: any) => {
            return(
                <article key={post.id}>
                    <Link href= {`/blog/${post.properties.slug.rich_text[0].plain_text}`}>{post.properties.Title.title[0].plain_text}</Link>
                </article>
            )
        })}
    </main>
  );
}
