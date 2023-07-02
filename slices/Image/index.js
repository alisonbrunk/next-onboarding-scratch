import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

const Image = ({ slice }) => {
  const image = slice.primary.image;
  return (
    <Bounded as="section" yPadding="xs">
      <figure className="grid grid-cols-1 gap-4">
        {prismic.isFilled.image(image) && (
          <div className="bg-gray-100">
            <PrismicNextImage field={image} className="w-6/12 m-auto object-cover" />
          </div>
        )}
        {prismic.isFilled.richText(slice.primary.caption) && (
          <figcaption className="text-center italic tracking-tight text-slate-500">
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </figure>
    </Bounded>
  );
};

export default Image;