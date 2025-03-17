import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Tous les champs sont obligatoires !");
      return;
    }

    setErrorMessage(""); // Reset de l'erreur

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("Une erreur est survenue. Essayez à nouveau.");
      }
    } catch (error) {
      setErrorMessage("Impossible d'envoyer le message.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-lg bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-400 text-center animate__animated animate__fadeIn">
        📩 Me Contacter
      </h1>
      <p className="mt-4 text-lg text-gray-400 text-center">
        Une question ? Un projet ? N’hésitez pas à me contacter via ce formulaire.
      </p>

      {/* Affichage des messages de succès ou d'erreur */}
      {successMessage && (
        <p className="mt-4 text-green-500 text-center animate__animated animate__fadeIn">
          {successMessage}
        </p>
      )}
      {errorMessage && (
        <p className="mt-4 text-red-500 text-center animate__animated animate__fadeIn">
          {errorMessage}
        </p>
      )}

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Envoyer 
        </button>
      </form>
    </div>
  );
}
