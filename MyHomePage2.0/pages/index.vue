<template>
  <div id="container" class="bg-yellow-100 h-screen">
    <div id="title-area" class="ml-[4%] w-fit pt-12">
      <h1 class="text-sky-950 font-bold text-4xl">
        {{ name.first }} <br> {{ name.second }}
      </h1>
    </div>
    <div id="content-area">
      <div id="twitter-area"></div>
      <div id="menu-area"></div>
      <div id="github-grass-area"></div>
    </div>
    <div id="photos-area"></div>
    <div id="footer-area">
      <div id="link-icons-area"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      name: {
        first: 'SYU',
        second: 'TAKABAYASHI',
      }
    }
  },
})

</script>
