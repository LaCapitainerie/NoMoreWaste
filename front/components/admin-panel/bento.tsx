import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { cn } from "@/lib/utils";


export type BentoCardProps = {
  Icon: React.ElementType;
  name: string;
  description: string;
  href: string;
  cta: string;
  background: React.ReactNode;
  className: string;
};

export function Bento({features, className}: {features: BentoCardProps[], className?: string}) {
  return (
    <BentoGrid className={cn(className, "lg:grid-rows-4 h-full")}>
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}