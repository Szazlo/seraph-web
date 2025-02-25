'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Download, Github, ExternalLink } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-emerald-400" : "hover:text-emerald-400";
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Terminal className="w-8 h-8 text-emerald-400" />
                <span className="ml-2 text-xl font-bold">Seraph</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="/manifesto" className={`transition-colors ${isActive('/manifesto')}`}>Manifesto</Link>
                <Link href="/docs" className={`transition-colors ${isActive('/docs')}`}>Docs</Link>
                <Link href="/changelog" className={`transition-colors ${isActive('/changelog')}`}>Changelog</Link>
                <Link href="/roadmap" className={`transition-colors ${isActive('/roadmap')}`}>Roadmap</Link>
                <Link href="/support" className={`transition-colors ${isActive('/support')}`}>Support</Link>
                <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg flex items-center" onClick={() => window.open("https://github.com/MariooC14/Seraph")}>
                    <Github className="w-4 h-4 mr-2" />
                    Star
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Terminal className="w-6 h-6 text-emerald-400" />
                <span className="ml-2 text-lg font-bold">Seraph</span>
              </div>
              <p className="text-slate-400">
                Modern server management free and open-source.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/docs" className="hover:text-emerald-400">Documentation</Link></li>
                <li><Link href="/changelog" className="hover:text-emerald-400">Changelog</Link></li>
                <li><Link href="/roadmap" className="hover:text-emerald-400">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/manifesto" className="hover:text-emerald-400">Manifesto</Link></li>
                <li><Link href="/support" className="hover:text-emerald-400">Support</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="https://github.com/MariooC14/Seraph" className="hover:text-emerald-400 flex items-center"><Github className="w-4 h-4 mr-2" /> GitHub</a></li>
                {/*<li><a href="https://twitter.com" className="hover:text-emerald-400 flex items-center"><ExternalLink className="w-4 h-4 mr-2" /> Twitter</a></li>*/}
                {/*<li><a href="https://discord.com" className="hover:text-emerald-400 flex items-center"><ExternalLink className="w-4 h-4 mr-2" /> Discord</a></li>*/}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Seraph. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}