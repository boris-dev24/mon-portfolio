import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const skills = [
    "Next.js", "React.js", "React Native", "Node.js", "JavaScript",
    "PHP", "Laravel", "Tailwind CSS", "MongoDB", "MySQL"
  ];

  return (
    <div className="container mx-auto px-6 py-12 text-center bg-gradient-to-r from-blue-900 via-indigo-700 to-black">
      {/* Titre principal */}
      <h1 className={`text-4xl md:text-5xl font-extrabold text-white tracking-wide transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        À propos de <span className="text-blue-400">Moi</span> 💡
      </h1>

      {/* Paragraphe introductif */}
      <p className={`mt-4 text-lg text-white max-w-3xl mx-auto transition-opacity duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        Développeur web passionné par la création d’expériences interactives et performantes.  
        J’adore apprendre, relever des défis et transformer des idées en réalité grâce au code.
      </p>

      {/* Photo de profil avec animation */}
      <div className={`mt-8 flex justify-center transition-all duration-1000 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
        <Image
          src="/images/profile.JPG"
          alt="Photo de profil"
          width={200}
          height={200}
          className="rounded-full shadow-lg transform transition duration-500 hover:scale-105"
        />
      </div>

      {/* Section Expérience */}
      <div className={`mt-12 text-left max-w-4xl mx-auto transition-opacity duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-2xl font-semibold text-white text-center">Expérience & Parcours</h2>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg transition-all duration-300 hover:bg-gray-700">
            <h3 className="text-lg font-bold text-blue-400">🔧 Électrotechnique & Énergies Renouvelables</h3>
            <p className="text-white">
              J’ai débuté dans l’installation électrique domestique et industrielle, ainsi que dans l’étude et l’installation de systèmes photovoltaïques.
            </p>
          </div>
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg transition-all duration-300 hover:bg-gray-700">
            <h3 className="text-lg font-bold text-blue-400">💻 Transition vers le Développement Web</h3>
            <p className="text-white">
              En 2025, j’ai fait le choix de me réorienter vers le développement web, alliant créativité et logique pour créer des solutions interactives.
            </p>
          </div>
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg transition-all duration-300 hover:bg-gray-700">
            <h3 className="text-lg font-bold text-blue-400">🚀 Développement Full Stack</h3>
            <p className="text-white">
              Aujourd’hui, je travaille principalement avec **Next.js, React, Node.js, et Laravel** pour concevoir des applications modernes et performantes.
            </p>
          </div>
        </div>
      </div>

      {/* Section des compétences */}
      <div className={`mt-12 transition-opacity duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-2xl font-semibold text-white">Compétences Techniques</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl text-lg font-semibold shadow-lg text-center transform transition duration-300 hover:scale-105">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Bouton pour télécharger le CV */}
      <div className={`mt-12 transition-opacity duration-1000 delay-900 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <a
          href="/Boris_Ngoko_CV.pdf"
          download
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-xl rounded-lg shadow-lg hover:bg-blue-700 transform transition duration-300 hover:scale-105"
        >
          📄 Télécharger mon CV
        </a>
      </div>
    </div>
  );
}
