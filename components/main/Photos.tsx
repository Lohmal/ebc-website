"use client";
import React from "react";
import { LayoutGrid } from "../ui/LayoutGrid";

export function Photos() {
  return (
    <section id="photos" className="z-[3]">
      <div className="h-screen  py-20 w-full z-[3]">
        <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Ekibimizden Kareler
        </h1>
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "/gallery/gallery1.jpg",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: "/gallery/gallery2.jpg",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "/gallery/gallery6.jpg",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: "/gallery/gallery5.jpg",
  },
];
