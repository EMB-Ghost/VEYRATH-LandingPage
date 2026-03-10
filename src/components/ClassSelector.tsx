"use client";

import { useState } from "react";

export interface ClassData {
  id: number;
  tab: string;
  image: string;
  name: string;
  desc: string;
  traits: string[];
  aura: string;
}

interface ClassSelectorProps {
  classes: ClassData[];
}

export default function ClassSelector({ classes }: ClassSelectorProps) {
  const [active, setActive] = useState(classes[1]?.id ?? 0);

  return (
    <>
      <div className="classes-selector" data-reveal>
        {classes.map((c) => (
          <button
            key={c.id}
            className={`class-tab${active === c.id ? " active" : ""}`}
            onClick={() => setActive(c.id)}
          >
            {c.tab}
          </button>
        ))}
      </div>

      <div className="classes-stage">
        {classes.map((c) => (
          <div
            key={c.id}
            className={`class-panel${active === c.id ? " featured" : ""}`}
            onClick={() => setActive(c.id)}
          >
            <div className="class-figure">
              <div className={`class-aura ${c.aura}`} />
              <img src={c.image} alt={c.name} />
            </div>
            <div className="class-icon-badge">
              <img src={c.image} alt={c.name} />
            </div>
            <h3 className="class-name-big">{c.name}</h3>
            <p className="class-desc-text">{c.desc}</p>
            <div className="class-traits">
              {c.traits.map((t) => (
                <span key={t} className="trait">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
