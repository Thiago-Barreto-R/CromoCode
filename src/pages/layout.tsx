import { Header } from "../components/header";
import { ThemeProvider } from "../components/theme-provider";


interface LayoutMainProps {
  children: React.ReactNode;
}

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center justify-center min-h-screen w-full">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  )
}
