import React from "react";
import { motion } from "framer-motion";

// Importando as imagens corretamente
import tattoo from "../assets/tattoo.svg";
import piercing from "../assets/piercing.svg";
import removal from "../assets/rmoval.svg";

const services = [
  { title: "Tatuagem Customizada", image: tattoo },
  { title: "Piercing Profissional", image: piercing },
  { title: "Remoção a Laser", image: removal },
];

export default function Services() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden h-80" // Altura ajustável para cada card
            whileHover={{ scale: 1.05 }} // Animação ao passar o mouse
          >
            {/* Fundo com imagem */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 scale-105 group-hover:scale-100"
            />

            {/* Overlay e título */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 opacity-100 group-hover:opacity-0">
              <h3 className="text-white text-2xl font-bold uppercase">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
