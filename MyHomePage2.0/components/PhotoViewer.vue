<template>
    <ul id="img-viewer">
        <ol v-for="imgPath in imgList" :key="imgPath" class="overflow-hidden">
            <img :src="imgPath" class="w-[100%] h-[100%]">
        </ol>
    </ul>
</template>

<script lang="js">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: {
        //nope
    },
    data: function () {
        return {
            imgList: [
                './images/1676814027148.jpg',
                './images/DSC_0427.jpg'
            ]
        };
    }
};
</script>