import Link from "next/link";
import Head from "next/head";
import { PrismicText, SliceZone } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { Footer } from "@/components/Footer";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function LatestArticle({ article }) {
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <li>
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <PrismicNextLink document={article}>
          <PrismicText field={article.data.title} />
        </PrismicNextLink>
      </h1>
      <p className="font-serif italic tracking-tighter text-slate-500">
        {dateFormatter.format(date)}
      </p>
    </li>
  );
}

export default function Article({
  article,
  navigation,
  footer,
}) {
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      footer={footer}
    >
      <Head>
        <title>
          {prismic.asText(article.data.title)}
        </title>
      </Head>
      <article className="md:max-w-3xl md:m-auto bg-white shadow-gray-300 shadow-lg py-28 md:pt-0">
        <Bounded as="section" className="pb-0" yPadding="sm">
          <div className="mb-3">
            <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
              <PrismicText field={article.data.title} />
            </h1>
            <p className="font-serif italic tracking-tighter text-slate-500">
              {dateFormatter.format(date)}
            </p>
          </div>
          <PrismicNextImage
            field={article.data.featuredImage}
            fill={false}
            priority={true}
          />
        </Bounded>
        <SliceZone slices={article.data.slices} components={components} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  const navigation = await client.getSingle("navigation");
  const footer = await client.getSingle("footer");

  return {
    props: {
      article,
      navigation,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismic.asLink(article)),
    fallback: false,
  };
}
