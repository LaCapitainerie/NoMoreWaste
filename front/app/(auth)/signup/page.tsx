import { buttonVariants } from "@/components/ui/button";
import { RegisterForm } from "@/components/register-form";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Créer un compte | No More Waste",
  description: "Créez un compte pour commencer",
};

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Retour
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
        <div className="flex flex-col gap-2 text-center">
          {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
          <h1 className="text-2xl font-semibold tracking-tight">
            Bienvenue sur No More Waste
          </h1>
          <p className="text-sm text-muted-foreground">
            Créez un compte pour commencer
          </p>
        </div>
        <RegisterForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/signin"
            className="hover:text-NoMoreWaste underline underline-offset-4"
          >
            Vous avez déjà un compte ? Connectez-vous
          </Link>
        </p>
      </div>
    </div>
  );
}
