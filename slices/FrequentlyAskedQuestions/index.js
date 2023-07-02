import * as prismic from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next'

import clsx from "clsx";

import { Heading } from "@/components/Heading";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { PrismicRichText } from "@/components/PrismicRichText";


const components = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="last:mb-0 mb-8 font-light text-xl tracking-wide text-gray-500">{children}</p>,
};



const FrequentlyAskedQuestion = ({ item }) => {

  return (
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6 mb-8">
        <PrismicRichText 
          field={item.question}
          components={components}
        />
        <PrismicRichText 
          field={item.answer}
          components={components}
        />
      </div>
  );
};

const FrequentlyAskedQuestions = ({ slice }) => {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-12">
      {prismic.isFilled.richText(slice.primary.title) && (
        <div className="px-4 mx-auto max-w-screen-xl lg:px-6 mb-3">
          <PrismicRichText field={slice.primary.title} />
          <hr className="mb-8" />
        </div>
      )}
      <div>
        <ul>
          {slice.items.map((item) => (
              <FrequentlyAskedQuestion key={item.question} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
