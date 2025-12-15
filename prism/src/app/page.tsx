import { ArrowRight, Camera, Lock, Share2, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      title: "Neural Stories",
      description:
        "Prism auto-curates every drop with AI scene detection, mood tagging, and narrative sequencing so your gallery feels alive.",
      icon: <Sparkles className="h-5 w-5 text-[#4AF2EA]" aria-hidden />,
    },
    {
      title: "Quantum Sync",
      description:
        "Instantly stream full-res frames to teams and clients with adaptive compression that balances fidelity and speed.",
      icon: <Zap className="h-5 w-5 text-[#F3E68F]" aria-hidden />,
    },
    {
      title: "Secure Presence",
      description:
        "Face ID personalization and private channels ensure only the right eyes see the right story beats.",
      icon: <Lock className="h-5 w-5 text-[#EFA9B6]" aria-hidden />,
    },
  ];

  const stats = [
    { label: "Creators in", emphasis: "92", suffix: "+ cities" },
    { label: "AI insights", emphasis: "14k", suffix: "/day" },
    { label: "Latency under", emphasis: "180", suffix: "ms global" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="backdrop-grid" />
      <div className="noise-overlay" />

      <main className="relative z-10 flex min-h-screen flex-col text-white">
        <header className="sticky top-0 z-20 border-b border-white/5 bg-[#0e0e0ef2] backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <div className="h-4 w-4 bg-gradient-to-br from-[#F3E68F] via-[#EFA9B6] to-[#4AF2EA] rounded-full blur-[1px]" />
              </div>
              <span className="text-lg font-semibold tracking-[0.16em] text-white">
                PRISM
              </span>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-[#A1A1AA] md:flex">
              <a className="transition hover:text-white" href="#story">
                Story Engine
              </a>
              <a className="transition hover:text-white" href="#features">
                Features
              </a>
              <a className="transition hover:text-white" href="#security">
                Security
              </a>
              <a className="transition hover:text-white" href="#download">
                Get Prism
              </a>
            </nav>
            <button className="group hidden items-center gap-3 rounded-full border border-[#F3E68F]/40 bg-[#1f1f1f] px-5 py-2 text-sm font-medium text-white shadow-[0_0_40px_-20px_rgba(243,230,143,0.8)] transition hover:border-[#F3E68F] hover:bg-[#2a2a2a] md:flex">
              Request Access
              <ArrowRight className="h-4 w-4 text-[#F3E68F] transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white md:hidden">
              ☰
            </button>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-24 top-16 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#F3E68F15] via-[#F3E68F05] to-transparent blur-[120px]" />
          <div className="pointer-events-none absolute -right-32 top-0 h-[680px] w-[560px] rounded-full bg-gradient-to-br from-[#4AF2EA20] via-transparent to-transparent blur-[140px]" />
          <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-32 pt-24 md:flex-row md:items-center">
            <div className="relative max-w-xl space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
                <Sparkles className="h-4 w-4 text-[#4AF2EA]" aria-hidden />
                Intelligent Photo Network
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Share light. <span className="text-[#F3E68F]">Frame</span> every
                memory with AI precision.
              </h1>
              <p className="max-w-lg text-lg text-[#A1A1AA]">
                Prism is the tech-noir platform where modern creators drop
                visuals, collaborate in real time, and let neural engines turn
                raw captures into mythic stories.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#download"
                  className="group flex items-center justify-center gap-3 rounded-full bg-[#F3E68F] px-8 py-3 text-sm font-semibold tracking-wide text-[#121212] transition hover:bg-[#f7ecb0]"
                >
                  Launch The Feed
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#story"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#EFA9B6] hover:bg-white/10"
                >
                  See How Prism Thinks
                </a>
              </div>
              <div className="flex flex-wrap gap-8 border-t border-white/5 pt-8 text-sm text-[#A1A1AA]">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-xs uppercase tracking-[0.28em] text-[#4AF2EA]">
                      {stat.label}
                    </div>
                    <div className="text-2xl font-semibold text-white">
                      {stat.emphasis}
                      <span className="ml-2 text-base text-[#A1A1AA]">
                        {stat.suffix}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl md:mx-0">
              <div className="absolute -left-12 -top-12 h-24 w-24 rounded-full border border-[#4AF2EA]/60" />
              <div className="absolute -right-10 top-24 h-16 w-16 rounded-full border border-[#EFA9B6]/60" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_40px_120px_-50px_rgba(0,0,0,1)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                    <span>Prism Sync 03.14</span>
                    <span>Live</span>
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-white/10">
                    <Image
                      src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1500&auto=format&fit=crop"
                      alt="Prism gallery preview"
                      width={900}
                      height={700}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">Pulse</span>
                        <span className="text-[#4AF2EA]">+12%</span>
                      </div>
                      <p className="mt-2 text-[11px] text-[#A1A1AA]">
                        Momentum from Tokyo captures syncing for AR showcase.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">Faces</span>
                        <span className="text-[#EFA9B6]">ID Lock</span>
                      </div>
                      <p className="mt-2 text-[11px] text-[#A1A1AA]">
                        3 new collaborators authenticated via Prism Face ID.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">
                          Render
                        </span>
                        <span className="text-[#F3E68F]">Cinematic</span>
                      </div>
                      <p className="mt-2 text-[11px] text-[#A1A1AA]">
                        Neural grading complete. Sequence ready for drop.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="relative border-y border-white/5 bg-white/[0.02] py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="max-w-lg space-y-6">
                <span className="text-xs uppercase tracking-[0.3em] text-[#4AF2EA]">
                  Protocol 02
                </span>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Built for the future of human + machine creativity.
                </h2>
                <p className="text-[#A1A1AA]">
                  Prism choreographs every phase of the photo lifecycle — from
                  capture to curation to cinematic release. A network designed
                  for crews moving at the speed of culture.
                </p>
                <div className="flex items-center gap-6 text-sm text-[#A1A1AA]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#F3E68F]" />
                    Live-labeled AI insights
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#EFA9B6]" />
                    Face ID access controls
                  </div>
                  <div className="hidden items-center gap-3 md:flex">
                    <div className="h-2 w-2 rounded-full bg-[#4AF2EA]" />
                    Edge rendering
                  </div>
                </div>
              </div>
              <div className="grid w-full gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#161616] p-6 shadow-[0_20px_80px_-60px_rgba(243,230,143,0.6)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        {feature.icon}
                      </div>
                      <span className="text-base font-semibold text-white">
                        {feature.title}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-[#A1A1AA]">
                      {feature.description}
                    </p>
                    <button className="mt-6 flex items-center gap-2 text-sm font-medium text-[#F3E68F] transition hover:gap-3">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <div className="rounded-3xl border border-white/10 bg-[#111111] p-6 sm:col-span-2">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-[#4AF2EA]/30 bg-[#101618] p-5">
                      <div className="flex items-center gap-3 text-sm text-[#4AF2EA]">
                        <Camera className="h-5 w-5" />
                        Synced capture sessions
                      </div>
                      <p className="mt-3 text-sm text-[#A1A1AA]">
                        Mirrorless, phone, and drone shots merge in real time
                        with color harmonization on ingest.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#EFA9B6]/30 bg-[#181016] p-5">
                      <div className="flex items-center gap-3 text-sm text-[#EFA9B6]">
                        <Share2 className="h-5 w-5" />
                        Ritual drops &amp; private reels
                      </div>
                      <p className="mt-3 text-sm text-[#A1A1AA]">
                        Schedule timed drops, restrict view windows, and trace
                        every share signature.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="story"
          className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center"
        >
          <div className="w-full rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_40px_140px_-80px_rgba(74,242,234,0.6)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#4AF2EA]">
              <span>Story Engine</span>
              <span>Live Render</span>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                  Phase 01
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Neural Intake
                </h3>
                <p className="mt-3 text-sm text-[#A1A1AA]">
                  Smart ingestion maps lighting, focus, and subject energy to
                  Prism’s aesthetic graph in milliseconds.
                </p>
                <div className="mt-6 rounded-2xl border border-[#4AF2EA]/20 bg-[#041f21] p-4 text-xs text-[#4AF2EA]">
                  AI Callout · Depth layers locked · 0.08s compute
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                  Phase 02
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Narrative Assembly
                </h3>
                <p className="mt-3 text-sm text-[#A1A1AA]">
                  Scenes link themselves into auto-play stories with contextual
                  captions and music cues curated for mood.
                </p>
                <div className="mt-6 rounded-2xl border border-[#F3E68F]/20 bg-[#312d12] p-4 text-xs text-[#F3E68F]">
                  Highlight · 24-beat arc predicted · 98% resonance match
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                  Phase 03
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Cinematic Delivery
                </h3>
                <p className="mt-3 text-sm text-[#A1A1AA]">
                  Export to holographic frames, interactive reels, or Prism
                  Rooms with synchronized lighting and audio.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#A1A1AA]">
                  <span className="rounded-full border border-[#F3E68F]/20 px-4 py-2 text-[#F3E68F]">
                    Dolby Vision
                  </span>
                  <span className="rounded-full border border-[#4AF2EA]/20 px-4 py-2 text-[#4AF2EA]">
                    Cloud Edge Nodes
                  </span>
                  <span className="rounded-full border border-[#EFA9B6]/20 px-4 py-2 text-[#EFA9B6]">
                    Face ID Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#EFA9B6]">
                Creator Signal
              </span>
              <p className="text-lg text-[#A1A1AA]">
                “Prism’s neural sequencing feels like having a post-production
                studio beamed onto set. Our clients watch us shoot and approve in
                real time.”
              </p>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-10 w-10 rounded-full border border-[#EFA9B6]/60 bg-[#211317] p-[2px]">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-[#EFA9B6] via-[#F3E68F] to-[#4AF2EA]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Sera Kaito</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                    Creative Director · HoloHaus
                  </p>
                </div>
              </div>
            </div>

            <div
              id="security"
              className="relative overflow-hidden rounded-[32px] border border-[#EFA9B6]/40 bg-[#1a1216] p-8"
            >
              <div className="absolute -top-16 right-4 h-32 w-32 rounded-full bg-[#EFA9B6]/30 blur-[60px]" />
              <div className="absolute -bottom-20 left-16 h-40 w-40 rounded-full bg-[#4AF2EA]/20 blur-[80px]" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#EFA9B6]">
                  <Lock className="h-4 w-4" />
                  Face ID Vault
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Presence-authenticated access. No leaks. No ghosts.
                </h3>
                <p className="text-sm text-[#A1A1AA]">
                  Prism crafts a living biometric graph so you can grace shares
                  with facial commands, trigger timed reveals, and see the exact
                  second someone viewed your work.
                </p>
                <ul className="space-y-3 text-sm text-[#A1A1AA]">
                  <li className="flex items-center gap-3">
                    <span className="h-1 w-8 rounded-full bg-[#EFA9B6]" />
                    Dynamic presence tokens with neon pink pulses
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1 w-8 rounded-full bg-[#F3E68F]" />
                    Multi-layer encryption & zero-knowledge keys
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1 w-8 rounded-full bg-[#4AF2EA]" />
                    Audit trail with cinematic, time-coded playback
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="download"
          className="relative border-t border-white/5 bg-[#101010] py-24"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#F3E68F20] via-[#EFA9B620] to-transparent blur-[120px]" />
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#4AF2EA]">
              Sync With Prism
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Claim your access pass and let AI co-create your next drop.
            </h2>
            <p className="max-w-2xl text-lg text-[#A1A1AA]">
              Launch on web, iOS, or visor. Prism calibrates to your workflow,
              whether you&apos;re on set, on tour, or self-producing in studio.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex items-center justify-center gap-3 rounded-full border border-[#F3E68F] bg-[#0E0E0E] px-8 py-3 text-sm font-semibold text-[#F3E68F] transition hover:bg-[#161616]">
                Download for iOS
                <ArrowRight className="h-4 w-4 text-[#F3E68F]" />
              </button>
              <button className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#4AF2EA] hover:bg-white/10">
                Open Web Studio
                <ArrowRight className="h-4 w-4 text-[#4AF2EA]" />
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-left text-xs text-[#A1A1AA] sm:text-sm">
              <div>
                <p className="text-white">Latency Mesh</p>
                <p className="text-[#4AF2EA]">Edge optimized nodes</p>
              </div>
              <div>
                <p className="text-white">Cinematic Fidelity</p>
                <p className="text-[#F3E68F]">Color-managed streaming</p>
              </div>
              <div>
                <p className="text-white">Private Relay</p>
                <p className="text-[#EFA9B6]">Presence-auth locks</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 bg-[#0E0E0E]">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-[#A1A1AA] md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <div className="h-3 w-3 rounded-full bg-[#F3E68F]" />
              </div>
              <span className="text-sm font-semibold tracking-[0.16em] text-white">
                PRISM
              </span>
            </div>
            <div className="flex flex-wrap gap-6">
              <a className="transition hover:text-white" href="#">
                Manifesto
              </a>
              <a className="transition hover:text-white" href="#">
                Terms
              </a>
              <a className="transition hover:text-white" href="#">
                Support
              </a>
            </div>
            <p>© {new Date().getFullYear()} Prism Labs. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
