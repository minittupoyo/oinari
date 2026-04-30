---
title: こんにちは、世界。
description: ハローワールド!
emoji: 👋
date: 2026-04-19T18:53
tags:
  - 雑記
draft: false
---
## こんにちは

このブログはNuxtで作ろうと思ったが最後、寝る間も惜しんで作っているものになります。

## スタック

### Nuxt v4

[https://nuxt.com](https://nuxt.com)

一番の目玉です。
併せて`@nuxt/ui`も使用しています。

[https://ui.nuxt.com/](https://ui.nuxt.com/)

### TailwindCSS

[https://tailwindcss.com](https://tailwindcss.com)

スタイリングに使用しています。
シンプルに`@nuxt/ui`に必要だから。

慣れてきたからとても書きやすい。

### tabler

[https://tabler.io/icons](https://tabler.io/icons)

ブランドロゴ系のアイコンも多いし見た目もいい。使わない理由はない。

## 愚痴

### コンポーネントが多い！

`@nuxt/ui`のコンポーネントが多いです。
v4からはもともと有料だったProが無料になって合わさったので、増えました。

学習コストが若干高い気がします。

### 高機能がゆえに

フルスタックアプリが作れるほどのポテンシャルを持っていますからね、Nuxtは。
ですが初学者にとっては若干オーバースペックな気がします。

多分機能の半分も使っていない。

### ビルドが遅い

クライアントサイドでvueを動かす手前、どうしても変換に時間がかかるのでしょう。
Astro比でビルドが2倍くらいかかってる気がします。

私のパソコンが弱いのも合わさって開発中のストレスが若干多い…。

## コンテンツ定義

当ブログでは以下のような感じになっている。

```ts [content.config.ts]
import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: "page",
            source: "blog/**/*.md",
            schema: z.object({
                title: z.string(),
                description: z.string(),
                emoji: z.string().default("😊"),
                tags: z.array(z.string()).default([]),
                date: z.coerce.date(),
                draft: z.boolean().default(false)
            })
        })
    }
})
```

絵文字を使っているからNuxtUIに含まれるBlogPostsは使えない。
なのでそこは自分で実装している。

```vue [index.vue]
<template>
    <a v-for="post in blog" :href="post.path" class="flex flex-row items-center justify-start border border-slate-200 gap-4 p-4 rounded-md group transition-all duration-150 hover:border-primary">
        <div class="w-12 h-12 flex items-center justify-center text-2xl">
            {{ post.emoji }}
        </div>
        <div class="flex flex-col shrink items-start">
            <p class="text-sm text-slate-500">{{ new Date(post.date).toLocaleDateString("ja-jp", {year: "numeric", month: "2-digit", day: "2-digit"}) }}</p>
            <h2 class="text-xl font-bold line-clamp-2">{{ post.title }}</h2>
            <p class="text-base text-slate-700 line-clamp-1">{{ post.description }}</p>
        </div>
    </a>
</template>
```

::callout{icon="i-tabler-info-circle" color="info"}
デザインに関しては素人なのでこのくらいで。~~(つーか全部素人だろ)~~
::

## 最後に

パフォーマンスはそこそこで良いんじゃない派なのでlighthouseで90以上ならいいと思っている。
Astroと並列で開発を進めて、どちらがいいか見てみたい。もしかしたらメインブログをNuxtにリプレイスするかも？

それでは！