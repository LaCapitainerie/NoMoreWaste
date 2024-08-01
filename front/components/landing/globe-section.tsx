import Globe, { Marker } from "@/components/magicui/globe";
 
export function GlobeDemo({marker}: { marker: Marker[] }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Partout dans le monde
      </span>
      <Globe className="top-28" marker={marker}/>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}