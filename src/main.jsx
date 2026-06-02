import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Baby,
  BarChart3,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  Heart,
  Home,
  Mail,
  Map,
  Menu,
  Mic,
  Moon,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Volume2,
  X,
} from 'lucide-react';
import './styles.css';

const asset = (name) => `/assets/${name}.webp`;

const navLinks = [
  ['Home', '#home'],
  ['Features', '#features'],
  ['Lessons', '#lessons'],
  ['Pricing', '#pricing'],
  ['Parent Dashboard', '#dashboard'],
  ['Contact', '#contact'],
];

const pages = {
  features: 'Features',
  lessons: 'Lessons',
  pricing: 'Pricing',
  dashboard: 'Parent Dashboard',
  about: 'About',
  contact: 'Contact',
  privacy: 'Privacy Policy',
  terms: 'Terms',
};

const features = [
  {
    title: 'Two-Way Speaking Practice',
    text: 'Children hear a question, speak their answer, and get gentle feedback.',
    icon: Mic,
    image: 'icon-microphone',
  },
  {
    title: 'Confidence Building',
    text: 'Every lesson encourages the child to try, repeat, and speak without fear.',
    icon: Trophy,
    image: 'icon-confidence',
  },
  {
    title: 'Speech Confidence Support',
    text: 'Helpful for shy, hesitant, or developing speakers who need patient repeat practice.',
    icon: Heart,
    image: 'speaking-confidence-child',
  },
  {
    title: 'Structured Lessons',
    text: 'Step-by-step learning across letters, phonics, numbers, words, stories, manners, and routines.',
    icon: Map,
    image: 'icon-path',
  },
  {
    title: 'Parent-Friendly Progress',
    text: 'Parents can see what the child practiced, where they improved, and what needs more attention.',
    icon: BarChart3,
    image: 'icon-dashboard',
  },
];

const modules = [
  ['English Letters A-Z', 'icon-abc'],
  ['ABC Phonics', 'icon-phonics'],
  ['Simple Words', 'icon-repeat'],
  ['Pronunciation Practice', 'icon-microphone'],
  ['Counting and Numbers', 'icon-numbers'],
  ['Addition', 'icon-addition'],
  ['Subtraction', 'icon-subtraction'],
  ['Shapes', 'icon-shapes'],
  ['Fruits and Vegetables', 'icon-fruits'],
  ['Animals', 'icon-animals'],
  ['Vehicles', 'icon-vehicles'],
  ['Body Parts', 'icon-body'],
  ['Emotions', 'icon-emotions'],
  ['Good Manners', 'icon-manners'],
  ['Daily Routines', 'icon-routines'],
  ['Story Time', 'icon-story'],
  ['Hindi Swar', 'icon-hindi'],
  ['Hindi Vyanjan', 'icon-hindi'],
  ['Hindi Words', 'hindi-learning-swar-vyanjan'],
  ['Practical Life Communication', 'icon-conversation'],
];

const trustCards = [
  ['Child-safe learning flow', ShieldCheck],
  ['No distracting clutter', Sparkles],
  ['Gentle feedback', Heart],
  ['Parent progress view', BarChart3],
  ['Offline-friendly PWA direction', Clock],
  ['English-first with Hindi support', BookOpen],
  ['Built for Indian and global children', Baby],
  ['No passive scrolling', X],
];

const screens = [
  ['Home', 'app-home-screen', 'Letters, Numbers, Phonics, Hindi, Stories, and Manners in one calm home screen.'],
  ['Speaking Practice', 'app-speaking-practice-screen', 'A large microphone button, friendly tutor, and simple prompts.'],
  ['Hindi Lesson', 'app-hindi-lesson-screen', 'Hindi letters, audio support, and repeat practice.'],
  ['Math Practice', 'app-math-practice-screen', 'Visual number practice with large answer cards.'],
  ['Parent Dashboard', 'app-parent-dashboard-screen', 'Today’s practice, spoken words, completed lessons, and next steps.'],
];

const faqs = [
  ['What age group is PLG Kids for?', 'PLG Kids is built mainly for children aged 2 to 8.'],
  ['Is this only an English learning app?', 'No. It includes English, phonics, numbers, math, Hindi letters, manners, daily routines, and practical communication.'],
  ['How is this different from videos?', 'Videos are mostly passive. PLG Kids asks the child to speak, answer, repeat, and participate.'],
  ['Does the app help shy or hesitant children?', 'Yes. PLG Kids supports shy, hesitant, and developing speakers with gentle prompts and repeat practice. It is not a medical or speech therapy replacement.'],
  ['Can parents track learning?', 'Yes. The parent dashboard shows practice, progress, and areas that need attention.'],
  ['Does it work on mobile?', 'Yes. The design is mobile-first and PWA-friendly.'],
  ['Can it work offline?', 'Some lessons and cached content should work offline. Speech recognition and login features may need internet depending on device support.'],
];

function Picture({ name, alt, className }) {
  return (
    <picture>
      <source srcSet={asset(name)} type="image/webp" />
      <img className={className} src={`/assets/${name}.jpg`} alt={alt} loading="lazy" decoding="async" />
    </picture>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="PLG Kids home">
        <Picture name="plg-kids-logo" alt="" className="brand-logo" />
        <span>PLG Kids</span>
      </a>
      <button className="menu-toggle" aria-label="Open navigation" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navLinks.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#pricing" onClick={() => setOpen(false)}>
          Start Learning
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy reveal">
        <p className="eyebrow">Less watching. More talking. More confidence.</p>
        <h1>Help Your Child Speak, Learn, and Grow With Confidence</h1>
        <p className="hero-text">
          PLG Kids turns screen time into active learning with two-way speaking practice, phonics, numbers,
          stories, manners, Hindi, English, and confidence-building lessons.
        </p>
        <p className="speech-note">
          For shy, hesitant, or developing speakers, PLG Kids gives patient repeat practice that supports clearer
          speaking and everyday confidence.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#pricing">
            Start Active Learning <ArrowRight size={19} />
          </a>
          <a className="button secondary" href="#preview">
            <Play size={18} /> Watch How It Works
          </a>
        </div>
        <p className="trust-line">Built for young learners. Designed for parents who want meaningful screen time.</p>
      </div>
      <div className="hero-art reveal">
        <Picture name="hero-child-ai-tutor" alt="Child speaking to a friendly tutor on a tablet" className="hero-image" />
        <div className="floating-card voice-card">
          <Mic size={20} />
          <span>Child speaks back</span>
        </div>
      </div>
      <div className="pain-strip">
        {['Videos do not answer back', 'Kids need real speaking practice', 'Confidence grows through participation'].map((item) => (
          <article key={item} className="pain-card">
            <Check size={18} />
            <span>{item}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <>
      <section className="section split problem" id="problem">
        <div className="section-copy reveal">
          <p className="eyebrow">The parent problem</p>
          <h2>Children Are Watching More, But Speaking Less</h2>
          <p>
            Short videos and passive apps can keep children busy, but they rarely help them speak with confidence.
            Children build language and thinking skills when they listen, answer, repeat, ask, and try again.
          </p>
          <p>
            Some children are naturally shy. Some speak slowly or need more time to form words. PLG Kids gives them
            a calm space to practice without pressure.
          </p>
        </div>
        <div className="image-panel reveal">
          <Picture name="passive-vs-active-learning" alt="Passive screen time compared with active learning" className="section-image" />
        </div>
      </section>
      <section className="section" id="features">
        <div className="center reveal">
          <p className="eyebrow">The PLG Kids way</p>
          <h2>PLG Kids Makes Learning Active</h2>
          <p>Children learn by listening, speaking, answering, repeating, and trying again with kind guidance.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ title, text, icon: Icon, image }) => (
            <article className="feature-card reveal" key={title}>
              <Picture name={image} alt="" className="feature-icon-img" />
              <Icon className="feature-icon" size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Modules() {
  return (
    <section className="section modules" id="lessons">
      <div className="section-heading reveal">
        <p className="eyebrow">What children learn</p>
        <h2>English, Hindi, Phonics, Math, Manners, and Stories</h2>
        <a className="text-link" href="#preview">
          See Learning Modules <ChevronRight size={17} />
        </a>
      </div>
      <div className="module-grid">
        {modules.map(([title, image]) => (
          <article className="module-card reveal" key={title}>
            <Picture name={image} alt="" className="module-icon" />
            <span>{title}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Confidence() {
  return (
    <section className="section confidence" id="confidence">
      <div className="section-copy reveal">
        <p className="eyebrow">Practice without pressure</p>
        <h2>Built for Children Who Need Practice, Not Pressure</h2>
        <p>
          PLG Kids gives gentle correction. No harsh failure messages. No pressure. Just patient practice that
          helps the child speak again, slowly, clearly, and confidently.
        </p>
        <p>
          It can support children who are shy, hesitant to speak, or still developing confidence with words. It does
          not diagnose or treat speech delay, but it encourages safe everyday speaking practice.
        </p>
        <div className="dialogue">
          <p><strong>Tutor:</strong> “Can you say Apple?”</p>
          <p><strong>Child:</strong> “Apple”</p>
          <p><strong>Tutor:</strong> “Good try. Let’s say it slowly together: Ap-ple.”</p>
          <p><strong>Child:</strong> “Apple”</p>
          <p><strong>Tutor:</strong> “Great. You said it clearly.”</p>
        </div>
      </div>
      <div className="feedback-wrap reveal">
        <Picture name="gentle-feedback" alt="Child receiving gentle speaking feedback" className="section-image" />
        <div className="feedback-card">
          <span>Heard: Apple</span>
          <span>Clarity: Good</span>
          <span>Try again slowly</span>
          <strong>Great effort</strong>
        </div>
      </div>
    </section>
  );
}

function Difference() {
  const columns = [
    ['Passive videos', ['Child watches.', 'No response.', 'No speaking check.', 'No confidence loop.']],
    ['Traditional learning apps', ['Tap-based learning.', 'Some games.', 'Limited speaking.', 'Limited real conversation.']],
    ['PLG Kids', ['Child listens.', 'Child speaks.', 'Child answers.', 'Child repeats.', 'Child builds confidence.', 'Parent sees progress.']],
  ];
  return (
    <section className="section difference">
      <div className="center reveal">
        <p className="eyebrow">Why it feels different</p>
        <h2>More Than Games. More Than Videos. Real Participation.</h2>
      </div>
      <div className="comparison-grid">
        {columns.map(([title, items], index) => (
          <article className={index === 2 ? 'comparison-card best reveal' : 'comparison-card reveal'} key={title}>
            <h3>{title}</h3>
            {items.map((item) => (
              <p key={item}><Check size={17} /> {item}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="section trust">
      <div className="section-heading reveal">
        <p className="eyebrow">Parent trust</p>
        <h2>Designed With Safety, Simplicity, and Real Learning in Mind</h2>
      </div>
      <div className="trust-grid">
        {trustCards.map(([title, Icon]) => (
          <article className="trust-card reveal" key={title}>
            <Icon size={22} />
            <span>{title}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function AppPreview() {
  return (
    <section className="section preview" id="preview">
      <div className="center reveal">
        <p className="eyebrow">App preview</p>
        <h2>Big, Clear Screens Made for Young Learners</h2>
        <p>Simple lesson screens help children focus on speaking, listening, and trying again.</p>
      </div>
      <div className="phone-row">
        {screens.map(([title, image, text]) => (
          <article className="phone-card reveal" key={title}>
            <Picture name={image} alt={`${title} app preview`} className="phone-image" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    ['Listen', Volume2],
    ['Speak', Mic],
    ['Try', Star],
    ['Learn', BookOpen],
    ['Build Confidence', Trophy],
  ];
  return (
    <section className="section journey">
      <div className="section-heading reveal">
        <p className="eyebrow">Learning journey</p>
        <h2>100+ Structured Lessons That Grow With Your Child</h2>
      </div>
      <div className="journey-track reveal">
        {steps.map(([label, Icon]) => (
          <div className="journey-step" key={label}>
            <span><Icon size={24} /></span>
            <strong>{label}</strong>
          </div>
        ))}
      </div>
      <Picture name="learning-journey-steps" alt="Child walking along a learning journey" className="wide-illustration reveal" />
    </section>
  );
}

function Parents() {
  const stats = ['Speaking practice completed', 'New words learned', 'Letters practiced', 'Math attempts', 'Confidence score', 'Suggested next lesson'];
  return (
    <section className="section parents" id="dashboard">
      <div className="section-copy reveal">
        <p className="eyebrow">For parents</p>
        <h2>Know What Your Child Is Actually Learning</h2>
        <p>
          PLG Kids helps parents move away from random screen time and toward meaningful practice. Each session is
          built to improve speaking, listening, thinking, and early learning habits.
        </p>
        <a className="button primary" href="#pricing">View Parent Dashboard <ArrowRight size={18} /></a>
      </div>
      <div className="dashboard-panel reveal">
        <Picture name="parent-dashboard-preview" alt="Parent reviewing child learning dashboard" className="section-image" />
        <div className="dashboard-cards">
          {stats.map((stat) => <span key={stat}>{stat}</span>)}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    ['Free Trial', 'Explore PLG Kids', 'For parents who want to explore.', ['Starter lessons', 'Speaking demo', 'Parent preview']],
    ['Monthly Plan', '₹499/month', 'Full access for flexible learning.', ['Structured lessons', 'Speaking practice', 'Hindi and English modules', 'Progress tracking']],
    ['Yearly Plan', '₹1999/year', 'Best value for families. Save more with annual learning access.', ['Everything in Monthly', 'Annual learning access', 'Stories and manners', 'Confidence practice']],
  ];
  return (
    <section className="section pricing" id="pricing">
      <div className="center reveal">
        <p className="eyebrow">Pricing</p>
        <h2>Start Your Child’s Learning Journey</h2>
      </div>
      <div className="pricing-grid">
        {plans.map(([name, price, note, items], index) => (
          <article className={index === 2 ? 'price-card highlighted reveal' : 'price-card reveal'} key={name}>
            {index === 2 && <span className="badge">Best value</span>}
            <h3>{name}</h3>
            <strong>{price}</strong>
            <p>{note}</p>
            {items.map((item) => <span className="plan-item" key={item}><Check size={16} /> {item}</span>)}
            <a className={index === 2 ? 'button primary' : 'button secondary'} href="#contact">
              Start Learning
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialsFaq() {
  return (
    <>
      <section className="section testimonials">
        <div className="section-heading reveal">
          <p className="eyebrow">Parent stories</p>
          <h2>What Parents May Say After Daily Practice</h2>
        </div>
        <div className="testimonial-grid">
          {[
            'My child started speaking more confidently after daily practice.',
            'This feels better than passive videos because my child actually responds.',
            'The Hindi and English practice is very useful for home learning.',
          ].map((quote) => (
            <article className="testimonial-card reveal" key={quote}>
              <div className="stars">★★★★★</div>
              <p>“{quote}”</p>
              <span>Parent placeholder</span>
            </article>
          ))}
        </div>
      </section>
      <section className="section faq">
        <div className="section-heading reveal">
          <p className="eyebrow">FAQ</p>
          <h2>Questions Parents Ask</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details className="faq-item reveal" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function FinalCta() {
  return (
    <section className="final-cta section" id="contact">
      <div className="reveal">
        <p className="eyebrow">Ready for active learning?</p>
        <h2>Turn Screen Time Into Speaking Time</h2>
        <p>Help your child listen, speak, answer, repeat, and build confidence with structured daily practice.</p>
        <div className="hero-actions">
          <a className="button primary" href="mailto:hello@plgkids.com">
            <Mail size={18} /> Contact PLG Kids
          </a>
          <a className="button secondary" href="#lessons">
            Build Speaking Confidence
          </a>
        </div>
      </div>
    </section>
  );
}

function PageContent({ page }) {
  const title = pages[page] || 'Home';
  const commonIntro = {
    features: 'Explore the active learning tools that help children speak, repeat, practice, and grow.',
    lessons: 'Browse the structured modules for English, Hindi, phonics, numbers, manners, routines, and stories.',
    pricing: 'Choose a simple plan for meaningful screen time and confidence-building practice.',
    dashboard: 'Preview how parents can understand what their child practiced and what needs attention.',
    about: 'PLG Kids is built around one simple belief: children learn better when they participate.',
    contact: 'Reach out to learn more, request early access, or discuss a school or family plan.',
    privacy: 'A parent-trust focused privacy overview for the PLG Kids website and app experience.',
    terms: 'Simple terms placeholder for the PLG Kids website. Replace with legal counsel-reviewed terms before launch.',
  };
  return (
    <main>
      <section className="page-hero section">
        <p className="eyebrow">PLG Kids</p>
        <h1>{title}</h1>
        <p>{commonIntro[page]}</p>
        <a className="button primary" href="/">Back to Home <Home size={18} /></a>
      </section>
      {page === 'features' && <ProblemSolution />}
      {page === 'lessons' && <Modules />}
      {page === 'pricing' && <Pricing />}
      {page === 'dashboard' && <Parents />}
      {page === 'contact' && (
        <section className="section contact-panel">
          <article><Mail size={24} /><h2>Email</h2><p>hello@plgkids.com</p></article>
          <article><Phone size={24} /><h2>Parent support</h2><p>Share your child’s age, learning needs, and preferred plan.</p></article>
        </section>
      )}
      {(page === 'about' || page === 'privacy' || page === 'terms') && (
        <section className="section legal-copy">
          <h2>{page === 'about' ? 'A Patient Learning Companion' : title}</h2>
          <p>
            PLG Kids supports young children with short, structured practice. It encourages children to listen,
            speak, answer, repeat, and try again in a safe learning flow.
          </p>
          <p>
            This page is a polished website placeholder. Before public launch, replace operational, privacy, and
            payment details with final policies reviewed for your business and region.
          </p>
        </section>
      )}
    </main>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <section className="section mini-feature-band">
        {[
          ['Speaking', 'speaking-confidence-child'],
          ['Phonics', 'english-phonics-abc'],
          ['Hindi', 'hindi-learning-swar-vyanjan'],
          ['Math', 'early-math-counting'],
          ['Manners', 'manners-daily-routines'],
          ['Stories', 'story-time-child'],
        ].map(([title, image]) => (
          <article className="mini-card reveal" key={title}>
            <Picture name={image} alt={`${title} learning`} className="mini-image" />
            <h3>{title}</h3>
          </article>
        ))}
      </section>
      <AppPreview />
      <Confidence />
      <Parents />
      <Modules />
      <Difference />
      <Trust />
      <Journey />
      <Pricing />
      <TestimonialsFaq />
      <FinalCta />
    </main>
  );
}

function Footer() {
  const links = [
    ['Home', '/'],
    ['Features', '/features.html'],
    ['Lessons', '/lessons.html'],
    ['Pricing', '/pricing.html'],
    ['Parent Dashboard', '/dashboard.html'],
    ['Contact', '/contact.html'],
    ['Privacy Policy', '/privacy.html'],
    ['Terms', '/terms.html'],
  ];
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Picture name="plg-kids-logo" alt="" className="brand-logo" />
        <div>
          <strong>PLG Kids</strong>
          <p>Less watching. More talking. More confidence.</p>
        </div>
      </div>
      <nav aria-label="Footer navigation">
        {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
      </nav>
    </footer>
  );
}

function App() {
  const path = window.location.pathname.replace('/', '').replace('.html', '') || 'home';
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);

  return (
    <>
      <Header />
      {path === 'home' || path === '' ? <HomePage /> : <PageContent page={path} />}
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
