"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  d: string;
  h: string;
  m: string;
  s: string;
}

// Data alvo: 31 de maio de 2027 à meia-noite
const LAUNCH_DATE = new Date("2027-05-31T00:00:00");

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>({ d: "00", h: "00", m: "00", s: "00" });
  const [ticking, setTicking] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, Math.floor((LAUNCH_DATE.getTime() - Date.now()) / 1000));
      const d = Math.floor(diff / 86400);
      const h = Math.floor((diff % 86400) / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;

      const newTime: TimeLeft = {
        d: String(d).padStart(2, "0"),
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
      };

      setTime((prev) => {
        const changed: Record<string, boolean> = {};
        (Object.keys(newTime) as (keyof TimeLeft)[]).forEach((k) => {
          if (prev[k] !== newTime[k]) changed[k] = true;
        });
        if (Object.keys(changed).length > 0) {
          setTicking(changed);
          setTimeout(() => setTicking({}), 150);
        }
        return newTime;
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units: { key: keyof TimeLeft; label: string }[] = [
    { key: "d", label: "Dias" },
    { key: "h", label: "Horas" },
    { key: "m", label: "Mins" },
    { key: "s", label: "Segs" },
  ];

  return (
    <div className="countdown" data-reveal>
      {units.map((unit, i) => (
        <>
          <div key={unit.key} className="cd-unit">
            <div className={`cd-num${ticking[unit.key] ? " tick" : ""}`}>
              {time[unit.key]}
            </div>
            <div className="cd-label">{unit.label}</div>
          </div>
          {i < units.length - 1 && (
            <div key={`sep-${i}`} className="cd-sep">:</div>
          )}
        </>
      ))}
    </div>
  );
}
