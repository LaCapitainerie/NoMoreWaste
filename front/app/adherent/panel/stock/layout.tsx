import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel | Stock",
  description: "Panel Adhérent",
};

export default function DemoLayout({children}: {children: React.ReactNode}) {
  return (
      children
  );
}