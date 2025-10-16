import { motion } from 'framer-motion'
import { skillCategories, highlightedSkills } from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-wrapper space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl space-y-4"
        >
          <span className="eyebrow">Expertise</span>
          <h2 className="font-display text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Skills, tools, and rituals that transform ambitious product ideas into delightful realities.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            I bridge design and engineering with a systems mindset, ensuring every interaction aligns with customer goals, business outcomes, and technical excellence.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="flex h-full flex-col gap-6 rounded-[32px] border border-slate-200/60 bg-white/80 p-8 shadow-soft backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{category.description}</p>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.Icon
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-base text-slate-600 dark:bg-slate-800/80 dark:text-slate-300">
                            <Icon />
                          </span>
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/60 dark:bg-slate-800/70">
                        <motion.span
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 0.8, ease: 'easeOut', delay: skillIndex * 0.08 }}
                          className="block h-full rounded-full bg-gradient-to-r from-brand via-sky-400 to-brand/70"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="rounded-[32px] border border-slate-200/60 bg-white/80 p-8 shadow-soft backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/60">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Focus areas
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {highlightedSkills.map((item) => (
                <span key={item} className="tag text-[0.7rem]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
