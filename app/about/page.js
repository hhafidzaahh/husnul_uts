"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="about-page">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tentang Saya
      </motion.h1>

      <div className="about-sections">
        {/* Pendidikan */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="about-heading">🎓 Pendidikan</h2>
          <ul>
          <li> 2023 - Sekarang | Universitas Ma'soem | Komputerisasi Akuntansi </li>
            <li> 2019 - 2022 | Madrasah Aliyah Negeri 2 Bandung </li>
            <li> 2016 - 2019 | SMP Negeri 1 Solokanjeruk  </li>
          </ul>
        </motion.div>

        {/* Pengalaman */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="about-heading">💼 Pengalaman</h2>
          <ul>
            <li>Februari 2025 - Sekarang | Badan Eksekutif Mahasiswa | Sekretaris Kementrian</li>
            <li>Maret 2024 - Sekarang | Korps Protokol Mahasiswa | PSDM</li>
            <li>Juli - Agustus 2024 | Karang Taruna | PDD</li>
          </ul>
        </motion.div>

        {/* Skill */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="about-heading">🛠️ Skill</h2>
          <ul>
           <li>Event Hosting / Master of Ceremony</li>
            <li>Microsoft Office (Word & Excel)</li>
            <li>Web Development</li>
            <li>Content Creation</li>
            <li>Teamwork</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}

