import { ThemeProvider } from "next-themes"
import { globalStyles } from "../styles/global"
import { AppProps } from "next/app"
import { darkTheme, } from "../styles/index";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
} 