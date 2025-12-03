"use client";

import { X, Moon, Sun, Eye, EyeOff, Palette } from "lucide-react";
import { useThemeStore, getReadableTextColor } from "../Libs/themeStore";
import { useState, useEffect } from "react";

export default function SettingsModal() {
  const isSettingsOpen = useThemeStore((s) => s.isSettingsOpen);
  const setIsSettingsOpen = useThemeStore((s) => s.setIsSettingsOpen);
  const themeMode = useThemeStore((s) => s.themeMode);
  const setThemeMode = useThemeStore((s) => s.setThemeMode);
  const a11yMode = useThemeStore((s) => s.a11yMode);
  const toggleA11y = useThemeStore((s) => s.toggleA11y);
  const primaryColor = useThemeStore((s) => s.primaryColor);
  const setPrimaryColor = useThemeStore((s) => s.setPrimaryColor);
  const getColor = useThemeStore((s) => s.getColor);
  const primary = getColor("primary");
  const onPrimary = getReadableTextColor(primary);
  const accent = getColor("accent");
  const onAccent = getReadableTextColor(accent);

  const [tempColor, setTempColor] = useState(primaryColor);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    setTempColor(primaryColor);
  }, [primaryColor]);

  if (!isSettingsOpen) return null;

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setTempColor(newColor);

    // live preview cuma di mode HCT
    if (previewMode && themeMode === "hct") {
      setPrimaryColor(newColor);
    }
  };

  const applyColor = () => {
    if (themeMode === "hct") {
      setPrimaryColor(tempColor);
      localStorage.setItem("primaryColor", tempColor);
      document.cookie = `primaryColor=${tempColor}; path=/; max-age=31536000`;
    }
  };

  const presetColors = [
    { name: "Purple", value: "#7C3AED" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Green", value: "#10B981" },
    { name: "Pink", value: "#EC4899" },
    { name: "Orange", value: "#F59E0B" },
    { name: "Red", value: "#EF4444" },
  ];

  const isHct = themeMode === "hct";

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        p-4
        bg-black/60
        backdrop-blur-md
      "
    >
      {/* Klik area gelap untuk tutup */}
      <div
        className="absolute inset-0"
        onClick={() => setIsSettingsOpen(false)}
      />

      {/* Modal content */}
      <div
  className="
    relative w-full max-w-2xl
    rounded-2xl p-8
    shadow-2xl max-h-[90vh] overflow-y-auto
    backdrop-blur-2xl
  "
  style={{
    background: `${getColor("cardBg")}A6`, // A6 ≈ 65% transparency
    border: `1px solid ${getColor("border")}80`, // 80 = transparency border
    WebkitBackdropFilter: "blur(24px)",
    backdropFilter: "blur(24px)",
  }}
  onClick={(e) => e.stopPropagation()}
>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: getColor("primary") + "20" }}
            >
              <Palette
                size={20}
                style={{ color: getColor("primary") }}
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-2xl" style={{ color: getColor("text") }}>
              Settings
            </h2>
          </div>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
            style={{
              background: getColor("surface"),
              border: `1px solid ${getColor("border")}`,
              color: getColor("textSecondary"),
            }}
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Theme Mode Tabs */}
       <div className="mb-8">
  <label
    className="block text-sm mb-3"
    style={{ color: getColor("textSecondary") }}
  >
    Theme Mode
  </label>
  <div className="flex flex-wrap gap-3">

    {/* Light */}
    <button
      onClick={() => setThemeMode("light")}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
      style={{
        background: themeMode === "light" ? getColor("primary") : getColor("surface"),
        color: themeMode === "light" ? onPrimary : getColor("text"),
        border: `1px solid ${getColor("border")}`,
      }}
    >
      <Sun size={16} strokeWidth={1.5} />
      <span>Light</span>
    </button>

    {/* Dark */}
    <button
      onClick={() => setThemeMode("dark")}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
      style={{
        background: themeMode === "dark" ? getColor("primary") : getColor("surface"),
        color: themeMode === "dark" ? onPrimary : getColor("text"),
        border: `1px solid ${getColor("border")}`,
      }}
    >
      <Moon size={16} strokeWidth={1.5} />
      <span>Dark</span>
    </button>

    {/* HCT */}
    <button
      onClick={() => setThemeMode("hct")}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
      style={{
        background: themeMode === "hct" ? getColor("primary") : getColor("surface"),
        color: themeMode === "hct" ? onPrimary : getColor("text"),
        border: `1px solid ${getColor("border")}`,
      }}
    >
      <Palette size={16} strokeWidth={1.5} />
      <span>HCT Color</span>
    </button>
  </div>


        </div>

        {/* HCT Color Picker */}
        <div className="mb-8">
          <label
            className="block text-sm mb-3"
            style={{ color: getColor("textSecondary") }}
          >
            HCT Color Picker (Material Color UI)
          </label>
          <p
            className="text-xs mb-4"
            style={{ color: getColor("textSecondary"), opacity: 0.8 }}
          >
            Mode ini menggunakan satu warna utama untuk membentuk seluruh palet
            (background, text, icon, border, button). Hanya aktif saat mode
            <b> HCT Color</b> dipilih.
          </p>

          {/* Preset Colors */}
          <div className="grid grid-cols-6 gap-3 mb-4">
            {presetColors.map((preset) => (
              <button
                key={preset.value}
                onClick={() => {
                  if (!isHct) return;
                  setTempColor(preset.value);
                  if (previewMode) setPrimaryColor(preset.value);
                }}
                className="h-12 rounded-lg transition-all duration-300 hover:scale-110 relative"
                style={{
                  background: preset.value,
                  opacity: isHct ? 1 : 0.4,
                  cursor: isHct ? "pointer" : "not-allowed",
                  border:
                    tempColor === preset.value
                      ? `3px solid ${getColor("text")}`
                      : "1px solid rgba(255,255,255,0.2)",
                }}
                title={preset.name}
                disabled={!isHct}
              />
            ))}
          </div>

          {/* Custom Color */}
          <div className="flex items-center gap-4">
            <input
              type="color"
              value={tempColor}
              onChange={handleColorChange}
              className="w-16 h-16 rounded-lg"
              style={{
                border: `1px solid ${getColor("border")}`,
                opacity: isHct ? 1 : 0.4,
                cursor: isHct ? "pointer" : "not-allowed",
              }}
              disabled={!isHct}
            />
            <div className="flex-1">
              <input
                type="text"
                value={tempColor}
                onChange={(e) => setTempColor(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-sm"
                style={{
                  background: getColor("surface"),
                  border: `1px solid ${getColor("border")}`,
                  color: getColor("text"),
                  opacity: isHct ? 1 : 0.4,
                }}
                placeholder="#7C3AED"
                disabled={!isHct}
              />
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            {/* <button
              onClick={applyColor}
              className="flex-1 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] text-sm"
              style={{
                background: isHct ? getColor("primary") : getColor("surface"),
                color: isHct ? "#FFFFFF" : getColor("textSecondary"),
                opacity: isHct ? 1 : 0.5,
                cursor: isHct ? "pointer" : "not-allowed",
              }}
              disabled={!isHct}
            >
              Apply Color
            </button> */}
            <button
              onClick={applyColor}
              className="flex-1 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] text-sm"
              style={{
                background: isHct ? primary : getColor("surface"),
                color: isHct ? onPrimary : getColor("textSecondary"),
                opacity: isHct ? 1 : 0.5,
                cursor: isHct ? "pointer" : "not-allowed",
                border: `1px solid ${getColor("border")}`,
              }}
              disabled={!isHct}
            >
              Apply Color
            </button>

            <button
              onClick={() => setPreviewMode(!previewMode)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] text-sm"
              style={{
                background: previewMode
                  ? getColor("primary")
                  : getColor("surface"),
                color: previewMode ? "#FFFFFF" : getColor("text"),
                border: `1px solid ${getColor("border")}`,
              }}
            >
              {previewMode ? (
                <Eye size={16} strokeWidth={1.5} />
              ) : (
                <EyeOff size={16} strokeWidth={1.5} />
              )}
              <span>Live Preview</span>
            </button>
          </div>
        </div>

        {/* A11y */}
        <div className="mb-8">
          <label
            className="block text-sm mb-3"
            style={{ color: getColor("textSecondary") }}
          >
            Accessibility (A11y)
          </label>
          <div
            className="flex items-center justify-between p-4 rounded-lg"
            style={{ background: getColor("surface") }}
          >
            <div>
              <div className="text-sm mb-1" style={{ color: getColor("text") }}>
                Enhanced Contrast
              </div>
              <div
                className="text-xs"
                style={{ color: getColor("textSecondary") }}
              >
                {a11yMode
                  ? "High contrast borders enabled"
                  : "Standard contrast"}
              </div>
            </div>
            <button
              onClick={toggleA11y}
              className="relative w-14 h-8 rounded-full transition-all duration-300"
              style={{
                background: a11yMode ? getColor("primary") : getColor("border"),
              }}
            >
              <div
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300"
                style={{
                  transform: a11yMode ? "translateX(24px)" : "translateX(0)",
                }}
              />
            </button>
          </div>
        </div>

        {/* Preview Palet */}
        <div
          className="p-6 rounded-lg"
          style={{
            background: getColor("surface"),
            border: `1px solid ${getColor("border")}`,
          }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: getColor("textSecondary") }}
          >
            Material Design Theme Preview
          </p>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div
              className="p-4 rounded-lg text-center text-sm"
              style={{
                background: primary,
                color: onPrimary,
              }}
            >
              Primary
            </div>

            <div
              className="p-4 rounded-lg text-center text-sm"
              style={{
                background: accent,
                color: onAccent,
              }}
            >
              Accent
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div
              className="p-3 rounded-lg text-center text-xs"
              style={{
                background: getColor("background"),
                color: getColor("text"),
                border: `1px solid ${getColor("border")}`,
              }}
            >
              Background
            </div>
            <div
              className="p-3 rounded-lg text-center text-xs"
              style={{
                background: getColor("cardBg"),
                color: getColor("text"),
                border: `1px solid ${getColor("border")}`,
              }}
            >
              Card
            </div>
            <div
              className="p-3 rounded-lg text-center text-xs"
              style={{
                background: getColor("surface"),
                color: getColor("text"),
                border: `1px solid ${getColor("border")}`,
              }}
            >
              Surface
            </div>
          </div>
          <div
            className="mt-3 p-3 rounded-lg"
            style={{
              background: getColor("cardBg"),
              border: `1px solid ${getColor("border")}`,
            }}
          >
            <p className="text-sm mb-1" style={{ color: getColor("text") }}>
              Text Primary
            </p>
            <p className="text-xs" style={{ color: getColor("textSecondary") }}>
              Text Secondary
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
