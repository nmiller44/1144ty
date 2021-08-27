const pluginTailwindCSS = require("eleventy-plugin-tailwindcss")
const site = require("./src/_data/site.js")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "public": "/" });

    // PLUGINS
    eleventyConfig.addPlugin(pluginTailwindCSS, {
        src: "src/css/style.css"
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