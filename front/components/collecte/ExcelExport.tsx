import { utils, writeFile, Range as RangeT} from "xlsx-js-style";
import { addDays } from "date-fns"
import { lang } from '@/lib/utils';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import { Livraison } from '@/type/Livraison';

function createExcelFile(lang: lang = "fr-Fr", livraisons: Livraison[] = []) {
  // Create a new workbook and add a worksheet
  const workbook = utils.book_new();
  const worksheet = utils.aoa_to_sheet([]);

  // Get all day of the week with theire date
  const Month = {
    "fr-Fr": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    "en-US": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }[lang];

  const days = {
    "fr-Fr": ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    "en-US": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }[lang];
  const date = new Date();
  const schedule = Array.from({ length: 7 }, (_, i) => `${days[(date.getDay() + i) % 7]} ${addDays(date, i).getDate()}`);
  utils.sheet_add_aoa(worksheet, [schedule], { origin: "B3" });

  const times = {
    "fr-Fr": Array.from({ length: 24 }, (_, i) => [`${i}:00`]),
    "en-US": Array.from({ length: 24 }, (_, i) => [`${i % 12 === 0 ? 12 : i % 12}:00 ${i < 12 ? 'AM' : 'PM'}`])
  }[lang]

  const details = [
    ["", {
      "fr-Fr": "Entrepot",
      "en-US": "Warehouse"
    }[lang], {
      "fr-Fr": "Destination",
      "en-US": "Destination"
    }[lang]],

    ...livraisons.map(livraison => [
      livraison.title,
      `${livraison.ville} - ${livraison.depart}`,
      `${livraison.arrivelat} - ${livraison.arrivelong}`
    ]),
  ];

  // For each livraison, merge the cells corresponding to the date for the title
  // Exemple : for a livraison starting on Monday and ending on Wednesday, merge the cells corresponding to Monday, Tuesday and Wednesday
  const allMerges:RangeT[] = [];
  livraisons.forEach((livraison, index) => {
    const start = new Date(livraison.depart);
    const end = new Date(livraison.arrivee);
    const startDay = start.getDay();
    const endDay = end.getDay();
    const startHour = start.getHours();
    const endHour = end.getHours();
    const startMinute = start.getMinutes();
    const endMinute = end.getMinutes();
    const startRow = 4 + (startHour * 2) + (startMinute === 30 ? 1 : 0);
    const endRow = 4 + (endHour * 2) + (endMinute === 30 ? 1 : 0);
    const startCol = schedule.findIndex(day => day.includes(days[startDay]));
    const endCol = schedule.findIndex(day => day.includes(days[endDay]));
    const title = livraison.title;
    const cell = utils.encode_cell({ r: startRow + index, c: startCol + 1 });
    const merge:RangeT = { s: { r: startRow + index, c: startCol + 1 }, e: { r: endRow + index, c: endCol + 1 } };
    allMerges.push(merge);
    worksheet[cell] = { t: "s", v: title };
    console.log(utils.encode_cell(merge.s) + ":" + utils.encode_cell(merge.e));

    // Select a range of cell to put border on
    const range = utils.decode_range(utils.encode_range(merge.s, merge.e));
    
    // Add border to the range
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell_ref = utils.encode_cell({ r: R, c: C });
        if (!worksheet[cell_ref]) continue;
        worksheet[cell_ref].s = {
          border: {
            top: { style: "thin", color: { auto: 1 } },
            right: { style: "thin", color: { auto: 1 } },
            bottom: { style: "thin", color: { auto: 1 } },
            left: { style: "thin", color: { auto: 1 } },
          },
        };
      }
    }


    
  });

  worksheet["!ref"] = "A1:H26";

  console.log(livraisons, livraisons.length);

  worksheet["A4"] = { t: "s", v: {
    "fr-Fr": "Journée entière",
    "en-US": "All Day"
  }[lang] };
  worksheet["A4"].s = { font: { bold: true, sz: 16 } };
  worksheet["A4"].s.alignment = { vertical: "center", horizontal: "center" };

  allMerges.push({ s: { r: 3, c: 0 }, e: { r: livraisons.length+4, c: 0 } });
  

  utils.sheet_add_aoa(worksheet, times, { origin: `A${livraisons.length+5}` });

  // Populate the details section
  utils.sheet_add_aoa(worksheet, details, { origin: "J2" });

  // Ensure the header cell B1 has a value before styling
  const header = `${Month[date.getMonth()]} ${schedule[0].split(" ")[1]} - ${Month[addDays(date, 7).getMonth()]} ${schedule[schedule.length - 1].split(" ")[1]}`;
  if (!worksheet["D1"]) {
      worksheet["D1"] = { t: "s", v: header };
  }
  worksheet["D1"].s = { font: { bold: true, sz: 16 } };

  // Apply some basic styling for better visibility
  const rangesToStyle = ["B3", "C3", "D3", "E3", "F3", "G3", "H3"];
  rangesToStyle.forEach(range => {
      const ref = utils.decode_range(range);
      for (let R = ref.s.r; R <= ref.e.r; ++R) {
          for (let C = ref.s.c; C <= ref.e.c; ++C) {
              const cell_ref = utils.encode_cell({ r: R, c: C });
              if (!worksheet[cell_ref]) continue;
              worksheet[cell_ref].s = {
                  font: { name: "Arial", sz: 12, bold: true },
                  alignment: { vertical: "center", horizontal: "center" },
                  fill: { fgColor: { rgb: "D9EAD3" } },
                  border: {
                      top: { style: "thin", color: { auto: 1 } },
                      right: { style: "thin", color: { auto: 1 } },
                      bottom: { style: "thin", color: { auto: 1 } },
                      left: { style: "thin", color: { auto: 1 } },
                  },
              };
          }
      }
  });

  // Merge cells for the main header
  allMerges.push({ s: { r: 0, c: 3 }, e: { r: 1, c: 5 } })
  worksheet["!merges"] = allMerges;

  // Center the main header
  worksheet["D1"].s.alignment = { vertical: "center", horizontal: "center" };

  // Set column widths for better visibility
  worksheet["!cols"] = [
      { wch: 15 }, // Column A
      { wch: 15 }, // Column B
      { wch: 15 }, // Column C
      { wch: 15 }, // Column D
      { wch: 15 }, // Column E
      { wch: 15 }, // Column F
      { wch: 15 }, // Column G
      { wch: 15 },  // Column H
      { wch: 15 }, // Column I
      { wch: 15 }, // Column J
      { wch: 15 }, // Column K
      { wch: 15 }, // Column L
  ];

  // Append the worksheet to the workbook
  utils.book_append_sheet(workbook, worksheet, "Schedule");

  // Save the workbook to a file
  writeFile(workbook, `Schedule ${header}.xlsx`);
}

function ExcelDemo({lang, livraisons}: {lang: lang, livraisons: Livraison[]}) {

    return (
      <Button onClick={() => createExcelFile(lang, livraisons)}>
        {
          {
            "fr-Fr": "Télécharger au format Excel",
            "en-US": "Download Excel file"
          }[lang]
        }
        <Download className="ml-2" size={16} />
      </Button>
    );
}

export default ExcelDemo;
