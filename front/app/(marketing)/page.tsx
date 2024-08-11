import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import { Abonnement, Perks } from "@/type/Abonnement";
import { ResponseCustom } from "@/type/Reponse";

export default async function Page() {
  const pricesResponse = await fetch("http://localhost:1000/perks.php", {
    method: "GET",
    mode: 'no-cors',
  });

  const prices: ResponseCustom<Abonnement> = await (pricesResponse).json();  

  // const locationsResponse = fetch("http://localhost:1000/locations.php", {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   method: "GET",
  //   mode: 'no-cors',
  // });

  // const locations: ResponseLocations = await (await locationsResponse).json();
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
      <PricingSection prices={prices.result}/>
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
