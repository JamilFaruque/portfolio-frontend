'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, useMotionValue } from 'framer-motion';
import { ArrowRight, Download, Github, ExternalLink, Code, Database, Globe, Linkedin, Mail } from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, integrate with email service or formspree
    alert('Thank you! Your message has been received. I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { name: 'Laravel', icon: <Code />, level: 90 },
    { name: 'React', icon: <Code />, level: 80 },
    { name: 'Next.js', icon: <Globe />, level: 80 },
    { name: 'Vue.js', icon: <Code />, level: 80 },
    { name: 'MySQL', icon: <Database />, level: 70 },
    { name: 'Tailwind CSS', icon: <Code />, level: 90 },
    { name: 'AI Integration', icon: <Code />, level: 80 },
    { name: 'Node.js', icon: <Code />, level: 60 },
  ];

  const projects = [
    {
      title: "VIVIPINS(Backend)",
      description: "Full-featured custom page builder system solving complexity of page creation and management",
      tech: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
      link: "#",
      github: "#",
      image: "/images/vivipins.png"
    },
    {
      title: "VIVIPINS(Frontend)",
      description: "Designed responsive ui for custom page builder system",
      tech: ["Next.js", "Tailwind"],
      link: "https://vivipins.com/",
      github: "#",
      image: "/images/vivipins-frontend.png"
    },
    {
      title: "Max Price Calculator(Backend)",
      description: "RestAPI, Calculates mortgage prices based on user input & builds dynamic layout for frontend",
      tech: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
      link: "https://vivipins.com/",
      github: "#",
      image: "/images/max-price-backend.png"
    },
    {
      title: "Max Price Calculator(Frontend)",
      description: "A comprehensive ui for American mortgagors to calculate their payments",
      tech: ["Next.js", "Tailwind"],
      link: "#",
      github: "#",
      image: "/images/max-price-frontend.png"
    },
    {
      title: "HandyCash Digital Loan",
      description: "A multi-vendor CRM to manage multiple vendors, clients and their loans.",
      tech: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
      link: "#",
      github: "#",
      image: "/images/easy-buy.png"
    },
    {
      title: "Agro Farm Management System",
      description: "Full-fleged app to monitor farm activities. Role based financial audit module included.",
      tech: ["Laravel", "Vue.js", "MySQL", 'Bootstrap'],
      link: "#",
      github: "#",
      image: "/images/true-farmers-agro.png"
    },
  ];

  const experiences = [
    {
      role: "Junior Full Stack Developer",
      company: "Tech Solutions BD",
      period: "2023 - Present",
      description: "Working on enterprise web applications with senior team. Implementing AI tools to accelerate development cycles.",
      achievements: [
        "Developed 5+ production-ready features",
        "Optimized database queries improving performance by 40%",
        "Integrated AI debugging assistant"
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self Employed",
      period: "2022 - 2023",
      description: "Built multiple client projects using modern tech stacks.",
      achievements: [
        "Delivered 12 projects on time",
        "Client satisfaction rate 98%"
      ]
    }
  ];

  const [isGlowingActive, setGlowingActive] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        onMouseEnter={(e) => setGlowingActive(true)}
        onMouseLeave={(e) => setGlowingActive(false)}
        className="pt-24 pb-20 min-h-[100dvh] flex items-center relative bg-[radial-gradient(at_50%_30%,rgba(16,185,129,0.15),transparent)]"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 z-[-99]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Mouse Glow */}
        {isGlowingActive && (
          <motion.div
            className="absolute w-96 h-96 rounded-full pointer-events-none"
            style={{
              left: mouseX,
              top: mouseY,
              x: "-50%",
              y: "-50%",
              background:
                "radial-gradient(circle, rgba(0,150,255,0.25) 0%, transparent 20%)",
              pointerEvents: "none",
            }}
          />
        )}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/70 text-cyan-400 text-sm border border-cyan-900">
              🇧🇩 Dhaka, Bangladesh • Open to Opportunities
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none">
              Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Omar Faruk Jamil
              </span>
            </h1>
            
            <p className="text-2xl text-slate-400 max-w-lg">
              Full Stack Developer crafting exceptional digital experiences with Laravel, Vue.js &amp; Next.js
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="group px-8 py-4 bg-white text-slate-950 rounded-2xl font-semibold flex items-center gap-3 hover:bg-slate-100 transition-all active:scale-[0.985]"
              >
                View My Work 
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-4 border border-slate-500 hover:border-white rounded-2xl font-medium transition-all"
              >
                Let&apos;s Connect
              </a>
            </div>

            <div className="flex gap-8 pt-6 text-sm text-slate-400">
              <div>
                <div className="text-4xl font-semibold text-white">10+</div>
                Projects
              </div>
              <div>
                <div className="text-4xl font-semibold text-white">2+</div>
                Years Experience
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-[380px] md:h-[380px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-500/20 rounded-[4rem] rotate-6"></div>
              <div className="relative w-full h-full bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-700 shadow-2xl">
                <img 
                  src="/images/myself.png" 
                  alt="Jamil" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs tracking-[3px]">SCROLL TO EXPLORE</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            ↓
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-400 font-mono text-sm tracking-[4px] mb-3">CHAPTER 01</div>
            <h2 className="text-5xl font-bold">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8 text-lg text-slate-300">
              <p>
                Passionate full-stack developer based in Dhaka with a strong foundation in modern web technologies. 
                I specialize in building scalable web applications and have hands-on experience with Laravel,Vue, React, Next.js, and database.
              </p>
              <p>
                Currently focusing on AI-assisted development to accelerate project delivery and improve code quality. 
                I thrive in collaborative environments and enjoy solving complex problems with elegant solutions.
              </p>
              <p>
                When I&apos;m not coding, you will find me travelling a lot.Exploring new places, people and cultures is my passion.
              </p>
            </div>
            
            <div className="md:col-span-5">
              <div className="glass p-8 rounded-3xl">
                <div className="space-y-6">
                  <div>
                    <div className="text-emerald-400 text-sm mb-1">CURRENT FOCUS</div>
                    <div className="font-semibold">AI-Driven Development Workflows</div>
                  </div>
                  <div>
                    <div className="text-emerald-400 text-sm mb-1">EDUCATION</div>
                    <div>Bachelor in English • National University</div>
                  </div>
                  <div>
                    <div className="text-emerald-400 text-sm mb-1">LANGUAGES</div>
                    <div>Bangla (Native) • English (Fluent)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-400 font-mono text-sm tracking-[4px] mb-3">CHAPTER 02</div>
            <h2 className="text-5xl font-bold mb-4">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-md mx-auto">Tools and technologies I use to bring ideas to life</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-3xl group hover:border-cyan-500/30 border border-transparent"
              >
                <div className="text-4xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{skill.name}</h3>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-500 transition-all" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs text-slate-500 mt-1">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-400 font-mono text-sm tracking-[4px] mb-3">CHAPTER 03</div>
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400">Selected works that showcase my skills and passion</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card group bg-slate-900/70 border border-slate-700 rounded-3xl overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-slate-800 text-slate-400 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.link} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-2xl hover:bg-slate-100 font-medium">
                      Live Demo <ExternalLink size={16} />
                    </a>
                    {/* <a href={project.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-slate-600 hover:border-white rounded-2xl transition-all">
                      Code <Github size={16} />
                    </a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com" target="_blank" className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300">
              See all projects on GitHub <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-400 font-mono text-sm tracking-[4px] mb-3">CHAPTER 04</div>
            <h2 className="text-5xl font-bold">Experience</h2>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-3xl"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="md:w-56 flex-shrink-0">
                    <div className="font-mono text-sm text-emerald-400">{exp.period}</div>
                    <div className="text-xl font-semibold mt-1">{exp.company}</div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">{exp.role}</h3>
                    <p className="text-slate-400 mb-6">{exp.description}</p>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <span className="text-emerald-500 mt-1">•</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-cyan-400 font-mono text-sm tracking-[4px]">FINAL CHAPTER</div>
            <h2 className="text-5xl font-bold mt-3">Let&apos;s Build Something Great</h2>
            <p className="mt-4 text-slate-400">I&apos;m currently available for full-time opportunities and interesting freelance projects.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 glass p-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-slate-400 mb-2">YOUR NAME</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-2xl px-6 py-4 outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-2xl px-6 py-4 outline-none" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-slate-400 mb-2">MESSAGE</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-3xl px-6 py-4 outline-none resize-y" 
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:brightness-110 text-white font-semibold rounded-2xl text-lg transition flex items-center justify-center gap-3 group"
            >
              SEND MESSAGE 
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com" target="_blank" className="text-slate-400 hover:text-white"><Github size={26} /></a>
            <a href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-white"><Linkedin size={26} /></a>
            <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-white"><Mail size={26} /></a>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Omar Faruk Jamil. Crafted with ❤️ in Dhaka.
          </p>
        </div>
      </footer>
    </div>
  );
}
