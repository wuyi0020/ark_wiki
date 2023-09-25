<template>
    <div class="container ">

        <div class="row raritycontainer  justify-content-center flex-wrap d-flex d-lg-none">
            <button class="rarity-collapse text-center d-flex  justify-content-center"      data-bs-toggle="collapse" data-bs-target="#rarity-row">
                <h1 class="m-0">幹員星級</h1>
            </button>
            <div class="flex-wrap collapse row" id="rarity-row">
                <div v-for="item in [0, 1, 2, 3, 4, 5]" :key="item.id"
                    class="col-12 col-sm-6 col-lg-3 col-xl-2 checkrarity">
                    <div class="rarity-btn-background">
                        <input type="checkbox" :value=item v-model="datas" :id="`rarity${item}`" v-show="false">
                        <label :for="`rarity${item}`" class="rarity-btn rarity" @click="currentPage = 0">
                            <img :src="require(`@/assets/rarity/${item}.png`)" :class="`png png${item}`" alt="">
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row raritycontainer flex-wrap d-none d-lg-flex">
            <div v-for="item in [0, 1, 2, 3, 4, 5]" :key="item.id" class="col-12 col-sm-6 col-lg-3 col-xl-2 checkrarity ">
                <div class="rarity-btn-background">
                    <input type="checkbox" :value=item v-model="datas" :id="`rarity${item}`" v-show="false">
                    <label :for="`rarity${item}`" class="rarity-btn rarity" @click="currentPage = 0">
                        <img :src="require(`@/assets/rarity/${item}.png`)" :class="`png png${item}`" alt="">
                    </label>
                </div>
            </div>
        </div>
        <div class="row justify-content-between align-items-center buttonrow">
            <button @click="prevPage" :disabled="currentPage === 0" class="col-5 col-sm-4  button">上一頁</button>
            <div class="col-2 col-sm-4 currentPage">{{ currentPage + 1 }}</div>
            <button @click="nextPage" :disabled="currentPage === totalPages - 1" class="col-5 col-sm-4 button">下一頁</button>
        </div>
        <div class="row">
            <!-- <img v-for="character in displayedCharacters" :src="require('@/assets/char/' + character + '.png')"
                :key="character" class="col-3"> -->
            <div v-for="character in displayedCharacters" :key="character" class="col-6 col-sm-4 col-md-3 col-lg-2">
                <CharacterCard :imageurl='character' :rarity="character_table[character].rarity"
                    :name=character_table[character].name />
            </div>
        </div>
        <div class="row justify-content-between align-items-center buttonrow">
            <button @click="prevPage" :disabled="currentPage === 0" class="col-5 col-sm-4  button">上一頁</button>
            <div class="col-2 col-sm-4 currentPage">{{ currentPage + 1 }}</div>
            <button @click="nextPage" :disabled="currentPage === totalPages - 1" class="col-5 col-sm-4 button">下一頁</button>
        </div>


    </div>
</template>
  
<script setup>
import { onMounted, ref, computed } from 'vue'
import CharacterCard from '@/components/CharacterCard.vue'
import character_table from "@/assets/character_table.json"

const characterLists = ref([])
const itemsPerPage = 25 // 每页显示的项目数量
const currentPage = ref(0) // 当前页数
const datas = ref([]);

// 自定义排序函数，按中间的数字排序
function sortByMiddleNumber(a, b) {
    const numberA = parseInt(a.match(/char_(\d+)_/)[1]);
    const numberB = parseInt(b.match(/char_(\d+)_/)[1]);
    return numberA - numberB;
}

onMounted(() => {
    // 使用 filter 方法过滤掉 "profession": "TRAP" 和 "profession": "TOKEN" 的条目
    characterLists.value = Object.keys(character_table)
        .filter(key => {
            const character = character_table[key]
            return character.profession !== "TRAP" && character.profession !== "TOKEN" && character.displayNumber !== null
        })
        .sort(sortByMiddleNumber); // 使用自定义排序函数对角色进行排序
})

const FilterLists = computed(() => {
    let Lists = characterLists.value;
    if (datas.value.length !== 0) {
        Lists = Lists.filter((key) => {
            let character = character_table[key]
            return datas.value.includes(character.rarity)
        })
    }
    return Lists;
})

// 计算总页数
const totalPages = computed(() => {
    return Math.ceil(FilterLists.value.length / itemsPerPage)
})


// 根据当前页数过滤要显示的角色列表
const displayedCharacters = computed(() => {
    let displayCharlist = characterLists.value;
    if (datas.value.length !== 0) {
        displayCharlist = displayCharlist.filter((key) => {
            let character = character_table[key]
            return datas.value.includes(character.rarity)
        })
    }
    const start = currentPage.value * itemsPerPage
    const end = start + itemsPerPage
    return displayCharlist.slice(start, end)
})


// 上一页按钮点击事件处理程序
const prevPage = () => {
    if (currentPage.value > 0) {
        currentPage.value--
    }
}

// 下一页按钮点击事件处理程序
const nextPage = () => {
    if (currentPage.value < totalPages.value - 1) {
        currentPage.value++
    }
}
</script>

<style scoped>
.buttonrow {
    margin-bottom: 64px;
}

.button {
    color: #000000;
    font-size: 1.5rem;
    background-color: #ffffff;
    border: 1px solid #818181;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 6px 0px #c9c9c9;
    transition: all .1s;
}

.button:active {
    box-shadow: 0px 2px 0px #d35400;
    position: relative;
    box-shadow: 0px 6px 6px #727272;
    top: 2px;
}

.currentPage {
    font-size: 1.5rem;
}

input+label.rarity-btn.rarity>img.png {
    filter: opacity(50%);
}

input:checked+label.rarity-btn.rarity>img.png {
    filter: opacity(100%);
}

.raritycontainer {
    background-image: url(../assets/background/back0.png);
    margin-bottom: 1rem;
    border: 3px dashed #828282;
    box-sizing: border-box;
}

.rarity-btn-background {
    width: fit-content;
    background-color: #000000;
    opacity: 0.7;
    border-radius: 10px;
}

.checkrarity {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

label:nth-child(5),
label:nth-child(6) {}
</style>