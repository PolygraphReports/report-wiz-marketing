'use client'

import { useState } from 'react'

const APP_REGISTER_URL = 'https://app.polygraphreports.com/register'
const CONTACT_SALES_URL = 'https://forms.gle/3fhDKpuQaiHJQh7p8'

const pricing = {
  basic: {
    monthly: {
      price: '$69',
      period: '/month',
      reports: '20 reports per month',
      perReport: ' ($3.45 per report)',
    },
    annual: {
      price: '$699',
      period: '/year',
      reports: '240 reports per year',
      perReport: ' ($2.91 per report)',
    },
  },
  pro: {
    monthly: {
      price: '$149',
      period: '/month',
      reports: '50 reports per month',
      perReport: ' ($2.98 per report)',
    },
    annual: {
      price: '$1,399',
      period: '/year',
      reports: '600 reports per year',
      perReport: ' ($2.33 per report)',
    },
  },
}

const creditPacks = [
  { credits: '10 credits', price: '$49', perReport: '$4.90 per report' },
  { credits: '50 credits', price: '$229', perReport: '$4.58 per report' },
  { credits: '100 credits', price: '$399', perReport: '$3.99 per report' },
  { credits: '1,000 credits', price: '$2,199', perReport: '$2.20 per report' },
]

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="#EF4444" />
      <line x1="6" y1="6" x2="14" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="6" x2="6" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const sharedFeatures = [
  { included: true, label: 'Email & chat support' },
  { included: true, label: 'Includes onboarding & setup' },
  { included: true, label: 'Custom report templates' },
  { included: false, label: 'Multiple team members' },
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)
  const basic = isAnnual ? pricing.basic.annual : pricing.basic.monthly
  const pro = isAnnual ? pricing.pro.annual : pricing.pro.monthly

  return (
    <section id="pricing" className="bg-ploy-background-primary py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-ploy-text-primary md:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-ploy-text-secondary">
            Flexible pricing that grows with your practice.
            <br />
            All features except multiple users are included in both the Basic and Professional plans.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-ploy-background-secondary px-2 py-1 shadow-sm">
            <span
              className={`px-3 py-1 text-sm font-medium transition-colors duration-200 ${
                !isAnnual ? 'font-bold text-ploy-accent-primary' : 'text-ploy-text-secondary'
              }`}
            >
              Monthly
            </span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={isAnnual}
                onChange={(e) => setIsAnnual(e.target.checked)}
              />
              <div className="h-6 w-12 rounded-full bg-ploy-border-primary transition-colors duration-200 peer-checked:bg-ploy-accent-primary" />
              <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 peer-checked:translate-x-6" />
            </label>
            <span
              className={`px-3 py-1 text-sm font-medium transition-colors duration-200 ${
                isAnnual ? 'font-bold text-ploy-accent-primary' : 'text-ploy-text-secondary'
              }`}
            >
              Annual
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-ploy-border-primary bg-ploy-background-primary p-6">
            <div className="pb-8 text-center">
              <h3 className="font-heading text-2xl font-semibold text-ploy-text-primary">Basic</h3>
              <div className="mb-2 mt-2 text-4xl font-bold text-ploy-text-primary">
                {basic.price}
                <span className="text-lg font-normal text-ploy-text-secondary">{basic.period}</span>
              </div>
              <p className="text-ploy-text-secondary">Perfect for part-timers</p>
              <span className="text-sm font-normal italic text-ploy-text-secondary">{basic.perReport}</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckIcon />
                <span>{basic.reports}</span>
              </div>
              {sharedFeatures.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  {feature.included ? <CheckIcon /> : <XIcon />}
                  <span>{feature.label}</span>
                </div>
              ))}
              <a
                href={APP_REGISTER_URL}
                className="mt-8 block w-full rounded-full border border-ploy-border-primary px-4 py-2.5 text-center text-sm font-semibold text-ploy-text-primary transition-colors hover:bg-ploy-neutral-secondary"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl border-2 border-ploy-accent-primary bg-ploy-background-primary p-6">
            <div className="absolute -top-4 left-1/2 w-[140px] -translate-x-1/2 text-center">
              <span className="rounded-full bg-ploy-accent-primary px-4 py-1 text-sm font-medium text-ploy-text-on-accent-primary">
                Most Popular
              </span>
            </div>
            <div className="pb-8 text-center">
              <h3 className="font-heading text-2xl font-semibold text-ploy-text-primary">Professional</h3>
              <div className="mb-2 mt-2 text-4xl font-bold text-ploy-text-primary">
                {pro.price}
                <span className="text-lg font-normal text-ploy-text-secondary">{pro.period}</span>
              </div>
              <p className="text-ploy-text-secondary">For busy, full-time practitioners</p>
              <span className="text-sm font-normal italic text-ploy-text-secondary">{pro.perReport}</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckIcon />
                <span>{pro.reports}</span>
              </div>
              {sharedFeatures.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  {feature.included ? <CheckIcon /> : <XIcon />}
                  <span>{feature.label}</span>
                </div>
              ))}
              <a
                href={APP_REGISTER_URL}
                className="mt-8 block w-full rounded-full bg-ploy-accent-primary px-4 py-2.5 text-center text-sm font-semibold text-ploy-text-on-accent-primary transition-colors hover:bg-ploy-accent-primary/90"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-ploy-border-primary bg-ploy-background-primary p-6">
            <div className="pb-8 text-center">
              <h3 className="font-heading text-2xl font-semibold text-ploy-text-primary">Teams</h3>
              <div className="mb-2 mt-2 text-4xl font-bold text-ploy-text-primary">
                <span className="text-lg font-normal text-ploy-text-secondary">Contact us</span>
              </div>
              <p className="text-ploy-text-secondary">Agencies &amp; firms</p>
            </div>
            <div className="space-y-4 mt-8">
              <p className="text-center text-sm font-semibold italic">All features plus</p>
              {[
                'Priority support',
                'Group onboarding',
                'Customer success manager',
                'Unlimited team members',
              ].map((label) => (
                <div key={label} className="flex items-center gap-3">
                  <CheckIcon />
                  <span>{label}</span>
                </div>
              ))}
              <a
                href={CONTACT_SALES_URL}
                className="mt-8 block w-full rounded-full border border-ploy-border-primary px-4 py-2.5 text-center text-sm font-semibold text-ploy-text-primary transition-colors hover:bg-ploy-neutral-secondary"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="mb-6 text-center">
            <h3 className="font-heading text-2xl font-semibold text-ploy-text-primary">
              Prefer pay-as-you-go?
            </h3>
            <p className="mt-2 text-ploy-text-secondary">
              Buy credits in advance and use them whenever you need reports.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {creditPacks.map((pack) => (
              <div
                key={pack.credits}
                className="rounded-2xl border border-ploy-border-primary bg-ploy-background-secondary p-4 text-center"
              >
                <div className="mb-1 text-lg font-semibold text-ploy-text-primary">{pack.credits}</div>
                <div className="text-xl font-bold text-ploy-text-primary">{pack.price}</div>
                <div className="mt-1 text-sm font-normal text-ploy-text-secondary">
                  ( {pack.perReport} )
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
