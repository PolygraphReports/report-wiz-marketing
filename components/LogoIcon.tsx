type LogoIconProps = {
  className?: string
  variant?: 'light' | 'dark'
}

export default function LogoIcon({ className = 'h-9 w-auto', variant = 'light' }: LogoIconProps) {
  const src =
    variant === 'dark' ? '/images/reportwiz-text-dark.png' : '/images/reportwiz-text-light.png'

  return <img src={src} alt="ReportWiz.ai" className={className} />
}
