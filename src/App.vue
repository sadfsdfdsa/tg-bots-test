<template>
  <div id="app">
    <MainPageView />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MainPageView from './views/MainPageView.vue'

@Component({
  name: 'App',
  components: {
    MainPageView,
  },
})
export default class App extends Vue {}
</script>
