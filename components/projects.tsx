import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"

const projects = [
    {
      title: "Pulse Workout App",
      description: [
        "Co-developed a full-stack fitness app, defining and delivering key product features that allow users to log, track, and view workouts in real time.",
        "Integrated Supabase for user authentication, secure data storage, and real-time database syncing.",
        "Designed and implemented responsive UI using Tailwind CSS.",
      ],
      tags: ["React", "Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      link: {
        label: "GitHub",
        url: "https://github.com/svzou/pulse-app",
      },
    },
    {
      title: "Real-Time Yoga Pose Recognition",
      description: [
        "Co-developed a real-time yoga pose recognition and feedback system via webcam input by engineering a computer vision pipeline with OpenCV and Torchvision.",
        "Achieved 78.4% classification accuracy on the Yoga-82 dataset by fine-tuning a MobileNetV2 CNN for multi-class yoga pose recognition",
        "Implemented advanced data preprocessing, including cleaning, class balancing, and augmentation to optimize model training across 12 yoga pose classes.",
      ],
      tags: ["Python", "PyTorch", "OpenCV", "Computer Vision", "MobileNetV2", "Transfer Learning"],
      link: {
        label: "Report",
        url: "https://drive.google.com/file/d/1q6y8KVtMbr1ldTyllTuVMEAvIzdUmKbL/view?usp=sharing",
      },
    },
    {
      title: "Akari Puzzle Game",
      description: [
        "Formulated and integrated complex algorithms to verify puzzle state completeness, including validation of lamp placements and corridor illuminations.",
        "Utilized MVC framework to separate application logic, UI, and data modeling. Applied the Observer design pattern for dynamic UI updates.",
        "Crafted a responsive GUI using JavaFX, focusing on user interaction.",
      ],
      tags: ["Java", "MVC", "JavaFX"],
      link: {
        label: "GitHub",
        url: "https://github.com/svzou/projects/tree/main/akariPuzzleGame",
      },
    },
    {
      title: "Sophia's Pokédex",
      description: [
        "Built a Pokédex web app to display paginated Pokémon data from the PokeAPI. Implemented client-side data fetching with React Query and server-side rendering for dynamic detail pages."
      ],
      tags: ["Next.js", "React Query", "TypeScript", "Tailwind CSS", "PokeAPI"],
      link: {
        label: "Play here",
        url: "https://sophias-pokedex.vercel.app/",
      },
    },
    {
      title: "Wordle Clone",
      description: [
        "Recreated the Wordle game, complete with tile-based feedback and keyboard interaction.  Integrated external APIs to validate user input and fetch random words, and deployed the game live using Vercel with a Vite setup."
      ],
      tags: ["React", "REST APIs", "Vite", "Tailwind CSS"],
      link: {
        label: "Play here",
        url: "https://sophias-wordle.vercel.app/",
      },
    },
    {
      title: "This Portfolio",
      description: [
        "Developed this portfolio to showcase my projects. Built with React and Next.js and styled using Tailwind CSS and Shadcn UI for a modern design. Deployed on Vercel and integrated with Google Analytics.",
      ],
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Google Analytics"],
      link: {
        label: "You're already here",
        url: "https://sophiazou.vercel.app/",
      },
    },
  ]
  
  export default function Projects() {
    return (
      <section id="projects" className="py-24 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
  
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group border border-gray-200/60 bg-white/30 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
  
                <CardContent className="space-y-3 text-md text-muted-foreground">
                  {project.description.map((line, i) => (
                    <p key={i} className="leading-relaxed">
                      {line}
                    </p>
                  ))}
  
  <Button
  asChild
  className="bg-slate-700 text-white hover:bg-slate-500 transition-colors duration-300 text-sm font-medium rounded px-4 py-2 shadow-md hover:shadow-lg"
>
  <Link href={project.link.url} target="_blank" rel="noopener noreferrer">
    {project.link.label} →
  </Link>
</Button>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }