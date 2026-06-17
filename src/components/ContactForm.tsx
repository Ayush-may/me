"use client";

import { useState } from "react";
import { FiSend, FiUser, FiMail, FiCheck } from "react-icons/fi";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please fill in both your name and message.");
      return;
    }

    setIsSubmitted(true);
    setError("");

    const mailtoUrl = `mailto:ayushsharma014may@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

    // Open mailto link
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");

    // Reset submission state after a delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4500);
  };

  return (
    <div className="border border-gray-300 p-6 md:p-8 mt-4 w-full bg-white transition-all duration-300">
      <div className="flex items-center gap-2.5 mb-4 border-b border-gray-100 pb-4">
        <FiMail className="text-gray-800" size={16} />
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-800">Send a Message</span>
      </div>

      <p className="text-xs text-gray-500 mb-6 leading-relaxed">
        Have a project idea, opportunity, or just want to say hello? Drop me a message below. Submitting will launch your local mail client.
      </p>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in-95 duration-300">
          <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-4 bg-gray-50">
            <FiCheck className="text-green-600 animate-bounce" size={24} />
          </div>
          <p className="text-sm font-semibold text-gray-800">Thank You!</p>
          <p className="text-xs text-gray-500 mt-1.5 max-w-xs">
            Opening your email client to finalize and send your message.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                <FiUser size={10} /> Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="border border-gray-300 px-3 py-2.5 text-xs focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 bg-gray-50/30 hover:bg-gray-50/80 focus:bg-white text-gray-800 transition-all placeholder-gray-400 rounded-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                <FiMail size={10} /> Email (Optional)
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="border border-gray-300 px-3 py-2.5 text-xs focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 bg-gray-50/30 hover:bg-gray-50/80 focus:bg-white text-gray-800 transition-all placeholder-gray-400 rounded-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Message
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can I help you?"
              rows={5}
              className="border border-gray-300 px-3 py-2.5 text-xs focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 bg-gray-50/30 hover:bg-gray-50/80 focus:bg-white text-gray-800 transition-all resize-none placeholder-gray-400 rounded-none"
              required
            />
          </div>

          {error && <p className="text-xs text-red-500 font-medium">{error}</p>}

          <button
            type="submit"
            className="text-xs text-white border border-gray-800 bg-gray-800 hover:bg-transparent hover:text-gray-800 active:bg-gray-900 active:text-white px-5 py-3 cursor-pointer flex items-center justify-center gap-2 w-fit transition-all duration-200 uppercase tracking-wider font-semibold rounded-none mt-2"
          >
            <FiSend size={11} /> Send Message
          </button>
        </form>
      )}
    </div>
  );
}
