<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <header></header>
    <main>
      <img src="~assets/quasar-logo-full.svg" alt="Quasar PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import * as APP_INFO from '../package.json'

/*
 * Root component
 */
export default {
  mounted () {
    document.title = APP_INFO.productName || 'Quasar PWA App'
  }
}
</script>

<style lang="stylus">
@import '~variables'

main
  text-align center
  margin-top 40px

header
  margin 0
  height 10px
  background-color $primary
</style>
