"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
        title: "Website CV Online",
        description: "Web CV pribadi secara profesional, responsive dan ringan dengan fitur chatbot AI untuk menjawab pertanyaan pengguna.",
        tech: "React, OpenAI API, Firebase",
        link: "https://husnul-uts.vercel.app",
        image: "/projects/project1.png",
      },
      {
        title: "Portofolio",
        description: "Blog yang berisi portofolio pribadi menggunakan Next.js disertai animasi menggunakan framer-motion.",
        tech: " Next.js, Framer-motion",
        link: "https://husnul-c4.vercel.app",
        image: "/projects/project2.png",
      },
      {
        title: "Master of Ceremony",
        description: "MC Semi Formal dalam kegiatan pelantikan anggota baru Korps Protokol Mahasiswa",
        image: "/projects/project3.jpeg", 
      },
  ];

  return (
    <main className="portfolio-page">
      <motion.h1
        className="portfolio-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Portofolio
      </motion.h1>

      <div className="portfolio-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.2 }}
          >
            <div className="portfolio-image-wrapper">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="portfolio-image"
              />
            </div>
            <h2 className="portfolio-project-title">{project.title}</h2>
            <p className="portfolio-desc">{project.description}</p>
            <p className="portfolio-tech"><strong>Tech:</strong> {project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              🔗 Lihat Proyek
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
