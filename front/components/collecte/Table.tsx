"use client"

import { getColumns } from "@/app/adherent/panel/commercant/commercant-columns";
import { Commercant } from "@/type/Commercant";
import { ResponseCustom } from "@/type/Reponse";
import axios from "axios";
import { useState } from "react";
import { DataTable } from "../table/data-table";
import { lang } from "@/lib/utils";

export default function CollecteTable({ lang }: { lang: lang }) {
    const [data, setData] = useState<Commercant[]>([]);

    useState(() => {
        axios.get<ResponseCustom<Commercant[]>>(process.env.NEXT_PUBLIC_API_URL as string + 'commercants.php',
            {
                "headers": {
                    "Authorization": "Bearer " + (localStorage?.getItem(process.env.NEXT_PUBLIC_TOKEN as string) || "")
                }
            }).then((res) => {
                setData(res.data.result);
            });
    });

    return <DataTable columns={getColumns(lang)} data={data} route={"commercants"} langue={lang} />
}