const Logo = ({ className = "", isDark = true }: { className?: string; isDark?: boolean }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Image - switches based on theme */}
      <img
        src={isDark ? "/dark-theme-logo.png" : "/light-theme-logo.png"}
        alt="ClusterNeuron Logo"
        className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-opacity duration-500"
      />
      
      {/* Text Logo */}
      <div className="flex items-center gap-0.5">
        <span className={`text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-500 ${isDark ? "text-white" : "text-gray-900"}`}>CLUSTER</span>
        <span className="text-lg md:text-xl lg:text-2xl font-bold text-primary">NEURON</span>
      </div>
    </div>
  );
};

export default Logo;
