import type * as CFRichTextTypes from "@contentful/rich-text-types";
import type * as Contentful from "contentful";

export interface TypePostFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    thumbnail: Contentful.Asset;
    content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypePost = Contentful.Entry<TypePostFields>;