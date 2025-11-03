interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}

export default function ContactCard({ icon, title, value, subtitle }: ContactCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-border-gray dark:border-slate-700 rounded-xl p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-6 h-6 bg-electric-blue rounded flex items-center justify-center flex-shrink-0 mt-1">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-slate-dark dark:text-white mb-1">{title}</h4>
          <p className="text-body text-slate-dark dark:text-white mb-1">{value}</p>
          <p className="text-body-sm text-slate-gray dark:text-slate-300">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
