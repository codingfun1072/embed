import { defineCollection } from "astro:content";

const gameCollection = defineCollection({
  type: "content",
});

export const collections = {
  "games": gameCollection,
};