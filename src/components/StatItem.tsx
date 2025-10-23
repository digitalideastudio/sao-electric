interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="w-8 h-8 bg-electric-blue rounded-full mx-auto mb-3 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-3xl font-bold text-slate-dark mb-2">{value}</div>
      <div className="text-body-sm text-slate-gray">{label}</div>
    </div>
  );
}
