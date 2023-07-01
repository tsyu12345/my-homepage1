<template>
    <vueper-slides fade :touchable="false">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image" />
    </vueper-slides>
</template>

<script lang="js">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: {},
    data: function () {
        return {
            slides: [
                {
                    image: require('@/static/images/1676814027148.jpg')
                },
                {
                    image: require('@/static/images/DSC_0427.jpg')
                }
            ],
        };
    }
};
</script>

<style scoped>
.vueperslide {
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);  
  }
  .vueperslide__title{
    font-size: 70px;
    color: #fff;
  }
  .vueperslides__bullet .default {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    box-shadow: none;
    transition: 0.3s;
    width: 16px;
    height: 16px;
  }
  .vueperslides__bullet--active .default {background-color: #42b983;}
  .vueperslides__bullet span {
    display: block;
    color: #fff;
    font-size: 10px;
    opacity: 0.8;
  }

</style>