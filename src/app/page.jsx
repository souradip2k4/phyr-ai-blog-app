import {BlogPost} from "@/components/blog-post"
import {Navbar} from "@/components/navbar"
import {Trending} from "@/components/trending"
import {posts} from "@/lib/sample-posts";
import {trending} from "@/lib/sample-trending";


export default function Home() {
  return (
    <div className={"w-full flex flex-col items-center justify-around px-3"}>
      <Navbar/>
      <div className="flex gap-6 sm:gap-8 md:gap-12 py-8 w-fit">
        <main className="space-y-4 md:max-w-[700px]">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post}/>
          ))}
        </main>
        <div className="hidden md:flex max-w-[350px] sticky top-24 h-fit">
          <Trending posts={trending}/>
        </div>
      </div>
    </div>);
}

