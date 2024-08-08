import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";


export type BentoCardProps = {
  Icon: React.ElementType;
  name: string;
  description: string;
  href: string;
  cta: string;
  background: React.ReactNode;
  className: string;
};
 
export function Bento({features}: {features: BentoCardProps[]}) {
  return (
    <BentoGrid className="lg:grid-rows-3 h-full">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}