"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { title: "Dashboard", href: "/" },
  { title: "About", href: "/about" },
  { title: "Latest", href: "/latest" },
]

export function Navbar({ trending }) {
  return (
    (<header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">AI Trends</span>
          </Link>
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
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="outline" className="hidden md:flex">
            Login
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-medium">
                    {item.title}
                  </Link>
                ))}
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </nav>
              <div className="mt-8">{trending}</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>)
  );
}

