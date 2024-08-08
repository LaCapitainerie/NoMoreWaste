import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

export interface BentoItemProps {
    Icon: React.ElementType;
    name: string;
    description: string;
    href: string;
    cta: string;
    className: string;
    background: React.ReactNode;
}
 
export function Bento({ features }: { features: BentoItemProps[] }) {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}