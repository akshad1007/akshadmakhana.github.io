import { Globe } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
      <div className="liquid-glass rounded-full max-w-5xl w-full px-6 py-3 flex items-center justify-between pointer-events-auto shadow-2xl shadow-black/50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-white">
            <Globe className="w-5 h-5" />
            <span className="font-serif text-2xl font-bold tracking-tight">Prisma<sup className="text-[0.4em] top-[-1em]">®</sup></span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['Home', 'Studio', 'About', 'Journal', 'Reach Us'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  i === 0 ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-white text-sm font-medium hover:text-primary transition-colors">
            Sign In
          </button>
          <button className="liquid-glass bg-white/5 hover:bg-white/10 transition-colors rounded-full px-6 py-2 text-white text-sm font-medium">
            Begin Journey
          </button>
        </div>
      </div>
    </nav>
  );
}
