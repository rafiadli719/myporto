import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Designing for momentum',
    description:
      'I build design systems and product foundations that enable teams to ship with consistency, clarity, and pace.',
  },
  {
    title: 'Engineering the details',
    description:
      'From micro-interactions to performant architecture, I translate concepts into production-ready, inclusive experiences.',
  },
  {
    title: 'Leading collaborative teams',
    description:
      'I thrive in cross-functional squads, facilitating discovery workshops, running design critiques, and mentoring designers & engineers.',
  },
]

const experience = [
  {
    company: 'Lumen Labs',
    role: 'Principal Product Designer & Engineer',
    period: '2022 — Present',
    focus: 'Leading the end-to-end product vision for a collaborative workspace platform serving 45k+ teams globally.',
  },
  {
    company: 'Orbit Studio',
    role: 'Head of Design Systems',
    period: '2019 — 2022',
    focus: 'Scaled a multi-brand design language, streamlining delivery across marketing, product, and growth surfaces.',
  },
  {
    company: 'Independent',
    role: 'Design Partner',
    period: '2015 — 2019',
    focus: 'Collaborated with early-stage startups to define product visions, ship v1 experiences, and prepare for fundraising.',
  },
]

const About = () => {
  return (
    <section id="about" className="pb-24 pt-20 sm:pb-28">
      <div className="section-wrapper grid gap-16 lg:grid-cols-[1.05fr,1fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="eyebrow">About</span>
            <h2 className="font-display text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl">
              Designer-engineer crafting cohesive, story-driven product journeys.
            </h2>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Over the last decade, I have partnered with venture-backed teams and global organisations to launch purposeful, immersive digital experiences. My practice blends systems thinking, motion-led storytelling, and hands-on engineering to bridge strategy and execution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="rounded-3xl border border-slate-200/60 bg-white/70 p-6 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/60"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -top-8 left-6 hidden h-24 w-24 rounded-full bg-brand/20 blur-2xl dark:bg-brand/10 lg:block" />
          <div className="overflow-hidden rounded-[36px] border border-slate-200/60 bg-white/80 p-8 shadow-soft backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/60">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    Experience
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                    Where I have been recently
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border border-slate-200/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:border-slate-700 dark:text-slate-300">
                  Trusted partner
                </span>
              </div>

              <div className="space-y-4">
                {experience.map((item) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="rounded-3xl border border-slate-200/60 bg-white/70 p-5 transition hover:border-brand/60 hover:bg-brand/10 dark:border-slate-800/60 dark:bg-slate-900/60 dark:hover:border-brand/40 dark:hover:bg-brand/10"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.company}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{item.focus}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
