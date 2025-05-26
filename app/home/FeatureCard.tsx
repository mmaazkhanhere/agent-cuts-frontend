import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <div
      className="group relative p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-teal-500/50 transition-all duration-500 hover:scale-105 hover:bg-gray-800/70 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-100 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent"></div>
    </div>
  );
};

export default FeatureCard;
