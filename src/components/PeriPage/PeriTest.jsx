import { useInView } from "react-intersection-observer";
import { StartLeft } from "../GradientShapes/StartLeft";
import { StartRight } from "../GradientShapes/StartRight";
const features = [
  {
    name: 'Minimal and thoughtful',
    description:
      'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc: '../../images/peri2.png',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  // {
  //   name: 'Refined details',
  //   description:
  //     'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
  //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
  //   imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  // },
]

export default function PeriTest({classNames}) {

  const options = {
    threshold: .75,
    // triggerOnce: scrollDir === 'up' ? true : false
  };
  const { ref: titleRef, inView: titleVisible } = useInView(options); 

  return (
    <div>
      <div className="bg-gray-900 py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto max-w-2xl lg:mx-0"> */}
          <div
            ref={titleRef}
            className={classNames(
              titleVisible
                ? "transition ease-in-out duration-200 translate-x-0 opacity-100 "
                : "transition ease-in-out duration-200 -translate-x-20 opacity-0 ",
              "mx-auto max-w-2xl lg:mx-0"
            )}
          >
            <h2 className="text-white text-4xl font-bold tracking-tight sm:text-6xl">
              Peri
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              When someone has difficulty speaking, simple communication isn't
              simple anymore.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What's Peri ?
            </h2>
            <p className="mt-4 text-gray-500">
              Peri is our Augmented Communication app. Users start with a
              library of 3,000 phrases. Any phrase can be selected and spoken
              within a few clicks.
            </p>
            <br/>
            <br/>
            <p className="mt-2 text-xs text-gray-500">
                  <strong>Based on:</strong>
                  <br />
                  Message Banking™, Voice Banking and Legacy Messages™ John M.
                  Costello Boston Children’s Hospital © 2011, 2014, 2016, 2017
                </p>
          </div>
          <div className="mt-16 space-y-16">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
              <div
                className={classNames(
                  "lg:col-start-1",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  About Peri
                </h3>
                <ul className="mt-2 text-sm text-gray-500">
                  <li>
                    New phrases can be built and spoken using synthesized
                    speech.
                  </li>
                  <br/>
                  <li>
                    Any phrase can be recorded for use in Voice and Message
                    banking applications.
                  </li>
                  <br/>
                  <li>
                    Phrases can be automatically translated or sent by text
                  </li>
                  <br/>
                  <li>
                    Using Cato with Peri allows fast, hands-free operation
                  </li>
                </ul>
              </div>
              <div
                className={classNames(
                  "lg:col-start-6 xl:col-start-5",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={require("../../images/peri2.png")}
                    alt="peri"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
              <div
                className={classNames(
                  "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  User Guide
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Tools</strong> - Speak, Record, Send Text, Save
                  <br />
                  <br />
                  <strong>Prompt</strong> - Shows current Prompt. Back arrow
                  clears
                  <br />
                  <br />
                  <strong>Keyboard</strong> - Pause (don't click) on a key to
                  update Prompt
                  <br />
                  <br />
                  <strong>Completions</strong> - Possible endings for current
                  word
                  <br />
                  <br />
                  <strong>Phrases</strong> - Library phrases starting with or
                  containing Prompt. Pause over phrase to speak
                </p>
                <br />
                <br />
                <p className="mt-2 text-sm text-gray-500"></p>
              </div>
              <div
                className={classNames(
                  "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={require("../../images/peri3.png")}
                    alt="peri"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <StartLeft/>


      <div className="mx-auto max-w-7xl px-6 pb-20 mb-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="text-base font-semibold leading-6 text-blue-500">
                <a href="https://demo.auli.tech/">
                  Check out Peri&nbsp;
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Try Peri's Prototype</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Peri isn't done yet. Features are missing and there are known bugs, but you will get the idea.
          </p>
        </div>
      </div>
      <StartRight/>


      </div>
    </div>
  );
}
