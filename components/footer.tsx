import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container grid gap-8 px-4 py-10 md:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-600">Dharma</span>
            <span className="text-lg font-medium">Financial</span>
          </div>
          <p className="text-sm text-gray-500">
            Personalized financial planning solutions to help you achieve your goals and secure your family&apos;s future.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Services</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link href="/services#retirement" className="hover:text-blue-600">
                Retirement Planning
              </Link>
            </li>
            <li>
              <Link href="/services#college" className="hover:text-blue-600">
                College Planning
              </Link>
            </li>
            <li>
              <Link href="/services#insurance" className="hover:text-blue-600">
                Insurance Solutions
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Estate Planning
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Investment Management
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>22375 Broderick Dr. S220</li>
            <li>Sterling, VA 20166</li>
            <li>703-346-7372</li>
            <li>rkovvali@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Dharma Financial Services. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
