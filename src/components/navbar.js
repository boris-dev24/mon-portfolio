import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icônes pour ouvrir/fermer le menu

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Boris Ngoko 🚀
        </Link>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 text-3xl md:hidden focus:outline-none"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu (visible sur desktop, caché sur mobile) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-primary transition">
              À Propos
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-700 hover:text-primary transition">
              Projets
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu déroulant mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="text-gray-700 hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>
                À Propos
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-700 hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>
                Projets
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
