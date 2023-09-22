<template>
    <div class="charcard d-flex flex-column justify-content-center align-items-center">
        <img :src="require(`@/assets/char/${imageurl}.png`)" alt="" class="charimg cardtop">
        <div class="cardbottom">
            <img :src="require(`@/assets/rarity/${rarity}.png`)" alt="" class="rarityimg ">
            <p v-html=name class="cardname"></p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    name: String,
    rarity: Number,
    imageurl: String
})

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.charcard {
    margin-bottom: 16px;
}
.cardname{
    margin-top: 16px;
}

.charimg {
    width: auto;
    max-width: 100%;
    height: auto;
}

.cardbottom{
    width: 100%;
    border-right: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    box-sizing: border-box;
}

.rarityimg {
    width: auto;
    max-width: 100%;
    height: auto;
}

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
}</style>