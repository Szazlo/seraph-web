import { Book, Terminal, Container, Shield } from 'lucide-react';

export default function Docs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Documentation</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Everything you need to know about Seraph, from getting started to advanced features.
        </p>
      </div>

      {/*Documentation will be updated here as development progresses*/}
        <div className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
            <p className="text-slate-300">Documentation will be updated here as development progresses.</p>
        </div>

      {/*<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
      {/*  <div className="bg-slate-800 rounded-lg p-6">*/}
      {/*    <Book className="w-8 h-8 text-emerald-400 mb-4" />*/}
      {/*    <h2 className="text-xl font-bold mb-4">Getting Started</h2>*/}
      {/*    <ul className="space-y-2 text-slate-300">*/}
      {/*      <li><a href="#installation" className="hover:text-emerald-400">Installation Guide</a></li>*/}
      {/*      <li><a href="#quickstart" className="hover:text-emerald-400">Quick Start Tutorial</a></li>*/}
      {/*      <li><a href="#basics" className="hover:text-emerald-400">Basic Concepts</a></li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}

      {/*  <div className="bg-slate-800 rounded-lg p-6">*/}
      {/*    <Terminal className="w-8 h-8 text-emerald-400 mb-4" />*/}
      {/*    <h2 className="text-xl font-bold mb-4">SSH Client</h2>*/}
      {/*    <ul className="space-y-2 text-slate-300">*/}
      {/*      <li><a href="#ssh-basics" className="hover:text-emerald-400">SSH Basics</a></li>*/}
      {/*      <li><a href="#key-management" className="hover:text-emerald-400">Key Management</a></li>*/}
      {/*      <li><a href="#terminal-features" className="hover:text-emerald-400">Terminal Features</a></li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}

      {/*  <div className="bg-slate-800 rounded-lg p-6">*/}
      {/*    <Container className="w-8 h-8 text-emerald-400 mb-4" />*/}
      {/*    <h2 className="text-xl font-bold mb-4">Container Management</h2>*/}
      {/*    <ul className="space-y-2 text-slate-300">*/}
      {/*      <li><a href="#docker-integration" className="hover:text-emerald-400">Docker Integration</a></li>*/}
      {/*      <li><a href="#container-ops" className="hover:text-emerald-400">Container Operations</a></li>*/}
      {/*      <li><a href="#volume-management" className="hover:text-emerald-400">Volume Management</a></li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}

      {/*  <div className="bg-slate-800 rounded-lg p-6">*/}
      {/*    <Shield className="w-8 h-8 text-emerald-400 mb-4" />*/}
      {/*    <h2 className="text-xl font-bold mb-4">Security</h2>*/}
      {/*    <ul className="space-y-2 text-slate-300">*/}
      {/*      <li><a href="#security-basics" className="hover:text-emerald-400">Security Basics</a></li>*/}
      {/*      <li><a href="#encryption" className="hover:text-emerald-400">Encryption</a></li>*/}
      {/*      <li><a href="#best-practices" className="hover:text-emerald-400">Best Practices</a></li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="mt-16">*/}
      {/*  <div className="bg-slate-800 rounded-lg p-8">*/}
      {/*    <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>*/}
      {/*    <div className="space-y-4">*/}
      {/*      <div className="border-l-2 border-emerald-400 pl-4">*/}
      {/*        <h3 className="font-semibold">New: Container Management UI</h3>*/}
      {/*        <p className="text-slate-300">Learn about our new intuitive container management interface.</p>*/}
      {/*      </div>*/}
      {/*      <div className="border-l-2 border-emerald-400 pl-4">*/}
      {/*        <h3 className="font-semibold">Updated: SSH Key Management</h3>*/}
      {/*        <p className="text-slate-300">We've improved our SSH key management system.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
        {/*    spacer until more items*/}
        <div className="p-44"/>
    </div>
  );
}