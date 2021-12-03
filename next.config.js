const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

module.exports = withMDX(config);
