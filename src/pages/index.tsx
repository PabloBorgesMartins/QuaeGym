import { useCallback } from "react";
import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggle = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");

  }, [theme, useTheme])
  return (
    <main>
      hello world
      <div>
        <h1>The current theme is {theme}</h1>
        <button onClick={toggle}>Change Theme</button>
      </div>
    </main>
  );
}
