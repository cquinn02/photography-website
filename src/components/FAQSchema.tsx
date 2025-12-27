import Head from 'next/head'

interface FAQ {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQ[]
}

/**
 * FAQSchema Component
 * Generates FAQPage structured data (JSON-LD) for SEO and AI visibility
 * Uses next/head for server-side rendering (important for SEO)
 *
 * Usage:
 * <FAQSchema faqs={[
 *   { question: "Your question?", answer: "Your answer." },
 *   ...
 * ]} />
 *
 * Important: FAQs passed here MUST match the visible content on the page
 */
export default function FAQSchema({ faqs }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) return null

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Head>
  )
}
