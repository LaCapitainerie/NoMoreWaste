"use client";

import ShadcnBigCalendar from "@/components/shadcn-big-calendar/shadcn-big-calendar";
import moment from "moment";
import { SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import { momentLocalizer, stringOrDate, Views } from "react-big-calendar";
import withDragAndDrop, { EventInteractionArgs } from "react-big-calendar/lib/addons/dragAndDrop";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { cn, lang, toSqlFormat } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker";
import { toast } from "sonner";
import { Input } from "../ui/input";
import CollectMap from "./Map";
import { Entrepot } from "@/type/Entrepot";
import axios from "axios";
import { ResponseCustom } from "@/type/Reponse";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "../ui/label";
import { Livraison } from "@/type/Livraison";
// npm i --save-dev @types/react-big-calendar

interface CollecteCalendarProps<T = Livraison> {
  allDay?: boolean;
  title: string;
  start: stringOrDate;
  end: stringOrDate;
  resource?: T;
}

const DnDCalendar = withDragAndDrop<CollecteCalendarProps>(ShadcnBigCalendar);
const localizer = momentLocalizer(moment);

const CollecteCalendar = ({langue}: {langue: lang}) => {
  // Calendar State
  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(2024, 0, 20), 20),
  });
  const [inputDate, setInputDate] = useState(new Date());





  // Events State
  const [AllEvents, setAllEvents] = useState<CollecteCalendarProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CollecteCalendarProps | null>(null);
  const [selectedEventCopy, setSelectedEventCopy] = useState<CollecteCalendarProps | null>(null);




  
  // Map State
  const [EditTitle, setEditTitle] = useState<boolean>(false);
  const [warehouses, setWarehouses] = useState<Entrepot[]>([]);
  const [startWarehouse, setStartWarehouse] = useState<Entrepot>();
  const [endWarehouse, setEndWarehouse] = useState<Entrepot>();




  // Language State

  const entrepotarrivee = {
    "fr-Fr": "Entrepot d'arrivée",
    "en-US": "End Warehouse"
  }

  const pickadate = {
    "fr-Fr": "Choisissez une date",
    "en-US": "Pick a date"
  }

  const toastsuccess = {
    "fr-Fr": "Changements Enregistrés",
    "en-US": "Changes Saved"
  }

  const toasterror = {
    "fr-Fr": "Une erreur s'est produite",
    "en-US": "An error occured"
  }

  const save = {
    "fr-Fr": "Enregistrer",
    "en-US": "Save"
  }








  useEffect(() => {
    const fetchWarehouses = async () => {
      const response = await axios.get<ResponseCustom<Entrepot[]>>(process.env.NEXT_PUBLIC_API_URL as string + "warehouses.php",
        {
          "headers": {
            "Authorization": "Bearer " + (typeof window !== "undefined" && localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN as string))
          }
        });
      setWarehouses(response.data.result);
    };
    fetchWarehouses();
  }, [isOpen]);


  useEffect(() => {
    const fetchLivraisons = async () => {
      const response = await axios.get<ResponseCustom<Livraison[]>>(process.env.NEXT_PUBLIC_API_URL as string + "livraisons.php",
        {
          "headers": {
            "Authorization": "Bearer " + (typeof window !== "undefined" && localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN as string))
          }
        });

      const events = response.data.result.map((l) => ({
        title: l.title,
        start: new Date(l.Depart),
        end: new Date(l.Arrivee),
        resource: (l as Livraison),
      }));

      setAllEvents(events);      
    };
    fetchLivraisons();
  }, [isOpen]);


  const handleModifyEvent = (event: CollecteCalendarProps, e: SyntheticEvent<HTMLElement, Event>) => {

    setSelectedEvent(event);
    setSelectedEventCopy(event);

    setEndWarehouse({
      latitude: event.resource?.Arrivelat || 0,
      longitude: event.resource?.Arrivelong || 0,
      id: event.resource?.id || 0,
    } as Entrepot);

    setDate({
      from: new Date(event.start),
      to: new Date(event.end)
    });

    setIsOpen(true);

  };

  const handleNavigate = (newDate: Date) => {
    setInputDate(newDate);
  };

  const handleViewChange = (newView: SetStateAction<any>) => {
    setView(newView);
  };

  const handleEventDrop = async (args: EventInteractionArgs<CollecteCalendarProps>) => {

    const updatedEvents = AllEvents.map((e) => {

      if (e.title === args.event.title) {
        e.start = args.start;
        e.end = args.end;
      }
      return e;
    });

    const response = await axios.put<ResponseCustom<Livraison>>(process.env.NEXT_PUBLIC_API_URL as string + "livraisons.php",
      {
        id: args.event.resource?.id,
        Depart: toSqlFormat(args.start),
        Arrivee: toSqlFormat(args.end),
      } as Livraison
    );

    setAllEvents(updatedEvents);
  };

  const handleNewEvent = (slotInfo: any) => {
    const startHour = new Date(slotInfo.start);
    startHour.setMinutes(0);
    startHour.setSeconds(0);

    const endHour = new Date(slotInfo.end);
    endHour.setMinutes(0);
    endHour.setSeconds(0);

    const number = AllEvents.filter(v => v.title.startsWith("New Event")).length;

    const NewEvent = {
      title: `New Event #${number}`,
      start: startHour,
      end: endHour
    };
    setAllEvents([...AllEvents, NewEvent]);
  };
  

  return (
    <main className="container">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[50%]">
          <DialogHeader>
            <DialogTitle onClick={_ => { setEditTitle(true) }} className="flex flex-row justify-between items-center gap-8">

              {
                EditTitle ?
                  <>
                    <Input
                      type="text"
                      defaultValue={selectedEventCopy?.title.split("#")[0]}
                      autoFocus={true}
                      onBlur={(e) => {

                        setEditTitle(false);

                        if (selectedEventCopy) {
                          var number = selectedEvent?.title.split("#")[1];
                          if (AllEvents.map(v => v.title).includes(selectedEventCopy.title)) {
                            number = (AllEvents.filter(v => v.title.startsWith(selectedEventCopy?.title.split("#")[0])).length + 1).toString();
                          };

                          selectedEventCopy.title = e.currentTarget.value.trimEnd() + "#" + number;
                        };
                      }
                      }
                      onKeyDown={(e) => {
                        if (e.key == "#") {
                          e.preventDefault();
                        };
                      }}
                    />
                  </>
                  :
                  selectedEventCopy?.title.split("#")[0]
              }

            </DialogTitle>
            <DialogDescription>
              {entrepotarrivee[langue]}
            </DialogDescription>
          </DialogHeader>
            <div className="grid gap-4 py-4">
              <CollectMap className="h-[50vh]"
            startPoint={startWarehouse ? {
              lat: startWarehouse.latitude,
              lng: startWarehouse.longitude,
              // hour: selectedEventCopy?.start || "00:00"
            } : {
              lat: selectedEventCopy?.resource?.latitude || 0,
              lng: selectedEventCopy?.resource?.longitude || 0,
              // hour: selectedEventCopy?.start || "00:00"
            }}

            endPoint={endWarehouse ? {
              lat: endWarehouse.latitude,
              lng: endWarehouse.longitude,
              // hour: selectedEventCopy?.end || "00:00"
            } : {
              lat: selectedEventCopy?.resource?.Arrivelat || 0,
              lng: selectedEventCopy?.resource?.Arrivelong || 0,
              // hour: selectedEventCopy?.end || "00:00"
            }}

            actualPosition={{
              lat: 48.8796,
              lng: 2.4156,
              hour: "12/08/2024 14:00:00"
            }}

            warehouses={warehouses}
            
            setStartPoint={setStartWarehouse}
            />




              <div className="grid grid-cols-4 items-center gap-4">

                <div className={cn("grid gap-2")}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-[300px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>
                            {pickadate[langue]}
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        lang="fr-fr"
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2">

                  <div className="flex flex-col">
                    <Label>Départ</Label>
                    <Select onValueChange={setStartWarehouseFromville}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Départ" />
                      </SelectTrigger>
                      <SelectContent defaultValue={"Paris"}>
                        {
                          Array.from(new Set(warehouses.map(w => w.pays))).map((pays, idx) => (
                            <SelectGroup key={idx} title={pays}>
                              <SelectLabel>{pays}</SelectLabel>
                              {
                                warehouses.filter((w) => w.pays === pays).map((w) => (
                                  <SelectItem key={w.ville} value={w.ville}>{w.ville}</SelectItem>
                                ))
                              }
                            </SelectGroup>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col">
                    <Label>Arrivée</Label>
                    <Select onValueChange={setEndWarehouseFromville}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Arrivée" />
                      </SelectTrigger>
                      <SelectContent defaultValue={endWarehouse?.ville}>
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
                  </div>
                  
              </div> */}
            </div>
          <DialogFooter>
            <Button type="submit"

              onClick={async () => {

                if (selectedEvent && selectedEventCopy) {
                  selectedEvent.start = date?.from || selectedEvent.start;
                  selectedEvent.end = date?.to || selectedEvent.end;

                  const updatedEvents = AllEvents.map((e) => {
                    if (e.title === selectedEvent.title) {
                      e.title = selectedEventCopy.title;
                      e.start = selectedEventCopy.start;
                      e.end = selectedEventCopy.end;
                    }
                    return e;
                  });

                  if (selectedEventCopy.resource) {


                    const response = await axios.put<ResponseCustom<Livraison>>(process.env.NEXT_PUBLIC_API_URL as string + "livraisons.php",
                      {
                        title: selectedEventCopy.title,
                        id: selectedEventCopy.resource.id,
                        Depart: toSqlFormat(selectedEventCopy.start),
                        Arrivee: toSqlFormat(selectedEventCopy.end),

                        entrepot: startWarehouse?.id || selectedEventCopy.resource.entrepot,

                        Arrivelat: endWarehouse?.latitude || selectedEventCopy.resource.Arrivelat,
                        Arrivelong: endWarehouse?.longitude || selectedEventCopy.resource.Arrivelong,
                      } as Livraison
                    );
                  };

                  setAllEvents(updatedEvents);

                  setIsOpen(false);

                  toast.success(toastsuccess[langue]);
                } else {
                  toast.error(toasterror[langue]);
                }
              }}

            >
              {save[langue]}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <DnDCalendar
        events={AllEvents}
        localizer={localizer}
        style={{ height: 600, width: "100%" }}
        selectable
        date={inputDate}
        onNavigate={handleNavigate}
        view={view}
        onView={handleViewChange}
        resizable
        draggableAccessor={() => true}
        resizableAccessor={() => true}

        onEventDrop={handleEventDrop}
        onEventResize={handleEventDrop}
        onSelectSlot={handleNewEvent}
        onSelectEvent={handleModifyEvent}

      />
    </main>
  );
};

export default CollecteCalendar;