import { keyStoneLogo } from "@/assets/images"
import { ADDRESS, MOBILE_NUMBER } from "@/config/config"
import services from "@/data/ServicesData"
import { Phone, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import footerImage1 from "@/assets/images/LatestBlog1.jpeg"
import footerImage2 from "@/assets/images/LatestBlog2.jpeg"
import footerImage3 from "@/assets/images/LatestBlog3.jpeg"
import BlogData from "@/data/BlogData"
import React from "react"

export default function Footer() {

  const servicesData = services;

  const latestBlogs = [...BlogData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);


  return (
    <footer className="relative w-full bg-[var(--color-footer-bg)] text-white overflow-hidden">
      {/* Background blueprint pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="https://project.geniusocean.com/roof/assets/images/3689839211687251534.jpg"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      <div className="relative z-10 container pt-20 pb-8">
        {/* Top section - Four columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6">About Us</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              A KeyStone service company provides a range of professional services related to automation and technology.
            </p>
            <div className="mb-6" id="address" name="address">
              <h4 className="text-lg font-semibold mb-2">Our Address</h4>
              <p className="text-gray-300" >
                Door 4 – 6, First Floor, Katoor Road, Papanickenpalayam,<br />
                Coimbatore – 641037, Tamil Nadu, India
              </p>
            </div>

            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
              />
              <button className="bg-[var(--color-secondary)] px-6 py-2 rounded-r-md font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {servicesData.slice(0, 3).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-[var(--color-secondary)]" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to='/' className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[var(--color-secondary)]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[var(--color-secondary)]" /> About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[var(--color-secondary)]" /> Projects
                </Link>
              </li>
              <li>
                <Link to='/services' className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[var(--color-secondary)]" /> Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[var(--color-secondary)]" /> Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <ChevronRight className="w-4 h-4 mr-2 text-[var(--color-secondary)]" /> Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Blog Posts</h3>
            <div className="grid grid-cols-2 gap-4">
              {latestBlogs.map((blog, idx) => (
                <Link to={`/blog/${blog.slug}`} key={idx}>
                  <img
                    src={blog.thumbnailImage}
                    alt={`Blog post thumbnail ${idx + 1}`}
                    className="rounded-md aspect-square object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Middle section - Logo, Phone, Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-b border-gray-400 bg-primary/40 px-10 rounded-2xl mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img src={keyStoneLogo} alt="KeyStone Logo" className="mr-3 w-[160px] rounded-2xl" />
          </div>

          <div className="bg-[var(--color-secondary)] px-8 py-4 rounded-lg flex items-center space-x-4 mb-6 md:mb-0">
            <Phone className="size-12 p-1 rounded text-primary fill-primary bg-white" />
            <a href={`tel:${MOBILE_NUMBER}`}>
              <span className="text-xl font-semibold block">Phone No</span>
              <span className="text-xl font-semibold">{MOBILE_NUMBER}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">Follow Us:</span>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom section - Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">Copyright © {new Date().getFullYear()} Reserved Passion by KeyStone</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms of use
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
