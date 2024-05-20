"use client";
import React, { useEffect, useRef, useState } from "react";
import z from "zod";
import { EventsList } from "../../components/EventsList";
import { Icon } from "@iconify/react";

export const EventCardSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  image: z.string(),
  title: z.string().max(50),
  description: z.string().max(200),
  organizers: z.array(z.string()),
  tags: z.array(z.string()),
  date: z.date(),
  location: z.object({
    place_id: z.string(),
    name: z.string(),
    formatted_address: z.string(),
    geometry: z.object({
      location: z.object({
        lat: z.number(),
        lng: z.number(),
      }),
    }),
  }),
  locationInfo: z.string(),
  highlighted: z.boolean(),
});

export type EventCardType = z.infer<typeof EventCardSchema>;

const events: EventCardType[] = [
  {
    id: 1,
    createdAt: new Date(),
    image: "https://via.placeholder.com/570x320",
    title: "Evento de prueba",
    description: "Este es un evento de prueba.",
    organizers: ["Organizador-1", "Organizador-2"],
    tags: ["tag1", "tag2"],
    date: new Date("2022-12-31"),
    location: {
      place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      name: "Google Sydney",
      formatted_address: "5, 48 Pirrama Rd, Pyrmont NSW 2009, Australia",
      geometry: {
        location: {
          lat: -33.866651,
          lng: 151.195827,
        },
      },
    },
    locationInfo: "Información de ubicación de prueba",
    highlighted: true,
  },
  {
    id: 2,
    createdAt: new Date(),
    image: "https://via.placeholder.com/570x320",
    title: "Evento de prueba 2",
    description: "Este es un evento de prueba 2.",
    organizers: ["Organizador-1", "Organizador-2"],
    tags: ["tag1", "tag2"],
    date: new Date("2022-12-31"),
    location: {
      place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      name: "Google Sydney",
      formatted_address: "micanton",
      geometry: {
        location: {
          lat: -33.866651,
          lng: 151.195827,
        },
      },
    },
    locationInfo: "Información de ubicación de prueba",
    highlighted: false,
  },
  {
    id: 3,
    createdAt: new Date(),
    image: "https://via.placeholder.com/570x320",
    title: "Evento de prueba 3",
    description: "Este es un evento de prueba 3.",
    organizers: ["Organizador-1", "Organizador-2"],
    tags: ["tag1", "tag2"],
    date: new Date("2022-12-31"),
    location: {
      place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      name: "Google Sydney",
      formatted_address: "5, 48 Pirrama Rd, Pyrmont NSW 2009, Australia",
      geometry: {
        location: {
          lat: -33.866651,
          lng: 151.195827,
        },
      },
    },
    locationInfo: "Información de ubicación de prueba",
    highlighted: false,
  },
];

interface Filter {
  highlighted: boolean;
}

const EventsPage = () => {
  const [filter, setFilter] = useState<Filter>({ highlighted: false });
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [event.target.name]: event.target.checked });
  };

  const filteredEvents = events.filter((event) => {
    return filter.highlighted ? event.highlighted === filter.highlighted : true;
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col justify-start items-center gap-4">
      {/* button to create and filter events, following the website style */}
      <div className="flex w-full justify-end gap-4">
        <button className="bg-beewhite/5  text-beewhite py-2 px-4 rounded-md transition-colors">
          <span className="text-xl font-bold">+</span> <span className="font-normal text-base">Nuevo evento</span>
        </button>
        <button
          className="flex justify-center items-center gap-2 bg-beewhite/5 hover:bg-beewhite/15 text-beewhite py-2 px-4 rounded-md transition-colors"
          onClick={() => setDropdownOpen(!isDropdownOpen)}>
          <Icon icon="solar:filter-bold" className="size-5" />
          Filtros
        </button>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-36 mt-2 w-60 rounded-lg shadow-lg bg-[#141515] ring-1 ring-beewhite ring-opacity-15 z-50 px-2 py-1">
            <div
              className="flex justify-center gap-1 hover:bg-[#2b2c2d] rounded-lg p-2 items-center text-xs transition-colors"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu">
              <input
                type="checkbox"
                id="highlighted"
                name="highlighted"
                checked={filter.highlighted}
                onChange={handleFilterChange}
                className="form-checkbox h-5 w-5 p-1 cursor-pointer"
              />
              <label htmlFor="highlighted" className="block p-1 text-xs text-wrap cursor-pointer" role="menuitem">
                Mostrar solo destacados
              </label>
            </div>
          </div>
        )}
      </div>

      <EventsList events={filteredEvents} />
    </div>
  );
};

export default EventsPage;
