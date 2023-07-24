import React, { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    name: "Function",
    description:
      "Small wireless device for use as a mouse, keyboard, and joystick.",
  },
  {
    name: "Machine Learning",
    description:
      "Learns user specific gestures translating them to bluteooth signals.",
  },
  {
    name: "Bluetooth",
    description:
      "Connects to directly to phones, tablets, computers and TVs supporting bluetooth.",
  },
];

export default function CatoTest({ classNames, scrollDir }) {
  const options = {
    threshold: 0.75,
    // triggerOnce: scrollDir === 'up' ? true : false
  };
  const { ref: titleRef, inView: titleVisible } = useInView(options);
  const { ref: myRef, inView: myElementVisible } = useInView(options);

  return (
    <div>
      <div className="bg-gray-900 py-10 sm:py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-white text-4xl font-bold tracking-tight sm:text-6xl">
            Cato
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            When you can't click a mouse, tap a screen, or change the channel
            you've lost control of your environment.
          </p>
        </div>
      </div>
      <div></div>
      <div className="bg-transparent">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2
              ref={myRef}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              What's Cato?
            </h2>
            <p className="mt-4 text-gray-500">
              Cato is a compact wireless device intended to give individuals
              with minimal movement a way to use devices when conventional
              methods, such as a computer mouse, aren't possible.
            </p>
            <div className="gap-x-6 py-10 sm:before:flex-1">
              <p className="text-base font-semibold leading-6 text-blue-500">
                <a href="#">
                  Check out the MyCato dashboard&nbsp;
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={require("../../images/back_angle_right.png")}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={require("../../images/usb_vertical_(1).png")}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={require("../../images/back_angle_up.png")}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={require("../../images/back_angle_down.png")}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
          <div
            className="absolute inset-x-0 top-15 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#fffff] to-[#9ca3af] opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
