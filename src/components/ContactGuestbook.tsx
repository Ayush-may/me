"use client";

import { useState, useEffect } from "react";
import { FiSend, FiBookOpen, FiUser, FiMail, FiCheck, FiMessageSquare } from "react-icons/fi";

interface GuestbookEntry {
  id: string;
  name: string;
  email?: string;
  message: string;
  timestamp: string;
}

const DEFAULT_ENTRIES: GuestbookEntry[] = [
  {
    id: "1",
    name: "Alex Rivera",
    message: "Absolutely love the clean aesthetic of your portfolio, Ayush! The typing effect is a super nice touch. 🚀",
    timestamp: "2 days ago",
  },
  {
    id: "2",
    name: "Sarah Chen",
    message: "Great work on the full-stack projects! Your GitHub contribution graph looks amazing. Keep it up!",
    timestamp: "1 week ago",
  },
];

export function ContactGuestbook() {
  const [activeTab, setActiveTab] = useState<"contact" | "guestbook">("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Load entries from localStorage on client-side mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_guestbook");
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        setEntries(DEFAULT_ENTRIES);
      }
    } else {
      setEntries(DEFAULT_ENTRIES);
      localStorage.setItem("portfolio_guestbook", JSON.stringify(DEFAULT_ENTRIES));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please fill in both your name and message.");
      return;
    }

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim() || undefined,
      message: message.trim(),
      timestamp: "Just now",
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("portfolio_guestbook", JSON.stringify(updatedEntries));

    setIsSubmitted(true);
    setError("");

    // If activeTab is contact, we can also offer email sending trigger
    if (activeTab === "contact") {
      const mailtoUrl = `mailto:ayushsharma014may@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      // Open mailto link in a brief moment to let user complete email action
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 800);
    }

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");

    // Reset submission state after a delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  // Get initials for avatar placeholder
  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "?";
  };

  return (
    <div className="border border-gray-300 p-5 mt-2 w-full transition-all duration-300">
      {/* Header Tabs */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-6">
        <div className="flex items-center gap-2">
          <FiMessageSquare className="text-gray-700" size={18} />
          <p className="text-md font-semibold text-gray-800">Get in Touch</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setActiveTab("contact");
              setError("");
            }}
            className={`text-xs px-2.5 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === "contact"
              ? "bg-gray-800 text-white border-gray-800 font-medium"
              : "text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
          >
            <FiMail size={12} /> Contact
          </button>
          <button
            onClick={() => {
              setActiveTab("guestbook");
              setError("");
            }}
            className={`text-xs px-2.5 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === "guestbook"
              ? "bg-gray-800 text-white border-gray-800 font-medium"
              : "text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
          >
            <FiBookOpen size={12} /> Guestbook
          </button>
        </div>
      </div>

      {activeTab === "contact" ? (
        <div>
          <p className="text-xs text-gray-600 mb-4 leading-relaxed">
            Have a question, proposal, or project in mind? Send me a message below. Submitting will also launch your local mail client.
          </p>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mb-3 bg-gray-50">
                <FiCheck className="text-green-600" size={20} />
              </div>
              <p className="text-sm font-semibold text-gray-800">Message sent successfully!</p>
              <p className="text-xs text-gray-500 mt-1">Opening your mail client to complete the send...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs text-gray-700 font-medium flex items-center gap-1">
                    <FiUser size={12} /> Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="border border-gray-300 p-2 text-xs focus:outline-none focus:border-gray-800 bg-white text-gray-800"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs text-gray-700 font-medium flex items-center gap-1">
                    <FiMail size={12} /> Email (Optional)
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="border border-gray-300 p-2 text-xs focus:outline-none focus:border-gray-800 bg-white text-gray-800"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can I help you?"
                  rows={4}
                  className="border border-gray-300 p-2 text-xs focus:outline-none focus:border-gray-800 bg-white text-gray-800 resize-none"
                  required
                />
              </div>

              {error && <p className="text-xs text-red-500">{error}</p>}

              <button
                type="submit"
                className="text-xs text-gray-700 border border-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-800 active:text-white p-2.5 cursor-pointer flex items-center justify-center gap-2 w-fit transition-colors mt-1"
              >
                <FiSend size={12} /> Send Message
              </button>
            </form>
          )}
        </div>
      ) : (
        <div>
          <p className="text-xs text-gray-600 mb-4 leading-relaxed">
            Leave a public message or greeting in my guestbook! Your message will be saved locally.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6 p-4 bg-gray-50/50 border border-gray-200">
            <p className="text-xs font-semibold text-gray-700 mb-1">Sign the Guestbook</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="border border-gray-300 p-2 text-xs focus:outline-none focus:border-gray-800 bg-white text-gray-800"
                required
              />
              <button
                type="submit"
                className="text-xs text-gray-700 border border-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-800 active:text-white p-2 cursor-pointer flex items-center justify-center gap-2 transition-colors"
              >
                Sign Guestbook
              </button>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a message..."
              rows={2}
              className="border border-gray-300 p-2 text-xs focus:outline-none focus:border-gray-800 bg-white text-gray-800 resize-none"
              required
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
          </form>

          {/* Guestbook List */}
          <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-1">
            {entries.length === 0 ? (
              <p className="text-xs text-gray-500 text-center py-4">No messages yet. Be the first to sign!</p>
            ) : (
              entries.map((entry) => (
                <div key={entry.id} className="flex gap-3 text-xs border border-gray-200 p-3 bg-white">
                  <div className="w-8 h-8 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-700 shrink-0 select-none">
                    {getInitials(entry.name)}
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">{entry.name}</span>
                      <span className="text-[10px] text-gray-400">{entry.timestamp}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-light">{entry.message}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
