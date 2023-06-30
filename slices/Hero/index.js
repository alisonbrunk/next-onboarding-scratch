import * as prismic from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next'

import clsx from "clsx";

import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const components = {
  heading2: ({ children }) => (
    <Heading as="h1" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="last:mb-0 mb-8 font-light text-2xl tracking-wide text-gray-500">{children}</p>,
};

const Hero = ({ slice }) => {
  return (
    <section className="px-6 py-32 md:py-8 lg:py-4 lg:px-12">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="text-center lg:text-left mr-auto place-self-center lg:col-span-7">
            <PrismicRichText
                field={slice.primary.title}
                components={components}
            />
            <PrismicRichText
                field={slice.primary.body_text}
                components={components}
            />
          <div className="flex flex-col justify-center lg:justify-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            {prismic.isFilled.link(slice.primary.button_link) && (
              <PrismicNextLink
                field={slice.primary.button_link}
                className="inline-flex items-center justify-center px-6 py-4 text-lg font-bold capitalize text-center text-white tracking-wide bg-teal-400 rounded-lg hover:bg-teal-500 focus:ring-4 focus:ring-teal-200"
              >
                {slice.primary.button_1_text || "Learn More"}
              </PrismicNextLink>
            )}
          </div>
       </div>
       <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <PrismicNextImage 
            field={slice.primary.image} 
          />
      </div>  
      </div>
    </section>
  );
};

export default Hero;
