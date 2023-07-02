// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Article documents */
interface ArticleDocumentData {
  /**
   * Title field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Publish Date field in *Article*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: article.publishDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  publishDate: prismic.DateField;
  /**
   * Featured Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.featuredImage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  featuredImage: prismic.ImageField<never>;
  /**
   * Slice Zone field in *Article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Article → Slice Zone*
 *
 */
type ArticleDocumentDataSlicesSlice = TextSlice | ImageSlice;
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;
/** Content for Footer documents */
interface FooterDocumentData {
  /**
   * Links field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  links: prismic.GroupField<Simplify<FooterDocumentDataLinksItem>>;
  /**
   * Logo field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
  /**
   * legal field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.legal[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  legal: prismic.GroupField<Simplify<FooterDocumentDataLegalItem>>;
}
/**
 * Item in Footer → Links
 *
 */
export interface FooterDocumentDataLinksItem {
  /**
   * Label field in *Footer → Links*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismic.RichTextField;
  /**
   * Link field in *Footer → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Item in Footer → legal
 *
 */
export interface FooterDocumentDataLegalItem {
  /**
   * Label field in *Footer → legal*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.legal[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismic.RichTextField;
  /**
   * link field in *Footer → legal*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.legal[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;
/** Content for  Navigation documents */
interface NavigationDocumentData {
  /**
   * Links field in * Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
  /**
   * logo field in * Navigation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
}
/**
 * Item in  Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in * Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismic.TitleField;
  /**
   * Link field in * Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 *  Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | CallToActionSlice
  | HeroSlice
  | FrequentlyAskedQuestionsSlice
  | ImageSlice
  | TextSlice
  | ContactFormSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes =
  | ArticleDocument
  | FooterDocument
  | NavigationDocument
  | PageDocument;
/**
 * Primary content in CallToAction → Primary
 *
 */
interface CallToActionSliceDefaultPrimary {
  /**
   * Title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Body Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.body_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body_text: prismic.RichTextField;
  /**
   * Button 1 Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_1_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_1_text: prismic.KeyTextField;
  /**
   * Button 1 Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_1_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_1_link: prismic.LinkField;
  /**
   * Button 2 Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_2_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_2_text: prismic.KeyTextField;
  /**
   * Button 2 Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_2_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_2_link: prismic.LinkField;
  /**
   * Background Color field in *CallToAction → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: White
   * - **API ID Path**: call_to_action.primary.background_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  background_color: prismic.SelectField<"White" | "Gray", "filled">;
}
/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in CallToAction → Primary
 *
 */
interface CallToActionSliceCenteredPrimary {
  /**
   * title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Body Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.body_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body_text: prismic.RichTextField;
  /**
   * Button 1 Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_1_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_1_text: prismic.KeyTextField;
  /**
   * Button 1 Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_1_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_1_link: prismic.LinkField;
  /**
   * Button 2 Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_2_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_2_text: prismic.KeyTextField;
  /**
   * Button 2 Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_2_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_2_link: prismic.LinkField;
  /**
   * Background Color field in *CallToAction → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: White
   * - **API ID Path**: call_to_action.primary.background_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  background_color: prismic.SelectField<"White" | "Gray", "filled">;
}
/**
 * Centered variation for CallToAction Slice
 *
 * - **API ID**: `centered`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSliceCentered = prismic.SharedSliceVariation<
  "centered",
  Simplify<CallToActionSliceCenteredPrimary>,
  never
>;
/**
 * Primary content in CallToAction → Primary
 *
 */
interface CallToActionSliceBackgroundImagePrimary {
  /**
   * title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Body Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.body_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body_text: prismic.RichTextField;
  /**
   * Button 1 Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_1_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_1_text: prismic.KeyTextField;
  /**
   * Button 1 Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_1_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_1_link: prismic.LinkField;
  /**
   * Button 2 Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_2_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_2_text: prismic.KeyTextField;
  /**
   * Button 2 Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_2_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_2_link: prismic.LinkField;
  /**
   * Background Image field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.background_image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  background_image: prismic.ImageField<never>;
}
/**
 * Background Image variation for CallToAction Slice
 *
 * - **API ID**: `backgroundImage`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSliceBackgroundImage = prismic.SharedSliceVariation<
  "backgroundImage",
  Simplify<CallToActionSliceBackgroundImagePrimary>,
  never
>;
/**
 * Slice variation for *CallToAction*
 *
 */
type CallToActionSliceVariation =
  | CallToActionSliceDefault
  | CallToActionSliceCentered
  | CallToActionSliceBackgroundImage;
/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: `CallToAction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;
/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;
/**
 * Slice variation for *ContactForm*
 *
 */
type ContactFormSliceVariation = ContactFormSliceDefault;
/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSlice = prismic.SharedSlice<
  "contact_form",
  ContactFormSliceVariation
>;
/**
 * Primary content in FrequentlyAskedQuestions → Primary
 *
 */
interface FrequentlyAskedQuestionsSliceDefaultPrimary {
  /**
   * Title field in *FrequentlyAskedQuestions → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
}
/**
 * Item in FrequentlyAskedQuestions → Items
 *
 */
export interface FrequentlyAskedQuestionsSliceDefaultItem {
  /**
   * Question field in *FrequentlyAskedQuestions → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.items[].question
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  question: prismic.TitleField;
  /**
   * Answer field in *FrequentlyAskedQuestions → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.items[].answer
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  answer: prismic.RichTextField;
}
/**
 * Default variation for FrequentlyAskedQuestions Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FrequentlyAskedQuestionsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FrequentlyAskedQuestionsSliceDefaultPrimary>,
  Simplify<FrequentlyAskedQuestionsSliceDefaultItem>
>;
/**
 * Slice variation for *FrequentlyAskedQuestions*
 *
 */
type FrequentlyAskedQuestionsSliceVariation =
  FrequentlyAskedQuestionsSliceDefault;
/**
 * FrequentlyAskedQuestions Shared Slice
 *
 * - **API ID**: `frequently_asked_questions`
 * - **Description**: `FrequentlyAskedQuestions`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FrequentlyAskedQuestionsSlice = prismic.SharedSlice<
  "frequently_asked_questions",
  FrequentlyAskedQuestionsSliceVariation
>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Body Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.body_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body_text: prismic.RichTextField;
  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_text: prismic.KeyTextField;
  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismic.LinkField;
  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Caption field in *Image → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.caption
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  caption: prismic.RichTextField;
  /**
   * article field in *Image → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: image.primary.article
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  article: prismic.BooleanField;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * article field in *Text → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: text.primary.article
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  article: prismic.BooleanField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      ArticleDocumentData,
      ArticleDocumentDataSlicesSlice,
      ArticleDocument,
      FooterDocumentData,
      FooterDocumentDataLinksItem,
      FooterDocumentDataLegalItem,
      FooterDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      NavigationDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      AllDocumentTypes,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceDefault,
      CallToActionSliceCenteredPrimary,
      CallToActionSliceCentered,
      CallToActionSliceBackgroundImagePrimary,
      CallToActionSliceBackgroundImage,
      CallToActionSliceVariation,
      CallToActionSlice,
      ContactFormSliceDefault,
      ContactFormSliceVariation,
      ContactFormSlice,
      FrequentlyAskedQuestionsSliceDefaultPrimary,
      FrequentlyAskedQuestionsSliceDefaultItem,
      FrequentlyAskedQuestionsSliceDefault,
      FrequentlyAskedQuestionsSliceVariation,
      FrequentlyAskedQuestionsSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      ImageSliceDefaultPrimary,
      ImageSliceDefault,
      ImageSliceVariation,
      ImageSlice,
      TextSliceDefaultPrimary,
      TextSliceDefault,
      TextSliceVariation,
      TextSlice,
    };
  }
}
