"use client";
import { useThemeStore, getReadableTextColor } from "../../Libs/themeStore";
import { motion } from "motion/react";
import { Github, Linkedin, Globe, User, Award, Briefcase } from "lucide-react";
import { FolderKanban, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export default function HomePage() {
  const getColor = useThemeStore((s) => s.getColor);

  // subscribe supaya re-render saat theme berubah
  useThemeStore((s) => s.primaryColor);
  useThemeStore((s) => s.themeMode);
  useThemeStore((s) => s.a11yMode);

  const primary = getColor("primary");
  const onPrimary = getReadableTextColor(primary);
  
  
const [imageError, setImageError] = useState(false);
const profileImage = ""; // kosong

const hasImage = Boolean(profileImage?.trim()) && !imageError;

   return (
    <div
      className="min-h-screen flex items-center justify-center p-6 md:pl-32 pb-36 md:pb-6 pt-40"
      style={{ background: getColor("background") }}
    >
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="
        relative
        w-32 h-32
        sm:w-40 sm:h-40
        md:w-56 md:h-56
        lg:w-64 lg:h-64
        rounded-full mb-8
        flex items-center justify-center
        overflow-hidden
      "
            style={{
              background: getColor("cardBg"),
              border: `2px solid ${getColor("border")}`,
            }}
          > 
            {hasImage ? (
              <Image
                src={profileImage}
                alt=".. "
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 224px"
              />
            ) : (
              <User
                size={56}
                style={{ color: getColor("primary") }}
                strokeWidth={1.5}
              />
            )}
          </motion.div>
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl mb-3"
            style={{ color: getColor("text") }}
          >
            Muhammad Rachman
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg mb-6"
            style={{ color: getColor("textSecondary") }}
          >
            <div
              className="md:text-lg mb-3 flex items-center justify-center gap-2"
              style={{ color: getColor("primary") }}
            >
              <Briefcase size={18} strokeWidth={1.5} />
            Full Stack Web Developer
            </div>

          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base max-w-xl mb-8 leading-relaxed"
            style={{ color: getColor("textSecondary") }}
          >
           Menciptakan pengalaman digital yang elegan dengan teknologi modern. Spesialisasi dalam membangun aplikasi web yang responsif dan berpusat pada pengguna.
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col items-center gap-4 mb-8"
          >
            {/* Top Row */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => (window.location.href = "/pages/ProjectPage")}
                className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm flex items-center gap-2"
                style={{
                  background: primary,
                  color: onPrimary,
                }}
              >
                <FolderKanban size={18} strokeWidth={1.5} />
                <span>My Project</span>
              </button>

              {/* Download CV */}
              <button
               onClick={() =>
                  window.open(
                    "/",
                    "_blank"
                  )} 
                className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                style={{
                  background: getColor("cardBg"),
                  border: `1px solid ${getColor("border")}`,
                  color: getColor("text"),
                }}
              >
                Download CV
              </button>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* WhatsApp */}
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/6285646831030?text=Hi%20I%20want%20to%20discuss%20a%20project",
                    "_blank"
                  )
                }
                className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                style={{
                  // background: "#25D366",
                  //  color: getReadableTextColor("#25D366"),
                  background: getColor("surface"),
                  border: `1px solid ${getColor("border")}`,
                  color: getColor("text"),
                }}
              >
                Contact via WhatsApp
              </button>

              <button
                onClick={() => (window.location.href = "/pages/ContactPage")}
                className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm flex items-center gap-2"
                style={{
                  background: primary,
                  color: onPrimary,
                }}
              >
                <Mail size={18} strokeWidth={1.5} />
                <span>Contact Me</span> 
              </button> 
             
            </div>
             <button
                onClick={() => (window.location.href = "/pages/ExperiencePage")}
                className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm flex items-center gap-2"
                style={{
                  background: primary,
                  color: onPrimary,
                }}
              >
                <Briefcase size={18} strokeWidth={1.5} />
                <span>Work Experience</span>
              </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-3"
          >
            {[
              { icon: Github, href: "https://github.com/rohmanNEXT" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-rachman-7b61b3276/" },
              { icon: Globe, href: "Rohmannextdevloper.com" },
            ].map((social, index) => (
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
