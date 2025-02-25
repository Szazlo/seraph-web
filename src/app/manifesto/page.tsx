import { ManifestoPoint } from '@/components/ManifestoPoint';

export default function Manifesto() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Our Manifesto</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          We believe server management tools should be powerful yet intuitive,
          secure yet accessible, and most importantly, designed for the modern developer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-8">Core Principles</h2>
          <ul className="space-y-8">
            <ManifestoPoint title="Open Source First">
              We believe in transparency and community-driven development. Our code is open source,
              and we actively encourage contributions from the community.
            </ManifestoPoint>
            <ManifestoPoint title="Security is Non-Negotiable">
              Your servers deserve the highest level of security. We implement industry best practices
              and regular security audits to ensure your data stays safe.
            </ManifestoPoint>
            <ManifestoPoint title="Performance Matters">
              Every millisecond counts when managing production servers. We optimize every aspect
              of Seraph to provide the fastest possible experience.
            </ManifestoPoint>
            <ManifestoPoint title="Developer Experience">
              We believe tools should get out of your way. Seraph is designed to be intuitive,
              customizable, and a joy to use.
            </ManifestoPoint>
            <ManifestoPoint title="Community First">
              Our roadmap is shaped by our users. We actively listen to feedback and prioritize
              features that matter most to our community.
            </ManifestoPoint>
            <ManifestoPoint title="Always Free">
                We believe server management tools should be accessible to everyone. Seraph's core features will always
                be free to use, with no hidden fees or paywalls.
            </ManifestoPoint>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-800 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-300">
                Our vision is to build a server management tool that's powerful, secure, and easy to use.
                We believe that managing servers should be a seamless experience, whether you're a hobbyist
                or a professional developer. We're committed to keeping Seraph free and open source,
                and we're dedicated to building a product that meets the needs of our community.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
            <p className="text-slate-300">
              We're committed to building not just a tool, but a community. We promise to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-slate-300">
              <li>Always keep the core product open source</li>
              <li>Prioritize security and stability</li>
              <li>Listen to our community</li>
              <li>Maintain transparency</li>
              <li>Provide excellent documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}