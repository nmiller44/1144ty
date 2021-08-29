const pluginTailwindCSS = require("eleventy-plugin-tailwindcss")
const site = require("./src/_data/site.js")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "public": "/" });

    // TAILWIND
    eleventyConfig.addPlugin(pluginTailwindCSS, {
        src: "src/css/style.css"
    })

    // ALPINE JS
    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
      })

    return {
        dir: {
            input: 'src',
            output: 'dist',
            layouts: '_layouts'
        },
        templateFormats: ['md', 'njk', 'html'],
        htmlTemplateEngine: 'njk'
    }

}