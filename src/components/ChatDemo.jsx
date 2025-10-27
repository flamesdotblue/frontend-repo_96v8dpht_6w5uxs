import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

function Message({ role, content }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow ${
        isUser ? 'bg-gray-900 text-white rounded-br-sm' : 'bg-white text-gray-900 border border-black/10 rounded-bl-sm'
      }`}>
        {content}
      </div>
    </div>
  );
}

export default function ChatDemo() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your 6sense.ai agent. Ask me anything about your product or docs." },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState('');
  const endRef = useRef(null);

  const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const generate = async (prompt) => {
    try {
      const res = await fetch(`${BASE_URL}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, creativity: 0.8, reasoning: true }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = await res.json();
      return data.output || 'No output received';
    } catch (e) {
      console.error(e);
      setError('Generation failed. Please try again.');
      return 'Sorry, I had trouble generating a response right now.';
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    setError('');
    setMessages((m) => [...m, { role: 'user', content: value }]);
    setInput('');
    setTyping(true);
    const output = await generate(value);
    setMessages((m) => [...m, { role: 'assistant', content: output }]);
    setTyping(false);
  };

  return (
    <section id="demo" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur">
          <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 text-sm text-gray-800">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            Live demo — Try chatting with your agent
          </div>

          <div className="mt-4 h-[420px] overflow-y-auto space-y-3 rounded-xl bg-gradient-to-b from-gray-50 to-white p-4">
            {messages.map((m, idx) => (
              <Message key={idx} role={m.role} content={m.content} />
            ))}
            {typing && (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-gray-400" />
                6sense.ai is typing…
              </div>
            )}
            {error && (
              <div className="text-xs text-red-600">{error}</div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={onSubmit} className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-white shadow hover:bg-gray-800"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
