import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../../supabaseClient";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Automatically clear messages after 2 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 2000);

      return () => clearTimeout(timer); // cleanup if component unmounts
    }
  }, [error, success]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // Basic validation
    if (![name, phone, email, message].every(Boolean)) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from("contacts")
        .insert([{ name, phone, email, message }]);

      if (error) throw error;

      setSuccess("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <motion.form
        className="bg-gradient-to-b from-[#f7f7ff] to-[#e6e6ff] text-[#050507] rounded-2xl px-4 py-8 md:p-12 shadow-md border border-transparent w-full flex flex-col gap-6"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight mb-2">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#050507]"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#050507]"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#050507]"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#050507] resize-none h-32"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`mt-4 self-start font-semibold rounded-lg px-6 py-3 transition-colors duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-[#050507] text-[#f7f7ff] hover:bg-[#333]"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}
      </motion.form>
    </div>
  );
};

export default ContactForm;
