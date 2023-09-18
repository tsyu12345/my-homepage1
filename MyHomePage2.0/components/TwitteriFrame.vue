<!--TODO:各種設定項目はコンポ呼び出し側で指定できるようにする。-->
<!--TODO:ローディングの追加-->
<!--TODO:まれに通信エラーで表示されないこともあるので、エラーハンドリングする-->
<template>
    <Timeline 
        :id="user_id" 
        :sourceType="profile" 
        :options="{
            height: height,
            width: width,
            tweetLimit: displayCount
        }"
    />
</template>'

<script>
import { Timeline } from "vue-tweet-embed";

export default {
    components: {
        Timeline
    },
    data: function () {
        return {
            user_id: "syukunt1",
            profile: "profile",
            displayCount: 6,
            height: "500px",
        };
    }
};

</script>

<style scoped></style>
