"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import ikon

export default function Contact() {
  const [comments, setComments] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [ratingName, setRatingName] = useState("");
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch("/api/db")
      .then(res => res.json())
      .then(data => {
        setComments(data.comments || []);
        setRatings(data.ratings || []);
      });
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ name, comment }),
    });
    setComments([...comments, { name, comment }]);
    setName("");
    setComment("");
  };

  const handleRatingSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/ratings", {
      method: "POST",
      body: JSON.stringify({ name: ratingName, stars }),
    });
    setRatings([...ratings, { name: ratingName, stars }]);
    setRatingName("");
    setStars(0);
  };

  const averageRating = ratings.length
    ? (ratings.reduce((sum, r) => sum + r.stars, 0) / ratings.length).toFixed(1)
    : "0.0";

  return (
    <main className="contact-container">
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hubungi Saya
      </motion.h1>

      <section className="contact-info">
  <h2>Kontak Saya</h2>

  <div className="contact-item">
    <FaEnvelope className="contact-icon" />
    <a href="mailto:hafidahhusnul@gmail.com" target="_blank" rel="noopener noreferrer">
      hafidahhusnul@gmail.com
    </a>
  </div>

  <div className="contact-item">
    <FaInstagram className="contact-icon" />
    <a href="https://instagram.com/hhafidzaahh" target="_blank" rel="noopener noreferrer">
      @hhafidzaahh
    </a>
  </div>

  <div className="contact-item">
    <FaWhatsapp className="contact-icon" />
    <span>+62 895-3154-8069</span>
  </div>
</section>


      <section className="comment-form">
        <h2>Komentar</h2>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Nama kamu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Tulis komentar kamu di sini…"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button type="submit">Kirim Komentar</button>
        </form>
        <div className="comment-list">
          {comments.map((c, idx) => (
            <div key={idx}>
              <strong>{c.name}</strong>: {c.comment}
            </div>
          ))}
        </div>
      </section>

      <section className="rating-form">
        <h2>Rating</h2>
        <p>
          Rating {averageRating} (from {ratings.length} voters)
        </p>
        <form onSubmit={handleRatingSubmit}>
          <input
            type="text"
            placeholder="Nama kamu"
            value={ratingName}
            onChange={(e) => setRatingName(e.target.value)}
            required
          />
          <div className="stars">
            {[1, 2, 3, 4, 5].map((s) => (
              <span
                key={s}
                onClick={() => setStars(s)}
                style={{ cursor: "pointer", color: stars >= s ? "gold" : "#ccc" }}
              >
                ★
              </span>
            ))}
          </div>
          <button type="submit">Kirim Rating</button>
        </form>
      </section>
    </main>
  );
}
