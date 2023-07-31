<template>
  <div id="container" class="text-blue-900 bg-yellow-100 w-screen h-screen overflow-hidden">
    <div id="title-area" class="ml-[4%] w-fit pt-1">
      <h1 class="text-sky-950 font-bold text-4xl">
        {{ name.first }} <br> {{ name.second }}
      </h1>
    </div>
    <div id="content-area" class="w-full h-[80%] pl-[60px] mt-5">
      <div id="TwitteriFrame-area" class="w-[37%] h-fit">
        <TwitteriFrame />
      </div>
      <div id="menu-area" class="w-fit ml-[44%] relative top-[-440px]">
        <ul class="h-auto text-cyan-900 text-5xl text-center">
          <ol v-for="item in menu" :key="item" class="mt-10">
            <a href="#" class="hover:text-blue-900">{{ item }}</a>
          </ol>
        </ul>
      </div>
      <div id="github-grass-area" class="w-[60%] h-[30%] border-solid border-2 border-blue-900 relative top-[-40%]">
        <p class="font-bold text-4xl text-center">GitHub草エリア</p>
      </div>
    </div>
    <div id="footer-area" class="fixed top-[95%] w-full h-[5%] border-b-0 border-r-0 border-l-0 border-solid border-2 border-blue-900">
      <div id="link-icons-area" class="flex h-fit w-fit mx-auto my-auto text-black">
        <a v-for="link in footLinks" :key="link.name" :href="link.url" class="m-[7%]">
          <!--<font-awesome-icon :icon="link.icon" />-->
          <i :class="[link.icon[0], link.icon[1]]" class="fa-2x"></i>
        </a>
      </div>
    </div>
    <div id="photos-area" class="w-1/3 h-full ml-auto absolute top-0 right-0">
      <ClientOnly>
        <PhotoViewer />
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TwitteriFrame from '~/components/TwitteriFrame.vue';
import PhotoViewer from '~/components/PhotoViewer.vue';
import "tw-elements/dist/css/tw-elements.min.css";

/*
TODO:なぜかfontawesomeが読み込めないので、いずれ直す。現在はCDNで読み込んでいる。
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
//@ts-ignore
import { faYoutube, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

//@ts-ignore
library.add(faYoutube, faTwitter, faInstagram, faGithub)
library.add(faUserSecret as any)

Vue.component('font-awesome-icon', FontAwesomeIcon)
*/

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
          url: ''
        }
      ]
    }
  },

  mounted() {
    //library.add(faUserSecret) //ts-ignore
  }
})

</script>
