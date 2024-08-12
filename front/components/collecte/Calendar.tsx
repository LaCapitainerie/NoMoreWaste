"use client";

import ShadcnBigCalendar from "@/components/shadcn-big-calendar/shadcn-big-calendar";
import moment from "moment";
import { SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import { momentLocalizer, stringOrDate, Views } from "react-big-calendar";
import withDragAndDrop, { EventInteractionArgs } from "react-big-calendar/lib/addons/dragAndDrop";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
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
// npm i --save-dev @types/react-big-calendar

interface CollecteCalendarProps {
  title: string;
  start: stringOrDate;
  end: stringOrDate;
}

const DnDCalendar = withDragAndDrop<CollecteCalendarProps>(ShadcnBigCalendar);
const localizer = momentLocalizer(moment);

const CollecteCalendar = ({ events }: { events: CollecteCalendarProps[] }) => {
  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const [AllEvents, setAllEvents] = useState(events);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CollecteCalendarProps | null>(null);
  const [selectedEventCopy, setSelectedEventCopy] = useState<CollecteCalendarProps | null>(null);

  const [inputDate, setInputDate] = useState(new Date());

  const [warehouses, setWarehouses] = useState<Entrepot[]>([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      const response = await axios.get<ResponseCustom<Entrepot>>("http://localhost:1000/warehouses.php");
      setWarehouses(response.data.result);
    };
    fetchWarehouses();
  }, [isOpen==true]);

  const handleModifyEvent = (event: CollecteCalendarProps, e: SyntheticEvent<HTMLElement, Event>) => {

    setSelectedEvent(event);
    setSelectedEventCopy(event);

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

  const handleEventDrop = (args: EventInteractionArgs<CollecteCalendarProps>) => {

    const updatedEvents = AllEvents.map((e) => {

      if (e.title === args.event.title) {
        e.start = args.start;
        e.end = args.end;
      }
      return e;
    });

    setAllEvents(updatedEvents);
  };

  const handleNewEvent = (slotInfo: any) => {
    const startHour = new Date(slotInfo.start);
    startHour.setMinutes(0);
    startHour.setSeconds(0);

    const endHour = new Date(slotInfo.end);
    endHour.setMinutes(0);
    endHour.setSeconds(0);

    console.log(startHour, endHour);

    const number = AllEvents.filter(v => v.title.startsWith("New Event")).length;

    const NewEvent = {
      title: `New Event #${number}`,
      start: startHour,
      end: endHour
    };
    setAllEvents([...AllEvents, NewEvent]);
  };

  const [EditTitle, setEditTitle] = useState<boolean>(false);

  return (
    <main className="container">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
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

              <p>
                {selectedEventCopy?.title.split("#")[1]}
              </p>

            </DialogTitle>
            <DialogDescription>
              {selectedEventCopy?.start.toString()} - {selectedEventCopy?.end.toString()}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">

            <CollectMap className="h-[50vh]"
              startPoint={{
                lat: 49.0308833,
                lng: 1.365873,
                hour: selectedEventCopy?.start || "00:00"
              }}

              endPoint={{
                lat: 48.7847957,
                lng: 2.4274473,
                hour: selectedEventCopy?.end || "00:00"
              }}

              actualPosition={{
                lat: 48.8796,
                lng: 2.4156,
                hour: "12/08/2024 14:00:00"
              }}

              warehouses={warehouses.map((w) => ({ lat: w.latitude, lng: w.longitude, label: w.ville }))}
            />

            <div className="grid grid-cols-4 items-center gap-4">

              <div className={cn("grid gap-2 hidden")}>
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
                        <span>Pick a date</span>
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
          </div>
          <DialogFooter>
            <Button type="submit"

              onClick={() => {

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

                  setAllEvents(updatedEvents);

                  setIsOpen(false);

                  toast.success("Changements Enregistrés")
                } else {
                  toast.error("Une Erreur est survenue, veuillez reessayer");
                }
              }}

            >
              Enregistrer
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