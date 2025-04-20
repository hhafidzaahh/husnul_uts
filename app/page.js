'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Foto */}
        <motion.div
          className="w-60 h-80 relative shadow-xl rounded-xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/profile.jpg"
            alt="Foto Husnul Hapidah"
            fill
            className="object-cover rounded-xl"
          />
        </motion.div>

        {/* Teks */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl text-center font-bold mb-4">Husnul Hapidah</h2>
          <p className="text-1xl text-center max-w-md">
          Saya mahasiswa Program Studi Komputerisasi Akuntansi di Ma'soem University yang memiliki ketertarikan besar dalam bidang pengembangan web. 
          Saya aktif mengembangkan potensi diri melalui keterlibatan dalam organisasi serta pembelajaran teknologi terkini. Saya memiliki minat dalam merancang dan membangun website yang modern, interaktif, dan fungsional. 
          Dengan komitmen untuk terus meningkatkan kemampuan teknis dan pemahaman dalam dunia pemrograman, saya bertekad untuk mendukung perkembangan karier di bidang teknologi informasi.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
