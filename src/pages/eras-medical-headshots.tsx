import Layout from '@/components/Layout'
import { GraduationCap, Clock, FileCheck, CheckCircle } from 'lucide-react'
import GetPricingButton from '@/components/GetPricingButton'
import FAQSchema from '@/components/FAQSchema'

export default function ERASMedicalHeadshots() {
  return (
    <Layout
      title="ERAS Headshots | Medical Residency Application Photos | CMQ Headshots"
      description="Professional ERAS headshots for medical residency applications. AAMC-compliant photos that help you stand out. Fast turnaround for busy medical students."
      canonical="https://www.cmqheadshots.com/eras-medical-headshots"
      ogUrl="https://www.cmqheadshots.com/eras-medical-headshots"
      noindex={true}
    >

      {/* FAQ Schema */}
      <FAQSchema faqs={[
        { question: "What are the ERAS photo requirements?", answer: "ERAS requires a recent photo in JPEG format, ideally 150KB or smaller, with dimensions around 2.5 x 3.5 inches (passport style). The photo should be a head-and-shoulders shot with a neutral background. I deliver your photos in the correct format and size per current AAMC/ERAS guidelines." },
        { question: "Should I wear a white coat for my ERAS photo?", answer: "This is a personal choice. Some applicants prefer professional business attire, while others wear their white coat. I recommend bringing both options to your session so we can capture both looks and you can decide which feels right for your application." },
        { question: "How quickly can I get my ERAS headshot?", answer: "Standard delivery is 5-7 business days. Rush delivery (24-48 hours) is available for medical students on tight application deadlines." },
        { question: "What should I wear for my medical residency headshot?", answer: "Professional business attire in solid colors works best. Navy, gray, and darker colors photograph well. Avoid busy patterns and bright colors. If you want to include your white coat, bring it along with a professional outfit underneath." },
        { question: "Do you provide different crops for ERAS and LinkedIn?", answer: "Yes! Your session includes multiple crops - vertical for ERAS, square for LinkedIn, and horizontal for other uses. All are included with your session." },
        { question: "I'm nervous about having my photo taken. Can you help?", answer: "Absolutely. Most medical students feel this way! I specialize in helping people feel comfortable in front of the camera. I'll guide you through poses and expressions to capture a confident, approachable photo." }
      ]} />

      {/* Hero Section */}
      <section className="pt-8 pb-12" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl mb-6" style={{ color: '#5577a5', lineHeight: '1.2' }}>
              <span className="font-bold">ERAS</span> <span className="font-normal">HEADSHOTS</span>
            </h1>
            <p className="font-raleway text-xl md:text-2xl mb-4" style={{ color: '#575757', fontWeight: '400' }}>
              Medical Residency Application Photos
            </p>
            <p className="font-raleway text-lg md:text-xl mb-8 leading-relaxed text-gray-700 max-w-3xl mx-auto">
              Your ERAS photo is part of your first impression on residency programs.
              I create professional, AAMC-compliant headshots that project confidence and approachability -
              helping you stand out in a competitive applicant pool.
            </p>
            <GetPricingButton href="/phoenix-business-headshots" size="large">
              GET PRICING
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: 'white' }}>
              <span className="font-bold">WHAT&apos;S INCLUDED</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px' }}>
              <FileCheck className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <p className="font-raleway text-lg font-bold mb-2" style={{ color: 'white' }}>ERAS-COMPLIANT</p>
              <p className="font-raleway text-base" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: '400' }}>
                Correct format, size, and crop per AAMC guidelines
              </p>
            </div>
            <div className="text-center p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px' }}>
              <CheckCircle className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <p className="font-raleway text-lg font-bold mb-2" style={{ color: 'white' }}>MULTIPLE CROPS</p>
              <p className="font-raleway text-base" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: '400' }}>
                Vertical (ERAS), square (LinkedIn), and horizontal formats
              </p>
            </div>
            <div className="text-center p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px' }}>
              <Clock className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <p className="font-raleway text-lg font-bold mb-2" style={{ color: 'white' }}>FAST TURNAROUND</p>
              <p className="font-raleway text-base" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: '400' }}>
                Rush delivery available for tight deadlines
              </p>
            </div>
            <div className="text-center p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px' }}>
              <GraduationCap className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <p className="font-raleway text-lg font-bold mb-2" style={{ color: 'white' }}>POSING GUIDANCE</p>
              <p className="font-raleway text-base" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: '400' }}>
                I help you look confident and approachable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Placeholder Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* PLACEHOLDER: Add ERAS/medical headshot examples here */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-[3/4] bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-raleway">[Image Placeholder]</span>
              </div>
              <div className="aspect-[3/4] bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-raleway">[Image Placeholder]</span>
              </div>
              <div className="aspect-[3/4] bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-raleway">[Image Placeholder]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERAS Requirements Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-8" style={{ color: '#5577a5' }}>
              <span className="font-bold">ERAS PHOTO</span> <span className="font-normal">REQUIREMENTS</span>
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <p className="font-raleway text-base text-cmq-gray-dark mb-6" style={{ fontWeight: '400', lineHeight: '1.7' }}>
                The AAMC has specific requirements for ERAS application photos. I ensure your headshot meets all current guidelines:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400' }}>
                    <strong>Format:</strong> JPEG file format
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400' }}>
                    <strong>Size:</strong> 150KB or smaller recommended
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400' }}>
                    <strong>Dimensions:</strong> Passport-style (approximately 2.5 x 3.5 inches)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400' }}>
                    <strong>Composition:</strong> Head-and-shoulders shot, neutral background
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400' }}>
                    <strong>Recency:</strong> Photo should be recent and accurately represent your current appearance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Wear Section */}
      <section className="py-16" style={{ backgroundColor: '#282725' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: 'white' }}>
              <span className="font-bold">WHAT TO WEAR</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>RECOMMENDED</h3>
                <ul className="space-y-2">
                  <li className="font-raleway text-base" style={{ color: 'white', fontWeight: '400' }}>
                    • Professional business attire
                  </li>
                  <li className="font-raleway text-base" style={{ color: 'white', fontWeight: '400' }}>
                    • Solid colors (navy, gray, darker tones)
                  </li>
                  <li className="font-raleway text-base" style={{ color: 'white', fontWeight: '400' }}>
                    • Collared shirts or professional blouses
                  </li>
                  <li className="font-raleway text-base" style={{ color: 'white', fontWeight: '400' }}>
                    • White coat (optional - bring it along)
                  </li>
                  <li className="font-raleway text-base" style={{ color: 'white', fontWeight: '400' }}>
                    • Simple, professional jewelry
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>AVOID</h3>
                <ul className="space-y-2">
                  <li className="font-raleway text-base" style={{ color: 'white', fontWeight: '400' }}>
                    • Busy patterns or stripes
                  </li>
                  <li className="font-raleway text-base" style={{ color: 'white', fontWeight: '400' }}>
                    • Bright or neon colors
                  </li>
                  <li className="font-raleway text-base" style={{ color: 'white', fontWeight: '400' }}>
                    • Logos or graphics on clothing
                  </li>
                  <li className="font-raleway text-base" style={{ color: 'white', fontWeight: '400' }}>
                    • Casual attire (t-shirts, hoodies)
                  </li>
                  <li className="font-raleway text-base" style={{ color: 'white', fontWeight: '400' }}>
                    • Distracting accessories
                  </li>
                </ul>
              </div>
            </div>
            <p className="font-raleway text-base mt-8" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: '400' }}>
              Not sure what to wear? I offer a pre-session consultation to help you choose the perfect outfit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">FREQUENTLY ASKED</span> <span className="font-normal">QUESTIONS</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2">Should I wear a white coat?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  This is a personal choice and varies by specialty. Some programs prefer professional business attire,
                  while others appreciate seeing candidates in their white coat. I recommend bringing both options to
                  your session so we can capture both looks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2">How quickly can I get my photos?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  Standard delivery is 5-7 business days. I understand medical students often have tight deadlines,
                  so rush delivery (24-48 hours) is available when you need your photos quickly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2">Do I get different crops for ERAS and LinkedIn?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  Yes! Your session includes multiple crops - vertical format for ERAS, square format for LinkedIn,
                  and horizontal format for other uses. All are included with your session.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2">I&apos;m nervous about photos. Can you help?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  Most medical students feel this way! I specialize in helping people feel comfortable in front of the camera.
                  I&apos;ll guide you through poses and expressions to capture a confident, approachable photo that represents you well.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2">What background options do you have?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  I offer several professional background options including solid colors (gray, blue, white) and gradient styles.
                  We&apos;ll discuss which background works best for your specialty and personal preference during your session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#5577a5' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-4 uppercase" style={{ color: '#ffffff' }}>
            READY TO GET YOUR ERAS HEADSHOT?
          </h2>
          <p className="font-raleway text-xl mb-8" style={{ color: 'white', fontWeight: '400' }}>
            Let&apos;s create a professional photo that helps you stand out to residency programs.
          </p>
          <GetPricingButton href="/phoenix-business-headshots" size="xl" className="border-2 border-white">
            GET PRICING
          </GetPricingButton>
        </div>
      </section>

    </Layout>
  )
}
