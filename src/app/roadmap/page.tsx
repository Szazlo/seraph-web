import { Calendar, CheckCircle2, CircleDot } from 'lucide-react';
import { roadmapItems } from '@/data/roadmap';
import { StatusBadge } from '@/components/StatusBadge';
import {redirect} from "next/navigation";
import {router} from "next/client";
import Link from "next/link";

export default function Roadmap() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Roadmap</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Our vision for the future of Seraph. See what we're working on and what's coming next.
        </p>
      </div>

      <div className="space-y-8">
        {roadmapItems.map((item, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-slate-300">{item.description}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <StatusBadge status={item.status} />
                <span className="text-slate-400">
                  {item.quarter} {item.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Have a Feature Request?</h2>
        <p className="text-slate-300 mb-6">
          We're always looking to improve Seraph. If you have an idea for a feature,
          we'd love to hear about it.
        </p>
        <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg text-white font-semibold">
            <Link href={"/contact"}>Submit Feature Request</Link>
        </button>
      </div>
    </div>
  );
}