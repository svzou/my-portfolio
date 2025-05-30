// components/Hero.tsx
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Sophia
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-6">
          A frontend developer crafting modern web experiences with React, Tailwind, and Next.js.
        </p>
        <Button variant="outline">View My Work</Button>
      </div>
    </section>
  )
}
