<!--TODO:各種設定項目はコンポ呼び出し側で指定できるようにする。-->
<!--TODO:ローディングの追加-->
<!--TODO:まれに通信エラーで表示されないこともあるので、エラーハンドリングする-->
<template>
    <div>
        <div v-if="isLoading" class="bg-white border border-blue-300 shadow rounded-md p-4 max-w-sm w-full h-[800px] mx-auto my-auto">
            <div>
                <i class="fa-brands fa-x-twitter fa-xl"></i>
            </div>
            <div v-for="n in displayCount" :key="n" class="mt-5">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="text-center w-full font-bold text-2xl mt-3">loading Posts...</p>
        </div>
        <div v-else>
            <Timeline :id="userId" :sourceType="sourceType" :options="{
                height: height,
                width: '100%',
                tweetLimit: displayCount,
            }" />
        </div>
    </div>
</template>'

<script>
import { Timeline } from "vue-tweet-embed";


export default {
    components: {
        Timeline
    },
    props: {
        userId: {
            type: String,
            required: true
        },
        sourceType: {
            type: String,
            required: true
        },
        displayCount: {
            type: Number,
            required: false,
            default: 6
        },
        height: {
            type: String,
            required: false,
            default: "800px"
        },
    },
    data() {
        return {
            isLoading: true,
            _height: this.height
        }
    },
    mounted() {
        // Twitterのウィジェットが読み込まれたあと、ツイートの埋め込み完了を検知する
        window.twttr && window.twttr.events.bind('rendered', event => {
            this.isLoading = false;
            console.log('Twitter rendered');
        });
    }
};

</script>

<style scoped></style>
