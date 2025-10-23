interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white border border-border-gray rounded-xl p-6 shadow-sm">
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-electric-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-heading-3 font-semibold text-slate-dark mb-2">{title}</h3>
        <p className="text-body text-slate-gray text-center">
          {description}
        </p>
      </div>
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
            <span className="text-body-sm text-slate-dark">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
