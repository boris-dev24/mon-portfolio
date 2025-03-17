import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects.json";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 relative w-full min-h-screen bg-gradient-to-b from-black to-blue-900 bg-opacity-80">
      {/* Titre principal */}
      <h1 className={`text-4xl md:text-5xl font-extrabold text-white text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        Mes <span className="text-blue-500">Projets</span> 
      </h1>
      <p className={`mt-4 text-lg text-white text-center max-w-2xl mx-auto transition-opacity duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        Voici quelques projets sur lesquels j’ai travaillé récemment. Cliquez sur un projet pour en savoir plus !
      </p>

      {/* Grille des projets */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.slug}`} 
            className="block bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 hover:opacity-90"
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-all transform hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
