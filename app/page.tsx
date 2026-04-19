import LineWaves from '@/components/LineWaves';
import PortfolioDock from '@/components/PortfolioDock';

const focusAreas = [
  {
    title: 'Production-first builds',
    summary: 'I focus on reliable systems with clear deployment paths and maintainable codebases.'
  },
  {
    title: 'Backend-heavy full stack',
    summary: 'React on the front, FastAPI or Node on the back, with cloud infra that is practical and cost-aware.'
  },
  {
    title: 'Applied AI that ships',
    summary: 'From RAG flows to inference optimization, I care about measurable outcomes and developer ergonomics.'
  }
];

const experiences = [
  {
    company: 'BioCompute Inc',
    period: 'Jan 2026 - Present',
    role: 'Software Development Intern | Part-time',
    summary:
      'Next.js + PostgreSQL production site, edge deployment on Raspberry Pi 5 via Docker + Nginx, CI/CD with GitHub Actions.',
    isActive: true
  },
  {
    company: 'MyManah',
    period: 'May 2025 - Aug 2025',
    role: 'Software Development Intern',
    summary:
      'Full-stack mental health platform on AWS (EC2, RDS, Lambda, Cognito). LoRA fine-tuning cut latency 40%.'
  },
  {
    company: 'Crackverbal Edutech',
    period: 'Jan 2025 - Mar 2025',
    role: 'Tech Projects Intern',
    summary:
      'SEO pipeline improvements (54 -> 85), campaign pages, Zoho CRM automation saving ~3 hrs/week.'
  }
];

const projects = [
  {
    title: 'RAG Observability Pipeline',
    description:
      'Full-stack RAG pipeline with real-time observability dashboard for latency, token usage, and chunk confidence per query.',
    tech: ['Next.js', 'FastAPI', 'ChromaDB', 'LangChain', 'Groq'],
    accent: 'bg-emerald-400',
    href: 'https://ragdog.a8h1km.me/',
    external: true
  },
  {
    title: 'FinTrack',
    description:
      'Personal finance tracker with a type-safe REST API, Drizzle ORM, and interactive Chart.js spending dashboards.',
    tech: ['Next.js', 'TypeScript', 'Neon', 'Chart.js'],
    accent: 'bg-sky-400',
    href: 'https://fintrackio.vercel.app/',
    external: true
  },
  {
    title: 'Image Steganography App',
    description:
      'A React app for image steganography that hides and retrieves secret text inside image files.',
    tech: ['React', 'Cryptography', 'Image Processing'],
    accent: 'bg-violet-400',
    href: 'https://image-steganography-py.vercel.app',
    external: true
  },
  {
    title: 'Malicious URL Scanner',
    description:
      'A React app that detects malicious URLs and surfaces scan reports from multiple intelligence sources.',
    tech: ['React', 'Security', 'Threat Intelligence'],
    accent: 'bg-amber-400',
    href: 'https://url-scanner-gold.vercel.app/',
    external: true
  },
  {
    title: 'Roadmap.sh Frontend Clone',
    description:
      'A frontend clone inspired by roadmap.sh, focused on layout replication and clean component composition.',
    tech: ['React', 'Frontend Architecture', 'UI Cloning'],
    accent: 'bg-rose-400',
    href: 'https://a8h1km.github.io/roadmap-clone/',
    external: true
  }
];

const skills = [
  {
    label: 'Languages',
    keywords: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C']
  },
  {
    label: 'Frontend',
    keywords: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS']
  },
  {
    label: 'Backend',
    keywords: [
      'FastAPI',
      'Node.js',
      'Express.js',
      'AWS Lambda',
      'REST APIs',
      'Microservices',
      'System Design',
      'Distributed Systems'
    ]
  },
  {
    label: 'Practices',
    keywords: ['Agile/Scrum', 'Unit Testing', 'Code Review', 'CI/CD', 'Prompt Engineering']
  },
  {
    label: 'Cloud & Infra',
    keywords: [
      'AWS',
      'EC2',
      'RDS',
      'SNS',
      'VPC',
      'Lambda',
      'Cognito',
      'Docker',
      'Nginx',
      'Cloudflare',
      'GitHub Actions',
      'Kubernetes (familiar)',
      'Raspberry Pi Edge'
    ]
  },
  {
    label: 'Databases',
    keywords: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Neon', 'ChromaDB']
  },
  {
    label: 'AI/ML',
    keywords: [
      'LLM Integration',
      'RAG Pipelines',
      'LangChain',
      'Vector Embeddings',
      'LoRA Fine-tuning',
      'Model Quantization',
      'Prompt Engineering',
      'Real-time Inference Optimization',
      'Observability'
    ]
  }
];

export default function Home() {
  return (
    <main className="bg-zinc-950 pb-28 text-zinc-100 md:pb-24">
      <PortfolioDock />

      <section id="home" className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <LineWaves
            speed={0.1}
            innerLineCount={32}
            outerLineCount={36}
            warpIntensity={1}
            rotation={-45}
            edgeFadeWidth={0}
            colorCycleSpeed={1}
            brightness={0.2}
            color1="#f70303"
            color2="#00ffaa"
            color3="#1300ff"
            enableMouseInteraction
            mouseInfluence={2}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-zinc-950" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-10 pt-6 sm:px-10">
          <div className="mt-auto max-w-3xl pb-16 text-left sm:pb-20">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-200/80">
              Software Engineer | Bengaluru
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Abhishek K M
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
              Backend and full-stack engineer. I build production systems with React, FastAPI, and AWS from LLM pipelines to edge deployments.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-white"
              >
                View projects
              </a>
              <a
                href="/Abhishek_KM_Resume_Apr_26.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-200/60 px-6 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-100"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="rounded-full border border-zinc-200/60 px-6 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-100"
              >
                Get in touch
              </a>
            </div>
          </div>

          <a
            href="#work"
            className="self-start text-xs uppercase tracking-[0.22em] text-zinc-300/80 transition hover:text-zinc-100"
          >
            scroll
          </a>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/70">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-8 sm:grid-cols-3 sm:px-10">
          {focusAreas.map((area) => (
            <article key={area.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
              <p className="text-lg font-semibold text-zinc-100">{area.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{area.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto w-full max-w-6xl px-6 py-18 sm:px-10">
        <p className="max-w-3xl text-base leading-relaxed text-zinc-300">
          Final-year CS student shipping real systems across bioengineering, healthtech, and edtech end-to-end, in production.
        </p>

        <div className="mt-12 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Experience</h2>
          <p className="text-sm text-zinc-400">3 roles</p>
        </div>

        <div className="mt-6 space-y-4">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  {experience.isActive ? (
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  ) : null}
                  <h3 className="text-xl font-medium text-zinc-100">{experience.company}</h3>
                </div>
                <p className="text-sm text-zinc-400">{experience.period}</p>
              </div>
              <p className="mt-1 text-sm text-zinc-300">{experience.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{experience.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-zinc-800 bg-zinc-900/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-18 sm:px-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Projects</h2>
            {/* <p className="text-sm text-zinc-300">selected work</p> */}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 transition duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.03] hover:border-zinc-600 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
              >
                <div className={`h-[3px] ${project.accent}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-medium text-zinc-100">{project.title}</h3>
                    {project.href ? (
                      <a
                        href={project.href}
                        target={project.external ? '_blank' : undefined}
                        rel={project.external ? 'noreferrer' : undefined}
                        className="inline-flex items-center rounded-full border border-emerald-300/50 bg-emerald-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-200 transition hover:bg-emerald-300 hover:text-zinc-900"
                      >
                        Visit
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-zinc-500">Internal</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-300">
                    {project.tech.map((item) => (
                      <li key={item} className="rounded-full border border-zinc-700 px-3 py-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-18 sm:px-10">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Skills</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.label}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 transition duration-300 hover:border-emerald-300/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]"
            >
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-300/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/90">{skill.label}</p>
              <ul className="relative mt-4 flex flex-wrap gap-2 text-xs text-zinc-200">
                {skill.keywords.map((keyword) => (
                  <li key={`${skill.label}-${keyword}`} className="rounded-full border border-zinc-700 px-3 py-1">
                    {keyword}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-y border-zinc-800 bg-zinc-900/65">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-5 px-6 py-18 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Let&apos;s work together</h2>
          <p className="text-zinc-300">Open to internships, contracts, and full-time roles</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="mailto:abhikm.369@gmail.com"
              className="rounded-full bg-zinc-100 px-5 py-2 font-medium text-zinc-900 transition hover:bg-white"
            >
              Email me
            </a>
            <a href="https://www.linkedin.com/in/abhishekkm-/" target="_blank" rel="noreferrer" className="text-zinc-200 transition hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/a8h1km/" target="_blank" rel="noreferrer" className="text-zinc-200 transition hover:text-white">
              GitHub
            </a>
            <a href="https://leetcode.com/u/a8h104" target="_blank" rel="noreferrer" className="text-zinc-200 transition hover:text-white">
              Leetcode
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-6 py-8 text-xs text-zinc-400 sm:px-10">
        <p>(c) 2026 Abhishek K M</p>
        <p className="mt-2">Built with Next.js | Deployed on Vercel | Hosted using Cloudflare</p>
      </footer>
    </main>
  );
}
