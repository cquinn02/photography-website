// Builds FAQPage JSON-LD from a list of Q&A pairs. Emitted by FAQSection and
// AccordionFAQSection so every page with an FAQ block gets structured data —
// the single biggest AI-Overview / rich-result opportunity on the site.

export function faqPageJsonLd(faqs: { question: string; answer: string }[]): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
  // Escape "<" so answer text can never break out of the <script> tag.
  return JSON.stringify(schema).replace(/</g, '\\u003c')
}
