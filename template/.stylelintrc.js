module.exports = {
  processors: [
    // find <style> in all files, replacing `stylelint-processor-html` to get correct line numbers
    // see https://github.com/vuejs/vue-loader/issues/303#issuecomment-279628002
    [
      '@mapbox/stylelint-processor-arbitrary-tags', {
        startTag: '[^`\'"]<style(?!\\s+lang="stylus")',
        endTag: '</\\s*?style>'
      }
    ],
    // 'stylelint-processor-html',
  ],
  extends: [
    // https://github.com/stylelint/stylelint-config-standard/blob/master/index.js
    'stylelint-config-standard',
    // https://github.com/stormwarning/stylelint-config-recess-order/blob/master/index.js
    'stylelint-config-recess-order'
  ],
  rules: {
    // avoid conflicts against `stylelint-processor-arbitrary-tags`
    // see https://github.com/mapbox/stylelint-processor-arbitrary-tags#caveats
    'no-empty-source': null,
    // avoid conflicts against default formatting rules of `vetur`
    // see https://vuejs.github.io/vetur/formatting.html
    'selector-combinator-space-after': null,
    'selector-combinator-space-before': null,

    // add more customized stylelint rules here
    // see https://stylelint.io/user-guide/rules/

  }
}
