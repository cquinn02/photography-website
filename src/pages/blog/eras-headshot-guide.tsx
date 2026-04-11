import Layout from '@/components/Layout'
import Link from 'next/link'
import RelatedPosts from '@/components/blog/RelatedPosts'
import BlogNavigation from '@/components/blog/BlogNavigation'
import BlogPostSchema from '@/components/blog/BlogPostSchema'

export default function ErasHeadshotGuide() {
  return (
    <Layout
      title="ERAS Headshot Guide: What Medical Students Need to Know"
      description="ERAS headshot requirements, what to wear, and when to book. Phoenix photographer Cindy Quinn shares tips for medical residency application photos."
      canonical="https://www.cmqheadshots.com/blog/eras-headshot-guide"
      ogUrl="https://www.cmqheadshots.com/blog/eras-headshot-guide"
      noindex={true}
      ogType="article"
    >
      <BlogPostSchema
        headline="ERAS Headshot Guide: What Medical Students Need to Know"
        description="ERAS headshot requirements, what to wear, and when to book. Phoenix photographer Cindy Quinn shares tips for medical residency application photos."
        url="https://www.cmqheadshots.com/blog/eras-headshot-guide"
        image="https://images.cmqheadshots.com/images/blog/optimized/eras-headshot-guide.webp"
        datePublished="2026-04-11"
      />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm">
              <Link href="/" className="font-medium transition-colors" style={{ color: '#5577a5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}>Home</Link>
              <span className="mx-2 text-black">&rsaquo;</span>
              <Link href="/blog" className="font-medium transition-colors" style={{ color: '#5577a5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}>Blog</Link>
              <span className="mx-2 text-black">&rsaquo;</span>
              <span className="text-black">ERAS Headshot Guide</span>
            </nav>
          </div>
        </div>

        <article className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center text-sm text-black mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                Medical Students
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-black mb-2">
              <span className="font-raleway">By Cindy Quinn</span>
              <span>&middot;</span>
              <span className="font-raleway">Professional Headshot Photographer</span>
            </div>

            <h1 className="font-raleway text-3xl lg:text-4xl mb-6 leading-tight text-center uppercase" style={{ color: '#5577a5' }}>
              <span className="font-medium">ERAS HEADSHOT GUIDE:</span><br />
              <span className="font-normal">WHAT MEDICAL STUDENTS</span><br />
              <span className="font-normal">NEED TO KNOW</span>
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              Over the past several years, I&apos;ve photographed hundreds of medical students for their ERAS headshots. Fourth-year students from Midwestern University in Glendale, University of Arizona College of Medicine in Phoenix, AT Still University in Mesa, and Creighton University&apos;s Phoenix campus have all come through my studio door with some version of the same question: &ldquo;What exactly does ERAS need, and how do I make sure my photo is good enough?&rdquo;
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              That ERAS headshot is often the first thing a program director sees when they open your application. Before they read your personal statement or scan your board scores, they see your face. And while no one will reject you based on a photo alone, a polished, professional image sets a tone. It tells the reviewer that you take this seriously, that you pay attention to details, and that you respect the process. A blurry selfie or a cropped group photo sends the opposite message.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              I wrote this guide because I answer these same questions every summer, and I want my students to walk into their session feeling prepared and confident. If you&apos;re a medical student in the Phoenix area getting ready to apply for residency, this is everything you need to know about your ERAS headshot.
            </p>

            <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-6 text-center uppercase" style={{ color: '#5577a5' }}>
              ERAS Photo Requirements
            </h2>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              The AAMC has specific technical requirements for the photo you upload to your ERAS application. Getting these wrong means your photo gets rejected, and scrambling to reshoot days before the September deadline is not where you want to be.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              Your ERAS photo must be a JPEG file under 150KB. The dimensions need to be 2.5 by 3.5 inches at 150 DPI. It should be a head-and-shoulders composition taken against a neutral, solid-colored background. No hats, no sunglasses, no filters. Your face needs to be clearly visible and well-lit.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              When you book an{' '}
              <Link
                href="/eras-medical-headshots"
                className="font-medium transition-colors"
                style={{ color: '#5577a5' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
              >
                ERAS headshot session with me
              </Link>
              , I handle all the technical specifications during editing. You don&apos;t need to worry about pixel dimensions or file compression. I export a version that meets every AAMC requirement, plus a higher-resolution version you can use on LinkedIn, your school&apos;s website, or anywhere else you need a professional photo.
            </p>

            <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-6 text-center uppercase" style={{ color: '#5577a5' }}>
              When to Book Your ERAS Headshot
            </h2>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              ERAS applications typically open in September, and most students want their headshot taken sometime between June and August. That window works well because you&apos;re usually done with rotations or at least have a lighter schedule, and it gives you time to receive your edited photos before the submission deadline.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              Here&apos;s what I see every year, though: June and July sessions book at a steady pace. Then August hits and my calendar fills up within the first two weeks. I start getting panicked emails from students who assumed they could book something last-minute. Some years I can squeeze people in. Other years, I genuinely cannot.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              My advice is simple: book in June or early July. You&apos;ll have your pick of session times, you won&apos;t feel rushed, and you&apos;ll have your final images weeks before you need them. If something unexpected comes up and you need to reschedule, there&apos;s still room on the calendar to make it happen.
            </p>

            <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-6 text-center uppercase" style={{ color: '#5577a5' }}>
              What to Wear for Your ERAS Headshot
            </h2>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              This is the question I get asked more than any other. The short answer is professional business attire, as if you were walking into a residency interview. The long answer has a few more layers to it.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              First, do not wear your white coat. I know it feels instinctive, and plenty of students show up wanting to wear it. But your white coat in a headshot can read as presumptuous to some program directors. You haven&apos;t matched yet. You&apos;re an applicant, not an attending. A clean blazer or professional top conveys the same level of seriousness without any potential negative associations. Save the white coat photos for Match Day.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              Here are my clothing recommendations for ERAS headshots:
            </p>

            <ul className="font-raleway text-lg mb-6 leading-relaxed list-disc pl-6 space-y-2" style={{ color: '#000000' }}>
              <li>Wear solid colors. Patterns, stripes, and plaids pull the viewer&apos;s attention away from your face.</li>
              <li>Jewel tones photograph beautifully. Think navy, deep teal, burgundy, emerald green, or sapphire blue.</li>
              <li>A well-fitted blazer adds instant polish. Bring one even if you&apos;re not sure you&apos;ll use it.</li>
              <li>Avoid tops that match your skin tone too closely. Beige, tan, and pale pink tend to wash people out on camera.</li>
              <li>Make sure everything is pressed and wrinkle-free. Wrinkles show up in photos more than you&apos;d expect.</li>
              <li>Keep jewelry minimal. Small stud earrings and a simple necklace are fine. Anything large or dangling becomes a distraction.</li>
              <li>Bring two or three outfit options. I&apos;ll help you choose what looks best once you&apos;re in the studio.</li>
            </ul>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              For a deeper breakdown on women&apos;s headshot attire, check out my{' '}
              <Link
                href="/blog/womens-headshot-clothing-guide"
                className="font-medium transition-colors"
                style={{ color: '#5577a5' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
              >
                women&apos;s headshot clothing guide
              </Link>
              .
            </p>

            <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-6 text-center uppercase" style={{ color: '#5577a5' }}>
              What to Expect During Your ERAS Headshot Session
            </h2>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              I designed my{' '}
              <Link
                href="/eras-medical-headshots"
                className="font-medium transition-colors"
                style={{ color: '#5577a5' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
              >
                ERAS Express session
              </Link>
              {' '}specifically for medical students. It&apos;s a focused, 20-minute session at my North Phoenix studio that gives you everything you need without eating up your entire afternoon. I know your time is limited. Most of my med students are juggling clinical rotations, studying for Step exams, and trying to finalize their application materials all at once.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              When you arrive, we&apos;ll look through the outfits you brought and pick the strongest options together. Then I&apos;ll walk you through posing and expression coaching. Most medical students aren&apos;t used to being in front of a camera, and that&apos;s completely normal. I coach you through small adjustments: how to angle your chin, where to put your shoulders, how to relax your eyes so you don&apos;t look tense. By the end of the first few frames, you&apos;ll feel more comfortable than you expected.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              If you want more general tips on getting ready for a headshot session, I put together a guide on{' '}
              <Link
                href="/blog/how-to-prep-for-your-best-professional-headshot"
                className="font-medium transition-colors"
                style={{ color: '#5577a5' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
              >
                how to prep for your best professional headshot
              </Link>
              {' '}that covers everything from skincare the night before to what to do with your hands.
            </p>

            <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-6 text-center uppercase" style={{ color: '#5577a5' }}>
              Common ERAS Headshot Mistakes
            </h2>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              I&apos;ve seen a lot of ERAS photos over the years. Some were taken by other photographers, some were taken by friends, and some were clearly taken in a bathroom mirror. Here are the mistakes that come up again and again.
            </p>

            <h3 className="font-raleway text-2xl font-medium mb-4 uppercase" style={{ color: '#5577a5' }}>
              Using a Selfie or Phone Photo
            </h3>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              Your phone camera is fine for Instagram. It is not fine for a document that program directors at competitive residency programs will review alongside your credentials. Phone cameras distort facial proportions, especially at close range. The front-facing camera is the worst offender. The lighting is almost always uneven, and the resolution after ERAS compression looks muddy. A professional camera with proper studio lighting produces a fundamentally different image.
            </p>

            <h3 className="font-raleway text-2xl font-medium mb-4 uppercase" style={{ color: '#5577a5' }}>
              Waiting Until the Last Minute
            </h3>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              Every August, I hear from students who need a session within 48 hours. Sometimes I can make it work. Often I can&apos;t. And even when I can fit you in, you&apos;re stressed, you&apos;re rushed, and that tension shows in your face. The students who book in June look more relaxed in their photos, and it&apos;s not a coincidence. Give yourself breathing room.
            </p>

            <h3 className="font-raleway text-2xl font-medium mb-4 uppercase" style={{ color: '#5577a5' }}>
              Over-Retouching
            </h3>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              Some students ask me to smooth out every line and pore until they look like a render from a video game. I always push back on this. Program directors want to see what you actually look like. If you show up to an interview looking noticeably different from your ERAS photo, it creates an awkward moment. My retouching approach is to clean up temporary blemishes, even out skin tones, and make sure the lighting is flattering. You should still look like you.
            </p>

            <h3 className="font-raleway text-2xl font-medium mb-4 uppercase" style={{ color: '#5577a5' }}>
              Ignoring the Background
            </h3>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              I&apos;ve seen ERAS photos with cluttered bookshelves behind the student, photos taken against a bedroom wall with visible outlet covers, and one memorable shot with a half-eaten pizza on a counter in the background. A clean, neutral backdrop keeps the focus on you. In my studio, I use a solid gray background that meets AAMC requirements and keeps the image looking professional without being sterile.
            </p>

            <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-6 text-center uppercase" style={{ color: '#5577a5' }}>
              Why Your ERAS Headshot Quality Matters
            </h2>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              Program directors review hundreds, sometimes thousands, of applications during each match cycle. They&apos;re moving fast. Your ERAS headshot is one of the few visual elements in your entire application, and it creates an immediate impression before a single word is read.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              I had a student a couple of years ago who matched at her top-choice program in dermatology. When she came back to update her headshot after matching, she told me that her program director mentioned during orientation that he remembered her photo. Not because it was unusual, but because she looked put-together and approachable. Those were his words. She&apos;d stood out in a pile of applications, and the photo was part of that first impression.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              A quality ERAS headshot won&apos;t get you into a program on its own. But a poor one can quietly work against you. When everything else between two candidates is close, the small details start to matter. Your photo is one of those details.
            </p>

            <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-6 text-center uppercase" style={{ color: '#5577a5' }}>
              ERAS Headshot Near Me in Phoenix
            </h2>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              If you&apos;re a medical student anywhere in the Phoenix metro area, my studio is an easy drive from all the major medical schools in the Valley. Midwestern University students come from Glendale, AT Still students drive over from Mesa, University of Arizona and Creighton students are right here in Phoenix, and I regularly see students from Scottsdale and the surrounding communities as well.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              My studio is located in North Phoenix, just off the 51 freeway, with easy parking and a comfortable waiting area. The ERAS Express session is built around your schedule. Twenty minutes, in and out. You&apos;ll receive your ERAS-formatted file plus a high-resolution copy, fully retouched and delivered to your inbox within a few business days.
            </p>

            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              I&apos;ve been photographing medical students for their ERAS applications for years, and I know exactly what the AAMC requires and what program directors respond to. If you&apos;re getting ready for residency applications and you want a headshot that looks professional without looking stiff, I&apos;d love to work with you.{' '}
              <Link
                href="/eras-medical-headshots"
                className="font-medium transition-colors"
                style={{ color: '#5577a5' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
              >
                View ERAS Express session details and pricing here
              </Link>
              .
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
            <h3 className="font-raleway text-2xl font-medium mb-4 uppercase" style={{ color: '#5577a5' }}>Ready to Book Your ERAS Headshot?</h3>
            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
              Don&apos;t wait until August. Secure your session now and check one more thing off your residency application to-do list.
            </p>
            <Link
              href="/eras-medical-headshots"
              className="text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              style={{ backgroundColor: '#5577a5' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#575757'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
            >
              Book Your ERAS Session
            </Link>
          </div>

          {/* Related Posts */}
          <RelatedPosts posts={[
            {
              title: "WOMEN'S HEADSHOT CLOTHING GUIDE",
              excerpt: "Professional clothing tips for women's headshots. What to wear for classic, timeless business photos.",
              slug: "womens-headshot-clothing-guide",
              image: "https://images.cmqheadshots.com/images/blog/womens-clothing-main.webp"
            },
            {
              title: "DRESS TO IMPRESS: MEN'S HEADSHOT FASHION TIPS",
              excerpt: "Your headshot fashion choices can make or break your professional image. Essential do's and don'ts for men's headshot attire.",
              slug: "dress-to-impress-mens-headshot-fashion-tips-for-business-success",
              image: "https://images.cmqheadshots.com/images/blog/CMQHEADSHOTS-What%20to%20wear-men.webp"
            },
            {
              title: "HOW TO PREP FOR YOUR BEST PROFESSIONAL HEADSHOT",
              excerpt: "Everything you need to know before your headshot session. From skincare to wardrobe to what to expect on the day.",
              slug: "how-to-prep-for-your-best-professional-headshot",
              image: "https://images.cmqheadshots.com/images/blog/optimized/clothing-for-headshots-prep-optimized.webp"
            },
          ]} />

          {/* Navigation */}
          <BlogNavigation
            previousPost={{
              title: "HOW PHOENIX REALTORS USE HEADSHOTS TO WIN LISTINGS",
              slug: "realtor-headshots-win-listings"
            }}
            nextPost={{
              title: "WHY EVERY PHOENIX ATTORNEY NEEDS A PROFESSIONAL HEADSHOT",
              slug: "attorney-headshots-phoenix"
            }}
          />
        </article>
      </div>
    </Layout>
  )
}
