"use client";
import { useThemeStore } from "../../Libs/themeStore";
import { motion } from "motion/react";
import { Award, Briefcase, Coffee } from "lucide-react";
import Image from "next/image";
import { SiGoogledrive } from "react-icons/si";

export default function AboutPage() {
  const getColor = useThemeStore((s) => s.getColor);
  const primaryColor = useThemeStore((s) => s.primaryColor);
  const a11yMode = useThemeStore((s) => s.a11yMode);

  const stats = [
    { icon: Award, value: "3+", label: "Years Experience" },
    { icon: Briefcase, value: "1+", label: "Jobs Projects Completed" },
    { icon: Coffee, value: "0+", label: "Cups of Coffee" },
  ];

  const awards = [
    {
      title_: "..",
      title: "Sertifikat Kelulusan Puwardhika Bootcamp",
      desc: "Penghargaan kelulusan sebagai bukti penyelesaian program belajar.",
      image: "/certificates/kelulusan.png", // ganti dengan path asli kamu
      link: "/", // ganti dengan link asli kamu
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-0 md:pl-32 pb-24 md:pb-6 p-8"
      style={{ background: getColor("background") }}
    >
      <div className="max-w-4xl w-full pb-18">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-h-screen"
        >
          <div className="min-h-screen">
            {/* Title */}
            <h1
              className="text-4xl md:text-5xl text-center font-semibold mb-4 pt-20"
              style={{ color: getColor("text") }}
            >
              About Me
            </h1>

            <div
              className="w-24 h-1 rounded-full mx-auto mb-16"
              style={{ background: getColor("primary") }}
            />

            {/* Main Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-8 md:p-20 rounded-2xl mb-8 text-center"
              style={{
                background: getColor("cardBg"),
                border: `1px solid ${getColor("border")}`,
              }}
            >
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: getColor("textSecondary") }}
              >
                Hai, saya Muhammad Rachman (Rohman), seorang Web Developer yang
                fokus pada React, Next.js, dan JavaScript. Saya suka membangun
                aplikasi web yang bersih, cepat, dan nyaman digunakan, dengan
                perhatian pada pengalaman pengguna (UI/UX).
              </p>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: getColor("textSecondary") }}
              >
                Saya terbiasa mengerjakan antarmuka interaktif menggunakan
                integrasi API, state management, dan praktik pengembangan modern
                untuk menghasilkan aplikasi yang efisien dan responsif. Saya
                juga terus belajar teknologi baru agar keterampilan saya selalu
                berkembang dan relevan.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: getColor("textSecondary") }}
              >
                {" "}
                Berikut beberapa proyek yang pernah saya kerjakan:{" "}
                <a
                  onClick={() =>
                    (window.location.href = "/pages/ProjectPage")
                  }
                  className="text-red-400 hover:underline px-0.5"
                >
                  Lihat Project
                </a>
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: getColor("cardBg"),
                    border: `1px solid ${getColor("border")}`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{ background: getColor("primary") + "20" }}
                  >
                    <stat.icon
                      size={24}
                      style={{ color: getColor("primary") }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div
                    className="text-3xl mb-2"
                    style={{ color: getColor("text") }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: getColor("textSecondary") }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Penghargaan Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="min-h-screen"
          >
            <div
              className="md:text-3xl mb-3 flex items-center justify-center gap-2"
              style={{ color: getColor("text") }}
            >
              <Award size={20} strokeWidth={1} />
              <h2 className="text-xl font-semibold">Penghargaan</h2>
            </div>

            <div
              className="w-24 h-0.5 rounded-full mx-auto mb-14 mt-4"
              style={{ background: getColor("primary") }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="
        rounded-2xl overflow-hidden p-6
        shadow-2xl transition-all duration-300 group
        hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]
        flex flex-col
      "
                  style={{
                    background: getColor("cardBg"),
                    border: `1px solid ${getColor("border")}`,
                  }}
                >
                  {/* Image box */}
                  <div
                    className="w-full aspect-video flex items-center justify-center overflow-hidden rounded-xl"
                    style={{ background: getColor("surface") }}
                  >
                    <Image
                      src={award.image}
                      alt={award.title_}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-4 flex flex-col items-center text-center pt-4 md:lg:xl:pt-5">
                    <h3
                      className="text-lg sm:text-xl font-semibold"
                      style={{ color: getColor("text") }}
                    >
                      {award.title}
                    </h3>

                    <p
                      className="text-sm sm:text-base h-auto leading-relaxed"
                      style={{ color: getColor("textSecondary") }}
                    >
                      {award.desc}
                    </p>

                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
            inline-flex items-center justify-center gap-2
            rounded-lg px-4 py-2 text-sm sm:text-base font-medium
            transition-all duration-300 hover:scale-[1.05]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            mx-auto
          "
                      style={{
                        background: getColor("surface"),
                        color: getColor("text"),
                        border: `1px solid ${getColor("border")}`,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
                      }}
                    >
                      <SiGoogledrive className="size-5" />
                      <span>Link Google Drive</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
