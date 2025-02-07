"use client"

import Link from "next/link"
import {Menu} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {trending} from "@/lib/sample-trending";
import {Trending} from "@/components/trending";

const navItems = [
  {title: "Dashboard", href: "/"},
  {title: "About", href: "/about"},
  {title: "Latest", href: "/latest"},
]

export function Navbar() {

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 md:px-16 w-full flex h-14 justify-between items-center">

        <Link href="/" className="mr-6">
          <span className="font-bold">AI Trends</span>
        </Link>


        <div className={"w-fit"}>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60">
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="w-fit">
          <Button variant="outline" className="hidden md:flex">
            Login
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5"/>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-medium w-full text-center">
                    {item.title}
                  </Link>
                ))}
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </nav>
              <div className="mt-8">
                <Trending posts={trending}/>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

