import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-lg font-medium">Nina's Portfolio</div>
        <nav className="space-x-6">
          <Link href="#about" className="hover:text-amber-300 transition-colors">
            About me
          </Link>
          <Link href="#projects" className="hover:text-amber-300 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-amber-300 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <p className="text-amber-300 mb-2">Hey, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-6">Nina Anderson</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            I'm a software engineer based in New York. I enjoy learning new tech, working with others, and solving real
            problems with code. I'm looking for opportunities where I can grow, build useful things, and be part of a
            creative tech team.
          </p>
          <div className="flex items-center">
            <Link
              href="#contact"
              className="inline-flex items-center text-amber-300 border-b border-amber-300 pb-1 hover:text-amber-100 transition-colors"
            >
              Say hi <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-12">About me</h2>

        <div className="mb-16">
          <h3 className="text-sm text-gray-400 mb-6">EDUCATION</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-1">NEW YORK UNIVERSITY</h4>
              <p className="text-sm text-gray-400 mb-2">2018 - 2022</p>
              <p className="text-sm text-gray-300">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-gray-300">Mathematics and English</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">CODING BOOTCAMP</h4>
              <p className="text-sm text-gray-400 mb-2">2022 - 2023</p>
              <p className="text-sm text-gray-300">Full Stack Web Development</p>
              <p className="text-sm text-gray-300">Computer Science & Data Structures</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">TECH INSTITUTE</h4>
              <p className="text-sm text-gray-400 mb-2">2023</p>
              <p className="text-sm text-gray-300">Advanced React Patterns</p>
              <p className="text-sm text-gray-300">Senior Software Development</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm text-gray-400 mb-6">WORK EXPERIENCE</h3>
          <div className="mb-8">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">TechCorp Solutions</h4>
              <p className="text-sm text-gray-400">01/2023 - Present</p>
            </div>
            <p className="text-sm text-gray-300 mb-4">Software Engineer</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                - Designed, implemented, and maintained the company's e-commerce platform using the MERN stack to
                support product showcasing, secure checkout, and customer engagement features.
              </li>
              <li>
                - Developed and optimized RESTful APIs to handle data processing and ensure seamless integration with
                third-party services.
              </li>
              <li>
                - Collaborated with design and marketing teams to optimize site aesthetics, improve SEO performance, and
                drive online traffic.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-12">Skill set</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium mb-4">Front-End Development</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>HTML5 (Intermediate)</li>
              <li>CSS3/SCSS (Intermediate)</li>
              <li>JavaScript (Intermediate)</li>
              <li>React.js (Intermediate)</li>
              <li>UI Design (Intermediate)</li>
              <li>Next.js (Intermediate)</li>
              <li>Tailwind CSS (Advanced)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Back-End Development</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Node.js/Express.js (Intermediate)</li>
              <li>MongoDB (Beginner)</li>
              <li>RESTful APIs (Intermediate)</li>
              <li>PostgreSQL (Beginner)</li>
              <li>Firebase (Intermediate)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Cloud / Tools</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>AWS (Simple Cloud Deployment)</li>
              <li>Git/GitHub (Intermediate)</li>
              <li>Docker (Beginner)</li>
              <li>Vercel/Netlify (Intermediate)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-12">Featured projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={`/placeholder.svg?height=400&width=600`}
                  alt="Project thumbnail"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Link href="#" className="bg-black/70 p-2 rounded-full hover:bg-black">
                    <Github className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="bg-black/70 p-2 rounded-full hover:bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>
                </div>
              </div>
              <h3 className="font-medium mb-2">Project Name</h3>
              <p className="text-sm text-gray-300 mb-2">
                A brief description of the project, what technologies were used, and what problem it solves.
              </p>
              <div className="text-xs text-gray-400">
                <span>React</span> · <span>Tailwind</span> · <span>Node.js</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-12">Contact</h2>

        <div className="flex justify-center space-x-4">
          <Link
            href="mailto:email@example.com"
            className="border border-gray-700 p-3 rounded-md hover:border-amber-300 hover:text-amber-300 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="border border-gray-700 p-3 rounded-md hover:border-amber-300 hover:text-amber-300 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="border border-gray-700 p-3 rounded-md hover:border-amber-300 hover:text-amber-300 transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Nina Anderson. All rights reserved.</p>
      </footer>
    </main>
  )
}
