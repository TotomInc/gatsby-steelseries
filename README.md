<p align="center">
  <a href="https://steelseries.totominc.io/">
    <img alt="Gatsby" src="./static/default-share-image.png" width="64" />
  </a>
</p>

<h1 align="center">
  SteelSeries Gatsby website replica
</h1>

## Introduction

> Disclaimer: I do not own any of the graphical material which includes images, videos and fonts of this project. This is the property of SteelSeries.

This is an educational/learning project to re-create some parts of the [SteelSeries e-commerce website](https://steelseries.com/) using a modern JAMStack (very minimal features):

- [Gatsby](https://gatsbyjs.com/) as a React SSR framework.
- [TailwindCSS](https://tailwindcss.com/) as a CSS framework (includes PostCSS).
- [Prismic.io](https://prismic.io/) as the data-source as an headless-CMS.
- [Netlify](https://netlify.com/) for hosting and automatic deploys.

The goal of this project is to go full-static mode, in order to have reduced hosting costs and become easily scalable.

For example, all graphical assets, such as images and videos, are downloaded locally during build-time (with a `gatsby build`) from Prismic.io CDN. Which means the deployed website will be 100% hosted by Netlify, assets included.

The deployed website is meant to be fast/small/optimized and SEO friendly, as we're using [`react-helmet`](https://github.com/nfl/react-helmet/) for the generation of SEO meta-tags of each page (Open-Graph, Twitter, HTML5 defaults [title, desc]).

## Getting started

### [Prismic.io](https://prismic.io/) headless-CMS setup

This project contains the **JSON schemas** of each Prismic content-type (in the `schemas/` folder). Those schemas are required for the `gatsby-source-prismic` package as it build the GraphQL schema/nodes based on those `.json` files.

You'll need to create a content-type for each of the schemas available in the `schemas/` folder of this repository:

- `homepage.json` is a singleton content-type.
- `product.json` is a repeatble content-type.

Feel free to directly import the content of each JSON into your Prismic content-type, it should work without any issues.

Your next step is to create some content based on your content-types such as an homepage and some products.

### Front-end setup

1. Clone the project.
2. Install dependencies with `yarn install`.
3. Edit `gatsby-config.js` with `repositoryName: 'steelseries'` matching your Prismic.io repository name.
4. Start the development server with `gatsby develop` or `yarn develop`.

## License

Licensed under MIT license. View the LICENSE file for more details.
