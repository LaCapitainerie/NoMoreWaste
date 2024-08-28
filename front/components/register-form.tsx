"use client";

import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Adherent } from "@/type/Adherent";
import { ResponseCustom } from "@/type/Reponse";
// import { useRouter } from "next/navigation";
import { useSetUserContext } from "@/hooks/user-provider";

import NetlifyWelcomeEmail from "./Email/Signup";
import { Resend } from 'resend';

export const userAuthSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  email: z.string().email(),
  password: z.string().optional(),
  ville: z.enum(["Paris", "Lyon", "Berlin", "Madrid"]),
});
type FormData = z.infer<typeof userAuthSchema>;

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: "",
    },
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const setUser = useSetUserContext();
  // const { push } = useRouter();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    try{
      
      const response: ResponseCustom<Adherent> = await (await fetch(process.env.NEXT_PUBLIC_API_URL as string + "register.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })).json();

      if(response.success){
        toast.success(`Vous êtes connecté en tant que ${data.email}`);

        const resend = new Resend('re_7QrMRn5r_3PmLisggZntnwES9JEqUy8oB');

        const res = await resend.emails.send({
          from: 'no-reply@no-more-waste.com',
          to: data.email,
          subject: 'Bienvenue sur No More Waste',
          react: <NetlifyWelcomeEmail/>,
        });

        console.log(res);

        const res2 = await resend.emails.send({
          from: 'hugo.antreassian@gmail.com',
          to: data.email,
          subject: 'Bienvenue sur No More Waste',
          react: <NetlifyWelcomeEmail/>,
        });

        console.log(res2);
        
        // setUser(response.result);
        // if (typeof window !== 'undefined') window.location = '/adherent/panel';
        // push('/adherent/panel');

      } else {
        toast.error(response.error || "Une erreur s'est produite", {
          description: "Veuillez réessayer plus tard.",
        });
      };

      
      
    } catch (error) {
      toast.error("Une erreur s'est produite", {
        description: "Veuillez réessayer plus tard.",
      });
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <CardTitle className="text-xl">Créer un compte</CardTitle>
              <CardDescription>
                Créez un compte pour commencer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prénom</FormLabel>
                          <FormControl>
                            <Input
                              id="first-name"
                              placeholder="Max"
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input
                              id="last-name"
                              placeholder="Robinson"
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mot de passe</FormLabel>
                        <FormControl>
                          <Input
                            id="password"
                            type="password"
                            placeholder="********"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="ville"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ville</FormLabel>
                        <FormControl>
                          <Input
                            id="ville"
                            type="ville"
                            placeholder="********"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>


                <Button type="submit" className="w-full">
                  Créer un compte
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}