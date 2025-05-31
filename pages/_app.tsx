import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/ui/nav";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import { Urbanist } from "next/font/google"
import Classes from "@/components/classes";
import Footer from "@/components/footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
})



export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={urbanist.variable}>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Classes />
      <Footer />

    </div>
  )
}
