import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="section-wrapper"
      >
        <div className="mt-6 flex items-center justify-between rounded-full border border-slate-200/60 bg-white/70 px-5 py-3 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/60">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-semibold uppercase tracking-widest text-white shadow-glow">
              AJ
            </div>
            <div className="hidden flex-col md:flex">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-100">Avery Johnson</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Product Designer & Engineer</span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {link.label}
                <span className="pointer-events-none absolute inset-x-0 top-[calc(100%+0.2rem)] h-[2px] origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Start a project
            </a>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-xl text-slate-600 transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-300 md:hidden"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="section-wrapper md:hidden"
          >
            <div className="mt-3 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-soft backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/95">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-base font-semibold text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Start a project
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
