export function ChangeIcon({ type }: { type: 'added' | 'changed' | 'fixed' | 'removed' }) {
  const colors = {
    added: 'text-emerald-400',
    changed: 'text-blue-400',
    fixed: 'text-amber-400',
    removed: 'text-red-400'
  };

  return (
    <div className={`w-2 h-2 rounded-full ${colors[type]} mr-2`} />
  );
}