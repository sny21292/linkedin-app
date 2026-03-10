import { Link } from "react-router-dom";

const features = [
  {
    title: "AI Post Generation",
    desc: "Generate high-quality LinkedIn posts in your preferred tone, niche, and writing style.",
  },
  {
    title: "Smart Scheduling",
    desc: "Publish when your audience is most active to maximize impressions and engagement.",
  },
  {
    title: "Performance Analytics",
    desc: "Track views, likes, comments, and growth trends with actionable recommendations.",
  },
  {
    title: "Brand Voice Control",
    desc: "Set guardrails for tone, topics, and messaging so every post feels like you.",
  },
  {
    title: "Content Ideas Engine",
    desc: "Get endless post prompts from your industry, achievements, and current trends.",
  },
  {
    title: "Team Collaboration",
    desc: "Create, review, and approve posts with your team before publishing to LinkedIn.",
  },
];

const faqs = [
  {
    q: "Is LinkPost an official LinkedIn integration?",
    a: "Yes, the app is designed to connect through LinkedIn OAuth so users can authorize posting securely.",
  },
  {
    q: "Can I review posts before they are published?",
    a: "Absolutely. You can keep manual approval on, edit drafts, or enable full auto-post mode later.",
  },
  {
    q: "Who is this for?",
    a: "Creators, founders, job seekers, marketers, and professionals who want consistent LinkedIn growth.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You are in full control of your account, data, and publishing preferences.",
  },
];

const testimonials = [
  {
    name: "Anaya Mehta",
    role: "Product Manager",
    quote:
      "I went from posting once a month to 4 times a week. My profile views doubled in 30 days.",
  },
  {
    name: "Rahul Verma",
    role: "Startup Founder",
    quote:
      "The scheduling and AI draft quality are amazing. It saves me hours every week.",
  },
  {
    name: "Sara Khan",
    role: "Career Coach",
    quote:
      "My audience engagement improved immediately because the content stays consistent and relevant.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
              LP
            </div>
            <span className="text-xl font-bold">
              Link<span className="text-brand-500">Post</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-100 blur-3xl" />
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-20 pt-16 lg:grid-cols-2 lg:pb-28 lg:pt-24">
            <div className="relative z-10">
              <p className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                Built for LinkedIn creators and professionals
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                Create, schedule, and grow on LinkedIn with AI.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
                LinkPost helps you stay consistent without spending hours writing.
                Connect your LinkedIn, choose your style, and publish smarter content
                that grows your personal brand.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/register"
                  className="rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  Start Free
                </Link>
                <Link
                  to="/login"
                  className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Sign In
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-8 text-sm">
                <Metric value="12k+" label="Posts published" />
                <Metric value="4.8/5" label="User rating" />
                <Metric value="3x" label="Engagement lift" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">AI Post Preview</p>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Ready to schedule
                  </span>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">
                  "One of the biggest lessons in building products is this: speed matters,
                  but clarity matters more. This week our team shipped a feature that reduced
                  onboarding time by 38%. Here are 3 principles we followed..."
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg border border-gray-200 p-3">
                    <p className="text-gray-500">Best time</p>
                    <p className="font-semibold text-gray-900">Tue 9:30 AM</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-3">
                    <p className="text-gray-500">Predicted reach</p>
                    <p className="font-semibold text-gray-900">18k impressions</p>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600">
                  Schedule Post
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-y border-gray-200 bg-gray-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-gray-900">Everything you need to post better</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Designed for consistency, speed, and measurable growth on LinkedIn.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-gray-900">How LinkPost works</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <StepCard
                step="01"
                title="Connect LinkedIn"
                desc="Securely connect your LinkedIn account using OAuth in minutes."
              />
              <StepCard
                step="02"
                title="Set Preferences"
                desc="Choose tone, topics, frequency, and review settings."
              />
              <StepCard
                step="03"
                title="Publish and Grow"
                desc="Approve or auto-publish posts, then track engagement and growth."
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-gray-900">Loved by professionals</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-sm leading-relaxed text-gray-700">"{item.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-gray-900">Simple pricing</h2>
            <p className="mt-3 max-w-xl text-gray-600">
              Start free, then upgrade when you are ready to scale your posting engine.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <PricingCard
                name="Starter"
                price="$0"
                subtitle="Perfect for trying LinkPost"
                items={["10 AI posts/month", "Basic analytics", "Manual approvals"]}
                cta="Get Started"
              />
              <PricingCard
                featured
                name="Pro"
                price="$19"
                subtitle="For serious personal branding"
                items={[
                  "Unlimited AI posts",
                  "Advanced analytics",
                  "Smart scheduling",
                  "Priority support",
                ]}
                cta="Start Pro Trial"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-gray-200 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
            <div className="mt-8 space-y-3">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="text-sm font-semibold text-gray-900">{item.q}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl bg-brand-600 px-6 py-12 text-center md:px-12">
              <h2 className="text-3xl font-extrabold text-white">
                Ready to grow your LinkedIn presence?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-brand-100">
                Create your account, connect LinkedIn, and publish your first AI-assisted
                post today.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/register"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
                >
                  Create Free Account
                </Link>
                <Link
                  to="/login"
                  className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 LinkPost. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-gray-700">
              Back to top
            </a>
            <Link to="/login" className="hover:text-gray-700">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-700">
              Sign up
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <p className="text-xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <p className="text-xs font-bold tracking-wider text-brand-500">{step}</p>
      <h3 className="mt-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

function PricingCard({ name, price, subtitle, items, cta, featured = false }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        featured
          ? "border-brand-500 bg-brand-50"
          : "border-gray-200 bg-white"
      }`}
    >
      <p className="text-sm font-semibold text-gray-900">{name}</p>
      <p className="mt-2 text-4xl font-extrabold text-gray-900">
        {price}
        <span className="text-base font-medium text-gray-500">/mo</span>
      </p>
      <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
      <ul className="mt-5 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-gray-700">
            • {item}
          </li>
        ))}
      </ul>
      <Link
        to="/register"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
          featured
            ? "bg-brand-500 text-white hover:bg-brand-600"
            : "bg-gray-900 text-white hover:bg-black"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
