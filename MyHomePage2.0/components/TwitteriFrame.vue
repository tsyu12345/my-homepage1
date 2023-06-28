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
            displayCount: 3,
            height: "565px",
        };
    }
};

</script>

<style scoped></style>
