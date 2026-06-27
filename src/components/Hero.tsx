import Logo from '../assets/logo.svg?react'

export const Hero = () => {
  return <section className="min-h-screen flex flex-col items-center justify-center pt-14 gap-6 text-center px-6">
    {/* Avatar */}
    <Logo className="w-24 h-24 text-accent-glow" />

    {/* Name + subtitle */}
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl font-semibold text-text-primary font-sans">
        Hi, I'm Wat
      </h1>
      <p className="text-lg text-text-secondary">Web Developer</p>
    </div>

    {/* Social links placeholder */}
    <div className="flex gap-4">
      <a href="#" className="px-4 py-2 border border-border rounded-lg text-text-muted text-sm hover:border-border-hover hover:text-text-secondary transition-all duration-300">GitHub</a>
      <a href="#" className="px-4 py-2 border border-border rounded-lg text-text-muted text-sm hover:border-border-hover hover:text-text-secondary transition-all duration-300">LinkedIn</a>
      <a href="#" className="px-4 py-2 border border-border rounded-lg text-text-muted text-sm hover:border-border-hover hover:text-text-secondary transition-all duration-300">Email</a>
    </div>
  </section>
}