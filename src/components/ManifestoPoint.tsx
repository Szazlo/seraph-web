export function ManifestoPoint({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <div className="bg-emerald-400/10 rounded-full p-1 mt-1 mr-3">
        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-slate-400">{children}</p>
      </div>
    </li>
  );
}