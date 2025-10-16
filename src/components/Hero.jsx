import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight, FiDownload } from 'react-icons/fi'

const stats = [
  { label: 'Years crafting products', value: '8+' },
  { label: 'Products launched', value: '26' },
  { label: 'Teams partnered with', value: '18' },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-36 pb-24 sm:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-26rem] h-[28rem] bg-gradient-to-b from-brand/40 via-transparent to-transparent blur-3xl dark:from-brand/30" />
        <div className="absolute right-[-10rem] top-1/3 h-[26rem] w-[26rem] rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-300/10" />
        <div className="absolute inset-0 bg-grid-light bg-[length:36px_36px] opacity-[0.12] dark:bg-grid-dark dark:opacity-[0.08]" />
      </div>

      <div className="section-wrapper relative z-10 grid items-center gap-16 lg:grid-cols-[1.2fr,1fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-8"
        >
          <span className="eyebrow">Product designer & creative engineer</span>
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
              className="font-display text-4xl leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              I help vision-led teams design immersive digital experiences that feel effortless.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
              className="max-w-2xl text-lg text-slate-600 dark:text-slate-300"
            >
              Partnering with founders and product organisations to craft modern product ecosystems — from narrative-driven strategy and design systems to high fidelity prototypes and production-ready interfaces.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              View latest work
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
            </a>
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand dark:hover:text-brand"
            >
              Download résumé
              <FiDownload />
            </a>
          </motion.div>

          <motion.dl
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18 },
              },
            }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="rounded-3xl border border-slate-200/60 bg-white/70 p-5 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/60"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {stat.label}
                </dt>
                <dd className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="h-[28rem] w-full rounded-[42px] bg-gradient-to-br from-brand/60 via-brand/30 to-transparent p-[6px] shadow-glow">
              <div className="relative h-full w-full overflow-hidden rounded-[38px] border border-white/40 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-900/80">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-brand/10 dark:from-white/5" />
                <div className="absolute inset-6 rounded-[30px] border border-dashed border-slate-200/70 dark:border-slate-700/60" />
                <div className="absolute left-6 top-6 space-y-3">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 backdrop-blur dark:bg-slate-900/80">
                    Currently partnering
                  </span>
                  <p className="max-w-[16rem] text-base font-semibold text-slate-700 dark:text-slate-200">
                    Designing the next generation of collaborative workspace tools at <span className="text-brand">Lumen Labs</span>.
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                  className="absolute bottom-8 right-8 flex flex-col items-end gap-2"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    Working across
                  </span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Product Design
                    <span className="h-1 w-1 rounded-full bg-slate-400" />
                    Design Systems
                    <span className="h-1 w-1 rounded-full bg-slate-400" />
                    Frontend
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
              className="absolute -bottom-10 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl border border-slate-200/70 bg-white/90 p-5 text-sm text-slate-600 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/90 dark:text-slate-300"
            >
              "Avery brings the rare blend of design sensitivity and technical depth. The experiences we ship feel alive — and customers notice."
              <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                — Alex Chen, VP Product at Lumen Labs
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="group absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-slate-200/70 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-600 shadow backdrop-blur transition hover:border-brand hover:text-brand dark:border-slate-800/60 dark:bg-slate-900/70 dark:text-slate-300 lg:flex"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
      >
        Scroll to explore
        <FiArrowDown className="transition-transform group-hover:translate-y-1" />
      </motion.a>
    </section>
  )
}

export default Hero
