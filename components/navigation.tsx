"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Townsend Medical Services Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="hidden sm:block text-lg sm:text-xl font-bold text-gray-900 truncate">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 xl:space-x-4">
              <Link
                href="/"
                className="text-gray-900 hover:text-emerald-300 px-2 xl:px-3 py-2 text-sm font-medium whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-emerald-300 px-2 xl:px-3 py-2 text-sm font-medium whitespace-nowrap"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-emerald-300 px-2 xl:px-3 py-2 text-sm font-medium whitespace-nowrap"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-emerald-300 px-2 xl:px-3 py-2 text-sm font-medium whitespace-nowrap"
              >
                Contact
              </Link>
              <Link
                href="/how-to-apply"
                className="text-gray-900 hover:text-emerald-300 px-2 xl:px-3 py-2 text-sm font-medium whitespace-nowrap"
              >
                How to Apply
              </Link>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-emerald-300 hover:bg-emerald-400 text-white text-sm px-3 py-2 whitespace-nowrap"
              asChild
            >
              <a
                href="https://www.valant.io/prospectivepatient/TownsendMedicalServicesPLLC"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Here
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="h-10 w-10">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-emerald-300 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-emerald-300 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-emerald-300 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-emerald-300 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/how-to-apply"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-emerald-300 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                How to Apply
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-emerald-300 hover:bg-emerald-400 text-white" asChild>
                  <a
                    href="https://www.valant.io/prospectivepatient/TownsendMedicalServicesPLLC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Here
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
