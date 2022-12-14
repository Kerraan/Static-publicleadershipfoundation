// "use strict";

const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("eventDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(
      DateTime.DATE_MED_WITH_WEEKDAY
    );
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
