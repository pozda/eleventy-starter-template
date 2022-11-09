// const htmlmin = require('html-minifier')
// const lazyImagesPlugin = require('eleventy-plugin-lazyimages')
const { DateTime } = require("luxon")

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets/images')
    eleventyConfig.addWatchTarget('src/assets/js/')

    eleventyConfig.addShortcode(
        'currentDate',
        (date = DateTime.now()) => date
    )
    
    eleventyConfig.addFilter(
        'postDate', 
        (dateObj) => 
            DateTime.fromJSDate(dateObj)
            .setLocale("uk")
            .toLocaleString(DateTime.MEDIUM)
    )

    return {
        dir: {
            input: 'src',
            data: '_data',
            includes: '_includes',
            layouts: '_layouts',
            output: 'public',
        },
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    }
}