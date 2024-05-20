"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { EventCardType } from "../(pages)/events/page";
import { Icon } from "@iconify/react";

export const EventCard = ({ event }: { event: EventCardType }) => {
  const [isEventHighlighted, setIsEventHighlighted] = useState(event.highlighted);

  const handleEventHighlight = () => {
    setIsEventHighlighted(!isEventHighlighted);
  };

  return (
    <div className="flex flex-col lg:flex-row min-w-[360px] justify-center items-center gap-2 lg:gap-4 p-6 bg-beewhite/5 rounded-lg relative">
      <button
        className={`absolute top-[260px] right-6 lg:top-3 lg:right-3 p-3 rounded-md bg-beewhite/5 hover:bg-beewhite/10 transition-all duration-300 ${
          isEventHighlighted ? "text-beeyellow" : "text-beewhite"
        }`}
        onClick={handleEventHighlight}>
        <Icon icon="bi:star-fill" className="size-5" />
      </button>

      <div className="lg:w-2/6">
        <Image src={event.image} alt={`Event ${event.title}`} className="object-cover rounded-lg" width={400} height={200} />
      </div>

      <div className="flex flex-col items-start w-full lg:w-4/6 px-2 gap-1 max-w-[400px] lg:max-w-full relative">
        {/* highlight event button , make it like a star button, if the event is highlighted, make the the star yellow */}
        <h2 className="text-[24px] font-bold">{event.title}</h2>
        <p className="text-[16px] text-beewhite/80">{event.description}</p>
        <section className="flex flex-wrap gap-2 lg:gap-6 justify-start items-center mt-2">
          <div className="flex flex-col gap-1 text-white/60">
            <p>Organizadores:</p>
            <div className="flex flex-wrap gap-2">
              {event.organizers.map((organizer) => (
                <span key={organizer} className="bg-yellow-800 px-2 py-1 rounded-lg">
                  {organizer}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 text-white/60">
            <p>Etiquetas:</p>
            <div className="flex flex-wrap gap-2 ">
              {event.tags.map((tag) => (
                <span key={tag} className="bg-white/5 px-2 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
        <div className="flex w-full flex-col xl:flex-row xl:justify-between mt-4 text-sm">
          <p className="flex items-center gap-1 text-[#808080]">
            <Icon icon="solar:calendar-bold" className="min-w-4 min-h-4 size-4" />
            {event.date.toDateString()}
          </p>
          <div className="flex items-center gap-1 text-[#808080]">
            <Icon icon="mdi:location" className="min-w-4 min-h-4 size-4" />
            <p className="text-pretty">
              {event.location.formatted_address} | {event.locationInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
