import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:hello@avery.design',
    Icon: FiMail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/averyjohnson',
    Icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/averyjohnson',
    Icon: FiLinkedin,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/averydesigns',
    Icon: FiTwitter,
  },
]

const initialForm = {
  name: '',
  email: '',
  message: '',
}

const Contact = () => {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) {
      nextErrors.name = 'Please share your name.'
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'An email helps me reach back out.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'That doesn’t look like a valid email address.'
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Tell me a little about the project or request.'
    }
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setStatus('success')
      setFormData(initialForm)
      setTimeout(() => setStatus('idle'), 4000)
    } else {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="pb-24 pt-20 sm:pb-32">
      <div className="section-wrapper grid gap-16 lg:grid-cols-[1.05fr,1fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="eyebrow">Contact</span>
            <h2 className="font-display text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl">
              Ready to co-create something memorable?
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Whether you need help shaping a new product vision, designing a motion-rich experience, or building the frontend your team dreams about, I’m here to collaborate.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Reach out
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-slate-700 dark:text-slate-300"
                >
                  <Icon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  {label}
                  {href.startsWith('http') && <FiArrowUpRight className="text-xs" />}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col gap-6 rounded-[32px] border border-slate-200/60 bg-white/80 p-8 shadow-soft backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/60"
        >
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="How should I address you?"
              className={`mt-2 w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-400/40 dark:border-red-400' : ''}`}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Where can I reach you?"
              className={`mt-2 w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-400/40 dark:border-red-400' : ''}`}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share a bit about the opportunity, goals, and timeline."
              className={`mt-2 w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 ${errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-400/40 dark:border-red-400' : ''}`}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Send message
              <FiArrowUpRight />
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              I respond within two working days for new collaborations and speaking requests.
            </p>
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-xs font-semibold text-emerald-500"
              >
                Thanks for reaching out — I’ll be in touch shortly.
              </motion.p>
            )}
            {status === 'error' && Object.keys(errors).length > 0 && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xs font-semibold text-red-400"
              >
                Looks like a few fields need attention. Please double check and try again.
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
