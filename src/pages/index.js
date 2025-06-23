import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [typingText, setTypingText] = useState("");
  const fullText = "Salut, je suis Boris Ngoko ";

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
    setTimeout(() => setIsSkillsVisible(true), 1000);

    let i = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const images = [
    { image: '/images/nextjs-dashboard.jpg', Title: 'dashboard'},
    { image: '/images/monPortfolio.jpg', Title: 'Monportfolio'},
    { image: '/images/ecopartage.jpg', Title: 'Ecopartage'}
  ];

  const skills = [
    { name: "HTML", icon: "" },
    { name: "CSS", icon: "" },
    { name: "JavaScript", icon: "" },
    { name: "React.js", icon: "" },
    { name: "Next.js", icon: "" },
    { name: "Node.js", icon: "" },
    { name: "Tailwind CSS", icon: "" },
    { name: "MongoDB", icon: "" },
    { name: "Git & GitHub", icon: "" }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-900 via-indigo-700 to-purple-700">
      {/* Background full screen */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/bur3.jpg')", height: "100vh", width: "100vw" }}
      >
        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Contenu principal centré */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-white">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center transition-all duration-1000 transform">
          
          {/* Image de profil */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <Image 
              src="/images/profile.JPG" 
              alt="Photo de profil de Boris Ngoko" 
              width={200} 
              height={200} 
              className="rounded-full shadow-lg transform transition duration-500 hover:scale-110"
            />
          </div>

          {/* Texte de présentation */}
          <div className="w-full md:w-2/3 p-10 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg transform transition duration-1000 hover:scale-105">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
              {typingText}
              <span className="text-yellow-400">|</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed transition-opacity duration-1000 delay-500">
              Développeur web passionné, avec un parcours atypique alliant électrotechnique et énergies renouvelables.  
              Aujourd’hui, j’allie rigueur technique et créativité pour concevoir des solutions web performantes et intuitives.
            </p>

            <div className="mt-6">
              <Link href="/projects" className="px-6 py-3 bg-yellow-500 text-white text-lg rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105 hover:shadow-xl">
                Voir mes projets 
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 🌟 SECTION COMPÉTENCES 🌟 */}
      <div className={`relative mt-16 w-full max-w-4xl transition-all duration-1000 transform ${isSkillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Compétences Techniques</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div key={index} className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md flex items-center space-x-3 transition duration-500 hover:scale-105 transform ${isSkillsVisible ? `opacity-100 translate-y-0 delay-${index * 200}` : "opacity-0 translate-y-10"}`}>
              <span className="text-3xl">{skill.icon}</span>
              <span className="font-semibold text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🌟 SECTION IMAGES 🌟 */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Quelques Réalisations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <Image src={src.image} alt={`Projet ${index + 1}`} width={400} height={250} className="w-full h-auto object-cover" />
              <div className="text-center mt-2 text-white">{src.Title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
