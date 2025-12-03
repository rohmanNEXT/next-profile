"use client";

import { create } from "zustand";

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function hexToHSL(hex: string): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;

  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToHex(hsl: { h: number; s: number; l: number }): string {
  const h = hsl.h / 360;
  const s = hsl.s / 100;
  const l = hsl.l / 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// 👉 helper untuk text otomatis hitam / putih
export function getReadableTextColor(bgHex: string): string {
  const rgb = hexToRgb(bgHex);
  if (!rgb) return "#FFFFFF";

  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // kalau warna terang → pakai text hitam, kalau gelap → text putih
  return luminance > 0.6 ? "#111827" : "#F9FAFB";
}

type ColorKey =
  | "primary"
  | "accent"
  | "background"
  | "surface"
  | "text"
  | "textSecondary"
  | "border"
  | "cardBg";

type ThemeMode = "light" | "dark" | "hct";

interface ThemeStore {
  themeMode: ThemeMode; // "light" | "dark" | "hct"
  a11yMode: boolean;
  isSettingsOpen: boolean;
  primaryColor: string;

  setThemeMode: (mode: ThemeMode) => void;
  toggleA11y: () => void;
  setIsSettingsOpen: (state: boolean) => void;
  setPrimaryColor: (color: string) => void;

  getColor: (type: ColorKey) => string;
}

export const useThemeStore = create<ThemeStore>()((set, get) => ({
  themeMode: "dark", // default: dark mode
  a11yMode: false,
  isSettingsOpen: false,
  primaryColor: "#7C3AED",

  setThemeMode: (mode) => set({ themeMode: mode }),

  toggleA11y: () => set((s) => ({ a11yMode: !s.a11yMode })),

  setIsSettingsOpen: (v) => set({ isSettingsOpen: v }),

  setPrimaryColor: (v) => set({ primaryColor: v }),

  getColor: (type: ColorKey) => {
    const { primaryColor, themeMode, a11yMode } = get();
    const hsl = hexToHSL(primaryColor) ?? { h: 260, s: 65, l: 55 };

    // ============= MODE HCT =============
    if (themeMode === "hct") {
      const colors: Record<ColorKey, string> = {
        primary: primaryColor,
        accent: hslToHex({
          h: (hsl.h + 35) % 360,
          s: Math.min(hsl.s + 5, 90),
          l: Math.min(hsl.l + 5, 70),
        }),
        background: hslToHex({ h: hsl.h, s: 22, l: 9 }),
        surface: hslToHex({ h: hsl.h, s: 18, l: 13 }),
        cardBg: hslToHex({ h: hsl.h, s: 16, l: 17 }),
        text: "#F9FAFB",
        textSecondary: hslToHex({ h: hsl.h, s: 10, l: 65 }),
        border: a11yMode
          ? `rgba(${hexToRgb(primaryColor)?.r ?? 255},${
              hexToRgb(primaryColor)?.g ?? 255
            },${hexToRgb(primaryColor)?.b ?? 255},0.6)`
          : hslToHex({ h: hsl.h, s: 14, l: 24 }),
      };
      return colors[type];
    }

    // ============= MODE DARK =============
    if (themeMode === "dark") {
      const colors: Record<ColorKey, string> = {
        primary: "#7C3AED",
        accent: "#8B5CF6",
        background: "#050816",
        surface: "#0B1020",
        cardBg: "#111827",
        text: "#E5E7EB",
        textSecondary: "#9CA3AF",
        border: a11yMode ? "#9CA3AF" : "#374151",
      };
      return colors[type];
    }

    // ============= MODE LIGHT =============
    const colors: Record<ColorKey, string> = {
      primary: "#7C3AED",
      accent: "#6D28D9",
      background: "#F9FAFB",
      surface: "#FFFFFF",
      cardBg: "#FFFFFF",
      text: "#111827",
      textSecondary: "#6B7280",
      border: a11yMode ? "#4B5563" : "#D1D5DB",
    };
    return colors[type];
  },
}));
