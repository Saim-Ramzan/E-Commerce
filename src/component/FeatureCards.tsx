"use client";
import React, { useEffect, useState } from "react";
import featuredCard from "@/data/FeatureItem.json";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  FeatureService: string;
  image: string;
  buttonName: string;
}
function FeatureCards() {
 
  return (
    <div className='py-12 bg-gray-900'>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WORK STATION
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Work With the Best Agent
          </p>
        </div>
      <div className="mt-10  max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
          {featuredCard.map((card: Course) => (
            <div className="flex justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
              src={`/${card.image}`}
              alt={card.FeatureService}
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {card.FeatureService}
            </p>
     
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is by
              entering raffles and waiting for the official releases.
            </p>
            {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Buy now </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $100
              </span>
            </button> */}
          </BackgroundGradient>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureCards;
