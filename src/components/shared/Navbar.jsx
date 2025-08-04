"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Phone,
  Clock,
  Facebook,
  Linkedin,
  X as TwitterX,
  Instagram,
  ChevronDown,
  Menu,
} from "lucide-react"
import { keyStoneLogo } from "@/assets/images"
import services from "@/data/ServicesData"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState({ projects: false, services: false })

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev)
  const handleNavClick = () => setIsMobileMenuOpen(false)

  const dropdownVariants = {
    initial: { opacity: 0, scale: 0.95, y: -5 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -5 },
  }

  const activeClass = "text-[var(--color-accent)] font-semibold"
  const inactiveClass = "hover:text-[var(--color-accent)] transition-colors"

  return (
    <header className="w-full bg-[var(--color-background)] font-sans shadow-2xl relative z-50">
      {/* Top Bar */}
      <div className="bg-[var(--color-primary)] text-white hidden md:flex text-sm py-2 px-6 justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>keystoneindustries@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 123 456 789</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon - Fri 8:30 - 17:30, Sat - Sun off</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Facebook className="w-4 h-4 cursor-pointer" />
          <Linkedin className="w-4 h-4 cursor-pointer" />
          <TwitterX className="w-4 h-4 cursor-pointer" />
          <Instagram className="w-4 h-4 cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[var(--color-surface)] px-4 md:px-8 py-6 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <NavLink to="/" onClick={handleNavClick}>
            <img src={keyStoneLogo} alt="Keystone Industrial Logo" className="h-10 md:h-12 object-contain" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[var(--color-dark)] font-medium relative">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass}>About</NavLink>

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("projects")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
              Projects <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {openDropdown === "projects" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-0 bg-white shadow-lg ring ring-gray-600 rounded-lg w-44 p-2 z-40"
                >
                  <NavLink to="/projects" className="block px-4 py-2 hover:bg-gray-100 rounded">All Projects</NavLink>
                  <NavLink to="/projects/commercial" className="block px-4 py-2 hover:bg-gray-100 rounded">Commercial</NavLink>
                  <NavLink to="/projects/industrial" className="block px-4 py-2 hover:bg-gray-100 rounded">Industrial</NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {openDropdown === "services" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-0 bg-white shadow-lg ring ring-gray-600 rounded-lg w-56 p-2 z-40"
                >
                  <NavLink to="/services" className="block px-4 py-2 hover:bg-gray-100 rounded">All Services</NavLink>
                  {services.map(service => (
                    <NavLink
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      {service.title}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Blog</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Contact</NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-primary)] transition-colors">
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-[var(--color-dark)]"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[var(--color-surface)] px-4 py-4"
          >
            <nav className="flex flex-col gap-4 text-[var(--color-dark)] font-medium">
              <NavLink to="/" onClick={handleNavClick} className={({ isActive }) => isActive ? activeClass : inactiveClass}>Home</NavLink>
              <NavLink to="/about" onClick={handleNavClick} className={({ isActive }) => isActive ? activeClass : inactiveClass}>About</NavLink>

              {/* Mobile Projects Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDropdown(prev => ({ ...prev, projects: !prev.projects }))}
                  className="flex items-center justify-between w-full"
                >
                  <span className="hover:text-[var(--color-accent)]">Projects</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown.projects ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileDropdown.projects && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 flex flex-col gap-2"
                    >
                      <NavLink to="/projects" onClick={handleNavClick} className={({ isActive }) => isActive ? activeClass : inactiveClass}>All Projects</NavLink>
                      <NavLink to="/projects/commercial" onClick={handleNavClick} className={inactiveClass}>Commercial</NavLink>
                      <NavLink to="/projects/industrial" onClick={handleNavClick} className={inactiveClass}>Industrial</NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDropdown(prev => ({ ...prev, services: !prev.services }))}
                  className="flex items-center justify-between w-full"
                >
                  <span className="hover:text-[var(--color-accent)]">Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown.services ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileDropdown.services && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 flex flex-col gap-2"
                    >
                      <NavLink to="/services" onClick={handleNavClick} className={({ isActive }) => isActive ? activeClass : inactiveClass}>All Services</NavLink>
                      {services.map(service => (
                        <NavLink
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={handleNavClick}
                          className={inactiveClass}
                        >
                          {service.title}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/blog" onClick={handleNavClick} className={({ isActive }) => isActive ? activeClass : inactiveClass}>Blog</NavLink>
              <NavLink to="/contact" onClick={handleNavClick} className={({ isActive }) => isActive ? activeClass : inactiveClass}>Contact</NavLink>

              <button className="mt-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-primary)] transition-colors">
                Get In Touch
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
