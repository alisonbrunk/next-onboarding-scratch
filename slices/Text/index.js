import clsx from "clsx";
import * as prismic from "@prismicio/client";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

const Text = ({ slice }) => {
  return (
    <Bounded as="section" yPadding={clsx(
      slice.primary.article === true ? "xs" : "base",
      )}>
      {prismic.isFilled.richText(slice.primary.text) && (
        <div className="leading-relaxed md:text-xl md:leading-relaxed">
          <PrismicRichText field={slice.primary.text} />
        </div>
      )}
    </Bounded>
  );
};

export default Text;
