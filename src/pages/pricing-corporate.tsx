import Layout from '@/components/Layout'
import Link from 'next/link'
import { Check, Users, Building, MapPin, Clock, Camera, Briefcase } from 'lucide-react'

export default function CorporatePricing() {
  return (
    <Layout 
      title="Corporate Staff Headshots | CMQ Headshots Phoenix"
      description="Professional corporate headshot packages for teams in Phoenix. On-location photography for consistent company branding across all employees."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cmq-gray-light to-white section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-raleway text-4xl md:text-5xl font-bold text-cmq-gray-darker mb-6">
              Corporate Staff Headshots
            </h1>
            <p className="font-raleway text-xl text-cmq-gray-dark leading-relaxed">
              Professional on-location photography for your entire team. Consistent branding, convenient scheduling, and exceptional results for businesses across Phoenix.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-4">
              Why Choose On-Location Corporate Photography?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Building className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold text-cmq-gray-darker mb-3">
                Consistent Branding
              </h3>
              <p className="font-raleway text-cmq-gray-dark">
                All employees photographed with the same lighting and backdrop for cohesive company branding.
              </p>
            </div>
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <MapPin className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold text-cmq-gray-darker mb-3">
                Your Location
              </h3>
              <p className="font-raleway text-cmq-gray-dark">
                We come to your office, saving time and making it convenient for your entire team.
              </p>
            </div>
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Clock className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold text-cmq-gray-darker mb-3">
                Efficient Scheduling
              </h3>
              <p className="font-raleway text-cmq-gray-dark">
                Quick 10-15 minute sessions per person minimize disruption to your workday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Staff Headshot Program */}
      <section className="section bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-4">
              Quick and Easy Business Headshots
            </h2>
            <p className="font-raleway text-lg text-cmq-gray-dark max-w-3xl mx-auto">
              Streamlined process for businesses. Flexible options: at our studio or your office location. 
              We handle the scheduling complexities so you don&apos;t have to.
            </p>
          </div>

          {/* 4-Step Program */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="font-raleway text-2xl font-bold text-cmq-gray-darker mb-8 text-center">
              New Staff Headshot Program
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-cmq-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h4 className="font-semibold mb-2">Staff Book Online</h4>
                <p className="text-sm text-cmq-gray-dark">Easy individual scheduling for each team member</p>
              </div>
              <div className="text-center">
                <div className="bg-cmq-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h4 className="font-semibold mb-2">Match Your Brand</h4>
                <p className="text-sm text-cmq-gray-dark">Consistent aesthetic across all employee photos</p>
              </div>
              <div className="text-center">
                <div className="bg-cmq-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h4 className="font-semibold mb-2">Send Invoice</h4>
                <p className="text-sm text-cmq-gray-dark">Simple billing process for your accounting</p>
              </div>
              <div className="text-center">
                <div className="bg-cmq-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h4 className="font-semibold mb-2">Download Images</h4>
                <p className="text-sm text-cmq-gray-dark">Professional headshots ready for immediate use</p>
              </div>
            </div>
          </div>

          {/* Location Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <Building className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
                <h3 className="font-raleway text-xl font-bold text-cmq-gray-darker mb-3">
                  At Your Office
                </h3>
                <p className="text-cmq-gray-dark">We bring our professional setup to your location</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Convenient for your team</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Minimal work disruption</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Professional portable studio setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Same day for entire team</span>
                </li>
              </ul>
            </div>

            <div className="card p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <Camera className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
                <h3 className="font-raleway text-xl font-bold text-cmq-gray-darker mb-3">
                  At Our Studio
                </h3>
                <p className="text-cmq-gray-dark">Professional studio environment in Phoenix</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Full professional lighting setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Multiple backdrop options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Flexible individual scheduling</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Comfortable, professional environment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonial/Trust Signals */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 max-w-3xl mx-auto shadow-lg">
              <h3 className="font-raleway text-xl font-bold text-cmq-gray-darker mb-4">
                Trusted by Leading Companies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-cmq-gray-dark">
                <div>Orbis</div>
                <div>Bell Bank</div>
                <div>Mobivity</div>
                <div>State Farm</div>
                <div>US Bank</div>
                <div>Chase Bank</div>
                <div>And many more...</div>
                <div>Tech & Finance</div>
              </div>
              <p className="mt-6 text-cmq-gray-dark italic">
                &ldquo;Praised for flexibility and efficiency. Ability to put subjects at ease and deliver high-quality, consistent professional headshots.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-4">
              How Corporate Sessions Work
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-cmq-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Initial Consultation</h3>
              <p className="text-sm text-cmq-gray-dark">Discuss needs, headcount, and scheduling</p>
            </div>
            <div className="text-center">
              <div className="bg-cmq-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Setup & Scheduling</h3>
              <p className="text-sm text-cmq-gray-dark">Professional equipment setup at your location</p>
            </div>
            <div className="text-center">
              <div className="bg-cmq-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Photography Session</h3>
              <p className="text-sm text-cmq-gray-dark">10-15 minutes per person for efficient workflow</p>
            </div>
            <div className="text-center">
              <div className="bg-cmq-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Image Delivery</h3>
              <p className="text-sm text-cmq-gray-dark">Retouched images delivered within 5-7 business days</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-cmq-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl font-bold mb-4">
            Ready to Update Your Team Photos?
          </h2>
          <p className="font-raleway text-xl mb-8">
            Contact us for a custom quote based on your team size and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-cmq-blue px-8 py-4 rounded-lg font-raleway text-lg font-medium hover:bg-cmq-gray-light transition-all duration-300 inline-block"
            >
              Request Corporate Quote
            </Link>
            <a
              href="tel:4806483429"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-raleway text-lg font-medium hover:bg-white hover:text-cmq-blue transition-all duration-300 inline-block"
            >
              Call (480) 648-3429
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}