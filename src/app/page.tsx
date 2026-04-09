import Image from "next/image";

const services = [
  {
    name: "Functional Assessments",
    description:
      "A comprehensive evaluation of your current functional abilities, daily activities, and occupational performance. The foundation of every personalized treatment plan.",
  },
  {
    name: "Individualized Treatment Plans & Follow-Up",
    description:
      "No two clients are the same. Your plan is built around your specific goals, conditions, and lifestyle, and evolves as you do.",
  },
  {
    name: "Home Safety & Fall Risk Assessments",
    description:
      "A thorough in-home evaluation to identify hazards, recommend modifications, and support your ability to age in place safely and confidently.",
  },
  {
    name: "Caregiver Education",
    description:
      "Practical, compassionate training for family members and caregivers so the people in your corner are equipped to support you well.",
  },
];

export default function Home() {
  return (
    <div className="bg-cream text-ink font-sans">

      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-rule">
        <nav className="px-8 md:px-16 h-14 flex items-center justify-between">
          <a href="#" aria-label="Urban Aging home">
            <Image
              src="/wordmark.svg"
              alt="Urban Aging"
              width={152}
              height={26}
              priority
            />
          </a>
          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-10 text-[10px] tracking-[0.22em] uppercase text-ink/50">
            <a href="#about" className="hover:text-ink transition-colors duration-200">About</a>
            <a href="#services" className="hover:text-ink transition-colors duration-200">Services</a>
            <a href="#contact" className="hover:text-ink transition-colors duration-200">Contact</a>
          </div>
          {/* Mobile CTA */}
          <a
            href="mailto:claire@urbanaging.com"
            className="sm:hidden text-[10px] tracking-[0.22em] uppercase border border-ink/25 px-4 py-2 text-ink/70 hover:bg-ink hover:text-cream transition-all duration-200"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* ── Hero ── */}
      {/*
        Desktop: text left / bike photo right, full viewport height
        Mobile:  photo on top (via flex-col-reverse), text below
      */}
      <section className="flex flex-col-reverse lg:flex-row lg:h-[calc(100vh-3.5rem)]">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-16 lg:py-0">
          <p className="text-[11px] tracking-[0.25em] uppercase text-sage mb-6">
            Dr. Claire Trefethen, OTD, OTR/L
          </p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] mb-8">
            Aging on<br />Your Terms.
          </h1>
          <p className="text-ink/60 text-lg leading-relaxed mb-12 max-w-md">
            Occupational therapy built for the complexity, pace, and demands of life in New York City.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-sage w-fit group"
          >
            Get in touch
            <span className="block h-px w-6 bg-sage group-hover:w-10 transition-all duration-300" />
          </a>
        </div>

        {/* Bike photo */}
        <div className="relative h-[75vw] lg:h-auto lg:w-[42%] shrink-0">
          <Image
            src="/old-bike.png"
            alt="Older man cycling on a New York City street"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-bottom lg:object-center"
            priority
          />
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="bg-stone py-28 md:py-40 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          {/* Pull quote */}
          <blockquote className="font-display text-3xl md:text-4xl font-light italic leading-relaxed text-ink mb-10 text-center">
            &ldquo;Aging is not a problem to be solved. It is a life to be lived &mdash; actively,
            independently, and on your own terms.&rdquo;
          </blockquote>
          <div className="h-px w-10 bg-sage mx-auto mb-14" />

          {/* Body copy */}
          <div className="text-ink/65 leading-relaxed space-y-5 text-[15px]">
            <p>
              Occupational therapy is not only for those recovering from injury or illness. It is
              for anyone who wants to function better, move through their environment more safely,
              and protect their independence over time. My practice is built for all of it.
            </p>
            <p>
              My approach starts with one question: what do you want to keep doing, and what might
              get in the way? From there, we build a plan that is specific to you &mdash; your body,
              your home, your routines, your goals. Whether you are recovering from something,
              managing a chronic condition, or simply committed to living well for as long as
              possible, there is a place for you here.
            </p>
            <p>
              I believe in active aging. In longevity that is earned through movement, intention,
              and the right support at the right time. In aging in place as the goal &mdash; a
              deliberate, empowered choice that takes planning, support, and intention to do well.
              New York City makes that choice harder than almost anywhere else, and I am here to
              make it possible.
            </p>
          </div>

          {/* Mission */}
          <div className="mt-14 pt-10 border-t border-rule">
            <p className="text-[11px] tracking-[0.25em] uppercase text-sage mb-4">Mission</p>
            <p className="text-ink/65 leading-relaxed text-[15px]">
              Our mission is to deliver exceptional, person-centered occupational therapy that
              supports longevity, independence, and aging in place for the people of New York City.
            </p>
            <p className="font-display text-xl italic text-ink mt-4">
              If you can age here, you can age anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      {/*
        Desktop: Claire's photo left (sticky as text scrolls) / bio right
        Mobile:  photo on top, text below
      */}
      <section id="about" className="flex flex-col lg:flex-row">
        {/* Photo */}
        <div className="relative h-[90vw] lg:h-auto lg:w-[45%] shrink-0 lg:min-h-[90vh]">
          <Image
            src="/claire.jpeg"
            alt="Dr. Claire Trefethen"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Bio */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-16 lg:py-24">
          <p className="text-[11px] tracking-[0.25em] uppercase text-sage mb-4">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-10">
            Dr. Claire Trefethen
          </h2>
          <div className="text-ink/65 leading-relaxed space-y-5 text-[15px] max-w-lg">
            <p>
              I grew up at the base of the Rocky Mountains in Colorado Springs, Colorado,
              where I learned early that the body is capable of remarkable things. As an elite
              athlete competing in triathlon and track, I developed a deep respect for human
              performance and what it takes to sustain it over time. That curiosity about the
              body led me to Cal Poly San Luis Obispo, where I studied Kinesiology and Public
              Health and began to understand health not just as an individual pursuit, but as
              something shaped by environment, community, and circumstance.
            </p>
            <p>
              I went on to earn my Doctor of Occupational Therapy at the University of
              St.&nbsp;Augustine for Health Sciences, graduating Magna Cum Laude and as a member
              of Pi Theta Epsilon, the occupational therapy honor society. I then became the
              founding occupational therapist at Mirabella at ASU, the world&rsquo;s first
              university-based senior living high-rise, where I built the OT program from the
              ground up for a community redefining what luxury aging in place could look like.
            </p>
            <p>
              Then I moved to New York City, and everything I knew about aging got tested all
              over again. Over three years at Spear Physical &amp; Occupational Therapy &mdash;
              one of the nation&rsquo;s most respected rehabilitation practices &mdash; I sharpened
              my clinical skills in a fast-paced, high-volume environment that made me a better
              and more decisive clinician. It was home health that taught me something different
              entirely &mdash; years of working inside people&rsquo;s homes across Manhattan showed
              me firsthand how the city&rsquo;s environments, the buildings, the layouts, the
              staircases, shape how people age and what they need to stay independent.
            </p>
            <p>
              I founded Urban Aging because I believe New Yorkers deserve occupational therapy
              that actually meets them where they live. Not a generic program &mdash; a practice
              built specifically for the complexity, pace, and demands of life in this city.
            </p>
          </div>

          {/* Credential tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {["OTD, OTR/L", "NBC-HWC", "NASM-CPT", "Senior Fitness Specialist"].map(
              (credential) => (
                <span
                  key={credential}
                  className="text-[10px] tracking-[0.15em] uppercase border border-rule px-3 py-1.5 text-ink/50"
                >
                  {credential}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-28 md:py-40 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] tracking-[0.25em] uppercase text-sage mb-12">
            What I Offer
          </p>

          {/* Intro */}
          <div className="text-ink/65 leading-relaxed space-y-5 text-[15px] max-w-2xl mb-16 md:mb-24">
            <p>
              Urban Aging is a private occupational therapy practice offering one-on-one,
              individualized care. Sessions are primarily clinic-based, with in-home visits
              available for those who need care where they live (travel fee may apply).
            </p>
            <p>
              Unlike a traditional OT practice, my background as a National Board Certified
              Health &amp; Wellness Coach, NASM Certified Personal Trainer, and Senior Fitness
              Specialist means your care is informed by a truly integrated understanding of how
              the body moves, adapts, and thrives. You are not getting a one-dimensional
              clinician. You are getting someone who understands the full picture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {services.map((service) => (
              <div key={service.name} className="border-t border-rule py-10">
                <h3 className="font-display text-2xl font-medium mb-3">{service.name}</h3>
                <p className="text-ink/60 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-rule pt-8 mt-4">
            <p className="text-sm italic text-ink/40">
              Urban Aging is currently accepting Medicare and offers private pay options.
              Please inquire about pricing. In-person and virtual appointments available.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-28 md:py-40 px-8">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase text-sage mb-8">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-8">
            Ready to take<br />the next step?
          </h2>
          <p className="text-ink/60 mb-12 leading-relaxed text-[15px]">
            Whether you are looking for support for yourself or a loved one, I would love to
            connect. Reach out to schedule a consultation or ask any questions.
          </p>

          <div className="space-y-2 text-sm text-ink/60 mb-12">
            <p>New York, NY</p>
            <p>
              <a
                href="tel:7193515668"
                className="hover:text-ink transition-colors"
              >
                (719) 351-5668
              </a>
            </p>
            <p>
              <a
                href="mailto:claire@urbanaging.com"
                className="hover:text-ink transition-colors"
              >
                claire@urbanaging.com
              </a>
            </p>
          </div>

          <a
            href="mailto:claire@urbanaging.com"
            className="inline-block border border-ink/25 px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-ink hover:text-cream hover:border-ink transition-all duration-200"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-rule px-8 md:px-16 py-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image src="/icon.svg" alt="" width={14} height={18} aria-hidden />
            <span className="text-[11px] text-ink/35 tracking-wider">
              Licensed Occupational Therapist &mdash; New York &amp; National
            </span>
          </div>
          <span className="text-[11px] text-ink/35 shrink-0">
            &copy; {new Date().getFullYear()} Urban Aging
          </span>
        </div>
      </footer>

    </div>
  );
}
