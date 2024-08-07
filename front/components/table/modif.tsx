"use client"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";



export default function InfoForm({ values, route, type, method }: { values: any, route: string, type: string, method: "GET" | "POST" | "PUT" | "DELETE" }) {
    const [formData, setFormData] = useState(values);

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const result = fetch(`http://localhost:1000/${route}.php`, {
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
                                <Button type="submit">Supprimer {type}</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Êtes-vous sûr ?</DialogTitle>
                                    <DialogDescription>
                                        Cette action est irréversible. Voulez-vous vraiment supprimer cet Adherent ?
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <Button type="submit">Supprimer</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        <Button type="submit">Sauvegarder</Button>
                    </div>
                </DialogFooter>
            </form>
    );
}