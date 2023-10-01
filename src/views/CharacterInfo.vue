<template>
    <div class="container">
        <div class="row  position-relative char-info-background">
            <div class="d-flex justify-content-center">
                <img class="col-12 col-sm-12 col-md-9 col-lg-7 " :src="require(`@/assets/chartexture/${character_key}_1.png`)"
                    alt="">
            </div>
            <div class="row">
                <div class="col-3 charname-col position-absolute bottom-0 start-0 text-start ms-sm-0 ms-4">
                    <p class="img_rarity m-0">
                        <img :src="require(`@/assets/rarity/${character_rarity}.png`)" alt="">
                    </p>
                    <p class="en">{{ character_EnName }}</p>
                    <p>{{ character_info.name }}</p>
                </div>
            </div>
            <div class="row ">
                <img class="col-5 col-md-4 col-lg-3 position-absolute top-0 start-0 mt-1"
                    :src="require(`@/assets/profession/${character_en_profession}.png`)" alt="">
            </div>
        </div>
        <div class="row justify-content-center align-items-center character_itemUsage mt-4">
            <img class="col-3 col-lg-2" :src="require(`@/assets/char/${character_key}.png`)" alt="">
            <div class="col-7 col-lg-9 text-start .text-break">{{ character_itemUsage }}</div>
        </div>
        <div class="row mt-4 character_description">
            {{ character_description }}
        </div>
        <br>
        {{ character_itemUsage }}
        <br>
        {{ character_key }}
        <br>
        {{ character_profession }}
        <br>
        {{ character_info }}
        <br>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onUpdated, ref, computed } from "vue";
import character_table from "@/assets/JSON/character_table.json";
const route = useRoute();
const character_Name = ref(route.params.charactname);
``
// const characterLists = ref([]);
const profession = new Map([
    ["CASTER", "術師"],
    ["SPECIAL", "特種"],
    ["PIONEER", "先鋒"],
    ["WARRIOR", "近衛"],
    ["SNIPER", "狙擊"],
    ["TANK", "重裝"],
    ["MEDIC", "醫療"],
    ["SUPPORT", "輔助"]
])

onUpdated(() => {
    character_Name.value = route.params.charactname;
});
const character_key = computed(() => {
    let info = Object.keys(character_table)
        .filter(keys => {
            return character_table[keys].name == character_Name.value;
        })
    console.log(info);
    return info
})
const character_info = computed(() => {
    let key = character_key.value;
    return character_table[key];
})
const character_profession = computed(() => {
    return profession.get(character_info.value.profession);
})
const character_en_profession = computed(() => {
    return character_info.value.profession;
})
const character_EnName = computed(() => {
    let rex = new RegExp("[^_]+$")
    let en = character_key.value[0];
    let match = en.match(rex);
    console.log(match);
    return match[0];
})
const character_itemUsage = computed(() => {
    return character_info.value.itemUsage;
})
const character_rarity = computed(() => {
    return character_info.value.rarity;
})
const character_description = computed(()=>{
    return character_info.value.description;
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap');


.charname-col {
    font-family: 'Noto Serif TC', serif;
    font-size: 5rem;
    user-select: none;
    line-height: 1;
    text-shadow: -2px -2px 0 rgba(0, 0, 0, .3), 2px -2px 0 rgba(0, 0, 0, .3), -2px 2px 0 rgba(0, 0, 0, .3), 2px 2px 0 rgba(0, 0, 0, .3);
    margin-bottom: 0px;
}

.charname-col .en {
    font-family: 'Noto Serif TC', serif;
    font-size: 1.5rem;
    user-select: none;
    line-height: 1;
    text-shadow: -2px -2px 0 rgba(0, 0, 0, .3), 2px -2px 0 rgba(0, 0, 0, .3), -2px 2px 0 rgba(0, 0, 0, .3), 2px 2px 0 rgba(0, 0, 0, .3);
}


.char-info-background {
    background-image: url("@/assets/background/bk.png");
    background-size: cover;
}


.character_itemUsage img{
    border-left: 4px solid #818181;
}
.character_itemUsage{
    font-size: 2rem;
}

.character_description{
    font-size: 1.5rem;
}
</style>
