<template>
  <div id="app">
    <header>蜜月UI</header>
    <div class="content">
 <router-view></router-view>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './assets/style/global.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.content{

}
</style>
