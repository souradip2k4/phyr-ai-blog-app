import {BlogPost} from "@/components/blog-post"
import {Navbar} from "@/components/navbar"
import {Trending} from "@/components/trending"
import {posts} from "@/lib/sample-posts";
import {trending} from "@/lib/sample-trending";


export default function Home() {
  return (<>
    <Navbar trending={<Trending posts={trending}/>}/>
    <div className="container grid grid-cols-1 md:grid-cols-[1fr,auto] gap-6 py-8 md:px-6">
      <main className="space-y-4">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post}/>
        ))}
      </main>
      <aside className="hidden md:block w-[350px] sticky top-24 h-fit">
        <Trending posts={trending}/>
      </aside>
    </div>
  </>);
}

