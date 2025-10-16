import { motion } from 'framer-motion'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-200/60 bg-white/70 py-8 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/30">
      <div className="section-wrapper flex flex-col gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          © {year} Avery Johnson. Crafted with curiosity, care, and plenty of playlists.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          className="text-xs uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500"
        >
          Currently available for select collaborations
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
