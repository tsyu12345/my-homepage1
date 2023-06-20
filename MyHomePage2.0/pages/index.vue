<template>
  <div id="container" class="text-blue-900 bg-yellow-100 w-full h-screen overflow-hidden">
    <div id="title-area" class="ml-[4%] w-fit pt-12">
      <h1 class="text-sky-950 font-bold text-4xl">
        {{ name.first }} <br> {{ name.second }}
      </h1>
    </div>
    <div id="content-area" class="h-4/5 flex px-[90px] py-[40px]">
      <div id="TwitteriFrame-area" class="w-[30%]">
        <TwitteriFrame />
      </div>
      <div id="menu-area" class="p-[120px]">
        <ul class="text-cyan-900 text-5xl text-center ">
          <ol v-for="item in menu" :key="item" class="mt-[15%]">
            <a href="#" class="hover:text-blue-900">{{ item }}</a>
          </ol>
        </ul>
      </div>
      <div id="github-grass-area"></div>
    </div>
    <div id="photos-area" class="w-1/3 h-full ml-auto absolute top-0 right-0">
      <img id="test-img">
    </div>
    <div id="footer-area" class="border-b-0 border-r-0 border-l-0 border-solid border-2 border-blue-900">
      <div id="link-icons-area"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TwitteriFrame from '~/components/TwitteriFrame.vue';

export default Vue.extend({
  name: 'IndexPage',

  components: {
    TwitteriFrame,
  },

  data() {
    return {
      name: {
        first: 'SYU',
        second: 'TAKABAYASHI',
      },
      menu: [
        'Introduction',
        'Portfolio',
        'YouTube',
        'Contact',
      ],

    }
  },
})

</script>
