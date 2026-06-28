import Logo from '../../assets/logo.svg?react'

export const PlaceholderCard = () => {
  return <div className="bg-bg-card border border-border border-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-3 min-h-[140px]">
    <Logo className="w-10 h-10 text-text-muted opacity-40" />
    <p className="text-xs text-text-muted">Coming soon</p>
  </div>
}