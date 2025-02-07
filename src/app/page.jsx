import { BlogPost } from "@/components/blog-post"
import { Navbar } from "@/components/navbar"
import { Trending } from "@/components/trending"

const posts = [
  {
    id: "1",
    title: "The Future of AI in 2025",
    content:
      "Exploring the latest trends in artificial intelligence and what they mean for developers and businesses...",
    author: {
      name: "Sarah Chen",
      image: "/placeholder.svg",
      handle: "sarahchen",
    },
    date: "2h ago",
  },
  {
    id: "2",
    title: "Machine Learning Breakthroughs",
    content: "New research shows promising results in self-supervised learning models...",
    author: {
      name: "Alex Kumar",
      image: "/placeholder.svg",
      handle: "alexk",
    },
    date: "5h ago",
  },
]

const trending = [
  {
    id: "1",
    title: "Understanding Large Language Models: A Comprehensive Guide",
    author: {
      name: "Maria Rodriguez",
      image: "/placeholder.svg",
    },
    date: "Jan 25",
  },
  {
    id: "2",
    title: "The Ethics of AI: Navigating the Challenges",
    author: {
      name: "James Wilson",
      image: "/placeholder.svg",
    },
    date: "Jan 24",
  },
  {
    id: "3",
    title: "AI in Healthcare: Revolutionary Changes",
    author: {
      name: "Dr. Emily Chang",
      image: "/placeholder.svg",
    },
    date: "Jan 23",
  },
]

export default function Home() {
  return (<>
    <Navbar trending={<Trending posts={trending} />} />
    <div className="container grid grid-cols-1 md:grid-cols-[1fr,auto] gap-6 py-8">
      <main className="space-y-4">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </main>
      <aside className="hidden md:block w-[350px] sticky top-24 h-fit">
        <Trending posts={trending} />
      </aside>
    </div>
  </>);
}

