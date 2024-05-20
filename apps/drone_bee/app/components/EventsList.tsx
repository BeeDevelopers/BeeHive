"use client";
import React from "react";
import { EventCard } from "./EventCard";
import type { EventCardType } from "../(pages)/events/page";

interface EventsListProps {
  events: EventCardType[];
}

export const EventsList = ({ events }: EventsListProps) => {
  return (
    <>
      <div className="flex w-auto lg:w-full flex-col gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
};
