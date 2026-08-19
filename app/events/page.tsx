"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarkBackdrop from "@/components/DarkBackdrop";
import ScrollReveal from "@/components/ScrollReveal";

interface LinksiEvent {
  id: string;
  title: string;
  description: string | null;
  starts_at: string;
  ends_at: string | null;
  location: string | null;
  image_url: string | null;
  url: string | null;
  category: string | null;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function formatTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function categoryColor(cat: string | null) {
  const map: Record<string, string> = {
    community: "bg-brand-blue",
    health: "bg-brand-green",
    education: "bg-brand-gold",
    faith: "bg-purple-500",
    government: "bg-slate-500",
  };
  return map[(cat ?? "").toLowerCase()] ?? "bg-brand-orange";
}

// ─── Share helpers ────────────────────────────────────────────────────────────

function shareFacebook(event: LinksiEvent) {
  const url = encodeURIComponent("https://www.impact-works.us/events");
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "width=600,height=400");
}

function shareX(event: LinksiEvent) {
  const text = encodeURIComponent(`${event.title} — ${formatDate(event.starts_at)}`);
  const url = encodeURIComponent("https://www.impact-works.us/events");
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "width=600,height=400");
}

// ─── EventModal ───────────────────────────────────────────────────────────────

function EventModal({ event, onClose }: { event: LinksiEvent; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function copyForInstagram() {
    navigator.clipboard.writeText("https://www.impact-works.us/events").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  const startDate = new Date(event.starts_at);
  const endDate = event.ends_at ? new Date(event.ends_at) : null;
  const isMultiDay = endDate && !isSameDay(startDate, endDate);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
        >
          {/* Image header */}
          {event.image_url ? (
            <div className="relative h-48 bg-slate-100 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={event.image_url} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ) : (
            <div className="h-3 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-green" />
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6">
            {/* Category badge */}
            {event.category && (
              <span className={`inline-block text-[10px] font-mono uppercase tracking-[0.18em] text-white px-2.5 py-1 rounded-full mb-3 ${categoryColor(event.category)}`}>
                {event.category}
              </span>
            )}

            <h2 className="font-display text-xl font-bold text-slate-800 mb-4 leading-tight">{event.title}</h2>

            {/* Date & time */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">{formatDate(event.starts_at)}</p>
                <p className="text-sm text-slate-500">
                  {formatTime(event.starts_at)}
                  {endDate && (
                    isMultiDay
                      ? ` — ${formatDate(event.ends_at!)} ${formatTime(event.ends_at!)}`
                      : ` – ${formatTime(event.ends_at!)}`
                  )}
                </p>
              </div>
            </div>

            {/* Location */}
            {event.location && (
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-600 pt-1.5">{event.location}</p>
              </div>
            )}

            {/* Description */}
            {event.description && (
              <p className="text-sm text-slate-500 leading-relaxed mt-4 mb-4 border-t border-slate-100 pt-4">
                {event.description}
              </p>
            )}

            {/* Event link */}
            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-orange-600 transition-colors mb-5"
              >
                More details <span>&rarr;</span>
              </a>
            )}

            {/* Share buttons */}
            <div className="border-t border-slate-100 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-3">Share this event</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => shareFacebook(event)}
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold bg-[#1877F2] text-white rounded-xl hover:bg-[#166FE5] transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>

                <button
                  onClick={() => shareX(event)}
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold bg-black text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X / Twitter
                </button>

                <button
                  onClick={copyForInstagram}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors ${
                    copied
                      ? "bg-brand-green text-white"
                      : "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-90"
                  }`}
                >
                  {copied ? (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Link copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Copy for Instagram
                    </>
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] text-slate-400 mt-2">Paste this link in your Instagram Story or bio.</p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Calendar ─────────────────────────────────────────────────────────────────

function buildCalendarGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function eventsOnDay(events: LinksiEvent[], year: number, month: number, day: number) {
  return events.filter((e) => {
    const d = new Date(e.starts_at);
    return d.getFullYear() === year && d.getMonth() === month && d.getDate() === day;
  });
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function EventsPage() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [events, setEvents] = useState<LinksiEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<LinksiEvent | null>(null);

  useEffect(() => {
    fetch("/api/events")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setEvents(data); })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const prevMonth = useCallback(() => {
    if (viewMonth === 0) { setViewYear((y) => y - 1); setViewMonth(11); }
    else setViewMonth((m) => m - 1);
  }, [viewMonth]);

  const nextMonth = useCallback(() => {
    if (viewMonth === 11) { setViewYear((y) => y + 1); setViewMonth(0); }
    else setViewMonth((m) => m + 1);
  }, [viewMonth]);

  const cells = buildCalendarGrid(viewYear, viewMonth);

  // Upcoming events (future, sorted)
  const upcoming = events.filter((e) => new Date(e.starts_at) >= today).slice(0, 12);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-28 md:py-36 w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">
            Community Events
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="heading-hero text-white max-w-3xl"
          >
            What&apos;s Happening in <span className="gradient-text-orange">Clay County</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="body-text text-slate-300 mt-6 max-w-xl"
          >
            Events from across the Linksi network — community gatherings, health fairs, resource drives, and more.
          </motion.p>
        </div>
      </section>

      {/* Calendar + Events */}
      <section className="section-pad bg-white">
        <div className="max-w-site mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="w-10 h-10 border-2 border-brand-orange border-t-transparent rounded-full animate-spin" />
              <p className="text-slate-400 text-sm">Loading events…</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">

              {/* ── Calendar ── */}
              <div>
                {/* Month nav */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:border-brand-orange hover:text-brand-orange transition-colors"
                    aria-label="Previous month"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h2 className="font-display text-xl font-bold text-slate-800">
                    {MONTHS[viewMonth]} {viewYear}
                  </h2>
                  <button
                    onClick={nextMonth}
                    className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:border-brand-orange hover:text-brand-orange transition-colors"
                    aria-label="Next month"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 mb-2">
                  {DAYS.map((d) => (
                    <div key={d} className="text-center font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400 py-2">{d}</div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
                  {cells.map((day, i) => {
                    const dayEvents = day ? eventsOnDay(events, viewYear, viewMonth, day) : [];
                    const isToday = day !== null && isSameDay(new Date(viewYear, viewMonth, day), today);

                    return (
                      <div
                        key={i}
                        className={`bg-white min-h-[80px] p-2 ${!day ? "opacity-0 pointer-events-none" : ""}`}
                      >
                        {day && (
                          <>
                            <span className={`inline-flex items-center justify-center w-7 h-7 text-sm font-medium rounded-full mb-1 ${
                              isToday
                                ? "bg-brand-orange text-white font-bold"
                                : "text-slate-600"
                            }`}>
                              {day}
                            </span>
                            <div className="flex flex-col gap-0.5">
                              {dayEvents.slice(0, 3).map((e) => (
                                <button
                                  key={e.id}
                                  onClick={() => setSelectedEvent(e)}
                                  className={`w-full text-left text-[10px] text-white font-medium px-1.5 py-0.5 rounded truncate ${categoryColor(e.category)} hover:opacity-80 transition-opacity`}
                                  title={e.title}
                                >
                                  {e.title}
                                </button>
                              ))}
                              {dayEvents.length > 3 && (
                                <span className="text-[10px] text-slate-400 px-1">+{dayEvents.length - 3} more</span>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {[
                    { label: "Community", cls: "bg-brand-orange" },
                    { label: "Health", cls: "bg-brand-green" },
                    { label: "Education", cls: "bg-brand-gold" },
                    { label: "Faith", cls: "bg-purple-500" },
                    { label: "Government", cls: "bg-slate-500" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.cls}`} />
                      <span className="text-xs text-slate-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Upcoming list ── */}
              <div>
                <h3 className="font-display text-lg font-bold text-slate-800 mb-4">Upcoming Events</h3>
                {upcoming.length === 0 ? (
                  <div className="card-light p-8 text-center border border-dashed border-slate-200 rounded-2xl">
                    <p className="text-sm text-slate-400">No upcoming events scheduled.</p>
                    <p className="text-xs text-slate-300 mt-2">Check back soon — events are added regularly through the Linksi platform.</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {upcoming.map((e, i) => {
                      const d = new Date(e.starts_at);
                      return (
                        <ScrollReveal key={e.id} delay={i * 0.05}>
                          <button
                            onClick={() => setSelectedEvent(e)}
                            className="w-full text-left card-light p-4 flex items-start gap-4 hover:shadow-md hover:border-brand-orange/30 transition-all group border border-transparent rounded-xl"
                          >
                            {/* Date block */}
                            <div className="flex-shrink-0 w-12 text-center">
                              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-orange">{MONTHS[d.getMonth()].slice(0,3)}</p>
                              <p className="font-display text-2xl font-extrabold text-slate-800 leading-none">{d.getDate()}</p>
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-display text-sm font-bold text-slate-800 group-hover:text-brand-orange transition-colors truncate">{e.title}</p>
                              {e.location && (
                                <p className="text-xs text-slate-400 mt-0.5 truncate">{e.location}</p>
                              )}
                              <p className="text-xs text-slate-400 mt-0.5">{formatTime(e.starts_at)}</p>
                            </div>
                            {e.category && (
                              <span className={`flex-shrink-0 text-[9px] font-mono uppercase tracking-wide text-white px-2 py-0.5 rounded-full ${categoryColor(e.category)}`}>
                                {e.category}
                              </span>
                            )}
                          </button>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Powered by band */}
      <section className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-site mx-auto px-6 text-center">
          <p className="text-sm text-slate-400">
            Events are managed through the{" "}
            <a
              href="https://linksi.impact-works.us/dashboard/admin?tab=events"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:underline font-medium"
            >
              Linksi Admin Dashboard
            </a>
            . Contact the Impact Works team to have your event listed.
          </p>
        </div>
      </section>

      {/* Event modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}
