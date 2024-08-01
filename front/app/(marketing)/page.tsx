import CallToActionSection from "@/components/landing/cta-section";
import { GlobeDemo } from "@/components/landing/globe-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import DotPattern from "@/components/magicui/dot-pattern";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import { cn } from "@/lib/utils";
import { ResponseT } from "@/type/Abonnement";
import { ResponseLocations } from "@/type/Entrepot";
import { COBEOptions } from "cobe";

export default async function Page() {
  const pricesResponse = fetch("http://localhost/perks", {
    method: "GET",
    mode: 'no-cors',
  });

  const prices: ResponseT = await (await pricesResponse).json();

  // const locationsResponse = fetch("http://localhost/locations", {
  //   method: "GET",
  //   mode: 'no-cors',
  // });

  // const locations: ResponseLocations = await (await locationsResponse).json();
  // // { location: [14.5995, 120.9842], size: 0.03 }
  // const locationsReturn = locations.Locations.map((location) => {
  //   return {
  //     location: [location.latitude, location.longitude],
  //     size: 0.06,
  //   };
  // }) as COBEOptions["markers"];
  
  return (
    <>
      <HeroSection />
      <SphereMask />
      {/* <GlobeDemo marker={locationsReturn} /> */}
      <PricingSection prices={prices}/>
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
