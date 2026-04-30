---
title: はじめまして！
description: はじめまして！！！！
date: 2026-04-30T13:26
emoji: 👋
tags: ["雑記"]
---

## はじめまして！

はじめまして、みにっつです。
ブログを作り直しました。デザインはとりあえず仮の姿なんですけど、このままでいくと思います。

前のブログはNuxtだったのが、今はAstroです。

## コンテンツ管理

コンテンツ管理にはPages CMSを使っています。
Astro側では以下のような定義を。

```ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: image().optional(),
    draft: z.boolean().default(false)
  })
})

export const collections = { blog };
```