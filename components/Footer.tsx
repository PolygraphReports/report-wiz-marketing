import Link from 'next/link'
import LogoIcon from '@/components/LogoIcon'

export default function Footer() {
  return (
    <footer className="bg-ploy-neutral-inverse text-ploy-text-inverse">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-full">
            <div className="flex items-start gap-4 text-ploy-text-inverse">
              <LogoIcon className="h-[7rem] w-auto shrink-0" />
              <div>
                <span className="font-heading text-[2.5rem] font-extrabold leading-none tracking-tight">
                  Report Wiz
                </span>
                <p className="mt-4 text-lg leading-relaxed text-ploy-text-inverse-secondary">
                  Turn any recording into a standard-for-you report with law enforcement-grade security and the transcript included by default.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grow grid-cols-2 gap-8 sm:grid-cols-3 md:max-w-xl">
            <div>
              <h3 className="text-sm font-semibold text-ploy-text-inverse">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/#how-it-works"
                    className="text-sm text-ploy-text-inverse-secondary transition-colors hover:text-ploy-text-inverse"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#audiences"
                    className="text-sm text-ploy-text-inverse-secondary transition-colors hover:text-ploy-text-inverse"
                  >
                    Who it&apos;s for
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#security"
                    className="text-sm text-ploy-text-inverse-secondary transition-colors hover:text-ploy-text-inverse"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ploy-text-inverse">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:sales@polygraphreports.com?subject=Report%20Wiz%20Interest"
                    className="text-sm text-ploy-text-inverse-secondary transition-colors hover:text-ploy-text-inverse"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.reportwiz.ai/terms"
                    className="text-sm text-ploy-text-inverse-secondary transition-colors hover:text-ploy-text-inverse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="https://trust.polygraphreports.com"
                    className="text-sm text-ploy-text-inverse-secondary transition-colors hover:text-ploy-text-inverse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trust Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ploy-text-inverse">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/ai-responsible-use-polygraph"
                    className="text-sm text-ploy-text-inverse-secondary transition-colors hover:text-ploy-text-inverse"
                  >
                    Responsible AI for Polygraph Examiners
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/polygraphreports/"
                    className="text-sm text-ploy-text-inverse-secondary transition-colors hover:text-ploy-text-inverse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ploy-border-inverse pt-8 text-sm text-ploy-text-inverse-secondary">
          &copy; {new Date().getFullYear()} Report Wiz. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
