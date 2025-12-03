"use client";

import {
  Home,
  User,
  Award,
  Briefcase,
  Mail,
  Settings,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeStore, getReadableTextColor } from "../Libs/themeStore";

export default function FloatingNavbar() {
  const pathname = usePathname();

  const getColor = useThemeStore((s) => s.getColor);
  const setIsSettingsOpen = useThemeStore((s) => s.setIsSettingsOpen);
  useThemeStore((s) => s.primaryColor);
  useThemeStore((s) => s.themeMode);
  useThemeStore((s) => s.a11yMode);

  const lineColor = getReadableTextColor(getColor("background"));

  // NAV DESKTOP (full)
  const navItemsDesktop = [
    { icon: Home, path: "/pages/HomePage", label: "Home" },
    { icon: User, path: "/pages/AboutPage", label: "About" },
    { icon: Award, path: "/pages/SkillPage", label: "Skill" },
    { icon: Briefcase, path: "/pages/ExperiencePage", label: "Experience" },
    { icon: Presentation, path: "/pages/ProjectPage", label: "Project" },
    { icon: Mail, path: "/pages/ContactPage", label: "Contact" },
  ];

  // NAV MOBILE (hanya 5 item, tanpa Experience)
  const navItemsMobile = [
    { icon: Home, path: "/pages/HomePage", label: "Home" },
    { icon: User, path: "/pages/AboutPage", label: "About" },
    { icon: Award, path: "/pages/SkillPage", label: "Skill" },
    { icon: Presentation, path: "/pages/ProjectPage", label: "Project" },
      ];

  const primary = getColor("primary");
  const onPrimary = getReadableTextColor(primary);

  return (
    <>
      {/* Desktop Navbar - Left Side */}
      <nav
        className="
          hidden md:flex
          fixed left-6 top-1/2 -translate-y-1/2
          z-50
        "
        aria-label="Main navigation"
      >
        <div
          className="
            flex flex-col items-center gap-2
            px-2 py-5
            rounded-full
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            border
          "
          style={{
            background: getColor("surface"),
            borderColor: getColor("border"),
          }}
        >
          {navItemsDesktop.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="group relative flex items-center justify-center"
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
              >
                <div className="relative">
                  <div
                    className="
                      w-11 h-11
                      rounded-full
                      flex items-center justify-center
                      transition-all duration-300
                      hover:scale-110 backdrop-blur-md
                    "
                    style={{
                      background: active ? primary + "99" : "transparent",
                      color: active ? onPrimary : getColor("textSecondary"),
                      boxShadow: active ? "0 0 25px rgba(0,0,0,0.35)" : "none",
                    }}
                  >
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>

                  {/* garis aktif di kiri */}
                  {active && (
                    <span
                      className="
                        absolute -left-2 top-1/2 -translate-y-1/2
                        w-0.5 h-9 rounded-full
                      "
                      style={{ background: primary }}
                    />
                  )}
                </div>

                {/* tooltip label */}
                <span
                  className="
                    absolute left-full ml-4
                    px-3 py-1.5 rounded-lg
                    whitespace-nowrap
                    text-xs
                    opacity-0 group-hover:opacity-100
                    translate-y-1 group-hover:translate-y-0
                    transition-all duration-200
                    pointer-events-none
                  "
                  style={{
                    background: getColor("cardBg"),
                    border: `1px solid ${getColor("border")}`,
                    color: getColor("text"),
                  }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* divider */}
          <div
            className="w-8 h-[2px] my-2 rounded-full"
            style={{ background: lineColor, opacity: 0.4 }}
          />

          {/* settings desktop (tetap di bar) */}
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="
              w-11 h-11
              flex items-center justify-center
              rounded-2xl
              transition-all duration-300
              hover:scale-110
            "
            style={{ color: getColor("textSecondary") }}
            aria-label="Open settings"
          >
            <Settings size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Floating Bottom Navbar */}
      <nav
        className="
          md:hidden
          fixed bottom-4 left-1/2 -translate-x-1/2
          z-50
          w-[92%] max-w-md
          flex items-center justify-between
          px-4 py-3
          rounded-2xl
          backdrop-blur-xl
          shadow-[0_18px_45px_rgba(0,0,0,0.55)]
          border
        "
        style={{
          background: getColor("cardBg"),
          borderColor: getColor("border"),
        }}
        aria-label="Main navigation mobile"
      >
        {navItemsMobile.map((item) => {
          const active = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
            >
              <div
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-2xl
                  transition-all duration-300
                  active:scale-95
                "
                style={{
                  background: active ? primary : "transparent",
                  color: active ? onPrimary : getColor("textSecondary"),
                }}
              >
                <item.icon size={22} strokeWidth={1.5} />
              </div>
            </Link>
          );
        })}

        <button
          onClick={() => setIsSettingsOpen(true)}
          className="
            w-10 h-10
            flex items-center justify-center
            rounded-2xl
            transition-all duration-300
            active:scale-95
          "
          style={{ color: getColor("textSecondary") }}
          aria-label="Open settings"
        >
          <Settings size={22} strokeWidth={1.5} />
        </button>
      </nav>
    </>
  );
}
