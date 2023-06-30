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
  latestArticles,
  navigation,
}) {
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
    >
      <Head>
        <title>
          {prismic.asText(article.data.title)}
        </title>
      </Head>
      <article>
        <Bounded className="pb-0" yPadding="sm">
          <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
            <PrismicText field={article.data.title} />
          </h1>
          <p className="font-serif italic tracking-tighter text-slate-500">
            {dateFormatter.format(date)}
          </p>
        </Bounded>
        <Bounded as="section" className="pb-0" yPadding="xs">
          <PrismicNextImage
            field={article.data.featuredImage}
            fill={false}
            className="h-96 w-auto"
          />
        </Bounded>
        <SliceZone slices={article.data.slices} components={components} />
      </article>
      {latestArticles.length > 0 && (
        <Bounded>
          <div className="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
            <div className="w-full">
              <Heading size="2xl" className="mb-10">
                Latest articles
              </Heading>
              <ul className="grid grid-cols-1 gap-12">
                {latestArticles.map((article) => (
                  <LatestArticle key={article.id} article={article} />
                ))}
              </ul>
            </div>
          </div>
        </Bounded>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  const latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");

  return {
    props: {
      article,
      latestArticles,
      navigation,
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
