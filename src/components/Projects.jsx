import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-wrapper space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <span className="eyebrow">Selected work</span>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl">
              A selection of recent products and experiences crafted with exceptional teams.
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-slate-700 dark:text-slate-300"
            >
              Let’s build together
              <FiArrowUpRight />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid gap-10 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="group overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/80 shadow-soft backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-glow dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-transparent to-brand/20 opacity-0 transition group-hover:opacity-100" />
                <div className="absolute left-6 top-6 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-sm backdrop-blur dark:bg-slate-900/80 dark:text-slate-300">
                  Case study
                </div>
              </div>
              <div className="space-y-6 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                  </div>
                  <div className="hidden shrink-0 lg:block">
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700 dark:text-slate-300"
                        aria-label={`Open ${project.title} live project`}
                      >
                        <FiArrowUpRight />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700 dark:text-slate-300"
                        aria-label={`View ${project.title} repository`}
                      >
                        <FiGithub />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex w-full flex-col gap-3 lg:hidden">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    Visit live project
                    <FiArrowUpRight />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/70 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700 dark:text-slate-300"
                  >
                    View repository
                    <FiGithub />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
