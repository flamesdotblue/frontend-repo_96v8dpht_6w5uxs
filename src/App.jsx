import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatDemo from './components/ChatDemo';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
              <p className="mt-3 text-gray-700">Start free. Scale as your agent gets traction.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Starter</h3>
                <p className="mt-2 text-sm text-gray-700">For experiments and prototypes.</p>
                <p className="mt-6 text-3xl font-extrabold">Free</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>• 1 agent</li>
                  <li>• 200 chats / month</li>
                  <li>• Web embed</li>
                </ul>
                <a href="#cta" className="mt-6 inline-flex rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Get started</a>
              </div>

              <div className="rounded-2xl border border-indigo-300 bg-white p-6 shadow-sm ring-2 ring-indigo-200">
                <h3 className="text-lg font-semibold">Growth</h3>
                <p className="mt-2 text-sm text-gray-700">For startups going live.</p>
                <p className="mt-6 text-3xl font-extrabold">$49<span className="text-base font-medium text-gray-600">/mo</span></p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>• 3 agents</li>
                  <li>• 5k chats / month</li>
                  <li>• Slack + WhatsApp</li>
                  <li>• Basic analytics</li>
                </ul>
                <a href="#cta" className="mt-6 inline-flex rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">Choose Growth</a>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Scale</h3>
                <p className="mt-2 text-sm text-gray-700">For businesses with volume.</p>
                <p className="mt-6 text-3xl font-extrabold">Custom</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>• Unlimited agents</li>
                  <li>• SSO & governance</li>
                  <li>• Priority support</li>
                </ul>
                <a href="#cta" className="mt-6 inline-flex rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Talk to sales</a>
              </div>
            </div>
          </div>
        </section>

        <ChatDemo />

        <section id="cta" className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-indigo-600 to-purple-600 p-10 text-white shadow">
              <h3 className="text-3xl font-bold">Ready to build your agent with 6sense.ai?</h3>
              <p className="mt-3 text-white/90">Launch a branded AI assistant in minutes. No heavy setup required.</p>
              <a href="#" className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-gray-900 hover:bg-gray-50">Create your agent</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
