<template>
  <div class="">
    <img :src="backgroundGif" class="z-1 blur-md absolute top-0 left-0 w-full h-full object-cover " />
    <div id="container" class="pl-[4%] z-2 relative text-blue-900 w-screen h-screen overflow-hidden grid-grid-cols-3">
      <div id="title-area" class="ml-[2%] w-fit pt-1 col-span-3 grid grid-cols-3">
        <h1 class="text-sky-950 font-bold text-4xl col-span-1">
          {{ name.first }} <br> {{ name.second }}
        </h1>
      </div>
      <div id="content-area" class="w-full h-full col-span-3 grid grid-cols-3">
        <div id="TwitteriFrame-area" class="h-fit col-span-1 p-10">
          <TwitteriFrame userId="syukunt1" sourceType="profile" />
        </div>
        <div id="menu-area" class="col-span-1 w-full pt-[20%] pr-[20%]">
          <ul class="h-auto text-cyan-900 text-5xl mt-[4.5rem] text-center">
            <ol v-for="item in menu" :key="item" class="mt-12">
              <a href="#" class="hover:text-blue-900">{{ item }}</a>
              <span class="absolute left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full bottom-0"></span>
            </ol>
          </ul>
        </div>
        <div id="footer-area" class="ml-[27%] col-span-2 fixed top-[95%] w-full h-[5%] ">
          <div id="link-icons-area" class="flex h-fit w-fit m my-auto text-black">
            <a v-for="link in footLinks" :key="link.name" :href="link.url" class="m-[7%]">
              <!--<font-awesome-icon :icon="link.icon" />-->
              <i :class="[link.icon[0], link.icon[1]]" class="fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div id="photos-area" class="col-span-1 w-1/3 h-full ml-auto absolute top-0 right-0">
        <ClientOnly>
          <PhotoViewer />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TwitteriFrame from '~/components/TwitteriFrame.vue';
import PhotoViewer from '~/components/PhotoViewer.vue';
import "tw-elements/dist/css/tw-elements.min.css";
//import GitHubGrass from '~/components/GitHubGrass.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    TwitteriFrame,
    PhotoViewer,
    //GitHubGrass,
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
      footLinks: [
        {
          name: 'YouTube',
          icon: ['fa-brands', 'fa-square-youtube'],
          url: '',
        },
        {
          name: 'Twitter',
          icon: ['fa-brands', 'fa-square-twitter'],
          url: 'https://twitter.com/syukunt1',
        },
        {
          name: 'Instagram',
          icon: ['fa-brands', 'fa-square-instagram'],
          url: '',
        },
        {
          name: 'GitHub',
          icon: ['fa-brands', 'fa-square-github'],
          url: 'https://github.com/tsyu12345'
        }
      ],
      backgroundGif: require('~/static/images/ocean-wave-92-simple-drawing-blue-wave.gif'),
    }
  },

  mounted() {
    console.log('mounted');

  }
})
</script>

<style type="text/css" scoped="true">


</style>
