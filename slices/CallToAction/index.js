import * as prismic from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next'

import clsx from "clsx";

import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";


const components = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="last:mb-0 mb-8 font-light text-2xl tracking-wide text-gray-500">{children}</p>,
};

const CallToAction = ({ slice }) => {
  return (
    <section className={clsx(
          "px-6 py-24 sm:py-32 lg:px-12",
          slice.variation === "centered" && "flex text-center",
          slice.primary.background_color === "White" && "bg-white",
          slice.primary.background_color === "Gray" && "bg-neutral-100"
        )}>
      <div className="mx-auto max-w-screen-xl">
        <div className="max-w-screen-md">
          <PrismicRichText
              field={slice.primary.title}
              components={components}
          />
          <PrismicRichText
              field={slice.primary.body_text}
              components={components}
          />
          <div className={clsx(
            "flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4",
              slice.variation === "centered" && "justify-center"
            )}>
            {prismic.isFilled.link(slice.primary.button_1_link) && (
              <PrismicNextLink
                field={slice.primary.button_1_link}
                className="inline-flex items-center justify-center px-6 py-4 text-lg font-bold capitalize text-center text-white tracking-wide bg-teal-400 rounded-lg hover:bg-teal-500 focus:ring-4 focus:ring-teal-200"
              >
                {slice.primary.button_1_text || "Learn More"}
              </PrismicNextLink>
            )}
            {prismic.isFilled.link(slice.primary.button_2_link) && (
              <PrismicNextLink
                field={slice.primary.button_2_link}
                className="inline-flex items-center justify-center px-6 py-4 text-lg font-bold capitalize text-center text-gray-900 border border-gray-300 tracking-wide bg-white rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-200"
              >
                {slice.primary.button_2_text || "Learn More"}
              </PrismicNextLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
