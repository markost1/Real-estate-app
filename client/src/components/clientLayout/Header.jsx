import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
    <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              {/* Logo / Title */}
              <Link to="/" className="text-2xl font-bold text-gray-600">
                  RealEstate
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden md:flex gap-6">
                  <Link to="/sell" className="text-gray-700 hover:text-blue-600">Sell</Link>
                  <Link to="/rent" className="text-gray-700 hover:text-blue-600">Rent</Link>
                  <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
                  <Link to="/team" className="text-gray-700 hover:text-blue-600">Team</Link>
                  <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>

              {/* Mobile Hamburger */}
              <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
              <nav className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t">
                  <Link to="/sell" className="text-gray-700 hover:text-blue-600">Sell</Link>
                  <Link to="/rent" className="text-gray-700 hover:text-blue-600">Rent</Link>
                  <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
                  <Link to="/team" className="text-gray-700 hover:text-blue-600">Team</Link>
                  <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
          )}
      </header><Outlet />
      </>
  );
};

export default Header;

