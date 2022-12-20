import React, { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function DarkModeToggle() {
  const [active, setActive] = useState(false);

  const toggleSwitch = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    if (id === 'light') setActive(true);
    else if (id === 'dark') setActive(false);
  };

  return (
    <div
      className={`flex h-20 w-40 select-none items-center justify-around rounded-full bg-gradient-to-r from-[#4b4b4b]
      to-[#111111] transition-all duration-500 ${
        active
          ? 'shadow-[inset_-0.9em_0_0.9em_rgb(73,73,73)]'
          : 'shadow-[inset_0.9em_0_0.9em_rgb(23,23,23)]'
      }`}
    >
      <section className="flex items-center justify-center">
        <input
          type="radio"
          id="light"
          onClick={toggleSwitch}
          className="appearance-none border-none bg-transparent outline-none"
        />
        <label htmlFor="light">
          <SunIcon
            className={`w-8e h-8 cursor-pointer text-xl tracking-widest transition-all duration-500 ${
              active ? 'animate-pulse text-yellow-500' : 'text-gray-600'
            }`}
          />
        </label>
      </section>

      <section className="flex items-center justify-center">
        <input
          type="radio"
          id="dark"
          onClick={toggleSwitch}
          className="appearance-none border-none bg-transparent outline-none"
        />
        <label htmlFor="dark">
          <MoonIcon
            className={`h-8 w-8 cursor-pointer text-xl tracking-widest transition-all ${
              active ? 'text-gray-700' : 'animate-pulse  text-yellow-500'
            }`}
          />
        </label>
      </section>
    </div>
  );
}
