<template>
  <div class="home">
    <img alt="Arinknight_Wiki" src="../assets/wiki_title.png">
    <HelloWorld msg="<h1>明日方舟 維基百科</h1> </br> <h2>最新的台服WIKI</h2>"/>
      
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
