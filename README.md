# Naveed Aslam — Portfolio Landing Page

React + TypeScript + Tailwind + Framer Motion + Lucide. Dark theme (#0C0C0C),
Kanit font. Built to the spec: Hero → Marquee → About → Services → Work.

--------------------------------------------------------------------------
RUN IT (PowerShell, one line at a time)
--------------------------------------------------------------------------

npm install

npm run dev

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

npm run build

npm run preview

--------------------------------------------------------------------------
WHAT'S DONE vs WHAT NEEDS YOUR ASSETS
--------------------------------------------------------------------------

Everything is coded and renders out of the box. Where a real asset is
required, you'll see a labeled dashed placeholder instead of a broken image —
so nothing looks broken while you gather screenshots. Each placeholder has ONE
obvious swap point.

Decisions I made (change any of these freely):

1. MARQUEE = tech-stack tiles (spec option b). You don't have 21 project GIFs
   yet, so styled tiles for your actual stack (React, Next.js, TypeScript,
   Node, Tailwind, PostgreSQL, Prisma, Power BI, Framer Motion, Git, Azure,
   Supabase) fill the same two-row scroll effect and look intentional.
   To switch to option (a) later: in src/components/MarqueeSection.tsx keep
   the two rows + transform logic exactly as-is and swap <Tile> for an
   <ImageSlot> (420x270) fed by real screenshots, still tripling the set.

2. ABOUT corner icons = lucide line-art (Braces, TerminalSquare, BarChart3,
   Database), tinted subtly. Positions/sizes/timings match the spec exactly.

3. SERVICES = the 5-item draft from the spec, verbatim. Edit copy in
   src/components/ServicesSection.tsx.

--------------------------------------------------------------------------
ASSET SWAP CHECKLIST (the only things that need real files)
--------------------------------------------------------------------------

[ ] Portrait photo — a REAL headshot/portrait of you (transparent PNG is best).
    Do NOT use an AI-generated image (per the spec).
    - Put the file in /public, e.g. /public/naveed.png
    - In src/components/HeroSection.tsx set:  const portraitSrc = "/naveed.png";

[ ] 9 project screenshots (3 per project: 2 left column + 1 right column).
    - Put files in /public/work/, e.g. /public/work/tetramagnet-1.png
    - In src/components/ProjectsSection.tsx fill each project's img object:
        img: { col1a: "/work/...", col1b: "/work/...", col2: "/work/..." }

[ ] Live Project links — set each project's `href` in ProjectsSection.tsx
    (currently "#").

[ ] Contact target — the "Let's Talk" buttons point at #contact (an empty
    anchor at the bottom of App.tsx). Point them at a real mailto: or build a
    contact section. To use email, pass href to <ContactButton>:
        <ContactButton label="Let's Talk" href="mailto:you@example.com" />

--------------------------------------------------------------------------
FILE MAP
--------------------------------------------------------------------------

src/
  App.tsx                      section order + wrapper
  main.tsx                     entry
  index.css                    Tailwind + Kanit + .hero-heading + globals
  components/
    HeroSection.tsx            navbar, hero heading, magnetic portrait  <-- portraitSrc
    MarqueeSection.tsx         two scroll-driven rows of tech tiles
    AboutSection.tsx           gradient heading + char-by-char paragraph
    ServicesSection.tsx        white panel, 5 numbered services
    ProjectsSection.tsx        3 sticky-stacking scaling cards          <-- project images/links
    FadeIn.tsx                 scroll-reveal wrapper (motion.create)
    Magnet.tsx                 mouse-following magnetic effect
    AnimatedText.tsx           character-by-character scroll reveal
    ContactButton.tsx          gradient pill CTA
    LiveProjectButton.tsx      ghost/outline pill
    ImageSlot.tsx              <img> with graceful placeholder fallback

index.html                     page title + Kanit font link
tailwind.config.ts             content paths + Kanit family
postcss.config.js
vite.config.ts
tsconfig.json

--------------------------------------------------------------------------
NOTES
--------------------------------------------------------------------------

- prefers-reduced-motion is respected (animations collapse for users who ask
  for it) and buttons have visible keyboard focus rings.
- I couldn't run `npm run build` in my environment (package registry was
  unreachable), so run the two commands at the top to confirm on your machine
  and paste back any TypeScript output if something complains. I verified the
  two riskiest points directly: all lucide icon names resolve in v0.344, and
  motion.create() is the correct API in framer-motion v12.
