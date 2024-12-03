import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

const artists = [
  {
    name: "Alex Rivers",
    specialty: "Realismo em Preto e Cinza",
    experience: "10+ anos",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    instagram: "#",
    email: "alex@inkandsoul.com"
  },
  {
    name: "Sarah Chen",
    specialty: "Tradicional Japonês",
    experience: "8 anos",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    instagram: "#",
    email: "sarah@inkandsoul.com"
  },
  {
    name: "Marcus Rodriguez",
    specialty: "Realismo Colorido",
    experience: "12 anos",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80",
    instagram: "#",
    email: "marcus@inkandsoul.com"
  },
  {
    name: "Emma Thompson",
    specialty: "Neo-Tradicional",
    experience: "7 anos",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    instagram: "#",
    email: "emma@inkandsoul.com"
  }
];

export default function Artists() {
  return (
    <section className="py-20 bg-zinc-900" id="artists">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Conheça Nossos Artistas
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black rounded-lg overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
                <p className="text-red-500 mb-1">{artist.specialty}</p>
                <p className="text-gray-400 text-sm mb-4">{artist.experience} de experiência</p>
                <div className="flex space-x-4">
                  <a href={artist.instagram} className="text-gray-400 hover:text-red-500 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${artist.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
