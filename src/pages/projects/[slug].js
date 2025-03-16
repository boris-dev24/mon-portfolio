import { useRouter } from "next/router";
import Image from "next/image";
import projects from "@/data/projects.json";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Trouver le projet correspondant au slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-center text-gray-600 mt-20">Projet non trouvé...</p>;
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-900 text-white min-h-screen">
      {/* Titre principal */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-400 transition-all duration-700 ease-in-out">
        {project.title}
      </h1>

      {/* Description du projet */}
      <p className="mt-4 text-lg text-gray-400 text-center max-w-3xl mx-auto">
        {project.description}
      </p>

      {/* Image du projet */}
      <div className="mt-8 flex justify-center">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105"
        />
      </div>

      {/* Détails du projet */}
      <div className="mt-12 max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-gray-100">Détails du projet</h2>
        <p className="text-gray-300">{project.details}</p>

        {/* Technologies utilisées */}
        <h3 className="text-xl font-semibold text-gray-100">Technologies utilisées</h3>
        <ul className="mt-4 flex flex-wrap gap-4">
          {project.technologies.map((tech, index) => (
            <li key={index} className="bg-blue-700 text-blue-100 px-6 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Liens vers GitHub et Démo */}
      <div className="mt-12 flex justify-center gap-6">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105"
        >
          🌍 Voir la Démo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition duration-300 transform hover:scale-105"
        >
          💻 Code Source
        </a>
      </div>
    </div>
  );
}
