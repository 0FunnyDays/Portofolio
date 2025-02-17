"use client";

import React from "react";

import { Bootcamp } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Courses = () => {
  return (
    <section id="Bootcamp" className="py-20">
      <h1 className="heading">
        About The Bootcamp's
        <span className="text-purple"> i've Completed</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={Bootcamp}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
