# Rosa Recipe App

A personal Recipe app built with React 19, React Router 7, Tailwind CSS and Markdown.

I created this app as a way of keeping track of recipes I've learned and customised as well as practicing my React, Tailwind CSS and Accessibility skills.

Rosa is the name of my late grandmother. My Mum kept all her recipes in a Spirax notebook. 

## Add recipes as Markdown file

Recipes should be added to `app/data` folder as Markdown file.

The Markdown file should follow this format:

```
---
id: "1" (ensure this is incremented)
title: [title of your recipe]
ingredients:
  - list
  - your
  - ingredients
  - here
estimatedTime: 1 hr + overnight
originalRecipeLink: [if this exists, if not leave out]
---

### Method

1. Add your method here
2. Format is free as we will render this as HTML

### Notes

- add any additional notes here

```

## Convert Markdown files to JSON

```
pnpm convert
```

This utilises [Markdown to JSON](https://github.com/klaytonfaria/markdown-json) so that we can process the recipes as a static API.

## Run app in dev mode

```
pnpm convert
pnpm dev
```