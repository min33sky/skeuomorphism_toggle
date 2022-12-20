import React, { useState } from 'react';

export default function BasicToggle() {
  const [active, setActive] = useState(false);

  const toggleSwitch = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    if (id === 'on') setActive(true);
    else if (id === 'off') setActive(false);
  };

  return (
    <div
      className={`flex h-24 w-48 select-none items-center justify-around rounded-full bg-gradient-to-r from-[#4b4b4b]
      to-[#111111] transition-all duration-500 ${
        active
          ? 'shadow-[inset_-0.9em_0_0.9em_rgb(73,73,73)]'
          : 'shadow-[inset_0.9em_0_0.9em_rgb(23,23,23)]'
      }`}
    >
      <section>
        <input
          type="radio"
          id="on"
          onClick={toggleSwitch}
          className="appearance-none border-none bg-transparent outline-none"
        />
        <label
          htmlFor="on"
          className={`cursor-pointer text-xl tracking-widest transition-all duration-500 ${
            active ? 'text-green-500' : 'text-gray-600'
          }`}
        >
          On
        </label>
      </section>

      <section>
        <input
          type="radio"
          id="off"
          onClick={toggleSwitch}
          className="appearance-none border-none bg-transparent outline-none"
        />
        <label
          htmlFor="off"
          className={`cursor-pointer text-xl tracking-widest transition-all ${
            active ? 'text-gray-600' : 'text-rose-500'
          }`}
        >
          Off
        </label>
      </section>
    </div>
  );
}
