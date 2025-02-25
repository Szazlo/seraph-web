'use client';

import { useState } from 'react';
import { Coffee, Mail, Heart, ExternalLink } from 'lucide-react';

export default function Support() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Support Our Journey</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Help us make Seraph the best server management tool it can be.
        </p>
      </div>

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
            Subscribe to our newsletter to stay updated on new features, releases, and advancements in our development.
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

      <div className="mt-16 text-center text-slate-400">
        <p>
          Want to contribute in other ways?{' '}
          <a href="https://github.com/MariooC14/Seraph" className="text-emerald-400 hover:text-emerald-300 inline-flex items-center">
            Check out our GitHub <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </p>
      </div>
    </div>
  );
}