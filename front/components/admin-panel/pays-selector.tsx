"use client";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { Entrepot } from "@/type/Entrepot";
import { ResponseCustom } from "@/type/Reponse";
import axios from "axios";
import { useState } from "react";

export function PaysSelector() {

    
    const [warehouses, setWarehouses] = useState<Entrepot[]>([]);

    // axios.get<ResponseCustom<Entrepot[]>>('http://localhost:1000/warehouses.php').then(res => setWarehouses(res.data.result));

    useState(() => {
        axios.get<ResponseCustom<Entrepot[]>>('http://localhost:1000/warehouses.php').then((res) => {
            setWarehouses(res.data.result);
        });
    });

    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Région" />
            </SelectTrigger>
            <SelectContent>
                {
                    Array.from(new Set(warehouses.map(w => w.pays))).map((pays, idx) => (
                        <SelectGroup key={idx} title={pays}>
                            <SelectLabel>{pays}</SelectLabel>
                            {
                                warehouses.filter((w) => w.pays === pays).map((w) => (
                                    <SelectItem key={w.id} value={w.id.toString()}>{w.ville}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    ))
                }
            </SelectContent>
        </Select>
    );
}
