"use client"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { lang } from "@/lib/utils";



export default function InfoForm({ values, route, type, method, language }: { values: any, route: string, type: string, method: "GET" | "POST" | "PUT" | "DELETE", language: lang }) {
    const [formData, setFormData] = useState(values);

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const result = fetch(process.env.NEXT_PUBLIC_API_URL as string + `${route}.php`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Something went wrong");
            }
        }).then((data) => {

            toast.success(`Modification Effectuée`);
            setFormData({});
            return data;


        }).catch((error) => {
            console.error("Error:", error);
            toast.success(`Erreur lors de la modification`);
        });
    };

    const supprimer = {
        "fr-Fr": "Supprimer",
        "en-US": "Delete"
    }

    const etesvoussur = {
        "fr-Fr": "Êtes-vous sûr ?",
        "en-US": "Are you sure ?"
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                {Object.entries(values).map(([key, value]) => {
                    return <div key={key} className={`grid grid-cols-4 items-center gap-4 ${key.includes("id") ? "hidden" : ""}`}>
                        <Label htmlFor={key} className="text-right">
                            {key.replace("extern_", " ")}
                        </Label>
                        {key.includes("extern")
                            ?
                            <a>{(value || "") as string}</a>
                            :
                            <Input
                                id={key}
                                defaultValue={(value || "") as string}
                                className="col-span-3"
                                name={key}
                                onChange={handleChange}
                            />}
                    </div>
                })}
            </div>

            <DialogFooter>
                <div className="w-full flex flex-row justify-between">
                    <Dialog>
                        <DialogTrigger>
                            <Button type="submit">{supprimer[language]} {type}</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{etesvoussur[language]}</DialogTitle>
                                <DialogDescription>
                                    {
                                        {
                                            "fr-Fr": 'Cette action est irréversible. Voulez-vous vraiment supprimer cet Adherent ?',
                                            "en-US": 'This action is irreversible. Are you sure you want to delete this Adherent ?'
                                        }[language]
                                    }
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button type="submit">{supprimer[language]}</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Button type="submit">
                        {
                            {
                                "fr-Fr": "Valider",
                                "en-US": "Submit"
                            }[language]
                        }
                    </Button>
                </div>
            </DialogFooter>
        </form>
    );
}