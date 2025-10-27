import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            Introducing 6sense.ai — Your own ChatGPT‑class AI agent
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Build, brand and launch your AI agent in minutes
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-700">
            6sense.ai helps you create a complete conversational agent like ChatGPT —
            tailored to your business, connected to your data, and ready to deploy
            on web, chat, and support workflows.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white shadow hover:bg-gray-800">
              <Rocket className="h-5 w-5" />
              Launch your agent
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-gray-900 ring-1 ring-black/10 shadow-sm hover:bg-gray-50">
              See live demo
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-2xl border border-black/10 bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.07)] backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-black/10 bg-gradient-to-br from-gray-50 to-white p-6 text-left">
              <h3 className="font-semibold text-gray-900">Why 6sense.ai?</h3>
              <p className="mt-2 text-sm text-gray-700">
                A production‑ready stack for chat interfaces, retrieval, and tool use.
                Bring your brand, knowledge base, and workflows—ship an agent, not a prototype.
              </p>
            </div>
            <div className="rounded-xl border border-black/10 bg-gradient-to-br from-gray-50 to-white p-6 text-left">
              <h3 className="font-semibold text-gray-900">What you get</h3>
              <p className="mt-2 text-sm text-gray-700">
                Beautiful chat UI, memory, grounding to your docs, analytics, and multi‑channel deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
