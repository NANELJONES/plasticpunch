"use client";
import React from "react";
import { EventCard } from "./EventCard";
import AnimateUp from "../AnimateUp";
const EventList = ({ events_list }) => {
  return (
    <div className="md:columns-[350px]">
      {events_list.map((each_event, index) => (
        <div key={index} className={`${index % 2 === 0 ? "mt-[5em]" : "mt-[3em]"}`}>
        <AnimateUp>  <EventCard event_data={each_event.node} /></AnimateUp>
        </div>
      ))}
    </div>
  );
};

export default EventList;
