import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import Link from "next/link"

export function Trending({posts}) {

  return (
    (
      <Card className= "border-2 border-muted shadow-none">
      <CardHeader>
        <CardTitle>Trending on AI Trends</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {posts.map((post, index) => (
          <div key={post.id} className=" flex items-start gap-4">
            <div className="space-y-1 border shadow rounded-sm p-2 w-full">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={post.author.image} alt={post.author.name}/>
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
              <Link href="#" className="font-semibold hover:underline line-clamp-2">
                {post.title}
              </Link>
              <time className="text-sm text-muted-foreground">{post.date}</time>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>)
  );
}

