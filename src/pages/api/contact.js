export default function handler(req, res) {
    if (req.method === "POST") {
      const { name, email, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Tous les champs sont obligatoires." });
      }
  
      // Simule l’envoi du message (remplace cette partie par une intégration réelle avec un service d'emailing)
      console.log("Nouveau message reçu :", { name, email, message });
  
      return res.status(200).json({ message: "Message envoyé avec succès !" });
    }
  
    res.status(405).json({ error: "Méthode non autorisée" });
  }
  