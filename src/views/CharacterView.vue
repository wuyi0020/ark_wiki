<template>
    <div class="container">
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
            return character.profession !== "TRAP" && character.profession !== "TOKEN" && character.displayNumber!== null
        })
        .sort(sortByMiddleNumber); // 使用自定义排序函数对角色进行排序
    })

// 计算总页数
const totalPages = computed(() => {
    return Math.ceil(characterLists.value.length / itemsPerPage)
})

// 根据当前页数过滤要显示的角色列表
const displayedCharacters = computed(() => {
    const start = currentPage.value * itemsPerPage
    const end = start + itemsPerPage
    return characterLists.value.slice(start, end)
})

// 上一页按钮点击事件处理程序
const prevPage = () => {
    if (currentPage.value > 0) {
        currentPage.value--
    }
    console.log(characterLists.value);
}

// 下一页按钮点击事件处理程序
const nextPage = () => {
    if (currentPage.value < totalPages.value - 1) {
        currentPage.value++
    }
    console.log(characterLists.value);
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
</style>