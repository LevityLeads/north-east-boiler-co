'use client';

import { useState } from 'react';
import SchemaMarkup from './SchemaMarkup';
import { faqSchema } from '@/lib/schema';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
}

export default function FAQSection({ faqs, heading = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16">
      <SchemaMarkup schema={faqSchema(faqs)} />
      <h2 className="mb-8 text-2xl font-bold text-navy md:text-3xl">{heading}</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg border border-border bg-white">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="pr-4 text-base font-medium text-navy">{faq.question}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-text-muted transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="border-t border-border px-6 py-4">
                <p className="text-sm leading-relaxed text-text-muted">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
