"use client";
import { useThemeStore } from "../../Libs/themeStore";
import { motion } from "motion/react";
import {
  SiNextdotjs,
  SiVite,
  SiReact,
  SiCypress,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiJest,
  SiSupabase,
  SiPostgresql,
  SiVercel,
  SiDigitalocean,
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiNginx,
  SiTypescript,
  SiContentful,
  SiStripe,
  SiCss3,
  SiTwinmotion,
  SiGoogleanalytics,
  SiLinear,
  SiHtml5,
} from "react-icons/si";
import {
  Database,
  Palette,
  Package,
  Globe,
  Shield,
  FileCode,
  Layers,
  Code2,
  MessageSquare,
  Boxes,
  FolderKanban,
  Bug,
  BookOpen,
} from "lucide-react";
import { FaHome } from "react-icons/fa";

export default function SkillPage() {
  //  const { getColor } = useThemeStore();
  const getColor = useThemeStore((s) => s.getColor);
  const primaryColor = useThemeStore((s) => s.primaryColor);
  const a11yMode = useThemeStore((s) => s.a11yMode);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", icon: SiNextdotjs, years: "2 Th" },
        { name: "Vite", icon: SiVite, years: "1 Th" },
        { name: "React", icon: SiReact, years: "1 Th" },
        { name: "Cypress", icon: SiCypress, years: "0/6 Th" },
        { name: "Css", icon: SiCss3, years: "2 Th" },
        { name: "Css Animation", icon: SiCss3, years: "0/6 Th" },
        { name: "Html", icon: SiHtml5, years: "4 Th" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, years: "2 Th" },
        { name: "Express", icon: SiExpress, years: "1 Th" },
        { name: "Prisma", icon: SiPrisma, years: "1 Th" },
        { name: "Jest", icon: SiJest, years: "Beginner" },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "Supabase", icon: SiSupabase, years: "1 Th" },
        { name: "PostgreSQL", icon: SiPostgresql, years: "0/6 Th" },
        { name: "Railway", icon: Database, years: "1 Th", isLucide: true },
        { name: "DigitalOcean", icon: SiDigitalocean, years: "0/6 Th" },
        { name: "Hostinger", icon: Globe, years: "0/6 Th", isLucide: true },
        { name: "Vercel", icon: SiVercel, years: "3 Th" },
      ],
    },
    {
      title: "UI & Tools",
      skills: [
        { name: "VS Code", icon: Code2, years: "3 Th", isLucide: true },
        { name: "JavaScript", icon: SiJavascript, years: "2 Th" },
        { name: "Core UI", icon: Layers, years: "1 Th", isLucide: true },
        { name: "HeroUI", icon: Palette, years: "1 Th", isLucide: true },
        { name: "Shadcn UI", icon: Package, years: "1 Th", isLucide: true },
        { name: "UIColors.app", icon: Palette, years: "1 Th", isLucide: true },
        { name: "Zustand Store", icon: Boxes, years: "1 Th", isLucide: true },
        { name: "TailwindCSS", icon: SiTailwindcss, years: "2 Th" },
        { name: "React Icons", icon: SiReact, years: "2 Th" },
        { name: "Nginx", icon: SiNginx, years: "  Beginner" },
        { name: "GitHub", icon: SiGithub, years: "0/6 Th" },
        {
          name: "ChatGPT Pro + Cursor",
          icon: MessageSquare,
          years: "2 Th",
          isLucide: true,
        },
        { name: "GitHub Actions", icon: SiGithub, years: "1 Th" },
        { name: "JWT", icon: Shield, years: "0/6 Th", isLucide: true },
        { name: "Passport", icon: Shield, years: "0/6 Th", isLucide: true },
        { name: "TypeScript", icon: SiTypescript, years: "1 Th" },
        { name: "HOC", icon: FileCode, years: "1 Th", isLucide: true },
        { name: "Contentful", icon: SiContentful, years: "0/6 Th" },
        { name: "Stripe", icon: SiStripe, years: "Beginner" },
        { name: "Motion", icon: SiTwinmotion, years: "Beginner" },

        {
          name: "ClickUp",
          icon: FolderKanban,
          years: "Beginner",
          isLucide: true,
        },
        { name: "Winston", icon: Bug, years: "1 Th", isLucide: true },
        { name: "UpNote", icon: BookOpen, years: "3 Th", isLucide: true },
        {
          name: "Google Seo Analistic",
          icon: SiGoogleanalytics,
          years: "Beginner",
        },
        {
          name: "Htc Color Picker",
          icon: FaHome,
          years: "Beginner",
          isLucide: true,
        },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen p-6 md:pl-32 py-16 pb-24 md:pb-16"
      style={{ background: getColor("background") }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}

          <h1
            className="text-4xl md:text-5xl text-center mb-6 pt-12 font-semibold"
            style={{ color: getColor("text") }}
          >
            Skills & Technologies
          </h1>
          <div
            className="w-24 h-1 rounded-full mx-auto mb-6"
            style={{ background: getColor("primary") }}
          />
          <p
            className="text-center mb-16 max-w-2xl mx-auto"
            style={{ color: getColor("textSecondary") }}
          >
            Experience since 2023 to 2025
          </p>
          {/* Skill Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              >
                {/* Category Title */}
                <h2
                  className="text-xl mb-6 text-center"
                  style={{ color: getColor("primary") }}
                >
                  {category.title}
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: catIndex * 0.1 + index * 0.03,
                        duration: 0.4,
                      }}
                      className="
        flex flex-col items-center justify-center text-center
        w-[140px] sm:w-[150px]
        p-4 rounded-xl transition-all duration-300 hover:scale-105
      "
                      style={{
                        background: getColor("cardBg"),
                        border: `1px solid ${getColor("border")}`,
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="w-10 h-10 flex items-center justify-center mb-3"
                        style={{ color: getColor("primary") }}
                      >
                        {skill.isLucide ? (
                          <skill.icon size={24} strokeWidth={1.5} />
                        ) : (
                          <skill.icon size={24} />
                        )}
                      </div>

                      {/* Skill Name */}
                      <h3
                        className="text-xs font-semibold mb-2 h-8 flex items-center justify-center"
                        style={{ color: getColor("text") }}
                      >
                        {skill.name}
                      </h3>

                      {/* Years */}
                      <span
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          background: getColor("surface"),
                          color: getColor("textSecondary"),
                          border: `1px solid ${getColor("border")}`,
                        }}
                      >
                        {skill.years}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
