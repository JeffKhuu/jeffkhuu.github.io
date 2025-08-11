import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const projects = defineCollection({
    loader: file("src/data/projects.json"),
    schema:
        z.object({
            id: z.number(),
            name: z.string(),
            description: z.string(),
            link: z.string().url(),
            thumbnail: z.string().default("/src/assets/thumbnails/default-thumbnail.png")
        })
})

const blogPosts = defineCollection({
    loader: glob({ base: "src/data/posts", pattern: '**/*.{md,mdx}' }),
    schema:
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date()
        })
})

export const collections = { projects, blogPosts };
