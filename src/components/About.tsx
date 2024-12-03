import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-black" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transformando histórias em arte
            </h2>
            <p className="text-gray-400 mb-6">
              Desde 2010, Transformando histórias em arte No coração
              do Brasil 
              Nosso estúdio combina técnicas tradicionais com inovação moderna, criando peças únicas que contam a sua história.
            </p>
            <p className="text-gray-400">
              Tudo começou com a vontade
              de criar um espaço onde cada pessoa pudesse expressar sua essência
              por meio de uma tatuagem única, feita com cuidado, respeito e
              técnica apurada. Desde o início, nossa missão sempre foi clara:
              unir a tradição do desenho à inovação do design moderno, criando
              obras que vão além da tinta e se tornam parte da sua história.
              Aqui, cada cliente é tratado como uma tela viva, alguém que confia
              em nós para transformar memórias, ideias ou sentimentos em algo
              eterno. Com uma equipe formada por artistas talentosos e
              experientes, cada um com estilos únicos, garantimos que o seu
              projeto seja tratado com a seriedade e o carinho que merece. Mais
              do que tatuagens, criamos conexões. E cada traço que sai de nossas
              máquinas é o reflexo do respeito e da admiração que temos pela
              arte e por quem confia no nosso trabalho. No Ink & Soul,
              acreditamos que toda tatuagem conta uma história. Qual será a
              próxima?
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80"
              alt="Studio shot 1"
              className="rounded-xl"
            />
          
          </motion.div>
        </div>
      </div>
    </section>
  );
}
