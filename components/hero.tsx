import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">

        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex items-center justify-center">
            <img
              src="/headshot.jpg"
              alt="Sophia Zou headshot"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "1 / 1" }}
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to my corner of the internet!
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-6">
          I am a Senior from Cincinnati, Ohio 🏠 attending the University of North Carolina at Chapel Hill 📚 majoring in Computer Science 💻 and minoring in Business Administration 💼.
          You can usually find me lifting 💪 at the gym or on walks 🚶‍♀️ around campus.
          Some fun facts: I was a figure skater ⛸️ for 13 years and I have a dog 🐶 named Candi.
        </p>

        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/sophia-zou/"
            target="__blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/svzou"
            target="__blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-gray-800"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sophiavzou@gmail.com"
            className="transition-transform hover:scale-110 hover:text-red-600"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
