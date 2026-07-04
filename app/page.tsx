import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PricingSection from '@/components/PricingSection'
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CheckIcon,
  FileTextIcon,
  LockIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@/components/icons'

const APP_URL = 'https://app.reportwiz.ai'
const APP_REGISTER_URL = 'https://app.reportwiz.ai/register'
const TRUST_CENTER_URL = 'https://trust.polygraphreports.com'
const DEMO_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3aKqTQdxBsjh7pmXxU4IKmDhkVa5LZ5qPk6qq6IJcfjvBfyK1H1KzKjJEQop2dg4Cu7_T91vae?gv=true'

const stats = [
  { value: '80%+', label: 'Less time spent writing reports or notes without losing control' },
  { value: 'CJIS ready', label: 'Built for law enforcement but available for everyone' },
  { value: 'Private', label: 'Your data is never sold, shared, or used to train AI models' },
  { value: 'Transcript', label: 'Every report includes the transcript by default' },
]

const audiences = [
  {
    image: '/images/audience-law-enforcement.png',
    alt: 'Law enforcement investigative interview room',
    title: 'Law Enforcement',
    body: 'Investigators can turn recorded interviews into court-ready narrative reports — minimizing note-taking so you stay focused on the subject.',
  },
  {
    image: '/images/audience-therapy.png',
    alt: 'Private therapy office with two chairs',
    title: 'Therapists & Clinicians',
    body: 'Capture sessions and intake conversations as structured clinical documentation, so more of your time stays with the client and less goes to write-ups.',
  },
  {
    image: '/images/audience-consulting.png',
    alt: 'Consulting meeting with laptop and documents',
    title: 'Investigators & Consultants',
    body: 'Translate interviews, assessments, and stakeholder conversations into consistent, branded deliverables your clients can rely on with a simple, controlled workflow.',
  },
]

const workflowSteps = [
  {
    step: '01',
    title: 'Upload the recording',
    body: 'Drop in your interview audio or video — plus any supporting documents — to secure, encrypted storage.',
  },
  {
    step: '02',
    title: 'Get an accurate transcript',
    body: 'Report Wiz produces a clear, speaker-labeled transcript you can review and confirm in minutes.',
  },
  {
    step: '03',
    title: 'Customize the report',
    body: 'Generate a structured first draft on your own template, then edit any section, add detail, and shape it your way.',
  },
  {
    step: '04',
    title: 'Export & deliver',
    body: 'Export to PDF or Word for storage and sharing. Includes your logo, signature, or any other branding.',
  },
]

const controlPoints = [
  {
    title: 'Your templates, your standards',
    body: 'Build custom report templates so every draft follows the structure your work, agency, or clients require.',
  },
  {
    title: 'Edit every word',
    body: 'The AI draft is a starting point, not the final say. Correct, add, and refine any section before you sign off.',
  },
  {
    title: 'Transcript always included',
    body: 'Every report ships with the verbatim, speaker-labeled transcript — a reliable record for review and case files.',
  },
]

const securityItems = [
  {
    icon: ShieldCheckIcon,
    title: 'CJIS compliant',
    body: 'Compliant with CJIS standards for the storage and handling of criminal justice data.',
  },
  {
    icon: LockIcon,
    title: 'Zero data retention',
    body: "Through OpenAI's Zero Data Retention program, none of your data is stored or used for training.",
  },
  {
    icon: ServerIcon,
    title: 'AWS GovCloud',
    body: 'Servers run solely in the same highly-protected data centers as the US Federal Government.',
  },
  {
    icon: BadgeCheckIcon,
    title: 'SOC 2 Type II',
    body: (
      <>
        Completing the final observation phase for SOC 2 Type II — track progress in our{' '}
        <a
          href={TRUST_CENTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-ploy-accent-primary transition-colors"
        >
          Trust Center
        </a>
        .
      </>
    ),
  },
]

const testimonials = [
  {
    quote:
      'It keeps me focused during interviews by minimizing note-taking, and it has reduced my report-writing time by over 80%. I finish reports faster and enjoy more time with my family.',
    name: 'Travis Hobbs',
    company: 'KT Polygraph & Consulting',
  },
  {
    quote:
      'Instead of spending hours figuring out my own system, I can focus on the interview while the software organizes and writes the report. The ability to go back and correct or add details is incredibly handy.',
    name: 'Jim Hardy',
    company: 'Beacon Investigations & Polygraph, LLC',
  },
  {
    quote:
      "A product that gives my clients a concise, well-written report I'm proud to put my company's name on. It covered every aspect of my exam and saved me valuable time.",
    name: 'Benjamin Sweeney',
    company: 'Director, Acadian Polygraph Services',
  },
]

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-ploy-neutral-secondary to-ploy-background-primary">
        <div className="mx-auto w-full max-w-7xl px-6 pt-20 pb-12 lg:px-8 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="text-sm font-semibold text-ploy-accent-primary">
                Secure AI reporting for sensitive interviews
              </p>
              <h1 className="mt-5 font-heading text-5xl font-extrabold leading-[1.02] tracking-tight text-balance text-ploy-text-primary md:text-6xl">
                Turn sensitive conversations into standardized reports
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ploy-text-secondary">
                Report Wiz transforms your recordings into professional, fully customizable
                reports in minutes with law enforcement-grade security and the transcript included by default.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={APP_REGISTER_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ploy-accent-primary px-7 py-3.5 text-base font-semibold text-ploy-text-on-accent-primary transition-colors hover:bg-ploy-accent-primary/90"
                >
                  Start free trial
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-ploy-border-primary bg-ploy-background-primary px-7 py-3.5 text-base font-semibold text-ploy-text-primary transition-colors hover:bg-ploy-neutral-secondary"
                >
                  Book a demo
                </a>
              </div>
              <p className="mt-4 text-sm text-ploy-text-secondary">
                No credit card required — try it free.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-ploy-border-primary bg-ploy-background-primary shadow-xl">
                <Image
                  src="/images/hero-report-demo.png"
                  alt="Report Wiz turning an interview transcript into a structured narrative report"
                  width={2400}
                  height={1792}
                  className="w-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-xl border border-ploy-border-primary bg-ploy-background-primary px-4 py-2.5 shadow-lg">
                <ShieldCheckIcon className="h-5 w-5 text-ploy-accent-primary" />
                <span className="text-sm font-semibold text-ploy-text-primary">Zero data retention</span>
              </div>
              <div className="absolute -top-4 right-4 flex items-center gap-2 rounded-xl border border-ploy-border-primary bg-ploy-background-primary px-4 py-2.5 shadow-lg">
                <FileTextIcon className="h-5 w-5 text-ploy-accent-primary" />
                <span className="text-sm font-semibold text-ploy-text-primary">
                  Your templates, your format
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ploy-border-primary bg-ploy-border-primary lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ploy-background-primary px-6 py-7 text-center">
                <div className="font-heading text-3xl font-extrabold tracking-tight text-ploy-text-primary">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-md text-ploy-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="audiences" className="bg-ploy-background-primary py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="w-full">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-primary">
              Built for every sensitive conversation
            </h2>
            <p className="mt-4 text-lg text-ploy-text-secondary">
              If your work depends on turning recorded interviews into standardized reports, Report Wiz fits the way you already work.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="overflow-hidden rounded-2xl border border-ploy-border-primary bg-ploy-background-primary shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={audience.image}
                    alt={audience.alt}
                    width={1200}
                    height={896}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ploy-text-primary">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ploy-text-secondary">
                    {audience.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-ploy-background-secondary py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="w-full">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-primary">
              From recording to finished report in minutes
            </h2>
            <p className="mt-4 text-lg text-ploy-text-secondary">
              A simple, controlled workflow that keeps you fully in charge of the final document.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-ploy-border-primary bg-ploy-background-primary p-7"
              >
                <div className="font-heading text-2xl font-extrabold tracking-tight text-ploy-accent-primary">
                  {step.step}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-ploy-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-ploy-text-secondary">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ploy-background-primary py-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 overflow-hidden rounded-2xl border border-ploy-border-primary shadow-lg lg:order-1">
            <Image
              src="/images/hero-report-demo.png"
              alt="Editable report template alongside the source transcript"
              width={2400}
              height={1792}
              className="w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-primary">
              A first draft in minutes<br />but the final word is yours
            </h2>
            <p className="mt-4 text-lg text-ploy-text-secondary">
              Report Wiz does the heavy lifting of organizing and writing, while you keep complete
              control over the finished report.
            </p>
            <ul className="mt-8 space-y-6">
              {controlPoints.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ploy-accent-primary">
                    <CheckIcon className="h-4 w-4 text-ploy-text-on-accent-primary" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold tracking-tight text-ploy-text-primary">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-ploy-text-secondary">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="security" className="bg-ploy-neutral-inverse py-24 text-ploy-text-inverse">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="w-full">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-inverse">
              Security for the most scrutinized work
            </h2>
            <p className="mt-4 text-lg text-ploy-text-inverse-secondary">
              Sensitive interviews demand more than promises. Your data is protected by rigorous,
              verifiable standards.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-ploy-border-inverse bg-ploy-neutral-inverse/40 p-7"
                >
                  <Icon className="h-7 w-7 text-ploy-accent-primary-300" />
                  <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-ploy-text-inverse">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ploy-text-inverse-secondary">
                    {item.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="proof" className="bg-ploy-background-secondary py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="w-full">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-primary">
              Trusted by professionals who can&apos;t afford mistakes
            </h2>
            <p className="mt-4 text-lg text-ploy-text-secondary">
              Examiners and investigators already rely on Report Wiz to deliver reports they stand
              behind.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex flex-col rounded-2xl border border-ploy-border-primary bg-ploy-background-primary p-7"
              >
                <blockquote className="grow text-base leading-relaxed text-ploy-text-primary">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ploy-border-primary pt-4">
                  <div className="font-heading font-bold text-ploy-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-ploy-text-secondary">{testimonial.company}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="bg-ploy-background-secondary py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-ploy-accent-primary px-8 py-16 text-center sm:px-16">
            <h2 className="mx-auto max-w-2xl font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-on-accent-primary">
              Spend your time on the interview, not the write-up
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Join the professionals who turn sensitive conversations into standardized reports in
              minutes with Report Wiz.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={APP_REGISTER_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ploy-background-primary px-7 py-3.5 text-base font-semibold text-ploy-accent-primary transition-opacity hover:opacity-90"
              >
                Start free trial
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-ploy-text-on-accent-primary/40 px-7 py-3.5 text-base font-semibold text-ploy-text-on-accent-primary transition-colors hover:bg-ploy-text-on-accent-primary/10"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
