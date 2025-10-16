import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const STORAGE_KEY = 'portfolio-theme-preference'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light'
  }
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[180px] dark:bg-brand/10" />
        <div className="absolute -bottom-40 right-[-16rem] h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-[160px] dark:bg-indigo-500/10" />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
