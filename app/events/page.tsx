"use client";

// TODO: Connect to Google Calendar or CMS for live events

import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addWeeks } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const now = new Date();

const sampleEvents: Event[] = [
  {
    title: "Provider Onboarding",
    start: addWeeks(now, 2),
    end: addWeeks(now, 2),
    allDay: true,
  },
  {
    title: "Community Info Session",
    start: addWeeks(now, 3),
    end: addWeeks(now, 3),
    allDay: true,
  },
];

export default function Events() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-dark-text mb-4">Events</h1>
        <p className="text-gray-600 mb-10">
          Stay up to date with upcoming Impact Works events and community
          sessions.
        </p>

        <style>{`
          .rbc-calendar {
            font-family: Inter, sans-serif;
          }
          .rbc-toolbar button {
            color: #1a1a1a;
          }
          .rbc-toolbar button:hover,
          .rbc-toolbar button:focus {
            background-color: #3AABDB;
            color: white;
          }
          .rbc-toolbar button.rbc-active {
            background-color: #3AABDB;
            color: white;
          }
          .rbc-event {
            background-color: #E8610A;
            border: none;
            border-radius: 4px;
          }
          .rbc-event:hover {
            background-color: #c7520a;
          }
          .rbc-today {
            background-color: #EFF9FD;
          }
          .rbc-header {
            padding: 8px 4px;
            font-weight: 600;
            color: #1a1a1a;
          }
        `}</style>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <Calendar
            localizer={localizer}
            events={sampleEvents}
            defaultView="month"
            views={["month"]}
            style={{ height: 600 }}
          />
        </div>
      </div>
    </div>
  );
}
