import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { projectId, dataset } from "./lib/sanity.api";

export default defineConfig({
  name: "default",
  title: "clean-sanity-nextjs",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});
