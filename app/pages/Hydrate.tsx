"use client"
import { useEffect } from "react";
import { useThemeStore } from "../Libs/themeStore";
const ThemeHydrator: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  const hydrate = useThemeStore((s) => s.hydrate);
  const hydrated = useThemeStore((s) => s.hydrated);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (!hydrated) return null; // tunggu sampai theme ke-load

  return <>{children}</>;
}
export default ThemeHydrator;