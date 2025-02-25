import { ChangeIcon } from '@/components/ChangeIcon';
import { releases } from '@/data/releases';

export default function Changelog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Changelog</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Track the evolution of Seraph with our detailed changelog.
          We're constantly improving and adding new features.
        </p>
      </div>

      <div className="space-y-12">
        {releases.map((release) => (
          <div key={release.version} className="bg-slate-800 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Version {release.version}</h2>
                <p className="text-slate-400">{release.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                release.type === 'major' ? 'bg-red-400/10 text-red-400' :
                release.type === 'minor' ? 'bg-blue-400/10 text-blue-400' :
                'bg-emerald-400/10 text-emerald-400'
              }`}>
                {release.type} release
              </span>
            </div>

            <div className="space-y-4">
              {release.changes.map((change, index) => (
                <div key={index} className="flex items-center">
                  <ChangeIcon type={change.type} />
                  <span className="capitalize font-medium mr-2">{change.type}:</span>
                  <span className="text-slate-300">{change.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
        {/*    spacer until more items*/}
        <div className="p-36"/>
    </div>
  );
}