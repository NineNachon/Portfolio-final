import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import myImage from '../assets/my-image.jpg';

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
          <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-6">Nachon Boriboonthana</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          I'm a software engineer based in Bangkok, I enjoy learning new tools, working with others, and solving 
          real problems with code. I'm looking for opportunities where I can grow, build useful things, 
          and be part of a creative tech team.
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
              <h4 className="font-medium mb-1">BANGKOK CHRISTIAN COLLEGE</h4>
              <p className="text-sm text-gray-400 mb-2">2004 - 2016</p>
              <p className="text-sm text-gray-300">High school</p>
              <p className="text-sm text-gray-300">Mathematics and English</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">ASSUMPTION UNIVERSITY</h4>
              <p className="text-sm text-gray-400 mb-2">2016 - 2019</p>
              <p className="text-sm text-gray-300"> Some college, no degree </p>
              <p className="text-sm text-gray-300">Computer Science & ВВА</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">GENERATION THAILAND</h4>
              <p className="text-sm text-gray-400 mb-2">2022</p>
              <p className="text-sm text-gray-300">Bootcamp</p>
              <p className="text-sm text-gray-300">Junior Software Developer</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm text-gray-400 mb-6">WORK EXPERIENCE</h3>
          <div className="mb-8">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">Millie Jewelry</h4>
              <p className="text-sm text-gray-400">01/2023 - 05/2023</p>
            </div>
            <p className="text-sm text-gray-300 mb-4">Software developer</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                - Designed, customized, and maintained the company's e-commerce website using the WIX platform 
                to support product showcasing, secure checkout, and customer engagement features.
              </li>
              <li>
                - Integrated third-party tools for payment processing, inventory tracking, and marketing automation.
              </li>
              <li>
                - Collaborated with design and marketing teams to optimize site aesthetics, improve SEO performance, and drive online traffic.
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
              <li>Tailwind CSS (Basic)</li>
              <li>Typescript (Intermediate)</li>
              <li>Figma (Intermediate)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Back-End Development</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>MEAN stack (MongoDB, Express.js, Angular, 
                Node.js) (intermediate) </li>
              <li>MongoDB (Basicr)</li>
              <li>RESTful APIs (Intermediate)</li>
              <li>PostgreSQL (Beginner)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Cloud / Tools</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>AWS / Google Cloud (Simple Cloud Deployment)</li>
              <li>Git/GitHub (Intermediate)</li>
              <li>Docker (Basic)</li>
              <li>Vercel/Netlify (Intermediate)</li>
              <li>WIX (Intermediate)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-12">Featured projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[1].map((item) => (
            <div key={item} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={myImage}
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
              <h3 className="font-medium mb-2">Fitness Tracker</h3>
              <p className="text-sm text-gray-300 mb-2">
              This project was originally created as a Final Project for a Bootcamp, but has since been 
              reworked with AI integration and a Supabase-powered backend.
              </p>
              <div className="text-xs text-gray-400">
                <span>React</span> · <span>Tailwind</span> · <span>TypeScript</span>
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
