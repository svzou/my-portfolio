import Head from "next/head";

export default function Classes() {
  const courses = [
    {
      title: "COMP 110: Introduction to Programming",
      description: "Basic programming concepts, Python syntax, control structures",
    },
    {
      title: "COMP 210: Data Structures and Analysis",
      description: "Arrays, linked lists, trees, graphs, complexity analysis",
    },
    {
        title: "COMP 211: Systems Fundamentals",
        description: "Low-level programming, memory management, system architecture",
    },
    {
      title: "COMP 301: Foundations of Programming",
      description: "OOP, design patterns, code maintenance, testing",
    },
    {
        title: "COMP 311: Computer Organization",
        description: "MIPS assembly language, computer architecture, memory hierarchy",
      },
      {
        title: "COMP 426: Modern Web Development",
        description: "Full-stack web development, React, Next.js, Tailwind CSS, Supabase, TypeScript",
      },
    {
      title: "COMP 455: Models of Languages and Computation",
      description: "Formal languages, automata, grammars, computability",
    },
    {
        title: "COMP 550: Algorithms and Analysis",
        description: "Greedy algorithms, dynamic programming, NP-hardness, approximation algorithms",
      },
      {
        title: "COMP 560: Introduction to Artificial Intelligence",
        description: "Search algorithms, combinatorial search, probabilistic models and reasoning",
      },
      {
        title: "BUSI 406: Marketing",
        description: "Consumer behavior, marketing functions, distribution channels",
      },
    {
      title: "BUSI 408: Corporate Finance",
      description: "Cash flow analysis, capital structure, capital budgeting",
    },
    {
      title: "BUSI 500: Entrepreneurship and Business Planning",
      description: "Made $1,200 in profit for Make-A-Wish Foundation through selling bakery goods",
    },
  ];

  return (
    <>
      
      <section id="classes" className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl text-4xl font-bold text-center mb-10">
          Classes I've Taken
        </h1>
        <div className="grid grid-cols-2 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="border rounded-xl p-5 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-muted-foreground mt-1 text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
