import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-zinc-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Entre em Contato
            </h2>
            <p className="text-gray-400 mb-8">
              Pronto para começar sua jornada de tatuagem? Entre em contato para consultas e agendamentos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-red-500" />
                <span>123 Ink Street, Artville, AV 12345</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-red-500" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-red-500" />
                <span>info@inkandsoul.com</span>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full px-4 py-3 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Seu Email"
              className="w-full px-4 py-3 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Sua Mensagem"
              rows={4}
              className="w-full px-4 py-3 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
