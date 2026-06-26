type LogoIconProps = {
  className?: string
}

export default function LogoIcon({ className = 'h-9 w-auto' }: LogoIconProps) {
  return (
    <img
      src="/images/logo.png"
      alt=""
      aria-hidden
      className={className}
    />
  )
}
