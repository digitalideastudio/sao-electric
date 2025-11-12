import IdeaLamp from './IdeaLamp';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 border border-border-gray dark:border-slate-700 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04),0_0_20px_rgba(244,175,3,0.3),0_0_40px_rgba(244,175,3,0.15)] dark:hover:shadow-[0_20px_25px_-5px_rgba(255,255,255,0.1),0_10px_10px_-5px_rgba(255,255,255,0.05),0_0_20px_rgba(244,175,3,0.4),0_0_40px_rgba(244,175,3,0.2)]">
      <div className="text-center mb-4">
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center" style={{ transform: 'rotateZ(180deg)' }}>
          <IdeaLamp />
        </div>
        <h3 className="text-heading-3 font-semibold text-slate-dark dark:text-white mb-2">{title}</h3>
        <p className="text-body text-slate-gray dark:text-slate-300 text-center">
          {description}
        </p>
      </div>
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
            <span className="text-body-sm text-slate-dark dark:text-slate-300">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
