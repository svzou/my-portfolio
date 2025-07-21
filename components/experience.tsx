import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const experiences = [
    {
      role: "Technical Product Manager Intern",
      company: "Great American Insurance Group",
      location: "Cincinnati, OH",
      url: "https://www.greatamericaninsurancegroup.com/",
      logo: "/logos/gaig.png",
      date: "May 2025 – Aug 2025",
      description: [
"Built a centralized Humio dashboard for real-time error logging across Predictive Analytics applications and authored internal documentation to enable 15 team members to efficiently monitor and resolve issues",
        "Collaborated with engineering, design, and QA teams to define user stories, write acceptance criteria, and manage Agile sprint backlogs in Rally, accelerating delivery of cloud-native features",
        "Developed an AI-powered automation workflow using Microsoft 365 Copilot to decommission legacy applications",
      ],

    },
    {
      role: "CS Lead Teaching Assistant",
      company: "Girls Who Code",
      location: "New York, NY",
      url: "https://girlswhocode.com/",
      logo: "/logos/gwc.png",
      date: "May 2023 – Aug 2024",
      description: [
"Promoted to Lead TA for excellence in teaching 300+ students game design basics with p5.js, guiding each student to develop their own Interactive Avatar Game, Choose Your Own Adventure Game, and Collection Style Game",
        "Led debugging sessions and code reviews to reduce blocker resolution time by 50% during final project development",
        "Managed corporate partner collaborations with RTX, Bank of America, Morgan Stanley, and MetLife.",
      ],

    },
    {
      role: "Data & Analytics Intern",
      company: "Procter & Gamble",
      location: "Cincinnati, OH",
      url: "https://us.pg.com/",
      logo: "/logos/p&g.png",
      date: "May 2021 – Aug 2021",
      description: [
        "Analyzed $1M+ in cloud operating costs using Microsoft Azure and Power BI",
        "Developed dashboards that revealed 10–15% savings potential for senior stakeholders",
        "Cultivated relationships with 10+ employees to present cultural insights to 60+ interns and staff",
      ],

    },
    {
      role: "Founder",
      company: "Diversity On Ice Nonprofit",
      location: "Cincinnati, OH",
      url: "https://diversityonice.org/",
      logo: "/logos/doi.png",
      date: "Dec 2019 – Jan 2024",
      description: [
        "Founded a 501(c)(3) nonprofit offering free figure skating lessons to underrepresented individuals in the sport",
        "Designed and maintained website, enabling 100+ sign-ups",
      ],

    },
  ]
  

  export default function Experience() {
    return (<section id="experience" className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

      <div className="grid gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative border border-gray-200 rounded-2xl p-6 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-xl hover:scale-[1.015] transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <div className="flex items-center gap-4">
                <Link href={exp.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={60}
                    height={60}
                    className="rounded-md object-contain"
                  />
                </Link>
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <Link
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:underline"
                  >
                    {exp.company} · {exp.location}
                  </Link>
                </div>
              </div>
              <span className="text-sm text-gray-500 mt-2 sm:mt-0">
                {exp.date}
              </span>
            </div>

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>)
  }
   