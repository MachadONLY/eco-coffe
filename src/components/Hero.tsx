import React from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            INK & SOUL
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 text-center max-w-2xl">
            Onde Arte Encontra a Pele | Estúdio de Tatuagem Premium
          </p>
      
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Conheça Nossas Tattoos
          </button>
          
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
}
