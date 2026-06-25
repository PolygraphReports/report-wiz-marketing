import Image from 'next/image'
import Link from 'next/link'

const APP_URL = 'https://app.polygraphreports.com'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ploy-border-primary bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/images/logo.png" alt="Report Wiz" width={36} height={36} className="h-9 w-auto" />
          <span className="font-heading text-xl font-extrabold tracking-tight text-ploy-text-primary">
            Report Wiz
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#audiences"
            className="text-sm font-medium text-ploy-text-secondary transition-colors hover:text-ploy-text-primary"
          >
            Who it&apos;s for
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-ploy-text-secondary transition-colors hover:text-ploy-text-primary"
          >
            How it works
          </Link>
          <Link
            href="/#security"
            className="text-sm font-medium text-ploy-text-secondary transition-colors hover:text-ploy-text-primary"
          >
            Security
          </Link>
          <Link
            href="/#proof"
            className="text-sm font-medium text-ploy-text-secondary transition-colors hover:text-ploy-text-primary"
          >
            Customers
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={APP_URL}
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-ploy-text-secondary transition-colors hover:text-ploy-text-primary sm:block"
          >
            Sign in
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center rounded-full bg-ploy-accent-primary px-5 py-2.5 text-sm font-semibold text-ploy-text-on-accent-primary transition-colors hover:bg-ploy-accent-primary/90"
          >
            Start free
          </a>
        </div>
      </div>
    </header>
  )
}
