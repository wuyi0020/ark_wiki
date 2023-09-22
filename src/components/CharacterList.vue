<template>
    <div class="hello">
        <p v-html=msg></p>
        <p v-html=rarity></p>
        <p v-html="charNumber"></p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    name: String,
    rarity: Number,
    charNumber: Number
})

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>