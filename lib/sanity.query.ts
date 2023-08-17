import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getSkeleton() {
  return client.fetch(
    groq`*[_type == "skeleton"]{
      _id,
      _createdAt,
      _updatedAt
      title,
      "slug": slug.current,
      photo {
        "image": asset->url,
        "lqip": asset->metadata.lqip,
        alt,
      },
      content,
    }`
  );
}
