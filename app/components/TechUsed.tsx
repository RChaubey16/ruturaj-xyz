import TechCard from "./TechCard";

const TechUsed = ({ tech = [] }) => {
  return (
    <div className="mt-2">
      <span className="font-semibold text-black dark:text-white">
        Tech used:
      </span>
      <div className="flex items-center gap-2">
        {tech.map((item) => (
          <TechCard
            key={item.name}
            name={item.name}
            logoSrc={item.logoSrc}
            darkLogoSrc={item.darkLogoSrc}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default TechUsed;
