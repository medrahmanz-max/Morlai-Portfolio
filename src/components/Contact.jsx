import { AlertCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Have a Project in Mind?"
          subtitle="Whether you need a website, a front-end interface, or simply want to discuss an idea, I'd be happy to hear from you."
        />

        <div className="max-w-2xl mx-auto">
          <form className="glass rounded-2xl p-6 sm:p-8 space-y-5" aria-disabled="true">
            <div className="flex items-start gap-3 text-sm text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <span>The contact form is not working for now. Please check back later.</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  disabled
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  disabled
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                disabled
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                disabled
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
