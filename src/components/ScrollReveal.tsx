"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById("veyrath-nav");
    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);

    // Intersection observer for reveal animations
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll("[data-reveal],[data-reveal-left],[data-reveal-right]")
      .forEach((el) => ro.observe(el));

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll<HTMLAnchorElement>(
      'a[href^="#"]'
    );
    const onAnchorClick = (e: Event) => {
      e.preventDefault();
      const a = e.currentTarget as HTMLAnchorElement;
      const target = document.querySelector(a.getAttribute("href") || "");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    };
    anchors.forEach((a) => a.addEventListener("click", onAnchorClick));

    // Systems hover
    const systemItems = document.querySelectorAll(".sistema-item");
    const onSysEnter = (e: Event) => {
      systemItems.forEach((i) => i.classList.remove("active"));
      (e.currentTarget as HTMLElement).classList.add("active");
    };
    systemItems.forEach((item) =>
      item.addEventListener("mouseenter", onSysEnter)
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      anchors.forEach((a) => a.removeEventListener("click", onAnchorClick));
      systemItems.forEach((item) =>
        item.removeEventListener("mouseenter", onSysEnter)
      );
    };
  }, []);

  return null;
}
