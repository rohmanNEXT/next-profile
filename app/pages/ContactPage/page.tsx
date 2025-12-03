"use client";

import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Globe,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useThemeStore, getReadableTextColor } from "../../Libs/themeStore";

export default function ContactPage() {
  const getColor = useThemeStore((s) => s.getColor);
  useThemeStore((s) => s.primaryColor);
  useThemeStore((s) => s.themeMode);
  useThemeStore((s) => s.a11yMode);

  const primary = getColor("primary");
  const onPrimary = getReadableTextColor(primary);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const subject = `New message from ${formData.name}`;
    const body = `
Name : ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const mailto = `mailto:bluekraken9999@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "blueKraken@gmail.com",
      href: "mailto:blueKraken@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "085646831030",
      href: "tel:085646831030",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kaltim, Samarinda Kota",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/rohmanNEXT" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-rachman-7b61b3276/",
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "https://rohmannextdevloper.com",
    },
  ];

  return (
    <div
      className="min-h-screen p-6 md:pl-32 py-16 pb-24 md:pb-16"
      style={{ background: getColor("background") }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h1
            className="text-4xl md:text-5xl text-center mb-6 pt-12"
            style={{ color: getColor("text") }}
          >
            Get In Touch
          </h1>
          <div
            className="w-24 h-1 rounded-full mx-auto mb-6"
            style={{ background: getColor("primary") }}
          />

          <p
            className="text-center mb-16 max-w-2xl mx-auto"
            style={{ color: getColor("textSecondary") }}
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-8 rounded-2xl"
              style={{
                background: getColor("cardBg"),
                border: `1px solid ${getColor("border")}`,
              }}
            >
              <h2
                className="text-2xl mb-6"
                style={{ color: getColor("text") }}
              >
                Send Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-sm mb-2"
                    style={{ color: getColor("textSecondary") }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                    style={{
                      background: getColor("surface"),
                      border: `1px solid ${getColor("border")}`,
                      color: getColor("text"),
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-2"
                    style={{ color: getColor("textSecondary") }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                    style={{
                      background: getColor("surface"),
                      border: `1px solid ${getColor("border")}`,
                      color: getColor("text"),
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-2"
                    style={{ color: getColor("textSecondary") }}
                  >
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none resize-none"
                    style={{
                      background: getColor("surface"),
                      border: `1px solid ${getColor("border")}`,
                      color: getColor("text"),
                    }}
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={{
                    background: primary,
                    color: onPrimary,
                  }}
                >
                  <Send size={18} strokeWidth={1.5} />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Details */}
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: getColor("cardBg"),
                  border: `1px solid ${getColor("border")}`,
                }}
              >
                <h2
                  className="text-2xl mb-6"
                  style={{ color: getColor("text") }}
                >
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: getColor("surface"),
                        border: `1px solid ${getColor("border")}`,
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: getColor("primary") + "20" }}
                      >
                        <info.icon
                          size={18}
                          style={{ color: getColor("primary") }}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <div
                          className="text-sm mb-1"
                          style={{ color: getColor("textSecondary") }}
                        >
                          {info.label}
                        </div>
                        <div
                          className="text-base"
                          style={{ color: getColor("text") }}
                        >
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: getColor("cardBg"),
                  border: `1px solid ${getColor("border")}`,
                }}
              >
                <h2
                  className="text-xl mb-6"
                  style={{ color: getColor("text") }}
                >
                  Connect With Me
                </h2>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                      style={{
                        background: getColor("surface"),
                        border: `1px solid ${getColor("border")}`,
                      }}
                    >
                      <social.icon
                        size={20}
                        style={{ color: getColor("primary") }}
                        strokeWidth={1.5}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
