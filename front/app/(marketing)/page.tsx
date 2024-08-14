import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import { Abonnement, Perks } from "@/type/Abonnement";
import { ResponseCustom } from "@/type/Reponse";
import axios from "axios";

export default async function Page() {

  const prices = await axios.get<ResponseCustom<Abonnement[]>>("http://localhost:1000/perks.php");

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
      <PricingSection prices={prices.data.result}/>
      {/* <CallToActionSection /> */}
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
