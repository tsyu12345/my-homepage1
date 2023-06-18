<template>
    <v-card class="mx-auto">
        <v-card-title>
            <v-icon large left color="#26c6da"></v-icon>
        </v-card-title>
        <v-flex xs12>
            <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '1' }" />
        </v-flex>
    </v-card>
</template>

<script>
import { Timeline } from "vue-tweet-embed";

export default {
    components: {
        Timeline
    },
    data: function () {
        return {
            user_id: "syukunt1"
        };
    }
};

</script>

<style scoped></style>
