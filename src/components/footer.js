import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <footer className={`bg-gray-800 text-white py-6 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio - Tous droits réservés.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
