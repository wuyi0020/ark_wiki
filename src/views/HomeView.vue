<template>
  <div class="home">
    <div class="container wikihome">
      <div class="banner">
        <img src="../assets/(Sprite)avg_0_1.png" class="backbanner">
        <div class="backdrop-blur"></div>
      </div>
    </div>
    <router-link to="/about"><img alt="Arinknight_Wiki" src="../assets/wiki_title.png" class="title"></router-link>



  </div>
</template>

<script>
// @ is an alias to /src


export default {

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.banner{
  position: relative;
  max-width: 100%;
}
.backbanner{
  max-width: 100%;
}
.backdrop-blur {
  position: absolute;
  top: 50%;
  left: 50%;
  object-fit: contain;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-position: center center;
  backdrop-filter: blur(5px);
  box-sizing: border-box;
  animation-name: backdrop-blur;
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  background-repeat: no-repeat;
  transform: translate(-50%,-50%);
}

@keyframes backdrop-blur {
  0% {

    opacity: 1;
    
    transform:translateX(-50%) translateY(-50%) scale(100%) ;
  }
  70%{
    opacity: 0.2;
    background-image: url('../assets/\(Sprite\)avg_0_2.png');
    backdrop-filter: blur(0px);
  }
  90% {
    opacity: 0;
    transform:translateX(-50%) translateY(-50%) scale(150%);
  }
  100%{
    opacity: 0;
    transform:scale(0%);
  }

}
</style>
