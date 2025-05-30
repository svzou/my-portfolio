import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/ui/nav";
import Hero from "@/components/hero";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Nav />
    <Hero />
    </>
  )
}
