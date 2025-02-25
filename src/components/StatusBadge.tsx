import { Calendar, CheckCircle2, CircleDot } from 'lucide-react';

type Status = 'completed' | 'in-progress' | 'planned';

export function StatusBadge({ status }: { status: Status }) {
  const styles = {
    completed: {
      bg: 'bg-emerald-400/10',
      text: 'text-emerald-400',
      icon: <CheckCircle2 className="w-4 h-4 mr-2" />
    },
    'in-progress': {
      bg: 'bg-blue-400/10',
      text: 'text-blue-400',
      icon: <CircleDot className="w-4 h-4 mr-2 animate-pulse" />
    },
    planned: {
      bg: 'bg-slate-400/10',
      text: 'text-slate-400',
      icon: <Calendar className="w-4 h-4 mr-2" />
    }
  };

  const style = styles[status];

  return (
    <span className={`flex items-center px-3 py-1 rounded-full text-sm ${style.bg} ${style.text}`}>
      {style.icon}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}