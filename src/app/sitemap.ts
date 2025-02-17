import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://willhord.dev/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0
    },
    {
      url: "https://willhord.dev/resume",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://willhord.dev/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ]
}
