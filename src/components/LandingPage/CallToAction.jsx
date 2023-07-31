import React from "react";

export default function CallToAction() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-base leading-6 text-gray-600 ">
              AULI.TECH
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Autonomous Living Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              AULI.TECH designs open-source applications and devices enabling
              individuals to overcome nueromuscular and vocal impairments. We
              leverage complex AI and Robotics technologies running in the
              cloud, on consumer devices, and wearable gear to create very low
              cost, accessible solutions.
            </p>
          </div>
        </div>
    </>
  )
}