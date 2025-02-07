import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Card, CardContent, CardHeader} from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image";

export function BlogPost({post}) {


  return (
    (
      <Card className="border-2 border-muted shadow-none">
        <CardHeader className="flex flex-row items-center space-x-4 p-2.5">
          <Avatar>
            <AvatarImage src={post.author.image} alt={post.author.name}/>
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Link href="#" className="font-semibold hover:underline">
              {post.author.name}
            </Link>
            <span className="text-sm text-muted-foreground">@{post.author.handle}</span>
          </div>
        </CardHeader>

        <CardContent className="p-4 pt-0">
          <Card className="bg-muted/50 p-2.5">
            <h3 className="font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground">{post.content}</p>
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
              alt="Photo by Drew Beamer"
              height={400}
              width={600}
              className=" rounded-md object-cover aspect-video my-3"
            />
          </Card>
          <time className="text-sm text-muted-foreground mt-2 block">{post.date}</time>
        </CardContent>
      </Card>)
  );
}

