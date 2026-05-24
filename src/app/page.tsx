import Image from "next/image";

/* ── shared type helpers ─────────────────────────────────────── */
const tag = "text-[11px] tracking-[3.5px] uppercase font-[family-name:var(--font-sans)] font-normal";
const display = "font-[family-name:var(--font-display)] font-light";

const marqueeItems = [
  "Functional Assessments",
  "Aging in Place",
  "Home Safety",
  "Independence",
  "Occupational Therapy",
  "New York City",
  "Upper Extremity Rehabilitation",
  "Longevity",
  "Person-Centered Care",
  "Active Living",
  "Fall Prevention",
  "Functional Assessments",
  "Aging in Place",
  "Home Safety",
  "Independence",
  "Occupational Therapy",
  "New York City",
  "Upper Extremity Rehabilitation",
  "Longevity",
  "Person-Centered Care",
  "Active Living",
  "Fall Prevention",
];

export default function Home() {
  return (
    <div>
      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-8 md:px-12 py-7 relative z-10">
        <Image src="/wordmark.svg" alt="Urban Aging" width={152} height={26} priority />
        <ul className={`hidden md:flex gap-9 ${tag} text-muted`}>
          {["About", "Services", "Contact"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-charcoal transition-colors cursor-pointer">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh] overflow-hidden">
        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-28">
          <p className={`${tag} text-sage-dark mb-8`}>
            Wellness, refined by experience
          </p>
          <h1
            className={`${display} text-ink leading-[1.07] tracking-[-1px] mb-7`}
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
          >
            If you can age here,<br />
            you can age <em className="italic text-sage-dark">anywhere.</em>
          </h1>
          <p className="text-[17px] leading-[1.8] text-charcoal/70 font-normal max-w-[420px] mb-10">
            A private occupational therapy practice built specifically for
            the complexity, pace, and demands of life in New York City.
            Person-centered care — from someone who knows this city
            inside out.
          </p>
          <a
            href="https://tula.nyc/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className={`${tag} inline-flex items-center gap-3 border border-taupe px-9 py-4 w-fit hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-300`}
          >
            Schedule online
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M1 6h13M10 1l4.5 5-4.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Image */}
        <div className="relative h-[60vw] md:h-auto overflow-hidden">
          <Image
            src="/old-bike.png"
            alt="Active aging in New York City"
            fill
            className="object-cover object-center"
            style={{ filter: "saturate(0.85) contrast(1.02)" }}
            priority
          />
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────────── */}
      <div className="bg-sage-dark overflow-hidden py-[14px]" style={{ whiteSpace: "nowrap" }}>
        <div
          className={`${tag} inline-flex gap-12 text-sage-light`}
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {marqueeItems.map((item, i) => (
            <span key={i} className="opacity-80">
              <span className="mr-12 opacity-40 text-[6px] align-middle">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── PHILOSOPHY ──────────────────────────────────────────── */}
      <section className="text-center px-8 py-28 md:py-36 max-w-2xl mx-auto">
        <p className={`${tag} text-sage-dark mb-7`}>Our philosophy</p>
        <h2
          className={`${display} text-ink leading-[1.25] mb-6`}
          style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
        >
          We don&apos;t treat aging as a problem.<br />
          We treat it as a <em className="italic">life worth designing.</em>
        </h2>
        <p className="text-[17px] leading-[1.85] text-charcoal/70 font-normal mb-6">
          Occupational therapy is not only for those recovering from injury or
          illness. It is for anyone who wants to function better, move through
          their environment more safely, and protect their independence over
          time. My practice is built for all of it.
        </p>
        <p className="text-[17px] leading-[1.85] text-charcoal/70 font-normal">
          My approach starts with one question: what do you want to keep doing,
          and what might get in the way? From there, we build a plan that is
          specific to you — your body, your home, your routines, your goals.
          Whether you are recovering from something, managing a chronic
          condition, or simply committed to living well for as long as possible,
          there is a place for you here.
        </p>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Photo */}
        <div className="relative h-[70vw] md:h-auto overflow-hidden">
          <Image
            src="/claire.jpeg"
            alt="Dr. Claire Trefethen"
            fill
            className="object-cover object-top"
            style={{ filter: "saturate(0.85) contrast(1.02)" }}
          />
        </div>

        {/* Bio */}
        <div
          className="flex flex-col justify-center px-8 md:px-16 py-20"
          style={{ background: "var(--warm-white)" }}
        >
          <p className={`${tag} text-sage-dark mb-8`}>About</p>
          <h2
            className={`${display} text-ink leading-[1.1] mb-4`}
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}
          >
            Claire<br />Trefethen
          </h2>
          <p className={`${display} text-taupe leading-snug mb-9`} style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
            OTD, OTR/L · NBC-HWC · NASM-CPT · SFS
          </p>

          <div className="space-y-5 text-[16px] leading-[1.85] text-charcoal/70 font-normal">
            <p>
              I grew up at the base of the Rocky Mountains in Colorado Springs,
              Colorado, where I learned early that the body is capable of
              remarkable things. As an elite athlete competing in triathlon and
              track, I developed a deep respect for human performance and what
              it takes to sustain it over time. That curiosity about the body
              led me to Cal Poly San Luis Obispo, where I studied Kinesiology
              and Public Health and began to understand health not just as an
              individual pursuit, but as something shaped by environment,
              community, and circumstance.
            </p>
            <p>
              I went on to earn my Doctor of Occupational Therapy at the
              University of St. Augustine for Health Sciences, graduating Magna
              Cum Laude and as a member of Pi Theta Epsilon, the occupational
              therapy honor society. I then became the founding occupational
              therapist at Mirabella at ASU, the world&apos;s first
              university-based senior living high-rise, where I built the OT
              program from the ground up for a community redefining what luxury
              aging in place could look like.
            </p>
            <p>
              Then I moved to New York City, and everything I knew about aging
              got tested all over again. Over three years at Spear Physical
              &amp; Occupational Therapy, one of the nation&apos;s most
              respected rehabilitation practices, I sharpened my clinical skills
              in a fast-paced, high-volume environment that made me a better and
              more decisive clinician — including more than a decade of
              specialized focus in upper extremity rehabilitation. It was home
              health that taught me something different entirely — years of
              working inside people&apos;s homes across Manhattan showed me
              firsthand how the city&apos;s environments, the buildings, the
              layouts, the staircases, shape how people age and what they need
              to stay independent.
            </p>
            <p>
              I founded Urban Aging because I believe New Yorkers deserve
              occupational therapy that actually meets them where they live. Not
              a generic program. A practice built specifically for the
              complexity, pace, and demands of life in this city.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section id="services" className="px-8 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-taupe-light pb-10 mb-px gap-4">
          <div>
            <p className={`${tag} text-sage-dark mb-4`}>What I Offer</p>
            <h2
              className={`${display} text-ink leading-[1.05]`}
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              One-on-one care,<br />
              <em className="italic">built around you.</em>
            </h2>
          </div>
          <p className={`${tag} text-taupe text-right max-w-[220px]`} style={{ letterSpacing: "2px" }}>
            Clinic &amp; in-home sessions<br />NYC · Medicare &amp; Private Pay
          </p>
        </div>

        {/* Intro copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 border-b border-taupe-light mb-px">
          <p className="text-[16px] leading-[1.85] text-charcoal/70 font-normal">
            Urban Aging is a private occupational therapy practice offering
            one-on-one, individualized care. Sessions are primarily
            clinic-based, with in-home visits available for those who need
            care where they live (travel fee may apply).
          </p>
          <p className="text-[16px] leading-[1.85] text-charcoal/70 font-normal">
            Unlike a traditional OT practice, my background as a National Board
            Certified Health &amp; Wellness Coach, NASM Certified Personal
            Trainer, and Senior Fitness Specialist means your care is informed
            by a truly integrated understanding of how the body moves, adapts,
            and thrives. You are not getting a one-dimensional clinician. You
            are getting someone who understands the full picture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-taupe-light mt-px">
          {[
            {
              num: "01",
              title: "Functional Assessments",
              body: "A comprehensive evaluation of your current functional abilities, daily activities, and occupational performance. The foundation of every personalized treatment plan.",
              dark: false,
            },
            {
              num: "02",
              title: "Individualized Treatment Plans & Follow-Up Sessions",
              body: "No two clients are the same. Your plan is built around your specific goals, conditions, and lifestyle, and evolves as you do.",
              dark: true,
            },
            {
              num: "03",
              title: "Home Safety & Fall Risk",
              body: "A thorough in-home evaluation to identify hazards, recommend modifications, and support your ability to age in place safely and confidently.",
              dark: true,
            },
            {
              num: "04",
              title: "Caregiver Education",
              body: "Practical, compassionate training for family members and caregivers — so the people in your corner are equipped to support you well.",
              dark: false,
            },
          ].map((s) => (
            <div
              key={s.num}
              className="px-10 md:px-16 py-14 md:py-20"
              style={{
                background: s.dark ? "var(--charcoal)" : "var(--warm-white)",
                color: s.dark ? "var(--cream)" : "var(--charcoal)",
              }}
            >
              <div
                className={`${display} text-[72px] leading-none mb-4`}
                style={{ color: s.dark ? "var(--sage-dark)" : "var(--sage)" }}
              >
                {s.num}
              </div>
              <h3
                className={`${display} text-[1.75rem] leading-[1.2] mb-4`}
              >
                {s.title}
              </h3>
              <p
                className="text-[16px] leading-[1.8] font-normal max-w-[380px]"
                style={{ opacity: 0.82 }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION QUOTE ───────────────────────────────────────── */}
      <section
        className="text-center px-8 md:px-24 py-24 md:py-32"
        style={{ background: "var(--sage-dark)", color: "var(--cream)" }}
      >
        <blockquote
          className={`${display} italic leading-[1.45] max-w-2xl mx-auto mb-8`}
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
        >
          &ldquo;Aging is not a problem to be solved. It is a life to be
          lived — actively, independently, and on your own terms.&rdquo;
        </blockquote>
        <p className={`${tag} opacity-60`} style={{ letterSpacing: "2.5px" }}>
          Claire Trefethen, OTD &nbsp;·&nbsp; Urban Aging
        </p>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
        {/* Image panel */}
        <div className="relative h-[50vw] md:h-auto overflow-hidden">
          <Image
            src="/andy-arbeit-M9rvYUz2FUQ-unsplash.jpg"
            alt="New York City"
            fill
            className="object-cover object-center"
            style={{ filter: "saturate(0.75) contrast(1.05)" }}
          />
        </div>

        {/* Contact info */}
        <div
          className="flex flex-col justify-center px-8 md:px-16 py-20"
          style={{ background: "var(--warm-white)" }}
        >
          <p className={`${tag} text-sage-dark mb-6`}>Get in touch</p>
          <h2
            className={`${display} text-ink leading-[1.1] mb-5`}
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Ready to take<br />the next step?
          </h2>
          {/* Option 1: In-clinic at Tula */}
          <div className="mb-8">
            <p className={`${tag} text-taupe mb-3`} style={{ letterSpacing: "2px" }}>In-clinic at Tula</p>
            <p className="text-[14px] text-charcoal/55 mb-4 leading-relaxed">
              99 University Pl, Floor 9 · Greenwich Village
            </p>
            <div className="space-y-1 mb-6">
              <div>
                <a href="tel:2126041316" className={`${display} text-[1.1rem] text-charcoal hover:text-sage-dark transition-colors`}>
                  (212) 604-1316
                </a>
              </div>
              <div>
                <a href="https://tula.nyc/schedule" target="_blank" rel="noopener noreferrer" className={`${display} text-[1.1rem] text-charcoal hover:text-sage-dark transition-colors`}>
                  tula.nyc/schedule
                </a>
              </div>
            </div>
            <a
              href="https://tula.nyc/schedule"
              target="_blank"
              rel="noopener noreferrer"
              className={`${tag} inline-flex items-center gap-3 border border-taupe px-9 py-4 w-fit hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-300`}
            >
              Schedule online
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M1 6h13M10 1l4.5 5-4.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="border-t mb-8" style={{ borderColor: "var(--taupe-light)", opacity: 0.35 }} />

          {/* Option 2: Private / in-home */}
          <div>
            <p className={`${tag} text-taupe mb-3`} style={{ letterSpacing: "2px" }}>Private sessions</p>
            <p className="text-[14px] text-charcoal/55 mb-4 leading-relaxed">
              In-home visits · reach out directly to book
            </p>
            <div className="mb-6">
              <a href="mailto:claire@urbanaging.com" className={`${display} text-[1.1rem] text-charcoal hover:text-sage-dark transition-colors`}>
                claire@urbanaging.com
              </a>
            </div>
            <a
              href="mailto:claire@urbanaging.com"
              className={`${tag} inline-flex items-center gap-3 border border-taupe/50 px-9 py-4 w-fit text-charcoal/70 hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-300`}
            >
              Email Claire
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M1 6h13M10 1l4.5 5-4.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer
        className="px-8 md:px-12 py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12"
        style={{ background: "var(--ink)", color: "var(--taupe)" }}
      >
        <div>
          <Image
            src="/wordmark.svg"
            alt="Urban Aging"
            width={140}
            height={24}
            className="invert opacity-70 mb-5"
          />
          <p className="text-[14px] font-normal leading-[1.7] max-w-[280px]" style={{ opacity: 0.7 }}>
            Person-centered occupational therapy supporting longevity,
            independence, and aging in place — for the people of New York City.
          </p>
        </div>

        <div>
          <h5 className={`${tag} mb-5`} style={{ color: "var(--taupe-light)", letterSpacing: "2.5px" }}>
            Practice
          </h5>
          <ul className="space-y-3 text-[14px] font-normal" style={{ opacity: 0.75 }}>
            {["Functional Assessments", "Treatment Plans", "Home Safety", "Caregiver Education"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className={`${tag} mb-5`} style={{ color: "var(--taupe-light)", letterSpacing: "2.5px" }}>
            Contact
          </h5>
          <ul className="space-y-3 text-[14px] font-normal" style={{ opacity: 0.75 }}>
            <li>99 University Pl, Floor 9<br />New York, NY 10003</li>
            <li className="pt-1">
              <span style={{ color: "var(--taupe-light)", fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase" }}>Schedule</span>
              <div className="mt-1 space-y-1">
                <div>
                  <a href="tel:2126041316" className="hover:opacity-100 transition-opacity">
                    (212) 604-1316
                  </a>
                </div>
                <div>
                  <a href="https://tula.nyc/schedule" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                    tula.nyc
                  </a>
                </div>
              </div>
            </li>
            <li className="pt-1">
              <span style={{ color: "var(--taupe-light)", fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase" }}>Claire</span>
              <div className="mt-1 space-y-1">
                <div>
                  <a href="tel:7193515668" className="hover:opacity-100 transition-opacity">
                    (719) 351-5668
                  </a>
                </div>
                <div>
                  <a href="mailto:claire@urbanaging.com" className="hover:opacity-100 transition-opacity">
                    claire@urbanaging.com
                  </a>
                </div>
              </div>
            </li>
            <li>Medicare &amp; Private Pay</li>
          </ul>
        </div>

        <div
          className="md:col-span-3 border-t pt-7 flex flex-col md:flex-row justify-between gap-2 text-[11px] font-light"
          style={{ borderColor: "rgba(181,169,154,0.15)", opacity: 0.4 }}
        >
          <span>© 2024 Claire Trefethen, OTD, OTR/L. All rights reserved.</span>
          <span>Licensed in New York &nbsp;·&nbsp; Privacy &nbsp;·&nbsp; Accessibility</span>
        </div>
      </footer>
    </div>
  );
}
