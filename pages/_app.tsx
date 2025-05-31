import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/ui/nav";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import { Urbanist } from "next/font/google"
import Classes from "@/components/classes";
import Footer from "@/components/footer";
import Script from "next/script";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
})



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-VRVLWR5JPR`} // 👈 Replace with your ID
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VRVLWR5JPR', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    

    <div className={urbanist.variable}>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Classes />
      <Footer />

    </div>
    </>
  )
}
