---
layout: base.njk
title: Blog
tags: page
---

# My Eleventy Site - Blog Page

I am a site built with [Eleventy](https://www.11ty.io/).

<ul>
{%- for post in collections.post -%}
  <li><a href="{{ post.url | url }}">{{ post.data.title }} {{ post.data.date| postDate}}</a></li>
{%- endfor -%}
</ul>