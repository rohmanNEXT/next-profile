"use client";

import { useEffect } from "react";
import { useThemeStore } from "../Libs/themeStore";

export default function ThemeWatcher() {

  const primaryColor = useThemeStore((s) => s.primaryColor);
  const getColor = useThemeStore((s) => s.getColor);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", getColor("primary"));
    document.documentElement.style.setProperty("--accent", getColor("accent"));
    document.documentElement.style.setProperty("--background", getColor("background"));
    document.documentElement.style.setProperty("--surface", getColor("surface"));
    document.documentElement.style.setProperty("--cardBg", getColor("cardBg"));
    document.documentElement.style.setProperty("--text", getColor("text"));
    document.documentElement.style.setProperty("--text-secondary", getColor("textSecondary"));
    document.documentElement.style.setProperty("--border", getColor("border"));

    document.body.style.background = getColor("background");
    document.body.style.color = getColor("text");
  }, [primaryColor, getColor]);
  
  return null;
}
