import Layout from '@/components/Layout'
import Link from 'next/link'
import { Check, Camera, Clock, Download, Star } from 'lucide-react'

export default function IndividualPricing() {
  return (
    <Layout 
      title="Individual Headshot Rates | CMQ Headshots Phoenix"
      description="Professional individual headshot pricing in Phoenix. Flexible packages for business professionals, LinkedIn profiles, and personal branding."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cmq-gray-light to-white section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-raleway text-4xl md:text-5xl font-bold text-cmq-gray-darker mb-6">
              Individual Headshot Pricing
            </h1>
            <p className="font-raleway text-xl text-cmq-gray-dark leading-relaxed">
              Professional headshots tailored to your needs. Sessions as short as 20 minutes or as long as 3 hours - we work until you have the perfect shots.
            </p>
          </div>
        </div>
      </section>

      {/* Actual Pricing Structure */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Main Pricing Card */}
            <div className="card p-12 hover:shadow-2xl transition-all duration-300 text-center">
              <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-6">
                Business Headshot Session
              </h2>
              
              {/* Pricing Structure */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-cmq-gray-light rounded-lg p-6">
                  <h3 className="font-raleway text-xl font-bold text-cmq-gray-darker mb-3">
                    Session Fee
                  </h3>
                  <div className="text-4xl font-bold text-cmq-blue mb-2">$250</div>
                  <p className="text-sm text-cmq-gray-dark">One-time session fee</p>
                </div>
                <div className="bg-cmq-gray-light rounded-lg p-6">
                  <h3 className="font-raleway text-xl font-bold text-cmq-gray-darker mb-3">
                    Images
                  </h3>
                  <div className="text-4xl font-bold text-cmq-blue mb-2">$100</div>
                  <p className="text-sm text-cmq-gray-dark">Per retouched image</p>
                </div>
              </div>

              {/* What's Included */}
              <div className="text-left mb-8">
                <h3 className="font-raleway text-2xl font-bold text-cmq-gray-darker mb-6 text-center">
                  Every Session Includes:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Unlimited Shooting Time</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Preparation Information</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Unlimited Outfit Changes</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Professional Retouching</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Various Backdrop Options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cmq-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>1-on-1 Image Selection</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image Delivery */}
              <div className="bg-white border-2 border-cmq-blue rounded-lg p-6 mb-8">
                <h3 className="font-raleway text-xl font-bold text-cmq-gray-darker mb-4">
                  5 Versions of Each Purchased Image:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                  <div className="bg-cmq-gray-light rounded p-3">LinkedIn Profile</div>
                  <div className="bg-cmq-gray-light rounded p-3">Facebook Profile</div>
                  <div className="bg-cmq-gray-light rounded p-3">Teams Profile</div>
                  <div className="bg-cmq-gray-light rounded p-3">Black & White</div>
                  <div className="bg-cmq-gray-light rounded p-3">Full Resolution</div>
                </div>
              </div>

              <p className="text-cmq-gray-dark mb-6">
                &ldquo;I want you to leave the studio with images that help you succeed.&rdquo;
              </p>
              
              <Link 
                href="/contact" 
                className="bg-cmq-blue text-white px-8 py-4 rounded-lg font-raleway text-lg font-medium hover:bg-white hover:text-cmq-blue border border-cmq-blue transition-all duration-300 inline-block"
              >
                Book Your Session
              </Link>
            </div>
          </div>

          {/* Special Offers */}
          <div className="mt-12 text-center">
            <div className="bg-cmq-gray-light rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="font-raleway text-2xl font-bold text-cmq-gray-darker mb-4">
                Special Offers
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <Star className="h-8 w-8 text-cmq-blue mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Military & First Responders</h4>
                  <p className="text-cmq-blue font-bold">20% OFF</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <Star className="h-8 w-8 text-cmq-blue mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Return Clients</h4>
                  <p className="text-cmq-blue font-bold">30% OFF Session Fee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-4">
              What&apos;s Included in Every Session
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Camera className="h-10 w-10 text-cmq-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Professional Equipment</h3>
              <p className="text-sm text-cmq-gray-dark">Studio lighting & professional cameras</p>
            </div>
            <div className="text-center">
              <Clock className="h-10 w-10 text-cmq-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">No Rush Guarantee</h3>
              <p className="text-sm text-cmq-gray-dark">We work until you&apos;re happy</p>
            </div>
            <div className="text-center">
              <Star className="h-10 w-10 text-cmq-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Posing Guidance</h3>
              <p className="text-sm text-cmq-gray-dark">Expert direction for best results</p>
            </div>
            <div className="text-center">
              <Download className="h-10 w-10 text-cmq-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-sm text-cmq-gray-dark">Images ready within 48 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-cmq-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl font-bold mb-4">
            Ready to Book Your Session?
          </h2>
          <p className="font-raleway text-xl mb-8">
            All sessions by appointment only. Book now to secure your preferred date.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-cmq-blue px-8 py-4 rounded-lg font-raleway text-lg font-medium hover:bg-cmq-gray-light transition-all duration-300 inline-block"
            >
              Schedule Your Session
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