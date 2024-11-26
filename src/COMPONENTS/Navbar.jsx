import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center">
        <div className="md:mr-4 flex justify-between w-full">
          {/* Logo */}
          <a href="#" className="mr-6 flex items-center space-x-2">
            <h3 className="font-semibold text-xl pl-6">Rahul Yadav</h3>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                activeClass="border-b-2 border-black"
                spy={true}
                smooth={true}
                duration={500}
                className="transition-all duration-300 hover:text-black text-foreground/60 cursor-pointer pb-1"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 bg-white shadow-lg rounded-md">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                activeClass="border-b-2 border-black"
                spy={true}
                smooth={true}
                duration={500}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-black cursor-pointer"
                onClick={() => setMobileMenuOpen(false)} // Close menu when a link is clicked
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
