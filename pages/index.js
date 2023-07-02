import Head from "next/head";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";
import { Heading } from "@/components/Heading";
import { Footer } from "@/components/Footer";


const Index = ({ articles, page, navigation, footer}) => {
  return (
    <Layout navigation={navigation} footer={footer}>
      <Head>
        <title>{prismic.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} className="test" />
      <Bounded as="section" size="lg">
        <Heading as="h2" className="mb-12">
          Recent Articles 
        </Heading>
        <ul className="grid grid-cols-1 gap-16">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Bounded>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const footer = await client.getSingle("footer", { lang: locale });

   const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });


  return {
    props: {
      page,
      navigation,
      articles,
      footer,
    },
  };
}
