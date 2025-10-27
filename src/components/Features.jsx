import { Brain, MessageSquare, Zap, Shield, Database } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Intelligent by design',
    desc: 'State‑of‑the‑art reasoning with structured tool use for accurate, helpful answers.'
  },
  {
    icon: Database,
    title: 'Connected to your data',
    desc: 'Ground responses in docs, websites, and knowledge bases with retrieval.'
  },
  {
    icon: MessageSquare,
    title: 'Omni‑channel chat',
    desc: 'Embed on web, support portals, Slack, and WhatsApp with a consistent brand voice.'
  },
  {
    icon: Shield,
    title: 'Safe and compliant',
    desc: 'Guardrails, redactions, and audit trails keep your data and users protected.'
  },
  {
    icon: Zap,
    title: 'Fast and scalable',
    desc: 'Edge‑optimized inference and caching deliver snappy responses globally.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to ship an AI agent</h2>
          <p className="mt-3 text-gray-700">A complete toolkit to design, deploy, and monitor your agent, under the brand you control.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
