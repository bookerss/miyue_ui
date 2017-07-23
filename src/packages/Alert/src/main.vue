<style >

</style>

<template>
  <div class="Alert">
     我是Alert组件;我自带一个t全局函数可以在全局使用
  </div>
</template>
<script>
import Vue from 'vue';
export default {
    name:"Alert",
    data () {
        return {
            
        }
    },
    mounted () {
    Vue.t()
    Vue.$log('测试全局LOg')
    }

}
</script>
