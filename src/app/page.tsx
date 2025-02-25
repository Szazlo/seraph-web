'use client';

import Link from 'next/link';
import { Terminal, Server, Container, Shield, Github, Command, Boxes, Cpu, Heart, Coffee, Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
      <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  return (
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-emerald-400/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="animate-pulse mr-2">●</span> Coming Soon
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Modern Server Management,
              <br />
              <span className="text-emerald-400">Reimagined</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Seraph is an upcoming open-source application that brings server management, SSH, and SFTP into one elegant, unified interface.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/MariooC14/Seraph"
                 className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-lg flex items-center text-lg font-semibold">
                <Github className="w-5 h-5 mr-2" />
                Star on GitHub
              </a>
              <Link href="./roadmap"
                 className="border border-slate-600 hover:border-emerald-400 px-8 py-4 rounded-lg flex items-center text-lg font-semibold">
                <Terminal className="w-5 h-5 mr-2" />
                View Roadmap
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">What's Coming in Seraph?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                  icon={<Server className="w-8 h-8 text-emerald-400" />}
                  title="Server Management"
                  description="Manage multiple servers with ease. Monitor resources, processes, uptime, and logs in real-time."
              />
              <FeatureCard
                  icon={<Container className="w-8 h-8 text-emerald-400" />}
                  title="Container Integration"
                  description="Native Docker support for managing containers directly from the UI."
              />
              <FeatureCard
                  icon={<Command className="w-8 h-8 text-emerald-400" />}
                  title="Advanced SSH Client"
                  description="Feature-rich SSH client with split terminals, session management, and snippets."
              />
              <FeatureCard
                  icon={<Boxes className="w-8 h-8 text-emerald-400" />}
                  title="Port Forwarding"
                  description="Local, remote, and dynamic port forwarding with an intuitive interface for secure tunneling."
              />
              <FeatureCard
                  icon={<Shield className="w-8 h-8 text-emerald-400" />}
                  title="Secure by Default"
                  description="End-to-end encryption, key management, and credential storage."
              />
              <FeatureCard
                  icon={<Cpu className="w-8 h-8 text-emerald-400" />}
                  title="Resource Monitoring"
                  description="Real-time metrics, and detailed performance analytics for your servers."
              />
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-slate-800 rounded-lg p-8">
                <div className="mb-6">
                  <Coffee className="w-12 h-12 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Buy Us a Coffee</h2>
                <p className="text-slate-300 mb-8">
                  Your support helps us stay caffeinated and motivated! Every coffee contribution goes directly into making Seraph better.
                </p>
                <div className="space-y-4">
                  <a
                      href="https://buymeacoffee.com/seraphapp"
                      className="bg-emerald-500 hover:bg-emerald-600 w-full px-6 py-3 rounded-lg flex items-center justify-center text-lg font-semibold"
                  >
                    <Coffee className="w-5 h-5 mr-2" />
                    Buy us a coffee
                  </a>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-8">
                <div className="mb-6">
                  <Mail className="w-12 h-12 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Follow Our Journey</h2>
                <p className="text-slate-300 mb-8">
                  Subscribe to our newsletter to stay updated on new features, releases, and behind-the-scenes development stories.
                </p>
                {!subscribed ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20 focus:outline-none text-white placeholder-slate-400"
                            required
                        />
                      </div>
                      <button
                          type="submit"
                          className="w-full bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg flex items-center justify-center text-lg font-semibold"
                          disabled
                      >
                        <Heart className="w-5 h-5 mr-2" />
                        Subscribe
                      </button>
                      <div className="text-center text-sm text-slate-400">
                        No spam, unsubscribe at any time
                      </div>
                    </form>
                ) : (
                    <div className="text-center p-8 bg-emerald-400/10 rounded-lg">
                      <div className="text-emerald-400 font-semibold mb-2">Thanks for subscribing!</div>
                      <p className="text-slate-300">We'll keep you updated on our progress.</p>
                    </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
