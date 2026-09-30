import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ArrowRightIcon, CheckIcon } from '@/components/icons'

const SITE_URL = 'https://reportwiz.ai'
const PAGE_PATH = '/report-wiz-vs-longeye'
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const APP_REGISTER_URL = 'https://app.reportwiz.ai/register'
const DEMO_URL = 'https://calendar.app.google/GsmA2seoyzP6sjsK7'
const TRUST_CENTER_URL = 'https://trust.polygraphreports.com'

const LONGEYE_LAW_ENFORCEMENT_URL = 'https://www.longeye.com/law-enforcement'
const LONGEYE_PRODUCT_URL = 'https://www.longeye.com/product'
const LONGEYE_SECURITY_URL = 'https://www.longeye.com/security'

const PAGE_TITLE = 'Report Wiz vs Longeye: AI Transcription and Police Reports'
const PAGE_DESCRIPTION =
  'Report Wiz vs Longeye for law enforcement: Report Wiz turns interviews, files, and jail calls into interview transcription and structured reports using situation-based report templates that fit your existing case system, while Longeye is an upload-and-ask case workspace.'

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    type: 'article',
    siteName: 'ReportWiz.ai',
  },
  twitter: {
    card: 'summary',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
}

const advantages = [
  {
    title: 'Fits the flow you already have',
    body: 'Investigators keep their case management system, report format, and process. Report Wiz handles the transcript and the write-up, and the output goes back into the system they already file in. Longeye asks you to drop the phone dump, jail calls, warrant returns, and video "into one case" inside its own workspace.',
  },
  {
    title: 'Templates instead of prompts',
    body: 'Each report template is set up once for a type of situation and the information an officer needs from it. Officers do not have to write a good question every time, and results do not depend on how well it is phrased.',
  },
  {
    title: 'Start with the recording you have',
    body: 'There is no need to upload and process the whole case first. Upload the interview, file, or jail calls you are working on and get the transcript and report for the work that is due now.',
  },
  {
    title: 'Report sections that paste straight in',
    body: 'Output is broken into the sections your report already has, so each one copies into the matching field or narrative in your existing report or case management system.',
  },
  {
    title: "Built for officers who aren't tech-savvy",
    body: 'Templates act as guardrails that pre-set what to extract and how to structure it, so the system just works. There is no workspace to learn, no evidence to organize, and no question-asking skill to build.',
  },
  {
    title: 'The officer stays in control',
    body: 'The officer chooses the template, which sets what gets pulled out. Every section can be edited before export, and the final report is theirs.',
  },
  {
    title: 'Consistent reports by situation type',
    body: 'The same template produces the same structure every time, so reports for a given kind of incident read the same across cases.',
  },
  {
    title: 'Transcript included with every report',
    body: 'A speaker-labeled transcript comes with each report at no extra cost, giving you a verifiable record for the case file.',
  },
  {
    title: 'Try it today',
    body: 'Start a self-serve free trial with no credit card. Longeye is demo-led.',
  },
]

const comparisonRows = [
  {
    label: 'Fit with your existing workflow',
    reportWiz: 'Works inside your current process. Output goes back into the report or case system you already use.',
    longeye: 'A new investigative workspace where the case is uploaded and worked.',
  },
  {
    label: 'How the officer directs the AI',
    reportWiz: 'Picks a situation-specific report template that pre-sets what to extract.',
    longeye: 'Asks questions in plain language for each case.',
  },
  {
    label: 'What you need before getting output',
    reportWiz: 'Just the recording or file you are working on.',
    longeye: 'The case evidence uploaded, sorted, and scored.',
  },
  {
    label: 'Output shape',
    reportWiz: 'Report sections that match your report structure, ready to paste into your existing system, plus Word and PDF export.',
    longeye: 'Answers, findings, and report or warrant drafts inside the Longeye workspace, with Word export.',
  },
  {
    label: 'Designed for',
    reportWiz: 'Officers and investigators of any technical skill level, with templates as guardrails.',
    longeye: 'Detectives and analysts working large digital-evidence cases.',
  },
  {
    label: 'Officer control',
    reportWiz: 'Officer chooses the template and edits every section before export.',
    longeye: 'Officer accepts, edits, or rejects drafted paragraphs.',
  },
  {
    label: 'Consistency',
    reportWiz: 'Same template, same structure, every time.',
    longeye: 'Depends on the questions asked for each case.',
  },
  {
    label: 'Transcript',
    reportWiz: 'Speaker-labeled transcript included with every report at no extra cost.',
    longeye: 'Transcribes and translates audio and video.',
  },
  {
    label: 'How to start',
    reportWiz: 'Self-serve free trial, no credit card.',
    longeye: 'Request a demo.',
  },
  {
    label: 'What goes in',
    reportWiz: 'Interview audio and video, supporting files, and as many jail call files at a time as needed.',
    longeye: 'Phone extractions, jail calls, warrant returns, video, and other digital evidence.',
  },
  {
    label: 'Security',
    reportWiz: 'SOC 2 Type II with zero exceptions, CJIS ready, AWS GovCloud, OpenAI Zero Data Retention.',
    longeye: 'SOC 2 Type II, built to CJIS 6.0.0, case data not used to train models.',
  },
]

const reportWizSteps = [
  'Upload the recordings and files, including as many jail calls as you need.',
  'Review the speaker-labeled transcripts.',
  'Generate a report from a template built for that type of situation.',
  'Edit any section.',
  'Paste the sections into your current report system, or export to Word or PDF.',
]

const longeyeSteps = [
  'Drop the whole case in.',
  'Longeye sorts and scores every file.',
  'Ask questions in plain language.',
  'Draft the report from the findings.',
]

const faqs = [
  {
    question: "What's the difference between Report Wiz and Longeye?",
    answer:
      'Report Wiz works within an investigator’s existing workflow: it turns interviews, files, and jail calls into a speaker-labeled transcript and a structured report built from a situation-specific template, and the report sections go straight into the case or report system the agency already uses. Longeye is an investigative workspace where investigators upload a whole case, let the software sort and score the evidence, and then ask it questions in plain language.',
  },
  {
    question: 'Is Report Wiz a Longeye alternative for report writing?',
    answer:
      'Yes. If the job is transcription and report writing, Report Wiz is a simpler alternative. Officers upload the recording or file they are working on, pick a template, and get report sections they can edit and paste into their existing system, without moving the case into a new workspace.',
  },
  {
    question: 'Do officers have to learn how to write prompts?',
    answer:
      'No. Report Wiz uses report templates instead of prompts. Each template pre-sets the sections and the information to extract for a type of situation, so officers do not have to phrase a good question on every case and the results do not depend on how a question was worded.',
  },
  {
    question: 'Does Report Wiz replace our records management system?',
    answer:
      'No. Report Wiz is designed to work alongside the records management and case systems your agency already uses. It produces the transcript and the report, and the officer puts that content into the existing system.',
  },
  {
    question: 'How do Report Wiz reports get into our existing case system?',
    answer:
      'Reports are broken into sections that match the structure of your report, so each section can be copied into the matching field or narrative in your current case or report management system. Reports can also be exported to Word or PDF.',
  },
  {
    question: 'Which files does Report Wiz accept, including many jail calls at once?',
    answer:
      'Report Wiz accepts interview audio and video, supporting documents, and jail call recordings. You can upload as many jail call files at a time as the work requires.',
  },
  {
    question: 'Is the transcript included with every report?',
    answer:
      'Yes. Every Report Wiz report includes a verbatim, speaker-labeled transcript at no extra cost.',
  },
  {
    question: "Is Report Wiz built for officers who aren't tech-savvy?",
    answer:
      'Yes. Report Wiz is designed for non-technical users. Templates act as guardrails that pre-set what to extract and how to structure the report, so there is no workspace to learn, no evidence to organize, and no question-asking skill to build.',
  },
  {
    question: "What is Report Wiz's SOC 2 Type II status?",
    answer:
      'Report Wiz has passed its SOC 2 Type II audit with zero exceptions. It is also CJIS ready, runs on AWS GovCloud, and uses OpenAI Zero Data Retention so data is not stored or used for training.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      dateModified: '2026-09-29',
      isPartOf: { '@type': 'WebSite', name: 'ReportWiz.ai', url: SITE_URL },
      about: [
        { '@type': 'SoftwareApplication', name: 'Report Wiz', url: SITE_URL, applicationCategory: 'BusinessApplication' },
        { '@type': 'SoftwareApplication', name: 'Longeye', url: 'https://www.longeye.com', applicationCategory: 'BusinessApplication' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Report Wiz vs Longeye', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
}

export default function ReportWizVsLongeye() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        <section className="bg-gradient-to-b from-ploy-neutral-secondary to-ploy-background-primary">
          <div className="mx-auto w-full max-w-7xl px-6 pt-20 pb-16 lg:px-8 lg:pt-24">
            <nav aria-label="Breadcrumb" className="text-sm text-ploy-text-secondary">
              <Link href="/" className="hover:text-ploy-text-primary">
                Home
              </Link>{' '}
              / <span className="text-ploy-text-primary">Report Wiz vs Longeye</span>
            </nav>
            <p className="mt-6 text-sm font-semibold text-ploy-accent-primary">
              Law enforcement AI comparison
            </p>
            <h1 className="mt-4 font-heading text-5xl font-extrabold leading-[1.02] tracking-tight text-balance text-ploy-text-primary md:text-6xl">
              Report Wiz vs Longeye
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ploy-text-primary">
              Report Wiz works within the investigator&apos;s existing flow instead of replacing it.
              Longeye asks investigators to move the case into a new workspace and work it by asking
              questions.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ploy-text-secondary">
              Report Wiz turns interviews, files, and jail calls into a speaker-labeled transcript and
              a structured report built from a template for that type of situation. The report
              sections go straight into the case or report system your agency already uses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={APP_REGISTER_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ploy-button-primary px-7 py-3.5 text-base font-semibold text-ploy-text-on-accent-primary transition-colors hover:bg-ploy-button-primary/90"
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
        </section>

        <section id="why-report-wiz" className="bg-ploy-background-primary py-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-primary">
              Why investigators choose Report Wiz over Longeye
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-ploy-text-secondary">
              Report Wiz focuses on the work in front of the officer right now: the transcript and
              the report.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((advantage) => (
                <div
                  key={advantage.title}
                  className="rounded-2xl border border-ploy-border-primary bg-ploy-background-primary p-7 shadow-sm"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ploy-accent-primary">
                    <CheckIcon className="h-4 w-4 text-ploy-text-on-accent-primary" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-ploy-text-primary">
                    {advantage.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-ploy-text-secondary">
                    {advantage.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="comparison" className="bg-ploy-background-secondary py-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-primary">
              Report Wiz vs Longeye, feature by feature
            </h2>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-ploy-border-primary bg-ploy-background-primary">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of Report Wiz and Longeye for law enforcement transcription and report
                  writing
                </caption>
                <thead>
                  <tr className="border-b border-ploy-border-primary bg-ploy-neutral-secondary">
                    <th scope="col" className="w-1/4 px-6 py-4 text-sm font-semibold text-ploy-text-secondary">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-4 font-heading text-base font-bold text-ploy-accent-primary">
                      Report Wiz
                    </th>
                    <th scope="col" className="px-6 py-4 font-heading text-base font-bold text-ploy-text-primary">
                      Longeye
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-ploy-border-primary last:border-b-0">
                      <th scope="row" className="px-6 py-5 align-top text-sm font-semibold text-ploy-text-primary">
                        {row.label}
                      </th>
                      <td className="px-6 py-5 align-top text-sm leading-relaxed text-ploy-text-primary">
                        {row.reportWiz}
                      </td>
                      <td className="px-6 py-5 align-top text-sm leading-relaxed text-ploy-text-secondary">
                        {row.longeye}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="workflows" className="bg-ploy-background-primary py-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-primary">
              Two workflows, side by side
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border-2 border-ploy-accent-primary bg-ploy-background-primary p-8">
                <h3 className="font-heading text-2xl font-bold tracking-tight text-ploy-text-primary">
                  Report Wiz: fits into your existing process
                </h3>
                <ol className="mt-6 space-y-4">
                  {reportWizSteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="font-heading text-lg font-extrabold text-ploy-accent-primary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base leading-relaxed text-ploy-text-primary">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 border-t border-ploy-border-primary pt-5 text-base font-semibold text-ploy-text-primary">
                  Where it ends up: back in your report system.
                </p>
              </div>
              <div className="rounded-2xl border border-ploy-border-primary bg-ploy-background-secondary p-8">
                <h3 className="font-heading text-2xl font-bold tracking-tight text-ploy-text-primary">
                  Longeye: a new case workspace
                </h3>
                <ol className="mt-6 space-y-4">
                  {longeyeSteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="font-heading text-lg font-extrabold text-ploy-text-secondary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base leading-relaxed text-ploy-text-primary">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 border-t border-ploy-border-primary pt-5 text-base font-semibold text-ploy-text-primary">
                  Where it ends up: in the Longeye workspace.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-ploy-text-secondary">
              Longeye steps are summarized from its{' '}
              <a
                href={LONGEYE_LAW_ENFORCEMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-ploy-accent-primary"
              >
                law enforcement page
              </a>
              .
            </p>
          </div>
        </section>

        <section id="which-to-choose" className="bg-ploy-background-secondary py-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-primary">
              When to choose Report Wiz or Longeye
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-ploy-border-primary bg-ploy-background-primary p-8">
                <h3 className="font-heading text-xl font-bold tracking-tight text-ploy-accent-primary">
                  Choose Report Wiz when
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ploy-text-secondary">
                  The work is transcripts and reports from interviews, files, or a large set of jail
                  calls, and you want it done inside the process your agency already runs.
                </p>
              </div>
              <div className="rounded-2xl border border-ploy-border-primary bg-ploy-background-primary p-8">
                <h3 className="font-heading text-xl font-bold tracking-tight text-ploy-text-primary">
                  Choose Longeye when
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ploy-text-secondary">
                  You need to score and query a mixed digital-evidence dump, such as phone extractions,
                  warrant returns, and video, in one workspace.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-ploy-background-primary py-24">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-primary">
              Frequently asked questions
            </h2>
            <dl className="mt-12 divide-y divide-ploy-border-primary border-y border-ploy-border-primary">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <dt className="font-heading text-lg font-bold tracking-tight text-ploy-text-primary">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-relaxed text-ploy-text-secondary">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-ploy-text-secondary">
              Security details are in the{' '}
              <a
                href={TRUST_CENTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-ploy-accent-primary"
              >
                Report Wiz Trust Center
              </a>
              .
            </p>
          </div>
        </section>

        <section className="bg-ploy-background-secondary py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-ploy-accent-primary px-8 py-16 text-center sm:px-16">
              <h2 className="mx-auto max-w-2xl font-heading text-4xl font-extrabold tracking-tight text-balance text-ploy-text-on-accent-primary">
                Keep your workflow. Finish the report faster.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Pick a template, upload the recording, and paste the finished sections into the
                system you already use.
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

        <section className="bg-ploy-background-secondary pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 text-sm text-ploy-text-secondary lg:px-8">
            <p>
              Compared against Longeye&apos;s public pages, September 2026:{' '}
              <a href={LONGEYE_LAW_ENFORCEMENT_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-ploy-accent-primary">
                law enforcement
              </a>
              ,{' '}
              <a href={LONGEYE_PRODUCT_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-ploy-accent-primary">
                product
              </a>
              , and{' '}
              <a href={LONGEYE_SECURITY_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-ploy-accent-primary">
                security
              </a>
              . Longeye is a trademark of its owner.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
