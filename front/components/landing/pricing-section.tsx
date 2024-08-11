"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Abonnement, abos, Perks } from "@/type/Abonnement";
import { Perk } from "@/type/Perks";
import { ResponseCustom } from "@/type/Reponse";
import { motion } from "framer-motion";
import { CheckIcon, Loader } from "lucide-react";
import { useState } from "react";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};

// eslint-disable-next-line @next/next/no-async-client-component
export default function PricingSection({ prices }: { prices: Abonnement[] }) {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setIsLoading(false);
  };

  return (

    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Pricing
          </h4>

          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Simple pricing for everyone.
          </h2>

          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Choose an <strong>affordable plan</strong> that&apos;s packed with
            the best features for engaging your audience, creating customer
            loyalty, and driving sales.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <Switch
            id="interval"
            onCheckedChange={(checked: boolean) => {
              setInterval(checked ? "year" : "month");
            } } />
          <span>Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            2 MONTHS FREE ✨
          </span>
        </div>

        <div className="mx-auto grid w-full justify-center sm:grid-cols-2 lg:grid-cols-4 flex-col gap-4">
          {prices.map((Abo, idx) => (
            <div
              key={idx}
              className={cn(
                "relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden",
                {
                  "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]": true, //price.isMostPopular,
                }
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {Abo.Nom}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                    {Abo.Description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${Abo.Nom}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                <span className="text-4xl font-bold text-black dark:text-white">
                  $
                  {interval === "year"
                    ? Abo.PrixAn
                    : Abo.PrixMois}
                  <span className="text-xs"> / {interval}</span>
                </span>
              </motion.div>

              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(Abo.Nom)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {(!isLoading || (isLoading && id !== Abo.Nom)) && (
                  <p>Subscribe</p>
                )}

                {isLoading && id === Abo.Nom && <p>Subscribing</p>}
                {isLoading && id === Abo.Nom && (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              {Abo.Perks && Abo.Perks.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {Abo.Perks.map((feature, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                    >
                      <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                      <span className="flex">{feature.Nom}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
