"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-400">Dharma</span>
          <span className="text-lg font-medium text-white">Financial</span>
        </Link>
        <nav className="hidden lg:flex flex-1 items-center justify-center space-x-8 text-sm font-medium">
          <Link href="/" className="text-blue-400 transition-colors hover:text-blue-300">
            Home
          </Link>
          <Link href="/about" className="text-white transition-colors hover:text-blue-400">
            About Us
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-blue-400 transition-colors hover:text-blue-300">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuItem>
                <Link href="/services#financial-planning" className="w-full">
                  Financial Planning
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services#tax-planning" className="w-full">
                  Strategic Tax Planning
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services#retirement" className="w-full">
                  Retirement Planning
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services#college" className="w-full">
                  College Planning
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services#real-estate" className="w-full">
                  Real Estate Investments
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services#estate" className="w-full">
                  Estate Planning
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services#insurance" className="w-full">
                  Life & Health (LTC) and Medicare Insurance
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services#investments" className="w-full">
                  Stock Market
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/personalized" className="text-white transition-colors hover:text-blue-400">
            Personalized Services
          </Link>
          <Link href="/who-we-serve" className="text-white transition-colors hover:text-blue-400">
            Who We Serve
          </Link>
          <Link href="/gallery" className="text-white transition-colors hover:text-blue-400">
            Gallery
          </Link>
          <Link href="/contact" className="text-white transition-colors hover:text-blue-400">
            Contact Us
          </Link>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/schedule">
            <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" className="ml-auto bg-transparent border-white text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-white">
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-lg font-medium text-blue-400" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/personalized" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Personalized Services
              </Link>
              <Link href="/who-we-serve" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Who We Serve
              </Link>
              <Link href="/gallery" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
              <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
              <Link href="/schedule" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Contact Us</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
