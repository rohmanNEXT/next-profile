"use client";

import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { useThemeStore, getReadableTextColor } from "../../Libs/themeStore";
import { motion } from "motion/react";

export default function Projects() {
  const getColor = useThemeStore((s) => s.getColor);
  const primary = getColor("primary");
  const onPrimary = getReadableTextColor(primary);

  const projects = [
    {
      title: "Lunoevent.com Platform",
      description:
        "Platform pemesanan dan pengelolaan event lengkap dengan sistem pembayaran, dashboard admin, dan manajemen tiket real-time.",
      tags: ["Fullstack", "Frontend", "Backend"],
      image: "event booking platform",
      codeUrl: "https://github.com/rohmanNEXT/LunoEvent",
      demoUrl: "http://hallo-4672.my.id",
    },
    {
      title: "My Profile v.1.0",
      description:
        "Website portfolio pribadi untuk menampilkan pengalaman, proyek, dan kontak dengan desain responsif.",
      tags: ["Frontend"],
      image: "developer portfolio",
      codeUrl: "https://github.com/rohmanNEXT/myProfile",
      demoUrl: "https://my-profile-now.vercel.app/",
    },
    {
      title: "evently.com CMS",
      description:
        "Sistem manajemen konten (CMS) untuk pengelolaan event dan publikasi informasi secara dinamis.",
      tags: ["Frontend"],
      image: "cms platform",
      codeUrl: "https://github.com/rohmanNEXT/EventlyCms",
      demoUrl: "https://evently-cms.vercel.app/",
    },
    {
      title: "Yayasan Mangrove - YML Template",
      description:
        "Website organisasi edukasi lingkungan untuk menyajikan informasi kegiatan yayasan dan kampanye pelestarian alam.",
      tags: ["Frontend"],
      image: "organization website",
      codeUrl: "https://github.com/rohmanNEXT/YayasanMangroveLestari",
      demoUrl: "https://yml-organation.vercel.app/",
    },
  ];

  return (
    <section
      className="min-h-screen flex items-start py-16 sm:py-20 px-6 md:pl-32 pb-24 md:pb-16"
      style={{
        background: getColor("background"),
        color: getColor("text"),
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 pb-2">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl tracking-tight pt-8"
              style={{ color: getColor("text") }}
            >
              Featured Projects
            </h2>

            <div
              className="w-24 h-1 rounded-full mx-auto mb-6 mt-6"
              style={{ background: getColor("primary") }}
            />

            <p
              className="max-w-2xl mx-auto text-sm sm:text-base"
              style={{ color: getColor("textSecondary") }}
            >
              Explore some of my highlighted work, focused on real-world UX,
              clean UI, and scalable architecture.
            </p>
          </div>

          {/* Grid cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="flex flex-col h-full backdrop-blur-3xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                style={{
                  background: getColor("cardBg"),
                  border: `1px solid ${getColor("border")}`,
                }}
              >
                {/* Image */}
                <div
                  className="h-48 sm:h-56 md:h-64 overflow-hidden relative p-7 pb-0"
                  style={{ background: getColor("cardBg") }}
                >
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x600/?${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />

                  {/* subtle overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 pt-0">
                  <div className="space-y-2">
                    <h3
                      className="text-xl sm:text-2xl font-semibold"
                      style={{ color: getColor("text") }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-sm sm:text-base leading-relaxed line-clamp-2"
                      style={{ color: getColor("textSecondary") }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-xs sm:text-sm"
                        style={{
                          background: getColor("surface"),
                          color: getColor("textSecondary"),
                          border: `1px solid ${getColor("border")}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link actions */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-2 sm:pt-3">
                    {/* Code link */}
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm sm:text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{
                        color: getColor("textSecondary"),
                        border: `1px solid ${getColor("border")}`,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
                      }}
                    >
                      <Github className="size-4 sm:size-5" />
                      <span>View Code</span>
                    </a>

                    {/* Live demo */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm sm:text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{
                        background: primary,
                        color: onPrimary,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                      }}
                    >
                      <ExternalLink className="size-4 sm:size-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
