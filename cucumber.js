const { DEFAULT_THEME } = require('@cucumber/pretty-formatter')

module.exports = {
  default: {
    dryRun: false,
    format: [
      '@cucumber/pretty-formatter',
      ['html', 'reports/index.html'],
      ['json', 'reports/index.json']
    ],
    formatOptions: {
      colorsEnabled: true,
      "theme": {
        "feature keyword":["grey","bold"],
        "feature name":["magentaBright", "bold"],
        "scenario keyword":["grey","bold"],
        "scenario name":["magenta"],
        "step keyword":["green", "italic"],
        "step text":["greenBright", "bold", "italic"],
        "tag":["green"]
      }
    }
  }
}
