import Layout from '@/components/Layout'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import GetPricingButton from '@/components/GetPricingButton'
import FAQSchema from '@/components/FAQSchema'

export default function ERASMedicalHeadshots() {
  return (
    <Layout
      title="ERAS Headshots Phoenix | Medical Residency Photos | CMQ Headshots"
      description="ERAS headshots for medical residency applications in Phoenix, AZ. AAMC-compliant photos, $300 express session, 48-hour delivery. Book early before slots fill up."
      canonical="https://www.cmqheadshots.com/eras-medical-headshots"
      ogUrl="https://www.cmqheadshots.com/eras-medical-headshots"
      noindex={false}
    >

      {/* FAQ Schema */}
      <FAQSchema faqs={[
        { question: "What are the current ERAS photo requirements?", answer: "ERAS requires a JPEG file, 2.5 x 3.5 inches, 150 dpi resolution, under 150KB, in RGB color. The photo must be a head-and-shoulders shot in color with a neutral or light background, face centered and facing the camera. I deliver your image formatted to these exact specs so you can upload directly to MyERAS." },
        { question: "How much do ERAS headshots cost in Phoenix?", answer: "My ERAS Express session is $300. That includes a 20-minute studio session, posing and expression coaching, one professionally edited image cropped to ERAS specifications, and delivery within 48 hours." },
        { question: "Should I wear a white coat for my ERAS photo?", answer: "Most applicants go with professional business attire. Some schools and specialties prefer the white coat. I recommend checking with your program advisor first. Either way, bring both options and we will shoot it both ways so you can decide later." },
        { question: "When should I schedule my ERAS headshot?", answer: "Schedule your session between June and August, before the September submission deadline. Slots fill up fast in late summer as students rush to get their photos done. Booking in June or early July gives you the most flexibility." },
        { question: "How long does it take to get my edited ERAS photo?", answer: "48 hours from the time you pick your favorite image. Your photo will be fully edited, retouched, and formatted to ERAS specifications, ready to upload to MyERAS." },
        { question: "Can I also use my ERAS headshot for LinkedIn?", answer: "The ERAS Express delivers one image cropped to ERAS specifications (2.5 x 3.5 vertical). If you also need a square crop for LinkedIn or a horizontal version for other uses, ask about additional crops at your session." },
        { question: "What background do you use for ERAS headshots?", answer: "I use clean, neutral studio backgrounds that meet ERAS guidelines. Gray and light blue are the most popular choices. We will pick the background that works best with your outfit and skin tone." },
        { question: "I wear glasses. Should I take them off for my ERAS photo?", answer: "Wear your glasses if that is how you normally look. I control reflections with studio lighting and posing angles. If you switch between glasses and contacts, we can do a quick variation of each." }
      ]} />

      {/* Hero Images */}
      <section className="py-0" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 py-12">
              <div className="aspect-[5/7] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.cmqheadshots.com/images/CMQHEADSHOTS-Denison_Valerie_627-0595-2.5x3.5.jpg"
                  alt="ERAS medical residency headshot - professional woman in business attire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="aspect-[5/7] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.cmqheadshots.com/images/CMQHEADSHOTS--(1%20of%201)-2.5x3.5.jpg"
                  alt="ERAS medical residency headshot - professional headshot with neutral background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="aspect-[5/7] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.cmqheadshots.com/images/Abigail%20Jimenez2008.webp"
                  alt="ERAS medical residency headshot - woman in professional attire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H1 + Intro Section */}
      <section className="pt-8 pb-12" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-raleway text-3xl md:text-5xl lg:text-6xl mb-6" style={{ color: '#5577a5', lineHeight: '1.2' }}>
              <span className="font-medium">ERAS HEADSHOTS</span>{' '}
              <span className="font-light">PHOENIX</span>
            </h1>
            <p className="font-raleway text-xl font-normal max-w-3xl mx-auto mb-8" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Your ERAS photo is the first thing program directors see when they open your application. I photograph ERAS headshots for medical students across Phoenix every summer. 20-minute session, one professionally edited image, delivered in 48 hours, formatted to exact AAMC specifications. Book early. Calendar slots fill up fast as the September deadline gets closer.
            </p>
            <GetPricingButton href="#pricing" size="large">
              BOOK YOUR SESSION
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* ERAS Photo Requirements Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-4" style={{ color: '#5577a5' }}>
              <span className="font-medium">ERAS PHOTO</span>{' '}
              <span className="font-normal">REQUIREMENTS</span>
            </h2>
            <p className="font-raleway text-xl font-normal text-center mb-8" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I deliver your ERAS photo formatted to current AAMC guidelines. You upload it directly to MyERAS without resizing or reformatting anything.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-xl" style={{ color: '#383838', fontWeight: '400' }}>
                    <strong>Format:</strong> JPEG / JPG
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-xl" style={{ color: '#383838', fontWeight: '400' }}>
                    <strong>Dimensions:</strong> 2.5 x 3.5 inches
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-xl" style={{ color: '#383838', fontWeight: '400' }}>
                    <strong>Resolution:</strong> 150 dpi
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-xl" style={{ color: '#383838', fontWeight: '400' }}>
                    <strong>File size:</strong> 150 KB or smaller
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-xl" style={{ color: '#383838', fontWeight: '400' }}>
                    <strong>Color profile:</strong> RGB, full color
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-xl" style={{ color: '#383838', fontWeight: '400' }}>
                    <strong>Composition:</strong> Head and shoulders, face centered, facing the camera
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cmq-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="font-raleway text-xl" style={{ color: '#383838', fontWeight: '400' }}>
                    <strong>Background:</strong> Neutral or light, non-distracting
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ERAS Timeline Section */}
      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-4" style={{ color: 'white' }}>
              <span className="font-medium">ERAS APPLICATION</span>{' '}
              <span className="font-normal">TIMELINE</span>
            </h2>
            <p className="font-raleway text-xl font-normal text-center mb-10" style={{
              color: 'rgba(255,255,255,0.9)',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Know the ERAS application timeline so you can get your headshot done with time to spare. Here are the key dates for the current and upcoming cycles.
            </p>

            {/* 2026 Cycle */}
            <div className="mb-10">
              <p className="font-raleway text-2xl font-medium text-center mb-6" style={{ color: '#5577a5' }}>
                2026 CYCLE (OFFICIAL DATES)
              </p>
              <div className="space-y-3 max-w-2xl mx-auto">
                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="font-raleway text-lg font-medium text-white whitespace-nowrap" style={{ minWidth: '140px' }}>June 4, 2025</span>
                  <span className="font-raleway text-lg text-white" style={{ fontWeight: '400' }}>ERAS season opens at 9:00 a.m. ET</span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="font-raleway text-lg font-medium text-white whitespace-nowrap" style={{ minWidth: '140px' }}>Sept 3, 2025</span>
                  <span className="font-raleway text-lg text-white" style={{ fontWeight: '400' }}>Applications can be submitted at 9:00 a.m. ET</span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="font-raleway text-lg font-medium text-white whitespace-nowrap" style={{ minWidth: '140px' }}>Sept 24, 2025</span>
                  <span className="font-raleway text-lg text-white" style={{ fontWeight: '400' }}>Programs begin reviewing applications</span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="font-raleway text-lg font-medium text-white whitespace-nowrap" style={{ minWidth: '140px' }}>Late Spring 2026</span>
                  <span className="font-raleway text-lg text-white" style={{ fontWeight: '400' }}>2026 cycle closes</span>
                </div>
              </div>
            </div>

            {/* 2027 Expected Cycle */}
            <div>
              <p className="font-raleway text-2xl font-medium text-center mb-6" style={{ color: '#5577a5' }}>
                2027 CYCLE (EXPECTED DATES)
              </p>
              <div className="space-y-3 max-w-2xl mx-auto">
                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="font-raleway text-lg font-medium text-white whitespace-nowrap" style={{ minWidth: '140px' }}>Early June 2026</span>
                  <span className="font-raleway text-lg text-white" style={{ fontWeight: '400' }}>ERAS season expected to open</span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="font-raleway text-lg font-medium text-white whitespace-nowrap" style={{ minWidth: '140px' }}>Early Sept 2026</span>
                  <span className="font-raleway text-lg text-white" style={{ fontWeight: '400' }}>Applications likely accepted</span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="font-raleway text-lg font-medium text-white whitespace-nowrap" style={{ minWidth: '140px' }}>Late Sept 2026</span>
                  <span className="font-raleway text-lg text-white" style={{ fontWeight: '400' }}>Programs likely begin reviewing</span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="font-raleway text-lg font-medium text-white whitespace-nowrap" style={{ minWidth: '140px' }}>Late Spring 2027</span>
                  <span className="font-raleway text-lg text-white" style={{ fontWeight: '400' }}>2027 cycle expected to close</span>
                </div>
              </div>
              <p className="font-raleway text-base text-center mt-6" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '400' }}>
                2027 dates are estimates based on previous cycles. This page will be updated when AAMC publishes confirmed dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing + What to Expect Section */}
      <section id="pricing" className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

            {/* Left Side - Pricing Card */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <h3 className="font-raleway text-3xl mb-2" style={{ color: '#5577a5' }}>
                  <span className="font-medium">ERAS EXPRESS</span>
                </h3>
                <p className="font-raleway text-lg mb-8" style={{ color: '#575757', fontWeight: '400' }}>
                  Medical Residency Headshot
                </p>

                <div className="mb-10">
                  <div className="text-6xl mb-4" style={{ color: '#5577a5', fontWeight: '400' }}>
                    $300
                  </div>
                  <p className="font-raleway text-xl" style={{ color: '#575757', fontWeight: '400' }}>
                    Express Session + 1 ERAS Image
                  </p>
                </div>

                <div className="space-y-4 mb-10 text-left max-w-xs mx-auto">
                  {[
                    '20-Minute Studio Session',
                    'One Look / One Outfit',
                    'Neutral Studio Background',
                    'Posing and Expression Coaching',
                    'Choose Your Favorite Image',
                    '1 Edited Image (ERAS-Formatted)',
                    'Delivered in 48 Hours',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                        <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-raleway" style={{ color: '#575757', fontWeight: '400' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://cmqheadshots.as.me/LinkedIn-express"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white font-raleway text-lg font-medium px-8 py-3 rounded transition-colors duration-300"
                  style={{ backgroundColor: '#5577a5' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#575757'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#5577a5'
                  }}
                >
                  BOOK NOW
                </a>

                <p className="font-raleway text-sm mt-4" style={{ color: '#999', fontWeight: '400' }}>
                  Summer slots fill up fast. Book early to get your preferred date.
                </p>
              </div>
            </div>

            {/* Right Side - What to Expect */}
            <div>
              <h2 className="font-raleway text-3xl lg:text-4xl mb-6 text-center lg:text-left" style={{ color: '#5577a5' }}>
                <span className="font-medium">WHAT TO EXPECT</span>{' '}
                <span className="font-normal">AT YOUR ERAS SESSION</span>
              </h2>
              <p className="font-raleway text-xl font-normal mb-6 text-center lg:text-left" style={{
                color: '#383838',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                The ERAS Express session takes 20 minutes. Show up in your professional outfit, and I handle the rest.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-raleway font-medium text-lg" style={{ backgroundColor: '#5577a5' }}>1</div>
                  <div>
                    <p className="font-raleway text-lg font-medium" style={{ color: '#383838' }}>Arrive at the Studio</p>
                    <p className="font-raleway text-base" style={{ color: '#575757', fontWeight: '400' }}>North Phoenix studio with easy access from the 101 and I-17. Quick check of your outfit and grooming before we start.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-raleway font-medium text-lg" style={{ backgroundColor: '#5577a5' }}>2</div>
                  <div>
                    <p className="font-raleway text-lg font-medium" style={{ color: '#383838' }}>Posing and Coaching</p>
                    <p className="font-raleway text-base" style={{ color: '#575757', fontWeight: '400' }}>I coach you on posing, angles, and expressions. Most students relax within the first few minutes. You do not need to know how to pose.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-raleway font-medium text-lg" style={{ backgroundColor: '#5577a5' }}>3</div>
                  <div>
                    <p className="font-raleway text-lg font-medium" style={{ color: '#383838' }}>Pick Your Favorite</p>
                    <p className="font-raleway text-base" style={{ color: '#575757', fontWeight: '400' }}>Review the images and choose the one you like best. I will professionally edit it and format it to exact ERAS specs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-raleway font-medium text-lg" style={{ backgroundColor: '#5577a5' }}>4</div>
                  <div>
                    <p className="font-raleway text-lg font-medium" style={{ color: '#383838' }}>Upload to MyERAS</p>
                    <p className="font-raleway text-base" style={{ color: '#575757', fontWeight: '400' }}>Your edited photo arrives in 48 hours. It is already sized, cropped, and formatted. Upload it directly to MyERAS.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Book Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-4" style={{ color: '#5577a5' }}>
              <span className="font-medium">WHEN TO BOOK</span>{' '}
              <span className="font-normal">YOUR ERAS HEADSHOT</span>
            </h2>
            <p className="font-raleway text-xl font-normal text-center mb-10" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Schedule your ERAS headshot session between June and August. That gives you time to get your photo done, pick your image, and upload it to MyERAS before the September submission window opens.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start gap-4">
                <span className="font-raleway text-2xl font-medium flex-shrink-0" style={{ color: '#5577a5', minWidth: '120px' }}>JUNE</span>
                <p className="font-raleway text-lg" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  Best time to book. ERAS season opens and you can start uploading documents. Calendar has the most availability. Get it done early and cross it off your list.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start gap-4">
                <span className="font-raleway text-2xl font-medium flex-shrink-0" style={{ color: '#5577a5', minWidth: '120px' }}>JULY</span>
                <p className="font-raleway text-lg" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  Still plenty of availability. Most students are finalizing personal statements and letters of recommendation. Good time to get your headshot handled.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start gap-4">
                <span className="font-raleway text-2xl font-medium flex-shrink-0" style={{ color: '#5577a5', minWidth: '120px' }}>AUGUST</span>
                <p className="font-raleway text-lg" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  Slots start filling up. Every med student who waited is now trying to book. Do not be the person scrambling the week before applications open.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start gap-4">
                <span className="font-raleway text-2xl font-medium flex-shrink-0" style={{ color: '#5577a5', minWidth: '120px' }}>SEPT</span>
                <p className="font-raleway text-lg" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  Application submission opens. Your photo should already be uploaded and assigned to your programs by now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Wear Section */}
      <section className="py-16" style={{ backgroundColor: '#282725' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-4" style={{ color: 'white' }}>
              <span className="font-medium">WHAT TO WEAR</span>{' '}
              <span className="font-normal">TO YOUR ERAS HEADSHOT</span>
            </h2>
            <p className="font-raleway text-xl font-normal text-center mb-10" style={{
              color: 'rgba(255,255,255,0.9)',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Dress like you are walking into a residency interview. Program directors want to see someone who looks put-together and professional.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <p className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>RECOMMENDED</p>
                <ul className="space-y-3">
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • Suit jacket or blazer
                  </li>
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • Collared shirt or professional blouse
                  </li>
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • Solid colors: navy, gray, black, dark tones
                  </li>
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • White coat (optional, bring it along)
                  </li>
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • Simple jewelry, nothing distracting
                  </li>
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • Neat, professional grooming
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <p className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>SKIP THESE</p>
                <ul className="space-y-3">
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • Busy patterns or stripes
                  </li>
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • Bright or neon colors
                  </li>
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • Logos or graphics on clothing
                  </li>
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • T-shirts, hoodies, casual wear
                  </li>
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • Large or flashy accessories
                  </li>
                  <li className="font-raleway text-lg" style={{ color: 'white', fontWeight: '400' }}>
                    • Anything you would not wear to an interview
                  </li>
                </ul>
              </div>
            </div>
            <p className="font-raleway text-lg mt-8" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: '400' }}>
              Not sure what to wear? Bring 2-3 options to your session and we will pick the best one together.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-medium">ERAS HEADSHOT</span>{' '}
              <span className="font-normal">FAQ</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2">Should I wear a white coat?</h3>
                <p className="font-raleway text-base text-center lg:text-left" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  Most applicants go with professional business attire. Some schools and specialties prefer the white coat. Check with your program advisor. Either way, bring both options and we will shoot it both ways so you can decide later.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2">How soon will I get my photo?</h3>
                <p className="font-raleway text-base text-center lg:text-left" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  48 hours from when you pick your favorite image. Your photo will be edited, retouched, and formatted to ERAS specifications. Ready to upload directly to MyERAS.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2">What background do you use?</h3>
                <p className="font-raleway text-base text-center lg:text-left" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  Clean, neutral studio backgrounds that meet ERAS guidelines. Gray and light blue are the most popular. We will pick the one that works best with your outfit and skin tone.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2">I wear glasses. Should I take them off?</h3>
                <p className="font-raleway text-base text-center lg:text-left" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  Wear them if that is how you normally look. I handle reflections with studio lighting and posing angles. If you switch between glasses and contacts, we can shoot a quick version of each.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2">Can I also get a LinkedIn crop?</h3>
                <p className="font-raleway text-base text-center lg:text-left" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  The ERAS Express includes one image cropped to ERAS specs (2.5 x 3.5 vertical). If you also need a square crop for LinkedIn or other formats, ask about additional crops at your session.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2">I am nervous about having my photo taken.</h3>
                <p className="font-raleway text-base text-center lg:text-left" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  Most med students feel that way. I have been doing this for 14 years and I have photographed over 3,000 people. I will tell you exactly how to pose, where to look, and what expression works best. Most people relax within the first few minutes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2">How much does an ERAS headshot cost?</h3>
                <p className="font-raleway text-base text-center lg:text-left" style={{ color: '#383838', fontWeight: '400', lineHeight: '1.6' }}>
                  The ERAS Express session is $300. That includes a 20-minute studio session with posing and expression coaching, one professionally edited image formatted to current AAMC/ERAS specs, and delivery in 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#5577a5' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-4 uppercase" style={{ color: '#ffffff' }}>
            ERAS HEADSHOTS NEAR ME
          </h2>
          <p className="font-raleway text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'white', fontWeight: '400', lineHeight: '1.6' }}>
            My studio is in North Phoenix with easy access from the 101 and I-17. The session takes 20 minutes. With 14 years of experience and over 130 five-star Google reviews, I make the process quick and comfortable. Do not wait until August when every med student in Phoenix is trying to book the same week.
          </p>
          <a
            href="https://cmqheadshots.as.me/LinkedIn-express"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-raleway text-lg font-medium px-8 py-4 rounded-lg transition-colors duration-300 border-2 border-white uppercase"
            style={{ backgroundColor: 'transparent' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#575757'
              e.currentTarget.style.borderColor = '#575757'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = '#ffffff'
            }}
          >
            BOOK YOUR ERAS SESSION
          </a>
        </div>
      </section>

    </Layout>
  )
}
