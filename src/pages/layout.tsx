import { Header } from "../components/header";
import { ThemeProvider } from "../components/theme-provider";


interface LayoutMainProps {
  children: React.ReactNode;
}

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      {children}
    </ThemeProvider>
  )
}
