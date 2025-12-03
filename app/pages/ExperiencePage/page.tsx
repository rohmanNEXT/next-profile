"use client";
import { useThemeStore } from "../../Libs/themeStore";
import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import CircularText from "../../components/CircularText";

export default function ExperiencePage() {
//  const { getColor } = useTheme();
const getColor = useThemeStore((s) => s.getColor);
  const primaryColor = useThemeStore((s) => s.primaryColor);
    const a11yMode = useThemeStore((s) => s.a11yMode);
  
  const experiences = [
    {
      role: "Perternakan ikan",
      company: "Pak suriyono Fish Farming",
      location: "Kediri, kalilanang, Indonesia",
      period: "01/16/2023 - 01/26/2024",
      duration: "1 Years",
      description:
        "Membantu mengelola dan merawat kolam ikan, termasuk pemberian pakan, pemantauan kualitas air, dan pengendalian penyakit ikan.",
      achievements: [
        "Helping fish ecosystem to be better",
        "Helping Costumer to buy healthy fish", 
      ],
    },
    {
      role: "Bootcamp Full Stack Developer",
      company: "Puwardhika surabaya",
      location: "Surabaya tengah, genteng , Indonesia",
      period: "Feb 2024 - Agus 2024",
      duration: "7 months",
      description:
        "Developed and maintained multiple web applications using Fronetend and Backend technologies, collaborating closely with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built 8 customer-facing applications",
        "Improved API response time by 60%",
        "Gagal dapat job Connector sebab sakit"
      ],
    },
    // {
    //   role: "Frontend Developer",
    //   company: "Creative Agency Ltd.",
    //   location: "Surabaya, Indonesia",
    //   period: "Jun 2022 - Feb 2023",
    //   duration: "9 months",
    //   description:
    //     "Created responsive web applications and collaborated with design teams to implement pixel-perfect UIs.",
    //   achievements: [
    //     "Developed 12+ landing pages",
    //     "Achieved 95+ Lighthouse scores",
    //   ],
    // },
    // {
    //   role: "Junior Web Developer",
    //   company: "StartUp Ventures",
    //   location: "Yogyakarta, Indonesia",
    //   period: "Jan 2021 - May 2022",
    //   duration: "1 year 5 months",
    //   description:
    //     "Built and maintained company websites and web applications using modern JavaScript frameworks.",
    //   achievements: [
    //     "Learned React and Node.js",
    //     "Contributed to 5 major projects",
    //   ],
    // },
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
      {/* Circular Animated Text */}
<motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
>
  <CircularText />
</motion.div>


          {/* Title */}
          <h1
            className="text-4xl md:text-5xl text-center mb-6"
            style={{ color: getColor("text") }}
          >
            Work Experience
          </h1>
          <div
            className="w-24 h-1 rounded-full mx-auto mb-16"
            style={{ background: getColor("primary") }}
          />

          {/* Vertical Timeline Container */}
          <div className="relative">
            {/* Center Vertical Line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{ background: getColor("border") }}
            />

            {/* Timeline Items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Timeline Dot (Center) */}
                  <div
                    className="absolute left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full z-10"
                    style={{
                      background: getColor("primary"),
                      border: `3px solid ${getColor("background")}`,
                      boxShadow: `0 0 0 4px ${getColor("cardBg")}`,
                    }}
                  />

                  {/* Experience Card - Alternating Left/Right */}
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${
                      index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Left Side */}
                    <div
                      className={`${
                        index % 2 === 0 ? "md:text-right" : "md:order-2"
                      }`}
                    >
                      <div
                        // initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        // animate={{ opacity: 1, x: 0 }}
                        // transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                        className={`p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                          index % 2 === 0 ? "" : "md:ml-8"
                        } ${index % 2 === 1 ? "" : "md:mr-8"}`}
                        style={{
                          background: getColor("cardBg"),
                          border: `1px solid ${getColor("border")}`,
                        }}
                      >
                        {/* Role Badge */}
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg mb-4 ${
                            index % 2 === 0 ? "md:float-right md:ml-4" : ""
                          }`}
                          style={{
                            background: getColor("surface"),
                            border: `1px solid ${getColor("border")}`,
                          }}
                        >
                          <Briefcase
                            size={14}
                            style={{ color: getColor("primary") }}
                            strokeWidth={1.5}
                          />
                          <span
                            className="text-xs"
                            style={{ color: getColor("textSecondary") }}
                          >
                            {exp.role}
                          </span>
                        </div>

                        {/* Company Name */}
                        <h3
                          className="text-xl mb-3 clear-both"
                          style={{ color: getColor("text") }}
                        >
                          {exp.company}
                        </h3>

                        {/* Period and Location */}
                        <div
                          className={`flex flex-wrap gap-4 mb-4 text-sm ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <div
                            className="flex items-center gap-2"
                            style={{ color: getColor("textSecondary") }}
                          >
                            <Calendar size={14} strokeWidth={1.5} />
                            <span>{exp.period}</span>
                          </div>
                          <br />
                          <div
                            className="flex items-center gap-2"
                            style={{ color: getColor("textSecondary") }}
                          >
                            <MapPin size={14} strokeWidth={1.5} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div
                          className={`inline-block px-3 py-1 rounded text-xs mb-4 ${
                            index % 2 === 0 ? "md:float-right" : ""
                          }`}
                          style={{
                            background: getColor("primary") + "20",
                            color: getColor("primary"),
                          }}
                        >
                          Duration: {exp.duration}
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm mb-4 leading-relaxed clear-both"
                          style={{ color: getColor("textSecondary") }}
                        >
                          {exp.description}
                        </p>

                        {/* Key Achievements */}
                        <div>
                          <p
                            className="text-sm mb-2"
                            style={{ color: getColor("text") }}
                          >
                            Key Achievements:
                          </p>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm flex items-start gap-2"
                                style={{ color: getColor("textSecondary") }}
                              >
                                <span style={{ color: getColor("primary") }}>
                                  •
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Empty space for alternating layout */}
                    <div
                      className={`hidden md:block ${
                        index % 2 === 0 ? "md:order-2" : ""
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 p-8 rounded-2xl text-center"
            style={{
              background: getColor("cardBg"),
              border: `1px solid ${getColor("border")}`,
            }}
          >
            <h2
              className="text-2xl mb-4"
              style={{ color: getColor("primary") }}
            >
              Total Experience
            </h2>
            <p className="text-4xl mb-2" style={{ color: getColor("text") }}>
              2+ Years
            </p>
            <p style={{ color: getColor("textSecondary") }}>
              in Web Development
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
