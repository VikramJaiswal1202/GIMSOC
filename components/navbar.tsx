"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navItems = [
    {
      title: "About Us",
      href: "",
      submenu: [
        { title: "Our History", href: "/about/history" },
        { title: "Achievements", href: "/about/achievements" },
        { title: "What We Offer (Students & Doctors)", href: "/about/offer" },
        { title: "Our Mission & Values", href: "/about/mission" },
      ],
    },
    {
      title: "Membership",
      href: "",
      submenu: [
        { title: "How to Join", href: "/membership/join" },
        { title: "Benefits", href: "/membership/benefits" },
        { title: "Pricing", href: "/membership/pricing" },
      ],
    },
    {
      title: "Events & Workshops",
      href: "",
      submenu: [
        { title: "Summer Semester 2025", href: "/events/summer-2025" },
        { title: "Winter Semester", href: "/events/winter" },
        { title: "Event Descriptions", href: "/events/descriptions" },
        { title: "Speaker Info", href: "/events/speaker-info" },
      ],
    },
    {
      title: "Research",
      href: "",
      submenu: [
        { title: "Research Portfolio", href: "/research/portfolio" },
        { title: "Research Events & Collaborations", href: "/research/events" },
      ],
    },
    {
      title: "MedCon",
      href: "",
      submenu: [
        { title: "MedCon 2023", href: "/medcon/2023" },
        { title: "MedCon 2024", href: "/medcon/2024" },
        { title: "MedCon 2025", href: "/medcon/2025" },
        { title: "Photo Gallery", href: "/medcon/gallery" },
      ],
    },
    {
      title: "Alumni",
      href: "",
      submenu: [
        { title: "Mentor-Mentee Programme", href: "/alumni/mentor-mentee" },
        { title: "Postgraduate Programme", href: "/alumni/postgraduate" },
      ],
    },
    {
      title: "Affiliates",
      href: "",
      submenu: [
        { title: "Academic Partners", href: "/affiliates/academic" },
        { title: "Media Partners", href: "/affiliates/media" },
        { title: "Organisational Partners", href: "/affiliates/organisational" },
      ],
    },
    {
      title: "Meet the Team",
      href: "",
      submenu: [
        { title: "Leadership", href: "/team/leadership" },
        { title: "Department Heads", href: "/team/department-heads" },
        { title: "Staff Directory", href: "/team/staff-directory" },
      ],
    },
  ]

  const toggleDropdown = (index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index))
  }

  return (
    <nav className="bg-white text-black shadow-lg w-full">
      <div className="w-full px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section (centered on mobile, left-aligned on large screens) */}
          <div className=" flex  items-center">
            <Link href="/">
              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <Image
                  src="/gimsoc_logo.svg"
                  alt="Gimsoc"
                  width={300}
                  height={200}
                  className="rounded-lg w-50 relative left-[-20px]"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center space-x-4"
            ref={dropdownRef}
          >
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="px-4 py-3 rounded-md text-sm font-medium text-black hover:bg-logo hover:text-white transition duration-300 flex items-center"
                >
                  {item.title}
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute z-10 mt-1 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-300 origin-top ${
                    activeDropdown === index
                      ? "opacity-100 scale-y-100"
                      : "opacity-0 scale-y-0 pointer-events-none"
                  }`}
                >
                  <div className="py-1">
                    {item.submenu.map((subitem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-black hover:bg-logo hover:text-white transition duration-200"
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-md text-black hover:bg-sky-200 hover:text-white focus:outline-none transition duration-300"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex justify-between items-center px-4 py-3 rounded-md text-base font-medium text-black hover:bg-sky-200 hover:text-white transition duration-300"
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Dropdown */}
                <div
                  className={`transition-all duration-300 overflow-hidden bg-gray-50 rounded-md mt-1 ${
                    activeDropdown === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {item.submenu.map((subitem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subitem.href}
                      className="block px-6 py-2 text-sm text-black hover:bg-sky-200 hover:text-white transition duration-200"
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
 