import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  
  "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80",
  
  "https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&q=80",

];

export default function Gallery() {
  return (
    <section className="py-20 bg-black" id="gallery">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Nosso Trabalho
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img 
                src={image}
                alt={`Tattoo work ${index + 1}`}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}