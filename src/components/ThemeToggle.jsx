import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-11 w-20 items-center justify-start rounded-full border border-slate-200/70 bg-white/70 px-2 text-slate-500 shadow-inner transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-slate-800/60 dark:bg-slate-900/70 dark:text-slate-400"
      aria-label="Toggle theme"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3 text-base">
        <FiSun className={isDark ? 'text-slate-400 transition-colors duration-300' : 'text-brand transition-colors duration-300'} />
        <FiMoon className={isDark ? 'text-brand transition-colors duration-300' : 'text-slate-400 transition-colors duration-300'} />
      </div>
      <motion.div
        layout
        initial={false}
        animate={{ x: isDark ? 36 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
      >
        {isDark ? <FiMoon size={18} /> : <FiSun size={18} />}
      </motion.div>
    </button>
  )
}

export default ThemeToggle
