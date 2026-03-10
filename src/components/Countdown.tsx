"use client";

import { useEffect, useState, useRef } from "react";

interface TimeLeft {
  d: string;
  h: string;
  m: string;
  s: string;
}

interface CountdownDuration {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  duration: CountdownDuration;
}

export default function Countdown({ duration }: CountdownProps) {
  const durationMs =
    (duration.days * 86400 +
      duration.hours * 3600 +
      duration.minutes * 60 +
      duration.seconds) *
    1000;

  const targetRef = useRef<number>(0);
  const [time, setTime] = useState<TimeLeft>({
    d: String(duration.days).padStart(2, "0"),
    h: String(duration.hours).padStart(2, "0"),
    m: String(duration.minutes).padStart(2, "0"),
    s: String(duration.seconds).padStart(2, "0"),
  });
  const [ticking, setTicking] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Initialize target inside useEffect to avoid impure render
    if (targetRef.current === 0) {
      targetRef.current = Date.now() + durationMs;
    }

    const tick = () => {
      const diff = Math.max(
        0,
        Math.floor((targetRef.current - Date.now()) / 1000)
      );
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
  }, [durationMs]);

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
            <div key={`sep-${i}`} className="cd-sep">
              :
            </div>
          )}
        </>
      ))}
    </div>
  );
}
