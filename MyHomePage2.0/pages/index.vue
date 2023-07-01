<template>
  <div id="container" class="text-blue-900 bg-yellow-100 w-full h-screen overflow-hidden">
    <div id="title-area" class="ml-[4%] w-fit pt-12">
      <h1 class="text-sky-950 font-bold text-4xl">
        {{ name.first }} <br> {{ name.second }}
      </h1>
    </div>
    <div id="content-area" class="w-full h-4/5 flex pl-[60px] py-[40px]">
      <div id="TwitteriFrame-area" class="w-[37%] h-fit">
        <TwitteriFrame />
      </div>
      <div id="menu-area" class="px-20 my-auto">
        <ul class="text-cyan-900 text-5xl text-center pb-10">
          <ol v-for="item in menu" :key="item" class="mt-[15%]">
            <a href="#" class="hover:text-blue-900">{{ item }}</a>
          </ol>
        </ul>
      </div>
      <div id="github-grass-area"></div>
      <div id="photos-area" class="w-1/3 h-[92.8%] ml-auto absolute top-0 right-0">
        <PhotoViewer />
      </div>
    </div>
    <div id="footer-area" class="border-b-0 border-r-0 border-l-0 border-solid border-2 border-blue-900">
      <div id="link-icons-area"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TwitteriFrame from '~/components/TwitteriFrame.vue';
import PhotoViewer from '~/components/PhotoViewer.vue';

export default Vue.extend({
  name: 'IndexPage',

  components: {
    TwitteriFrame,
    PhotoViewer,
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
